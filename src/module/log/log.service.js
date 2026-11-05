import mongoose from 'mongoose'
export const addlog = async (data) => {
  const db = mongoose.connection.db
  const result = await db.collection('log').insertOne(data)
  return result}