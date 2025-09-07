import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '../ui/badge'

const ExpenseTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Data</TableHead>
          <TableHead className='text-right'>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Food</TableCell>
          <TableCell className='font-medium'>Deposite</TableCell>
          <TableCell>July 5th, 2025</TableCell>
          <TableCell className='text-right'>
            <Badge className='bg-[#affebf] text-[#014b40]'>$250</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Travel</TableCell>
          <TableCell className='font-medium'>Withdraw</TableCell>
          <TableCell>July 5th, 2025</TableCell>
          <TableCell className='text-right'>
            <Badge className='bg-[#affebf] text-[#014b40]'>$250</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tour</TableCell>
          <TableCell className='font-medium'>Deposite</TableCell>
          <TableCell>July 5th, 2025</TableCell>
          <TableCell className='text-right'>
            <Badge className='bg-[#affebf] text-[#014b40]'>$250</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Family</TableCell>
          <TableCell className='font-medium'>Withdraw</TableCell>
          <TableCell>July 5th, 2025</TableCell>
          <TableCell className='text-right'>
            <Badge className='bg-[#affebf] text-[#014b40]'>$250</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium'>Deposite</TableCell>
          <TableCell>Gadget</TableCell>
          <TableCell>July 5th, 2025</TableCell>
          <TableCell className='text-right'>
            <Badge className='bg-[#affebf] text-[#014b40]'>$250</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium'>Deposite</TableCell>
          <TableCell>Entertainment</TableCell>
          <TableCell>July 5th, 2025</TableCell>
          <TableCell className='text-right'>
            <Badge className='bg-red-200 text-red-950'>-250</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium'>Deposite</TableCell>
          <TableCell>Gadget</TableCell>
          <TableCell>July 5th, 2025</TableCell>
          <TableCell className='text-right'>
            <Badge className='bg-[#affebf] text-[#014b40]'>$250</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium'>Deposite</TableCell>
          <TableCell>Gadget</TableCell>
          <TableCell>July 5th, 2025</TableCell>
          <TableCell className='text-right'>
            <Badge className='bg-[#affebf] text-[#014b40]'>$250</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium'>Deposite</TableCell>
          <TableCell>Entertainment</TableCell>
          <TableCell>July 5th, 2025</TableCell>
          <TableCell className='text-right'>
            <Badge className='bg-red-200 text-red-950'>-250</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default ExpenseTable
