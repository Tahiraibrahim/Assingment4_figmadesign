import React from 'react'

function Contact() {
  return (
    <div>
      <form action="Contact form">
      <h1 className='contact'>CONTACT FORM</h1>
    <input type="text"  placeholder='Enter Your Name' required/> <br />
    <input type="number" placeholder='Enter Your Phone Number'required /> <br />
    <input type='text' placeholder='Enter Your Email' required/><br />
    <input type='text' placeholder='Subject'required/><br />
    <textarea rows={5} cols={60}  name='Message' placeholder='Enter yor text' required/><br />
    <button className='button-2' type='submit'>Send Message</button><br />
    </form>
    </div>
  )
}

export default Contact