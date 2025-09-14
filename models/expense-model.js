import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Expense =
  mongoose.models.Expense || mongoose.model('Expense', expenseSchema)
