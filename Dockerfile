FROM mhart/alpine-node:latest as base

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./

COPY . ./

RUN node -v
RUN npm install
CMD ["npm","run","start"]

FROM base as production

ENV NODE_PATH=./build/app

RUN npm run build