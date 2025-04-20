#!/bin/bash

echo "🌀 Arise mode activated!"

# Git add
git add .

# Commit message input
read -p "Commit message daal bhai: " msg
git commit -m "$msg"

# Git push
git push

echo "✅ Kaam ho gaya bhai!"