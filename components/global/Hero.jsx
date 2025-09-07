import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className='pt-[100px]'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>
            Welcome to Expense Tracker Web App
          </h1>
          <p className='mt-3 mb-4'>
            This is an expense tracker app made with Next.js (server actions).{' '}
            <br />
            Please login to add your expenses.
          </p>
          <div>
            <Button className='bg-gray-800' asChild>
              <Link href='/login'>Get Started</Link>
            </Button>
          </div>
          <div className='text-center'>
            <Image
              className='mx-auto'
              width={500}
              height={500}
              alt='Hero Image'
              src='/hero.svg'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
