import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'

const Header = () => {
  const user = true

  return (
    <header className='bg-gray-950 py-3 px-3'>
      <div className='flex justify-between items-center container mx-auto'>
        <Link href='/' className='flex items-centter gap-2'>
          <Image width={20} height={20} alt='Logo' src='/vercel.svg' />
          <span className='text-white font-bold'>Expense Tracker</span>
        </Link>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-0'>
              <Avatar className='cursor-pointer'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className='cursor-pointer'>
                <Link href='/expenses'>My Expenses</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className='cursor-pointer'>
                <Link href='/settings'>Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem variant='destructive'>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant='secondary' asChild>
            <Link href='/login'>Log In</Link>
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header
