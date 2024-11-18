import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
         <section>
          <div >
            <div>
                <ul className='main-1'>
            
                <Link href={'/works'}> <li>Works</li></Link>
                <Link href={'/blogs'}><li>Blog</li></Link> 
                <Link href={' /contact'}> <li>Contact</li></Link>
          
                </ul>
               
            </div>
  </div>
  </section>
    </div>
  )
}

export default Navbar