#!/bin/bash

cd /root/web
git pull
npm ci
npx prisma generate
npm run build
systemctl restart web

