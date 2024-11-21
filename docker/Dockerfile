ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine AS base-alpine
EXPOSE 1337

FROM base-alpine

ARG STRAPI_VERSION=latest

RUN yarn global add @strapi/strapi@${STRAPI_VERSION}


RUN mkdir -p /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

RUN strapi new ./ --no-run \
  --dbclient=sqlite


RUN yarn install --prod --silent
RUN yarn add @faker-js/faker --dev
RUN mkdir src/plugins
# copy sources
COPY --link  ../ ./src/plugins/export-data/
COPY --link  api ./src/api
COPY --link  index.js ./src/index.js
RUN rm -Rf ./src/plugins/export-data/docker/

#RUN "yarn"

CMD ["strapi","develop"]
