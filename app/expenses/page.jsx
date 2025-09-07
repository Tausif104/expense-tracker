import Balance from '@/components/global/Balance'
import { ChartDashboard } from '@/components/global/Chart'
import ExpensePagination from '@/components/global/ExpensePagination'
import ExpenseTable from '@/components/global/ExpenseTable'

const Expenses = () => {
  return (
    <>
      <div className='my-10'>
        <div className='grid grid-cols-2 gap-10'>
          <div>
            <ChartDashboard />
          </div>
          <div>
            <Balance />
            <div className='mt-[30px]'>
              <ExpenseTable />
              <div className='mt-5'>
                <ExpensePagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expenses
