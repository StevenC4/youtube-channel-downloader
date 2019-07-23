#!/bin/sh

echo "Looking for an existing database..."

if [ ! -f /data/yt-downloader-database.db ]; then
	echo "Existing database not found."
	echo "Installing v1.0.0 of the sqlite database..."
	sqlite3 /data/yt-downloader-database.db "CREATE TABLE IF NOT EXISTS channels(ytChannelId VARCHAR(30) PRIMARY KEY, name TEXT NOT NULL) WITHOUT ROWID;"
else
	echo "Existing database found. Moving on."
fi
