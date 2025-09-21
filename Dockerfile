## Multi-stage Dockerfile for Next.js with AWS Lambda Web Adapter
## Builds a standalone Next.js server and runs it in Lambda via LWA

# -------- Base builder image --------
FROM node:20-slim AS deps
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
# Install only if lockfile exists
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; \
	elif [ -f yarn.lock ]; then corepack enable && yarn install --frozen-lockfile --production; \
	elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile --prod; \
	else npm i --omit=dev; fi

FROM node:20-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 \
	NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# -------- Runtime image with AWS Lambda Web Adapter --------
FROM public.ecr.aws/docker/library/node:20-slim AS runner
WORKDIR /var/task

# Copy AWS Lambda Web Adapter extension
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.1 /lambda-adapter /opt/extensions/lambda-adapter

# Copy Next.js standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Lambda Web Adapter defaults to port 8080; ensure Next listens on it
ENV PORT=8080 \
	HOSTNAME=0.0.0.0 \
	NODE_ENV=production

# Expose is a no-op on Lambda but helps local testing
EXPOSE 8080

# Start the Next.js production server from standalone output
CMD ["node", "server.js"]

