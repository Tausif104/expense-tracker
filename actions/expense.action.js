'use server'

import { Expense } from '@/models/expense-model'
import { revalidatePath } from 'next/cache'

// Expense Create
export const createExpense = async (prevState, formData) => {
  const { category, amount } = Object.fromEntries(formData)

  if (!category || !amount) {
    return {
      msg: 'Please Insert all the fields',
      success: false,
    }
  }

  const data = {
    category,
    amount,
  }

  const expense = await Expense.create(data)

  if (expense) {
    revalidatePath('/expenses')
    return {
      msg: 'Record Created',
      expenseID: expense.id,
      success: true,
    }
  }
}

// Get all expense
export const getAllExpense = async () => {
  const expenses = await Expense.find({})

  return {
    expenses,
  }
}

// Delete expense
export const deleteExpense = async (prevState, formData) => {
  const { expenseId } = Object.fromEntries(formData)

  const deletedExpense = await Expense.findByIdAndDelete(expenseId)

  if (deletedExpense) {
    revalidatePath('/expenses')
  }
}
