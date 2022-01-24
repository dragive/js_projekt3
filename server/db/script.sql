Create table Dostawa(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	dostawa_id INTEGER NOT NULL,
	pracownik_id INTEGER NOT NULL
);

Create table Faktura(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	dane_faktury Text,
	zamowienie_id INTEGER not null
);


Create Table Klient (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	nazwa_firmy Text not null,
	nip Integer not null,
	email text not null,
	telefon text not null,
	adres text not null
);

Create table Pracownik (
	id integer PRIMARY KEY AUTOINCREMENT,
	imie text not null,
	nazwisko text not null,
	login text not null,
	haslo text not null,
	stanowisko_id text not null
);

Create table Produkt (
	id integer PRIMARY KEY AUTOINCREMENT,
	nazwa text not null,
	ilosc integer not null,
	cena REAL not null

);

Create table Produkt_dostawa (
	id integer PRIMARY KEY AUTOINCREMENT,
	dostawa_id integer,
	produkt_id integer,
	ilosc Integer
);


Create table Zamowienie (
	id integer PRIMARY KEY AUTOINCREMENT,
	data_zalozenia text not null,
	pracownik_id integer ,
	klient_id integer ,
	data_realizacji text not null,
	stan integer 
);

create table Zamowienie_produkt (
	id integer PRIMARY KEY,
	produkt_id integer not null,
	ilosc integer not null,
	zamowienie_id integer not null
) ;

--wywalenie kategorii i stanowiska pracowników

