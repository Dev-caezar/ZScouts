import React from 'react'
import { RouterProvider } from 'react-router'
import { Element } from './routes/router'
import Nextlevel from './components/Nextlevel'
import Opportunities from './components/Opportunities'
import WhyZscout from './components/WhyZscout'

const App = () => {
  return (
    <div className='wrapper'>
      <RouterProvider router={Element}/>
      
     <WhyZscout/>
     <Opportunities/>
     <Nextlevel/>
    </div>
  )
}

export default App
