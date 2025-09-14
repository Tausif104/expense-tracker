'use client'

import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { useEffect, useState } from 'react'
import { getChartData } from '@/actions/expense.action'

export const description = 'A multiple bar chart'

const chartData = [
  { month: 'January', withdraw: 40, deposite: 80 },
  { month: 'February', withdraw: 35, deposite: 65 },
  { month: 'March', withdraw: 111, deposite: 120 },
  { month: 'April', withdraw: 43, deposite: 90 },
  { month: 'May', withdraw: 32, deposite: 12 },
  { month: 'June', withdraw: 33, deposite: 55 },
  { month: 'July', withdraw: 80, deposite: 30 },
  { month: 'August', withdraw: 12, deposite: 3 },
  { month: 'September', withdraw: 34, deposite: 45 },
  { month: 'October', withdraw: 56, deposite: 1 },
  { month: 'November', withdraw: 12, deposite: 23 },
  { month: 'December', withdraw: 23, deposite: 12 },
]

const chartConfig = {
  desktop: {
    label: 'Deposite',
    color: 'var(--chart-2)',
  },
  mobile: {
    label: 'Withdraw',
    color: 'var(--chart-1)',
  },
}

export const ChartDashboard = () => {
  return (
    <Card className='shadow-none border-none p-0'>
      <CardHeader className='p-0'>
        <CardTitle>Deposite & Witdhaw</CardTitle>
        <CardDescription>
          January - June {new Date().getFullYear()}
        </CardDescription>
      </CardHeader>
      <CardContent className='p-0'>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dashed' />}
            />
            <Bar dataKey='withdraw' fill='var(--color-desktop)' radius={4} />
            <Bar dataKey='deposite' fill='var(--color-mobile)' radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm p-0'>
        <div className='flex gap-2 leading-none font-medium'>
          Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='text-muted-foreground leading-none'>
          Showing total savings and expenses of 12 months
        </div>
      </CardFooter>
    </Card>
  )
}
