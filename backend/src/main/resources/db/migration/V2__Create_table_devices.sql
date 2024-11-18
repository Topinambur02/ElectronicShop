CREATE TABLE IF NOT EXISTS devices (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price INTEGER NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    bucket_id INTEGER,
    CONSTRAINT bucket_id FOREIGN KEY (bucket_id) REFERENCES bucket (id)
);