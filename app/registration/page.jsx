import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const RegisterPage = () => {
  return (
    <div className='flex justify-center mt-[200px]'>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Enter your info below to register your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='email@example.com'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Full Name</Label>
                <Input
                  id='fullname'
                  type='text'
                  placeholder='John Doe'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Currency</Label>
                <Select>
                  <SelectTrigger className='w-full cursor-pointer'>
                    <SelectValue placeholder='Currency' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='dollar'>Dollar</SelectItem>
                    <SelectItem value='bdt'>BDT</SelectItem>
                    <SelectItem value='euro'>Euro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                </div>
                <Input
                  id='password'
                  type='password'
                  placeholder='********'
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex-col gap-2'>
          <Button type='submit' className='w-full cursor-pointer'>
            Sign Up
          </Button>
          <p className='text-[13px] mt-2'>
            Already have an account?{' '}
            <Link href='/login' className='underline'>
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RegisterPage
