-- selecting the columns in our results to be displayed
-- one way to think of it is to create the shape of the result table
-- in this case it will be 3 columns product_name, year and price
SELECT product.product_name, sales.year, sales.price

-- this will be the main table that we get our data from
FROM sales

-- this attaches the product_key on the left side of the product table
-- where the sales.product_id and product.product_id match up
-- is how the relationships are displayed
LEFT JOIN product ON sales.product_id = product.product_id

-- alternate solution
-- SELECT product.product_name, sales.year, sales.price

-- FROM product

-- RIGHT JOIN sales ON sales.product_id = product.product_id