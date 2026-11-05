////q1/////////
import mongoose from 'mongoose'

export const createBooksCollection = async () => {
  const db = mongoose.connection.db

  await db.createCollection('books', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['title'],
        properties: {
          title: { bsonType: 'string', minLength: 1 },
        },
      },
    },
  })

  return { ok: 1 }
}
//////q2
export const createAuthor=async (data) => {
    const db =mongoose.connection.db
    const result=  await db.collection('authors').insertOne(data)
  return result
}
///q3
export const createLogsCappedCollection= async () => {
    const db =mongoose.connection.db
    await db.collection('logs', { capped: true, size: 1048576 })
    return{ok:2}
}
///q4
export const createBooksTitleIndex = async () => {
  const db = mongoose.connection.db
  const result = await db.collection('books').createIndex({ title: 1 })
  return result
}