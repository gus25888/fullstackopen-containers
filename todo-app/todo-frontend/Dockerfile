FROM node:22-bullseye-slim

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm ci

RUN npm run build

RUN npm install -g serve

CMD ["serve", "dist"]