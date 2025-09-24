#!/usr/bin/env bash
set -euo pipefail

PROFILE=${1:-milkynailsbymoo}
REGION=${2:-ap-southeast-2}

echo "[INFO] Building Next static export..."
npm run build

if [ ! -d "./out" ]; then
  echo "[ERROR] ./out directory not found. Did the build succeed?"
  exit 1
fi

export AWS_PROFILE="${PROFILE}"

echo "[INFO] Syncing static site to S3..."
aws s3 sync ./out "s3://milkynailsbymoo-app/" --delete --no-progress

echo "[INFO] Applying Terraform (backend profile=${PROFILE} region=${REGION})..."
cd terraform
if [ ! -d ".terraform" ]; then
  echo "[INFO] Running terraform init..."
  terraform init -backend-config="profile=${PROFILE}" -backend-config="region=${REGION}" -input=false
fi
terraform apply -auto-approve

echo "[INFO] Done."