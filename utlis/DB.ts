import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGODB_URI

if (!MONGO_URI) {
  throw new Error('Please provide MONGO_URI in the environment variables')
}

type MongooseCache = {
  conn: typeof mongoose | null,
  promise: Promise<typeof mongoose> | null
}
let cached: MongooseCache = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null
  }
}
async function connectToDB() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI!)

  }
  cached.conn = await cached.promise
  return cached.conn
}

export default connectToDB;


