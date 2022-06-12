import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillGithub, AiOutlineGlobal } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Umar Rakhimberganov</p>
      <div className="socials">
        <p >
          <Link href={'https://www.instagram.com/umar_off27/'}>
            <AiFillInstagram size={30}/>
          </Link>
        </p>
        <p >
          <Link href={'https://t.me/dev7707'}>
            <BsTelegram size={30}/>
          </Link>
        </p>
        <p >
          <Link href={'https://github.com/umar2707'}>
            <AiFillGithub size={30}/>
          </Link>
        </p>
        <p >
          <Link href={'https://umarbek.netlify.app/'}>
            <AiOutlineGlobal size={30}/>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Footer