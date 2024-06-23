import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import Create from './components/create/Create.jsx'
import AllItineraries from './components/allItineraries/AllItineraries.jsx'
import Edit from './components/edit/Edit.jsx'
import './index.css'

import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  { path: '/', element: <App />},
  { path: '/create', element: <Create />},
  { path: '/itineraries', element: <AllItineraries />},
  { path: `/itineraries/edit/:id`, element: <Edit />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      
  </React.StrictMode>,
)
