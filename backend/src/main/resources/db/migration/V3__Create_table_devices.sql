CREATE TABLE IF NOT EXISTS devices (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    brand VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    color VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    image_id INTEGER,
    CONSTRAINT image_id FOREIGN KEY (image_id) REFERENCES files (id),
    bucket_id INTEGER,
    CONSTRAINT bucket_id FOREIGN KEY (bucket_id) REFERENCES bucket (id)
);