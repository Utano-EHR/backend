#!/bin/bash

# PostgreSQL connection details
DB_USER="postgres"
DB_NAME="utanodb"

# List of table names to reset the serial ID sequence
TABLES=("Province" "Insurance" "ChronicCondition" "Speciality" "City")

# Iterate through the list of tables and reset the serial ID sequence
for TABLE in "${TABLES[@]}"; do
	psql -U "$DB_USER" -d "$DB_NAME" -c "SELECT setval(pg_get_serial_sequence('\"$TABLE\"', 'id'), coalesce(max(id)+1, 1), false) FROM \"$TABLE\";"
	if [ $? -ne 0 ]; then
			echo "Error resetting ID sequence for table $TABLE"
	else
			echo "ID sequence reset for table $TABLE"
	fi
done
