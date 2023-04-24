FROM node:16

WORKDIR /app

COPY package*.json .

COPY prisma ./prisma

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 9090

CMD ["yarn", "run", "start:prod"]