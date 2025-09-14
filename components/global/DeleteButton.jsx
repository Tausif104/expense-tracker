'use client'

import { DropdownMenuItem } from '../ui/dropdown-menu'
import { deleteExpense } from '@/actions/expense.action'
import { useEffect, useActionState } from 'react'
import { toast } from 'sonner'

const DeleteExpenseForm = ({ id }) => {
  const initialState = {
    msg: '',
    success: false,
  }

  const [state, formAction, pending] = useActionState(
    deleteExpense,
    initialState
  )

  return (
    <form action={formAction}>
      <input type='hidden' name='expenseId' value={id} />
      <DropdownMenuItem variant='destructive' className='cursor-pointer'>
        <button type='submit' className='block w-full text-left cursor-pointer'>
          Delete
        </button>
      </DropdownMenuItem>
    </form>
  )
}

export default DeleteExpenseForm
