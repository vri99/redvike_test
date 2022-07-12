FROM mhart/alpine-node:latest

RUN mkdir /app
WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY .env ./

COPY . ./

RUN node -v
RUN npm install
CMD ["npm","run","build"]
CMD ["npm","run","start"]