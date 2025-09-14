import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.VERCEL_DB)
    console.log(`Mongodb Connected ${mongoose.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
