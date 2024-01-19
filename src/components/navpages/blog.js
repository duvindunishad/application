import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const blog = () => {
    return (
        <div>
          <div className='container'>
            <Navbar/>
            <div className='card-container'>
                <h1>Blog Page</h1>
            </div>
            <Footer/>
          </div>
        </div>
      )
}

export default blog
