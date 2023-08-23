import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Head = () => {
  return (
    <>
        <section className="head">
            <div className="container d_flex">
                <div className="left row">
                    <i><FontAwesomeIcon icon={faPhone} /></i>
                    <label htmlFor="">+84 381921924</label>
                    <i><FontAwesomeIcon icon={faEnvelope} /></i>
                    <label htmlFor="">ngantyen@gmail.com</label>
                </div>
                <div className="right row RText">
                    <label htmlFor="">Theme RAQ's</label>
                    <label htmlFor="">Need Helps</label>
                    <label htmlFor="">EN</label>
                    <span></span>
                    <label htmlFor="">VN</label>
                    <span> </span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head