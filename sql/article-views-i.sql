-- the distinct keyword removes duplicates from results 4 and 7 instead of 4, 4, 7
-- the as keyword gives the result table a new name
SELECT DISTINCT author_id AS id

FROM views

-- the equal sign here compares the values in each table
-- returning those that match
WHERE author_id = viewer_id

-- this orders by values ascending 4 then 7
ORDER BY author_id ASC