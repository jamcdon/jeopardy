FROM node:20-alpine

workdir /app
# grab [ package.json, package-lock.json, tsconfig.json ]
COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .

RUN npm install

COPY ./src ./src

run ./node_modules/.bin/tsc

COPY ./public ./dist/public
COPY ./img ./dist/img

EXPOSE 3000

WORKDIR /app/dist
CMD ["node", "./server.js"]
