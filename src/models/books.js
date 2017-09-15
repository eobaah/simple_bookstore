const db = require('./db')

const getAllBooks = () => {
  return db.any(`SELECT * FROM book ORDER BY title ASC`,[])
}

const createBook = ( title, author, summary, price, images, publisher, isbn ) => {
  return db.query(`INSERT INTO book
    ( title, author, summary, price, images, publisher, isbn )
  VALUES
    ( $1, $2, $3, $4, $5, $6, $7 )
  RETURNING *`,
    [ title, author, summary, price, images, publisher, isbn ]
  )
}

const getBook = id  => {
  return db.one(`SELECT * FROM book WHERE id=$1`,[ id ] )
}

const searchBooks = input => {
  input = `%${input}%`
  return db.any(`
    SELECT * FROM book
    WHERE UPPER(title) like UPPER($1)
    OR UPPER(author) like UPPER($1)
    OR UPPER(summary) like UPPER($1),
    OR UPPER(price) like UPPER($1),
    OR UPPER(publisher) like UPPER($1),
    OR UPPER(isbn) like UPPER($1)`,
    [ input ] )
}

const deleteBook = id => {
  return db.none(`DELETE FROM book WHERE id=$1
    RETURNING *`,[ id ] )
}

const editBook = ( id, book ) => {
  return db.oneOrNone(
    `UPDATE book
    SET title=$2, author=$3, summary=$4, price=$5, images=$6, publisher=$7, isbn=$8
    WHERE id=$1`,
    [id, book.title, book.author, book.summary, book.price, book.images, book.publisher, book.isbn,] )
}

module.exports = {
  getAllBooks,
  createBook,
  getBook,
  searchBooks,
  deleteBook,
  editBook
}
