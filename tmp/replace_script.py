#!/usr/bin/env python3
import os
import re

# Files to process
files = [
    "/tmp/sandbox/src/app/pages/sustainability.tsx",
    "/tmp/sandbox/src/app/pages/about-chemanol.tsx",
    "/tmp/sandbox/src/app/pages/innovation.tsx",
    "/tmp/sandbox/src/app/pages/technical-resources.tsx",
    "/tmp/sandbox/src/app/pages/product-portfolio.tsx",
    "/tmp/sandbox/src/app/pages/product-detail.tsx",
    "/tmp/sandbox/src/app/pages/contact-support.tsx",
    "/tmp/sandbox/src/app/pages/industries-applications.tsx",
    "/tmp/sandbox/src/app/pages/sector-detail.tsx",
    "/tmp/sandbox/src/app/pages/home.tsx",
]

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            content = f.read()
        
        # Replace all rounded-lg with rounded-sm
        new_content = content.replace('rounded-lg', 'rounded-sm')
        
        with open(filepath, 'w') as f:
            f.write(new_content)
        
        print(f"✓ Updated: {filepath}")
    else:
        print(f"✗ Not found: {filepath}")

print("\n✅ Replacement complete!")
