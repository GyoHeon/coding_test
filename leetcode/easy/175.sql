SELECT personId, lastName, firstName 
FROM Person p LEFT JOIN Address a
ON p.personId = a.personId