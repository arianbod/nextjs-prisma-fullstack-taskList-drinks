import DrinksList from '@/components/DrinksList';
import Link from 'next/link'
import React from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
const fetchDrinks = async () => {
  const response = await fetch(url)
  // throw error
  if (!response.ok) {
    throw new Error('failed to load, check address first')
  }
  const data = await response.json()
  return data.drinks
}
const DrinksPage = async () => {
  const drinks = await fetchDrinks()
  return (<div>

    <h1 className='text-7xl'>DrinksPage</h1>
    <Link href={''} className='text-2xl'>about</Link>
    <DrinksList drinks={drinks} />
    <ul>
    </ul>
  </div>
  )
}

export default DrinksPage