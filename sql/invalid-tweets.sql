SELECT tweet_id
FROM tweets

-- use the length function and strict greater than to get tweet less than 15 characters long
WHERE LENGTH(content) > '15'