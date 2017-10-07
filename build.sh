#!/bin/bash
echo "Building browser app"
ng build --prod --app 0
echo "Building server app"
ng build --prod --app 1 --output-hashing none
