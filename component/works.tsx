import React from 'react'
import Image from 'next/image'
function Works() {
  return (
    <div>
         <section>
            <div>
              
           <h3>Featured works</h3>
           <h3 className='dash' >Designing Dashboards</h3> <br />
           <Image className=' myimmmg'   src={'/Rectangle 30.jpg'} alt={'image 1'} height={300} width={300}/>
           <div className='dash'> 
      <button className='btn'>2020</button> 
      <h2 className='mybash'>Dashboard</h2> 
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Sunt, a corrupti. Cupiditate vel qui architecto quis recusandae reprehenderit <br/>accusantium repellendus provident mollitia. Dignissimos quasi <br/>dolorum exercitationem debitis voluptatem quisquam culpa?</p>
      </div>
      </div>
           </section>
           <br />
           <br />
           <br />

           <section>
           <h3 className='dash' >Designing Dashboards</h3> 
           <Image className='myimmmg'   src={'/Rectangle 32.png'} alt={'image-2'} height={300} width={300}/>
           <div className='dash'> 
      <button className='btn'>2020</button> 
      <h2 className='mybash'>Dashboard</h2> 
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Sunt, a corrupti. Cupiditate vel qui architecto quis recusandae reprehenderit <br/>accusantium repellendus provident mollitia. Dignissimos quasi <br/>dolorum exercitationem debitis voluptatem quisquam culpa?</p>
      </div>
      <br />
           </section>
           <br />
           <br /><br /> <br />
           <section>
           <h3 className='dash' >Designing Dashboards</h3> 
           <Image className='myimmmg'   src={'/Rectangle34.png'} alt={'image-3'} height={300} width={300}/>
           <div className='dash'> 
      <button className='btn'>2020</button> 
      <h2 className='mybash'>Dashboard</h2> 
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Sunt, a corrupti. Cupiditate vel qui architecto quis recusandae reprehenderit <br/>accusantium repellendus provident mollitia. Dignissimos quasi <br/>dolorum exercitationem debitis voluptatem quisquam culpa?</p>
      </div>
           </section>
           <br />
           <br />
           <br />
           <br />
           <br />
    </div>
  )
}

export default Works