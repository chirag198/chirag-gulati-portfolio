#!/bin/bash

# Script to push portfolio changes to GitHub
# Run this from your terminal: bash push-changes.sh

cd /Users/chirag/chirag-gulati-portfolio

echo "Current directory: $(pwd)"
echo ""
echo "Git status:"
git status
echo ""
echo "Pushing to GitHub..."
git push origin main

echo ""
echo "Done! Check https://github.com/chirag198/chirag-gulati-portfolio to verify the changes."
