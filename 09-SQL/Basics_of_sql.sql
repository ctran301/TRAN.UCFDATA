#MySQL
	
SCHEMA
	Databases/tables
		colums - types
			rows

CREATE RANDOM_DB
USE RANDOM_DB
SELECT * FROM #CSV_FILE

#Right click on tables in RANDOM_DB to

JOINS
	INNER JOIN
		ON
	LEFT JOIN
		ON



#11_13_2018
#CREATE, REPLACE AND DROP VIEW 
#In SQL, a view is a virtual table based on the result-set of an SQL statement.
#A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.
#You can add SQL functions, WHERE, and JOIN statements to a view and present the data as if the data were coming from one single table.

#SYNTAX 

CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;

#UNION
#The UNION operator is used to combine the result-set of two or more SELECT statements.
#Each SELECT statement within UNION must have the same number of columns
#The columns must also have similar data types
#The columns in each SELECT statement must also be in the same order

#SYNTAX

SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;

#LOOK AT EXERCISES 07 AND 15 FOR MORE ON UNIONS AND VIEWS

#ALWAYS INCLUDE THESE DEPENDENCIES FOR CLASSES IN PANDAS FOR SQL

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

from sqlalchemy import Column, Integer, String, Float
import pymysql
pymysql.install_as_MySQdb()

#session(.query .dirty .new .commit .delete
.query
.dirty
.new
.commit
session.query.(Pet).filter_by(name= 'Marshmellow')
pet.age += 1
session.dirty

engine.execute('select * from ')

#declarative base vs automap base

Base= automap_base()

Base.prepare(engine, reflect=True)

Base.classes.keys()
	#['dow'] is the table

#create session
session = Session(engine)
#display the dow's  columns and data in dicitonary format
first_row = session.query(Dow.table_name).first()
first_row.__dict__

for row in session.query(Dow.table_name).limit(5).all():
	print(row)