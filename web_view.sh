#!/bin/bash
# Serve the site locally. The site lives at the repo root (it used to be in
# docs/, which is why this script pointed there). Pass a port to override 8080.
set -e
cd "$(dirname "$0")"
PORT="${1:-8080}"
echo "Audax OS → http://localhost:$PORT/  (ctrl-c to stop)"
python3 -m http.server "$PORT"
