import './Footer.css'
import React, { useState } from 'react'

// components
import Title from '../Title/Title'
import Paragraph from '../Paragraph/Paragraph'
import Span from '../Span/Span'
import Button from '../Button/Button'
import ButtonLink from '../ButtonLink/ButtonLink'

// icons
import { GrContact } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { LuPhoneCall } from "react-icons/lu";

import { FaCopy } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

function Footer() {
    const [copiedInfo, setCopiedInfo] = useState('');

    const copyToClipboard = (text, message) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopiedInfo(
                    <>
                        <FaCopy/> Copied to clipboard: {message}
                    </>
                );
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    return (
        <footer className='Footer'>
            <Title
                type='SectionTitle'
                id='hire-me'
                content={
                    <>
                        <Span content="#"/> Hire-Me!
                    </>
                }
            />
            <section>
                <Title type="SecondaryTitle" content={
                    <>
                        <GrContact /> Get in Touch!
                    </>
                } />
                <Paragraph type="lowOpacity" content="Feel free to reach using any of the methods below:" />
                <div className='contact-buttons-container'>
                    <ButtonLink
                        type="contactButton" 
                        content={<FaWhatsapp />}
                        link="https://api.whatsapp.com/send?phone=5511992351116&text=Ol%C3%A1%20Andreas!"
                        target="_blank" 
                        onClick={() => copyToClipboard("+5511992351116", "Phone number!")} 
                    />
                    <ButtonLink
                        type="contactButton" 
                        content={<LuPhoneCall />}
                        link="tel:+5511992351116"
                        target="_blank" 
                        onClick={() => copyToClipboard("+5511992351116", "Phone number!")} 
                    />
                    <ButtonLink 
                        type="contactButton" 
                        content={<FaLinkedin />} 
                        link='https://www.linkedin.com/in/andreas-yuji-fujiki-a08633321/'
                        target='_blank'
                    />
                    <Button 
                        type="contactButton" 
                        content={<FaDiscord />} 
                        onClick={() => copyToClipboard("sun.dev_", "Discord!")} 
                    />
                    <Button
                        type="contactButton" 
                        content={<CgMail />} 
                        target="_blank"
                        onClick={(e) => {
                            e.preventDefault();
                            copyToClipboard("andreaspinheiroprincipal@gmail.com", "Email!");
                            window.location.href = "mailto:andreaspinheirocontato@gmail.com";
                        }} 
                    />
                </div>

                <div className="clickedButtonInfo">
                    <p id="ContactClickedButtonInfo">
                        {copiedInfo}
                    </p>
                    <p id="downloadResume">
                        You can also <a href="#">download my resume <FaFileDownload/></a>
                    </p>
                </div>
            </section>
            <div className="copyright">
                <h3>
                    <Span content="&copy; "/> Andreas Yuji Fujiki. All rights reserved.
                </h3>
            </div>
        </footer>
    )
}

export default Footer;