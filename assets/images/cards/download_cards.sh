#!/bin/bash

# Directory where you want to save the images
DOWNLOAD_DIR="./"

# Base URL of the images
BASE_URL="https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_"

# Create the directory if it doesn't exist
mkdir -p "$DOWNLOAD_DIR"

# Loop to download images from 1.png to 151.png
for i in {1..204}
do
    # Construct the URL
    IMAGE_URL="${BASE_URL}${i}-2x.png"
    
    # Use curl to download the image
    echo "Downloading ${IMAGE_URL}..."
    curl -s "$IMAGE_URL" -o "${DOWNLOAD_DIR}/${i}.png"
done

echo "Download complete."
