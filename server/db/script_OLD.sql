drop table Book;
drop table Author;
drop table Type_of_book;
drop table Book_author;

CREATE TABLE Book (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	title TEXT,
	edition INTEGER DEFAULT 1 NOT NULL,
	year_of_first_edition INTEGER,
    type_of_book_id INTEGER,
    isbn TEXT
);

CREATE TABLE Author (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	year_of_birth INTEGER
);

ALTER TABLE Author ADD surname TEXT NOT NULL;
ALTER TABLE Author ADD description TEXT;


CREATE TABLE Book_author (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	book_id INTEGER NOT NULL,
	author_id INTEGER NOT NULL
);

CREATE TABLE type_of_book (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	description TEXT
);
