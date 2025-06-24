FROM node:22-bullseye-slim AS test-stage

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm ci --include=dev
RUN npm run test

FROM node:22-bullseye-slim AS build-stage

WORKDIR /usr/src/app
COPY --from=test-stage /usr/src/app/ .
ENV VITE_BACKEND_URL=http://localhost:3000
RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

#To use this, execute `docker build . -t todo-frontend` then `docker run -p 8080:80 todo-frontend`