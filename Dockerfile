FROM node:8.16.0-alpine AS react-build

COPY ./client .
RUN npm run build

FROM node:8.16.0-alpine AS release

WORKDIR /home/node/app
EXPOSE 3000
COPY --from=react-build ./build /var/www
COPY --chown=node:node ./server .
RUN npm ci
RUN npm prune --production
ENV ENVIRONMENT=production
ENV NODE_ENV=production
USER node
CMD ["node", "bin/run.js"]