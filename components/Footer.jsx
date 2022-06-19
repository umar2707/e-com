import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillGithub, AiOutlineGlobal } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 en_five</p>
      <div className="socials">
        <p >
          <Link href={'https://www.instagram.com/en5_caps/'}>
            <AiFillInstagram size={30}/>
          </Link>
        </p>
        <p >
          <Link href={'https://t.me/en5_caps/'}>
            <BsTelegram size={30}/>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Footer