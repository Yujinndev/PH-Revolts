import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'

import ScrollToAnchor from '@/utils/ScrollToAnchor'
import Blog from '@/pages/Blog'

function App() {
  return (
    <Router>
      <>
        <ScrollToAnchor />

        <Routes>
          <Route path="/" element={<Blog />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
