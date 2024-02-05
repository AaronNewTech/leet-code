SELECT name
FROM customer
WHERE referee_id IS NULL OR referee_id != 2

-- another syntax
-- select name 
-- from Customer 
-- where referee_id<>2 or referee_id is NULL;