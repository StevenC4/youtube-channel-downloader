FROM node:8.16.0-alpine AS react-build

COPY ./client .
RUN npm run build

FROM alpine:3.10.0 as download-yt

RUN apk add curl
RUN mkdir -p /usr/local/bin
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
RUN chmod a+rx /usr/local/bin/youtube-dl

FROM node:8.16.0-alpine AS release
EXPOSE 3000
COPY --from=download-yt /usr/local/bin/youtube-dl .
COPY --from=react-build ./build /var/www
CMD ["ash"]