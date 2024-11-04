#!/bin/bash

echo "Verifying test directory structure..."

# Create required directories
mkdir -p src/test/setup src/test/utils

# Check if files exist in the correct locations
if [ ! -f "src/test/setup/index.ts" ]; then
  echo "❌ Missing src/test/setup/index.ts"
  exit 1
fi

if [ ! -f "src/test/utils/index.tsx" ]; then
  echo "❌ Missing src/test/utils/index.tsx"
  exit 1
fi

echo "✅ Directory structure verified"
echo ""
echo "Test directory structure:"
echo "src/"
echo "└── test/"
echo "    ├── setup/"
echo "    │   └── index.ts"
echo "    └── utils/"
echo "        └── index.tsx"
