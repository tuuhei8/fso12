# ========================================
# Test Stage
# ========================================

FROM node:20 AS test

WORKDIR /usr/src/app 

ENV NODE_ENV=test \
    CI=true

COPY --chown=node:node . .

RUN npm ci

USER node

RUN npm run test

# ========================================
# Build Stage
# ========================================

FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY --from=test /usr/src/app /usr/src/app

RUN npm ci

ENV VITE_BACKEND_URL=//localhost:3000

RUN npm run build

# ========================================
# Serve via Nginx
# ========================================

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html