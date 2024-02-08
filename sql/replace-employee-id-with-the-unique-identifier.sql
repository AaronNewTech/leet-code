-- the select statement is the output tables we are requesting
SELECT employeeuni.unique_id, employees.name

-- the primary table we are getting data from 
-- which we chose because all names are needed in the result
FROM employees

-- left join will join the employeeuni table on the left of the employee table
-- which is the main table with the from line
-- they will be joined on the values that match employees.id and employeeuni.id
LEFT JOIN employeeuni ON employees.id = employeeuni.id