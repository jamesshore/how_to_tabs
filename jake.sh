#!/bin/sh

[ ! -f node_modules/.bin/jake ] && echo "Building npm modules:" && npm rebuild

node_modules/.bin/jake $*