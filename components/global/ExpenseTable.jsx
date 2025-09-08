import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { EllipsisVertical } from 'lucide-react'
import { Badge } from '../ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import Link from 'next/link'
import TableItem from './TableRowItem'

const ExpenseTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className='xl:table-cell lg:table-cell md:table-cell hidden'>
            Date
          </TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className='text-right'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
      </TableBody>
    </Table>
  )
}

export default ExpenseTable
