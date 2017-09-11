-- \copy book(title,author,summary,price,images,publisher,ISBN) FROM './hell.csv' DELIMITER ',' CSV;
\copy book(title,author,summary,price,images,publisher,ISBN) FROM '/Users/baahmac/Documents/LearnersGuild/LgProjects/simple_bookstore/src/models/schema/books.csv' DELIMITER ',' CSV HEADER;
