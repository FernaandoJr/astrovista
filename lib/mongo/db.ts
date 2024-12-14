import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import { MongoClient } from "mongodb"

const URI = process.env.MONGODB_APOD_URI
const options = {}

if (!URI) throw new Error("Please define the MONGODB_APOD_URI environment variable inside .env.local")

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (process.env.NODE_ENV === "production") {
  // In production mode, it's best to use a local variable to store the connection
  client = new MongoClient(URI, options)
  clientPromise = client.connect()
} else {
  // In development mode, use a global variable to store the connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(URI, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
}

export default clientPromise
