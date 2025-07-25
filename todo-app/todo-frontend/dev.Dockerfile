FROM node:22-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

ENV VITE_BACKEND_URL=http://localhost:8080/api

ENV NODE_ENV=development

USER node

RUN npm ci --include=dev

#Se cambia para dejar la configuración de host en vite.config.js
CMD ["npm", "run", "dev"]