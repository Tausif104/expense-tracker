import AddRecordForm from '@/app/expenses/_components/add-record'

const Balance = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='font-normal'>
        Balance <br />
        <span className='font-bold xl:text-7xl lg:text-7xl md:text-5xl text-4xl block mt-3'>
          $508
        </span>
      </h1>

      <AddRecordForm />
    </div>
  )
}

export default Balance
