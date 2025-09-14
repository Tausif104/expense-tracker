import AddRecordForm from '@/app/expenses/_components/add-record'
import { getBalance } from '@/actions/expense.action'

const Balance = async () => {
  const { balance } = await getBalance()

  console.log(balance)

  return (
    <div className='flex justify-between items-center'>
      <h1 className='font-normal'>
        Balance <br />
        <span className='font-bold xl:text-7xl lg:text-7xl md:text-5xl text-4xl block mt-3'>
          ${balance.toLocaleString()}
        </span>
      </h1>

      <AddRecordForm />
    </div>
  )
}

export default Balance
