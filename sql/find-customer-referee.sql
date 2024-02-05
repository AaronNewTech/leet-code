SELECT name

FROM customer

-- to get all the customers wtihout a referee id of 2 this is the syntax
WHERE referee_id IS NULL OR referee_id != 2

-- another syntax to get the solution
-- select name 
-- from Customer 
-- where referee_id<>2 or referee_id is NULL;