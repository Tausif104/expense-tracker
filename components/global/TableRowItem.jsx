import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'
import { EllipsisVertical } from 'lucide-react'
import { Badge } from '../ui/badge'

const TableItem = () => {
  return (
    <TableRow>
      <TableCell>Food</TableCell>
      <TableCell className='font-medium'>Deposite</TableCell>
      <TableCell className='xl:table-cell lg:table-cell md:table-cell hidden'>
        July 5th, 2025
      </TableCell>
      <TableCell>
        <Badge className='bg-[#affebf] text-[#014b40]'>$250</Badge>
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
