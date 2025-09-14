import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import TableItem from './TableRowItem'
import { getAllExpense } from '@/actions/expense.action'

const ExpenseTable = async () => {
  const { expenses } = await getAllExpense()

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
        {expenses.map((expense) => (
          <TableItem key={expense.id} expense={expense} />
        ))}
      </TableBody>
    </Table>
  )
}

export default ExpenseTable
