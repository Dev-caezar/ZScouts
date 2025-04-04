import React from 'react'
// import { RouterProvider } from 'react-router'
// import { Element } from './routes/router'
import Nextlevel from './components/Nextlevel'
import Opportunities from './components/Opportunities'
const App = () => {
  return (
    <div>
      {/* <RouterProvider router={Element}/> */}
     <Opportunities/>
     <Nextlevel/>
    </div>
  )
}

export default App
