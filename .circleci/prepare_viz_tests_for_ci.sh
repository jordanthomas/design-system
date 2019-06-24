#!/bin/bash

# Since we use the Dockerized version of Chrome locally when building reference images
# and we use the local Chrome when in CI/circle we need to make sure the filenames match
# to correctly compare them. In CI/circle we use the .ci. configurations and locally
# we use the .local. configuration. We simply need to make the local reference
# image files names to look as if the ci configuration was used to build them. Renaming
# the reference images accomplishes this since loki prepends the configuration name to files.

for old_filename in .loki/reference/*_local_*.png; do
  if [ -f "$old_filename" ]; then
    new_filename="${old_filename/_local_/_ci_}"
    mv -f "$old_filename" "$new_filename"

    echo "Renamed $(basename "$old_filename") -> $(basename "$new_filename")"
  fi
done

echo "Done!"
