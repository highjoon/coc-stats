#!/bin/bash
REPOSITORY=/usr/share/nginx/html/coc-deploy

cd $REPOSITORY

sudo yarn

sudo npx pm2 reload all