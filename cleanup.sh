#!/usr/bin/env bash

# https://stackoverflow.com/q/42950501
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
