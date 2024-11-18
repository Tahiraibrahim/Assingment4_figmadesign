import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin, FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section>
        <div className='icons'>
          {/* Direct use of Link without nested <a> */}
          <Link href="https://www.facebook.com/profile.php?id=100090959635555&mibextid=ZbWKwL" passHref target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </Link>
          <Link href="https://www.instagram.com/itstahirasalahuddin?igsh=MWs5emJzbHppZXlxMw==" passHref target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="https://twitter.com/" passHref target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
          <Link href="https://www.linkedin.com/in/tahira-ibrahim-g-18761b26b/" passHref target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
        </div>
      </section>
      <section>
        <p className='mypara'>
          Copyright &nbsp; <FaRegCopyright /> 2020 All rights reserved
        </p>
      </section>
    </div>
  );
}

export default Footer;
