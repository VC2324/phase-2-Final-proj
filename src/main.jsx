import React from 'react'
import ReactDOM from 'react-dom/client'
import Colors from './components/Colors.jsx'
import Home from './components/Home.jsx'
import Decks from './components/Decks.jsx'
import App from './components/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = [
  {
    path: "/",
    element: < App/>,
    children: [

      {
        index: true,
        element: <Home />,
      },
      {
        path: "Colors",
        element: <Colors />,
      },
      {
        path: 'decks',
        element: <Decks />
      },
  
      
    ]
  }
]
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
    
  </React.StrictMode>,
)
