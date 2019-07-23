FROM alpine:3.10.0 as download-yt

RUN apk add curl
RUN mkdir -p /usr/local/bin
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
RUN chmod a+rx /usr/local/bin/youtube-dl

FROM golang:1.12.7 AS golang-build

WORKDIR /go/src/app
COPY . .
RUN go build -v -o yt-downloader-daemon

FROM python:3.7.4-alpine3.10 AS release

WORKDIR /
COPY scripts/* /usr/local/bin/
COPY --from=golang-build /go/src/app/yt-downloader-daemon /usr/local/bin/
COPY --from=download-yt /usr/local/bin/youtube-dl /usr/local/bin/
RUN chmod -R +x /usr/local/bin
RUN apk update && apk add sqlite
RUN mkdir /data
VOLUME /data

CMD ["run.sh"]
