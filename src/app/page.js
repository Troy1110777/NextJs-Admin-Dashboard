import DashboardLayout from '@/components/dashboard'
import React from 'react'

//get all products
async function extractAllProducts(){
  const res = await fetch('http://localhost:3000/api/product/all-product', {
      method: 'GET',
      cache: 'no-store'
  })

  const data = await res.json()
  return data
}



//get all visitors
async function extractAllVisitors(){
  const res = await fetch('http://localhost:3000/api/visitors/all-visitors', {
      method: 'GET',
      cache: 'no-store'
  })

  const data = await res.json()
  return data
}


const page = async () => {
  const allProducts = await extractAllProducts()
  const allVisitors = await extractAllVisitors()
  return (
    <DashboardLayout
    allProducts = {allProducts.data}
    allVisitors = {allVisitors.data} 
    />
  )
}

export default page