#!/bin/bash
# Replace all rounded-lg with rounded-sm in TSX files

cd /tmp/sandbox

# List of files to update (relative to /tmp/sandbox)
files=(
  "src/app/pages/sustainability.tsx"
  "src/app/pages/about-chemanol.tsx"
  "src/app/pages/innovation.tsx"
  "src/app/pages/technical-resources.tsx"
  "src/app/pages/product-portfolio.tsx"
  "src/app/pages/product-detail.tsx"
  "src/app/pages/contact-support.tsx"
  "src/app/pages/industries-applications.tsx"
  "src/app/pages/sector-detail.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    sed -i 's/rounded-lg/rounded-sm/g' "$file"
    echo "Updated: $file"
  else
    echo "Not found: $file"
  fi
done

echo "Replacement complete!"
