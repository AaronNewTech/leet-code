-- need to find the customers in that visited and didn't order anything
-- the data should be the count for each time the same customer order was NULL

-- selecting data and summarizing it for analysis
SELECT visits.customer_id, COUNT(visits.visit_id) AS count_no_trans

-- choosing the main table for data retrieval
FROM visits

-- combining data from multiple tables based on a common column
LEFT JOIN transactions ON visits.visit_id = transactions.visit_id

-- filtering the result set based on specific criteria.
WHERE transaction_id IS NULL

-- grouping data to organize it for analysis
GROUP BY customer_id