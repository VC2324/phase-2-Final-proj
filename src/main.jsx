import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Portfolio from './components/Portfolio.jsx'

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: 'portfolio',
            element: <Portfolio />
          },
          {
            path: 'portfolio/:id',
            element: <PortfolioItem />
          },
          {
            path: 'bio',
            element: <Bio />
          },
        ]
      },
      {
        path: "contact",
        element: <Contact />
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
