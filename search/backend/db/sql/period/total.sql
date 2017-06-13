SELECT COUNT(*) AS count
FROM search_periods
WHERE
$1 BETWEEN date_from AND date_to
AND
$2 BETWEEN date_from AND date_to
AND $3 BETWEEN count_persons_min AND count_persons_max