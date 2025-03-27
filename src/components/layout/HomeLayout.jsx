import React from 'react'
import { Header, Footer } from '../static'
import { Outlet } from 'react-router'

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout
