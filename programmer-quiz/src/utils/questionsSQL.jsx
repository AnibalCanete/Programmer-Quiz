
export const questionsSQL = [
    // Difficulty - Easy
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "SQL",
        "Question": "¿What is PostgreSQL?",
        "CorrectAnswer": "An open-source relational and object-relational database management system.",
        "IncorrectAnswers": [
            "A programming language.",
            "A JavaScript framework.",
            "An operating system."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "SQL",
        "Question": "¿How do you create a new database in PostgreSQL?",
        "CorrectAnswer": "By using the command 'CREATE DATABASE databaseName;'.",
        "IncorrectAnswers": [
            "CREATE DB databaseName;",
            "NEW DATABASE databaseName;",
            "ADD DATABASE databaseName;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "SQL",
        "Question": "¿How do you create a new table in PostgreSQL?",
        "CorrectAnswer": "With the command 'CREATE TABLE tableName(column1 type, column2 type, ...);'.",
        "IncorrectAnswers": [
            "NEW TABLE tableName;",
            "TABLE CREATE tableName;",
            "ADD TABLE tableName;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "SQL",
        "Question": "¿How do you insert data into a table in PostgreSQL?",
        "CorrectAnswer": "By using 'INSERT INTO tableName(column1, column2, ...) VALUES (value1, value2, ...);'.",
        "IncorrectAnswers": [
            "ADD INTO tableName VALUES (...);",
            "INSERT tableName (...);",
            "PUT INTO tableName (...);"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "SQL",
        "Question": "¿How do you select data from a table in PostgreSQL?",
        "CorrectAnswer": "With the command 'SELECT * FROM tableName;' or by specifying columns.",
        "IncorrectAnswers": [
            "SHOW tableName;",
            "GET tableName;",
            "LIST tableName;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "SQL",
        "Question": "¿Which command is used to delete a table in PostgreSQL?",
        "CorrectAnswer": "DROP TABLE tableName;",
        "IncorrectAnswers": [
            "DELETE TABLE tableName;",
            "REMOVE TABLE tableName;",
            "CLEAR TABLE tableName;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "SQL",
        "Question": "¿Which command shows all databases in PostgreSQL?",
        "CorrectAnswer": "\\l in psql",
        "IncorrectAnswers": [
            "SHOW DATABASES;",
            "LIST DB;",
            "GET DATABASES;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "SQL",
        "Question": "¿Which command is used to exit the psql console?",
        "CorrectAnswer": "\\q",
        "IncorrectAnswers": [
            "exit;",
            "quit;",
            "close;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "SQL",
        "Question": "¿Which command is used to show the PostgreSQL version?",
        "CorrectAnswer": "SELECT version();",
        "IncorrectAnswers": [
            "SHOW VERSION;",
            "GET VERSION;",
            "VERSION();"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "easy",
        "Category": "SQL",
        "Question": "¿Which command is used to delete a database in PostgreSQL?",
        "CorrectAnswer": "DROP DATABASE databaseName;",
        "IncorrectAnswers": [
            "DELETE DATABASE tableName;",
            "REMOVE DB tableName;",
            "CLEAR DATABASE tableName;"
        ]
    },
    // Difficulty - Medium
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "SQL",
        "Question": "¿How do you update data in a table in PostgreSQL?",
        "CorrectAnswer": "By using 'UPDATE tableName SET column = 'newValue' WHERE condition;'.",
        "IncorrectAnswers": [
            "MODIFY tableName SET column = 'newValue';",
            "CHANGE tableName column = 'newValue';",
            "ALTER tableName column = 'newValue';"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "SQL",
        "Question": "¿How do you delete data from a table in PostgreSQL?",
        "CorrectAnswer": "With 'DELETE FROM tableName WHERE condition;'.",
        "IncorrectAnswers": [
            "REMOVE tableName WHERE condition;",
            "DROP tableName WHERE condition;",
            "CLEAR tableName WHERE condition;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "SQL",
        "Question": "¿What is a primary key in PostgreSQL?",
        "CorrectAnswer": "A field or set of fields that uniquely identifies each row in a table.",
        "IncorrectAnswers": [
            "A field that allows duplicate values.",
            "An index to improve performance.",
            "A key that connects two tables."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "SQL",
        "Question": "¿How do you create a primary key in PostgreSQL?",
        "CorrectAnswer": "By adding 'PRIMARY KEY' to the column definition in 'CREATE TABLE' or using 'ALTER TABLE'.",
        "IncorrectAnswers": [
            "SET PRIMARY columnName;",
            "NEW PRIMARY KEY columnName;",
            "PRIMARY columnName;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "SQL",
        "Question": "¿What is a foreign key in PostgreSQL?",
        "CorrectAnswer": "A field that uniquely identifies a row in another table, establishing a relationship between them.",
        "IncorrectAnswers": [
            "A duplicate field.",
            "An automatic index.",
            "A unique value in the table."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "SQL",
        "Question": "¿How are tables joined in PostgreSQL?",
        "CorrectAnswer": "By using 'JOIN' in a 'SELECT' query to combine rows from two or more tables.",
        "IncorrectAnswers": [
            "MERGE TABLES;",
            "CONNECT TABLES;",
            "LINK tableName;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "SQL",
        "Question": "¿What are transactions in PostgreSQL?",
        "CorrectAnswer": "A set of operations treated as a single unit of work, executed completely or not at all.",
        "IncorrectAnswers": [
            "A type of index.",
            "A table decorator.",
            "An automatic backup."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "SQL",
        "Question": "¿How do you start a transaction in PostgreSQL?",
        "CorrectAnswer": "With the command 'BEGIN' or 'START TRANSACTION;'.",
        "IncorrectAnswers": [
            "START DB;",
            "NEW TRANSACTION;",
            "OPEN TRANSACTION;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "SQL",
        "Question": "¿What is the difference between INNER JOIN and LEFT JOIN?",
        "CorrectAnswer": "INNER JOIN returns matches in both tables, LEFT JOIN returns all rows from the left table even if there is no match.",
        "IncorrectAnswers": [
            "They are the same.",
            "LEFT JOIN only works on primary keys.",
            "INNER JOIN always returns all rows."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "medium",
        "Category": "SQL",
        "Question": "¿Which command is used to create a view in PostgreSQL?",
        "CorrectAnswer": "CREATE VIEW viewName AS SELECT ...;",
        "IncorrectAnswers": [
            "NEW VIEW viewName;",
            "VIEW CREATE viewName;",
            "ADD VIEW viewName;"
        ]
    },
    // Difficulty - Hard
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "SQL",
        "Question": "¿What is an index in PostgreSQL and what is it used for?",
        "CorrectAnswer": "A data structure that improves the speed of operations on a table.",
        "IncorrectAnswers": [
            "A column decorator.",
            "A type of primary key.",
            "An automatic backup."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "SQL",
        "Question": "¿How do you create an index in PostgreSQL?",
        "CorrectAnswer": "By using 'CREATE INDEX indexName ON tableName (column);'.",
        "IncorrectAnswers": [
            "NEW INDEX indexName;",
            "ADD INDEX indexName;",
            "INDEX indexName;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "SQL",
        "Question": "¿How is the COUNT function used in PostgreSQL?",
        "CorrectAnswer": "With 'SELECT COUNT(column) FROM tableName;'.",
        "IncorrectAnswers": [
            "COUNT tableName;",
            "SELECT TOTAL tableName;",
            "SUM tableName;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "SQL",
        "Question": "¿What is a schema in PostgreSQL?",
        "CorrectAnswer": "A logical collection of tables and other database objects.",
        "IncorrectAnswers": [
            "A configuration file.",
            "A column decorator.",
            "A primary key."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "SQL",
        "Question": "¿How do you list all tables in PostgreSQL?",
        "CorrectAnswer": "With the command \\dt in the psql command line.",
        "IncorrectAnswers": [
            "SHOW TABLES;",
            "LIST TABLES;",
            "TABLES ALL;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "SQL",
        "Question": "¿How do you back up a database in PostgreSQL?",
        "CorrectAnswer": "By using the 'pg_dump' command in the command line.",
        "IncorrectAnswers": [
            "BACKUP DATABASE;",
            "SAVE DB;",
            "EXPORT DATABASE;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "SQL",
        "Question": "¿How do you restore a database from a backup in PostgreSQL?",
        "CorrectAnswer": "By using the 'pg_restore' or 'psql' command with the backup file.",
        "IncorrectAnswers": [
            "RESTORE DATABASE;",
            "IMPORT DB FILE;",
            "LOAD BACKUP;"
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "SQL",
        "Question": "¿What is an ACID transaction?",
        "CorrectAnswer": "A set of properties: Atomicity, Consistency, Isolation, and Durability.",
        "IncorrectAnswers": [
            "A type of index.",
            "A decorator.",
            "An automatic backup."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "SQL",
        "Question": "¿What is the difference between DELETE and TRUNCATE?",
        "CorrectAnswer": "DELETE removes rows with conditions and can be rolled back with transactions, TRUNCATE quickly removes all rows without conditions.",
        "IncorrectAnswers": [
            "They are the same.",
            "TRUNCATE removes columns.",
            "DELETE removes entire tables."
        ]
    },
    {
        "Type": "multiple",
        "Difficulty": "hard",
        "Category": "SQL",
        "Question": "¿What is a trigger in PostgreSQL?",
        "CorrectAnswer": "A function that is automatically executed in response to certain events on a table.",
        "IncorrectAnswers": [
            "A decorator.",
            "An automatic index.",
            "An automatic backup."
        ]
    }
];
