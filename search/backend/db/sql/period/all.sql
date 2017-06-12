SELECT *
FROM search_periods
WHERE
$1 BETWEEN date_from AND date_to
AND
$2 BETWEEN date_from AND date_to