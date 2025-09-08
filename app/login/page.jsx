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

const LogInPage = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
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
            Login
          </Button>

          <p className='text-[13px] mt-2'>
            Don't have an account?{' '}
            <Link href='/registration' className='underline'>
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LogInPage
