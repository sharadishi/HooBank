import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'


const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex flex-1 flex-col justify-start mr-10">
                {/* <img
                    src={logo}
                    alt="logo"
                    className="w-[266px] h-[72px] object-contain"
                /> */}
                <div className="text-5xl text-white" >FinServe<span className="text-gradient ">Bank</span></div>
                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                    A new way to make the payment easy, reliable and secure.
                </p>
            </div>

            <div className="flex flex-[1.5] w-full flex-row justify-between flex-wrap md:mt-0 mt-10 ">
                {footerLinks.map((footerlink, index) => (
                    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]" key={index}>
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                            {footerlink.title}
                        </h4>
                        <ul className="list-none mt-4">
                            {footerlink.links.map((link, index) => (
                                <li
                                    key={index}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                                    ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                ))}
            </div>
        </div>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
            <p className="font-poppins font-normal text-[18px] text-center leading-[27px] text-white"> &copy; 2022 FinServe Bank. All Rights Reserved.</p>
            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        src={social.icon}
                        key={social.id}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer
                        ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}
                        `}
                    />
                ))}
            </div>
        </div>
    </section>
)


export default Footer
