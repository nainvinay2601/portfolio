import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

function page() {
  return (
    <div>
      <Sidebar/>
      <div className="lg:ml-80"> {/* This pushes content right on desktop */}
        <Home/>
      </div>
    </div>
  )
}

export default page