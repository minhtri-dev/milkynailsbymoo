#!/usr/bin/env bash
set -euo pipefail

# Build and push Docker image to ECR
# Usage: ./scripts/build-and-push.sh <aws-profile> <region> <ecr-repo-name> [tag]

PROFILE=${1:-milkynailsbymoo}
REGION=${2:-ap-southeast-2}
REPO=${3:-milkynailsbymoo-prod}
TAG=${4:-latest}

ACCOUNT_ID=$(aws sts get-caller-identity --profile "$PROFILE" --query Account --output text)
ECR_URL="$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO"

aws ecr describe-repositories --repository-names "$REPO" --region "$REGION" --profile "$PROFILE" >/dev/null 2>&1 || \
  aws ecr create-repository --repository-name "$REPO" --region "$REGION" --profile "$PROFILE" >/dev/null

echo "Logging into ECR..."
aws ecr get-login-password --region "$REGION" --profile "$PROFILE" | \
  docker login --username AWS --password-stdin "$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com"

IMAGE_TAG="$ECR_URL:$TAG"

echo "Building image $IMAGE_TAG ..."
docker build -t "$IMAGE_TAG" .

echo "Pushing image..."
docker push "$IMAGE_TAG"

echo "Done. Pushed: $IMAGE_TAG"
