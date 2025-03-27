import React from 'react'
import { RouterProvider } from 'react-router'
import { Element } from './routes/router'

const App = () => {
  return (
    <div>
      <RouterProvider router={Element}/>
    </div>
  )
}

export default App
