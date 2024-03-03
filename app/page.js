import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  console.log('Hello moto');
  return (<div>

    <h1 className='text-7xl'>Next .js 14</h1>
    <Link href='client' className='btn btn-accent mt-10'>getting started</Link>
  </div>
  )
}

export default HomePage