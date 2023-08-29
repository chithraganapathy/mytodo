const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    console.log(`Connecting to MongoDB at ${process.env.DB_STRING}`)
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true

      })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
