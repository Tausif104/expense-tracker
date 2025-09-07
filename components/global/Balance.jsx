import { Button } from '../ui/button'
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
} from '../ui/alert-dialog'
import { Input } from '../ui/input'

const Balance = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='font-normal'>
        Balance <br />
        <span className='font-bold text-7xl block mt-3'>$508</span>
      </h1>

      <AlertDialog>
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
          <form>
            <div className='mb-4'>
              <Input type='text' placeholder='Type of Expense' />
            </div>
            <div>
              <Input type='number' placeholder='Amount' />
            </div>
          </form>
          <AlertDialogFooter>
            <AlertDialogCancel className='cursor-pointer'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className='cursor-pointer'>
              Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Balance
