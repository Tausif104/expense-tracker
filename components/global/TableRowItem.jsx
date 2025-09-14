import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import moment from 'moment'
import { TableCell, TableRow } from '@/components/ui/table'
import { EllipsisVertical } from 'lucide-react'
import { Badge } from '../ui/badge'

const TableItem = ({ expense }) => {
  return (
    <TableRow>
      <TableCell>{expense.category}</TableCell>
      <TableCell className='font-medium'>
        {Number(expense.amount) < 0 ? 'Withdraw' : 'Deposite'}
      </TableCell>
      <TableCell className='xl:table-cell lg:table-cell md:table-cell hidden'>
        {moment(expense.createdAt).format('MMMM Do, YYYY')}
      </TableCell>
      <TableCell>
        <Badge className='bg-[#affebf] text-[#014b40]'>${expense.amount}</Badge>
      </TableCell>
      <TableCell className='text-right'>
        <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-0 cursor-pointer'>
            <EllipsisVertical width={18} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem className='cursor-pointer'>Edit</DropdownMenuItem>
            <DropdownMenuItem variant='destructive' className='cursor-pointer'>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}

export default TableItem
