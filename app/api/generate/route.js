import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db('bitlinks')
    const collection = db.collection('url')

    // check if url already exists
    const urlExists = await collection.findOne({ shorturl: body.shorturl })
    if (urlExists) {
      return Response.json(
        { success: false, error: true, message: 'URL already exists' },
        { status: 400 }
      )
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl
    })

    return Response.json({ success: true, error: false, message: 'URL Generated Successfully' })
  } catch (err) {
    console.error("API error:", err)
    return Response.json(
      { success: false, error: true, message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
