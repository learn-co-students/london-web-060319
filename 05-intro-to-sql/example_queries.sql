-- Get every row from artists
SELECT * FROM artists;
-- Get all columns from artists if the name is Black Sabbath
SELECT * FROM artists WHERE name = 'Black Sabbath';
SELECT * FROM artists WHERE name LIKE 'B%';

-- Create a new table
CREATE TABLE fan_clubs(
  id INTEGER PRIMARY KEY,
  artist_id INTEGER,
  name TEXT
);

-- Create a new row - a fan club for an existing artist
INSERT INTO fan_clubs(artist_id, name) VALUES(1, "ACDC Fans");

-- Update a row, change its name
UPDATE artists SET name = 'Blick Sibbith' WHERE name = 'Black Sabbath';

-- Delete a row
DELETE FROM artists WHERE name = 'Blick Sibbith';


-- Join together artists and fan_clubs table so that we can see the fan_clubs an artist has
SELECT artists.name, fan_clubs.name FROM artists
INNER JOIN fan_clubs ON artists.id = fan_clubs.artist_id;
