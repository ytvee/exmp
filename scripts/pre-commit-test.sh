#!/bin/bash

# Pre-commit hook for Design System
# Runs linting, tests, and build before allowing commit

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Design System Pre-commit Hook${NC}"
echo "=================================="

# Function to run linter
run_linter() {
    echo -e "${BLUE}📝 Running ESLint...${NC}"
    if npm run lint; then
        echo -e "${GREEN}✅ Linting passed${NC}"
        return 0
    else
        echo -e "${YELLOW}⚠️  Linting failed, attempting to fix...${NC}"
        if npm run lint:fix; then
            echo -e "${GREEN}✅ Linting issues auto-fixed${NC}"
            return 0
        else
            echo -e "${RED}❌ Linting failed and could not be auto-fixed${NC}"
            return 1
        fi
    fi
}

# Function to run tests
run_tests() {
    echo -e "${BLUE}🧪 Running tests...${NC}"
    if npm test -- --run --silent; then
        echo -e "${GREEN}✅ All tests passed${NC}"
        return 0
    else
        echo -e "${RED}❌ Tests failed${NC}"
        return 1
    fi
}

# Function to run build
run_build() {
    echo -e "${BLUE}🏗️  Running build...${NC}"
    if npm run build; then
        echo -e "${GREEN}✅ Build successful${NC}"
        return 0
    else
        echo -e "${RED}❌ Build failed${NC}"
        return 1
    fi
}

# Main execution
main() {
    local exit_code=0
    
    # Run linter first
    if ! run_linter; then
        exit_code=1
    fi
    
    # Run tests
    if ! run_tests; then
        exit_code=1
    fi
    
    # Run build
    if ! run_build; then
        exit_code=1
    fi
    
    if [ $exit_code -eq 0 ]; then
        echo -e "${GREEN}🎉 All checks passed! Commit allowed.${NC}"
        exit 0
    else
        echo -e "${RED}💥 Some checks failed! Commit blocked.${NC}"
        echo -e "${YELLOW}Please fix the issues above and try again.${NC}"
        exit 1
    fi
}

# Run main function
main "$@"
