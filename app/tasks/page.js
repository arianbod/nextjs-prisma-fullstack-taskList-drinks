import { TaskForm, TaskFormCustom, DeleteForm, TaskList } from '@/components/tasks'
import Link from 'next/link'
import React from 'react'
export const dynamic = 'force-dynamic'
const Tasks = () => {
  return (
    <div className='w-4/6 m-auto'>

      <h1 className='text-7xl'>Tasks</h1>
      <TaskFormCustom />
      <TaskList />
    </div>
  )
}

export default Tasks