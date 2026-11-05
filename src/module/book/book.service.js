///////q5
import mongoose from 'mongoose'

export const addBook = async (data) => {
  const db = mongoose.connection.db
  const result = await db.collection('books').insertOne(data)
  return result
}
///q6
export const addBooksBatch = async (data) => {
  const db = mongoose.connection.db
  const result = await db.collection('books').insertMany(data)
  return result
}
///q8
export const updateBookYear = async (title, year) => {
  const db = mongoose.connection.db
  return await db.collection('books').updateOne(
    { title: title },
    { $set: { year: year } }
  )
}
///q9
export const getBookByTitle = async (title) => {
  const db = mongoose.connection.db
  return await db.collection('books').findOne({ title: title })
}

////q10
export const getBooksByYearRange = async (from, to) => {
  const db = mongoose.connection.db
  return await db.collection('books')
    .find({ year: { $gte: Number(from), $lte: Number(to) } })
    .toArray()
}
/////111
export const getBooksByGenre = async (genre) => {
  const db = mongoose.connection.db
  return await db.collection('books')
    .find({ genres: genre })
    .toArray()
}
////q12
export const getBooksSkipLimit = async () => {
  const db = mongoose.connection.db
  return await db.collection('books')
    .find()
    .sort({ year: -1 })
    .skip(2)
    .limit(3)
    .toArray()
}
//////////13
export const getBooksYearInteger = async () => {
  const db = mongoose.connection.db
  return await db.collection('books')
    .find({ year: { $type: 'int' } })
    .toArray()
}
/////14
export const getBooksExcludeGenres = async () => {
  const db = mongoose.connection.db
  return await db.collection('books')
    .find({ genres: { $nin: ['Horror', 'Science Fiction'] } })
    .toArray()
}
///15
export const deleteBooksBeforeYear = async (year) => {
  const db = mongoose.connection.db
  return await db.collection('books').deleteMany({ year: { $lt: Number(year) } })
}
///16
export const getBooksAggregate1 = async () => {
  const db = mongoose.connection.db
  return await db.collection('books')
    .aggregate([
      { $match: { year: { $gt: 2000 } } },
      { $sort: { year: -1 } },
    ])
    .toArray()
}
///17
export const getBooksAggregate2 = async () => {
  const db = mongoose.connection.db
  return await db.collection('books')
    .aggregate([
      { $match: { year: { $gt: 2000 } } },
      { $project: { title: 1, author: 1, year: 1, _id: 0 } },
    ])
    .toArray()
}
///19
export const getLogsWithBooks = async () => {
  const db = mongoose.connection.db
  return await db.collection('logs')
    .aggregate([
      { $addFields: { book_id: { $toObjectId: '$book_id' } } },
      {
        $lookup: {
          from: 'books',
          localField: 'book_id',
          foreignField: '_id',
          as: 'book_details',
        },
      },
      {
        $project: {
          _id: 0,
          action: 1,
          'book_details.title': 1,
          'book_details.author': 1,
          'book_details.year': 1,
        },
      },
    ])
    .toArray()
}
////18.{
export const getBooksAggregate3 = async () => {
  const db = mongoose.connection.db
  return await db.collection('books')
    .aggregate([
      { $unwind: '$genres' },
      { $project: { title: 1, genres: 1, _id: 0 } },
    ])
    .toArray()
}
  