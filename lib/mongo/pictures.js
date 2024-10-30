import clientPromise from "."

let client
let db
let pictures

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
    pictures = await db.collection("pictures")
  } catch (error) {
    throw new Error("Could not connect to the database" + error)
  }
}

;(async () => {
  await init()
})()

// PICTURES

export async function getPictures(start_date, end_date) {
  console.log(pictures)
  try {
    if (!pictures) await init()
    const result = await pictures
      .find({
        date: {
          $gte: start_date,
          $lte: end_date,
        },
      })
      .toArray()

    console.log("result", result)

    return { pictures: result }
  } catch (error) {
    return { error: "Failed to get pictures: " + error }
  }
}
