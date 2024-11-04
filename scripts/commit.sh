#!/bin/bash
# scripts/quick-commit.sh

# Colors
BLUE='\033[0;34m'
GREEN='\033[0;32m'
NC='\033[0m'

# Common types and scopes
TYPES=("feat" "fix" "docs" "style" "refactor" "test" "chore")
SCOPES=("calculator" "theme" "components" "utils" "tests")

echo -e "${BLUE}Type number:${NC}"
select type in "${TYPES[@]}"; do
  if [[ -n $type ]]; then
    break
  fi
done

echo -e "${BLUE}Scope number:${NC}"
select scope in "${SCOPES[@]}" "other" "none"; do
  if [[ -n $scope ]]; then
    break
  fi
done

echo -e "${BLUE}Description:${NC}"
read -r description

if [[ $scope == "none" ]]; then
  commit_message="$type: $description"
else
  commit_message="$type($scope): $description"
fi

echo -e "\n${GREEN}Creating commit:${NC} $commit_message"
git commit -m "$commit_message"