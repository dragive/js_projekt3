Create table Dostawa(
	id INTEGER PRIMARY KEY,
	dostawa_id INTEGER NOT NULL,
	pracownik_id INTEGER NOT NULL
);

Create table Faktura(
	id INTEGER PRIMARY KEY,
	dane_faktury Text,
	zamowienie_id INTEGER not null
);


Create Table Klient (
	id INTEGER PRIMARY KEY,
	nazwa_firmy Text not null,
	nip Integer not null,
	email text not null,
	telefon text not null,
	adres text not null
);

Create table Pracownik (
	id integer PRIMARY key,
	imie text not null,
	nazwisko text not null,
	login text not null,
	haslo text not null,
	stanowisko_id text not null
);

Create table Produkt (
	id integer PRIMARY key,
	nazwa text not null,
	ilosc integer not null,
	cena REAL not null

);

Create table Produkt_dostawa (
	id integer PRIMARY key,
	dostawa_id integer,
	produkt_id integer,
	ilosc Integer
);


Create table Zamowienie (
	id integer PRIMARY key,
	data_zalozenia text not null,
	pracownik_id integer ,
	klient_id integer ,
	data_realizacji text not null,
	stan integer 
);

create table Zamowienie_produkt (
	id integer not null,
	produkt_id integer not null,
	ilosc integer not null,
	zamowienie_id integer not null
) ;

--wywalenie kategorii i stanowiska pracowników

