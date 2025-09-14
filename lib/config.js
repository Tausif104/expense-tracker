import mongoose from 'mongoose'

let isConnected = false

export const connectDB = async () => {
  if (isConnected) {
    return
  }

  if (mongoose.connection.readyState === 1) {
    isConnected = true
    return
  }

  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL)
    isConnected = true
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
