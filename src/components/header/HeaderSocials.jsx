import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrYoutube} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/muhammad-huzzifa-hafeez-83b68321b/" rel = "noreferrer" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Huzzifa787" rel = "noreferrer"  target='_blank'><FaGithub/></a>
        <a href="https://www.youtube.com/channel/UCeRgjAnj6S7OPdFdwueH1gw" rel = "noreferrer"  target='_blank'><GrYoutube/></a>
    </div>
  )
}

export default HeaderSocials
