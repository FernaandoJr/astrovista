import { MongoClient } from "mongodb"

const URI = process.env.MONGODB_APOD_URI
const options = {}

if (!URI) throw new Error("Please define the MONGODB_APOD_URI environment variable inside .env.local")

let client = new MongoClient(URI, options)
let clientPromise

if (process.env.NODE_ENV === "production") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
  }

  clientPromise = global._mongoClientPromise
} else {
  clientPromise = client.connect()
}

export default clientPromise
