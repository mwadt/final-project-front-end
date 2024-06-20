import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Create from './components/create/Create.jsx'
import List from './components/list/List.jsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  { path: '/', element: <App />},
  { path: '/create', element: <Create />},
  { path: '/list', element: <List />},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      
    {/* <App />   */}
  </React.StrictMode>,
)
