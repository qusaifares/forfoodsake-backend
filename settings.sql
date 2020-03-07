CREATE DATABASE forfoodsake;
CREATE USER forfoodsakeuser WITH PASSWORD 'ekasdoofrof';
GRANT ALL PRIVILEGES ON DATABASE forfoodsake TO forfoodsakeuser;
CREATE TABLE vendors (
  id SERIAL PRIMARY KEY,
  vendor_name VARCHAR NOT NULL,
  vendor_type VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  vendor_password VARCHAR NOT NULL,
  closing_time VARCHAR NOT NULL,
  street VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  address_state VARCHAR NOT NULL,
  zip_code VARCHAR NOT NULL,
  vendor_description TEXT,
  vendor_image VARCHAR,
  created_at DATE,
  updated_at DATE,
  deleted_at DATE
);