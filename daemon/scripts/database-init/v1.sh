#!/bin/sh

echo "Looking for an existing database..."

if [ ! -f $DATABASE ]; then
	echo "Existing database not found."
	echo "Installing v1.0.0 of the sqlite database..."
	sqlite3 $DATABASE < /sql/v1.sql
else
	echo "Existing database found. Moving on."
fi
