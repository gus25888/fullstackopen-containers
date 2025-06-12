FROM node:22-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

ENV NODE_ENV=production

RUN apt-get update && apt-get install -y --no-install-recommends

RUN npm ci --only=production

USER node

CMD ["npm", "start"]