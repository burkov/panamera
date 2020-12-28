FROM node as dev

WORKDIR /panamera
COPY . .
RUN yarn install
RUN yarn build

FROM node:alpine as prod
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /panamera
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
COPY --from=dev /panamera/build ./build
RUN npm i -g serve

CMD serve -s /panamera/build -l 8080
