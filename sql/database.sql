SELECT 'CREATE DATABASE govindas' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'products')\gexec


-- Create two tables where they can connect to each other 

CREATE TABLE buyers (
    id PRIMARY KEY,
    first_name VARCHAR(150),
    last_name VARCHAR(150),
    email VARCHAR(150),
    phone_number VARCHAR(150)
    amount INTEGER
    pruchase_time timestamp
    -- CONNECT THE TABLES 
);

CREATE TABLE recipients (
    id PRIMARY KEY,
    first_name VARCHAR(150),
    last_name VARCHAR(150),
    email VARCHAR(150),
    phone_number VARCHAR(150)
    -- CONNECT THE TABLES
);

CREATE TABLE gift_card_info (
    id PRIMARY KEY,
    comment: VARCHAR(500),
    -- CONNECT THE TABLES
);

