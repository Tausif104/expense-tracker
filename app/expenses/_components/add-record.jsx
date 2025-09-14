'use client'

import { Button } from '@/components/ui/button'
import { useActionState, useState, useEffect } from 'react'
import { toast } from 'sonner'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { createExpense } from '@/actions/expense.action'

const AddRecordForm = () => {
  const [open, setOpen] = useState(false)

  const initialState = {
    msg: '',
    expenseID: '',
    success: false,
  }

  const [state, formAction, pending] = useActionState(
    createExpense,
    initialState
  )

  useEffect(() => {
    if (state.msg) {
      toast.info(state.msg)
      if (state.success === true) {
        setOpen(false)
      } else {
        setOpen(true)
      }
      state.msg = ''
    }
  }, [state.msg])

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className='cursor-pointer'>Add Record</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Record</AlertDialogTitle>
          <AlertDialogDescription>
            Please fillup the fields.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form action={formAction}>
          <div className='mb-4'>
            <Input type='text' placeholder='Type of Expense' name='category' />
          </div>
          <div>
            <Input type='number' placeholder='Amount' name='amount' />
          </div>
          <AlertDialogFooter className='mt-4'>
            <AlertDialogCancel className='cursor-pointer'>
              Cancel
            </AlertDialogCancel>
            <Button className='cursor-pointer'>
              {pending ? 'Loading...' : 'Create'}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddRecordForm
