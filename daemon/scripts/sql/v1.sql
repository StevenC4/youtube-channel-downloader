-- Enable foreign keys in the database
PRAGMA foreign_keys = ON;

-- Create a "version" table
CREATE TABLE IF NOT EXISTS
version(
	version INTEGER PRIMARY KEY
) WITHOUT ROWID;

-- Mark this as the first version of the database schema
INSERT INTO version (version) VALUES (1);

-- Create a "channels" table
CREATE TABLE IF NOT EXISTS
channels(
	ytChannelId VARCHAR(30) PRIMARY KEY,
	name TEXT NOT NULL,
	published INTEGER NOT NULL
) WITHOUT ROWID;

-- Create a "videos" table
CREATE TABLE IF NOT EXISTS
videos(
	ytVideoId VARCHAR(15) PRIMARY KEY,
	ytChannelId VARCHAR(30),
	name TEXT NOT NULL,
	videoUrl TEXT NOT NULL,
	thumbnailUrl TEXT NOT NULL,
	FOREIGN KEY(ytChannelId) REFERENCES channel(ytChannelId)
);

-- Create a table with additional information about the channel

CREATE TABLE IF NOT EXISTS
channel_configurations(
	ytChannelId VARCHAR(30) PRIMARY KEY,
	downloadLocation TEXT NOT NULL,
	FOREIGN KEY(ytChannelId) REFERENCES channel(ytChannelId)
) WITHOUT ROWID;

-- Create a table with additional information about the videos

CREATE TABLE IF NOT EXISTS
video(
	ytVideoId VARCHAR(15) PRIMARY KEY,
	downloadStatus VARCHAR(20) NOT NULL,
	FOREIGN KEY(ytVideoId) REFERENCES videos(ytVideoId)
) WITHOUT ROWID;
