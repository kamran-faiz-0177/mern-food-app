import React from 'react'

const Footer = () => {
    return (
        <div id='contact' className='w-full bg-gray-600 p-6 md:p-10 flex flex-col gap-6 items-center justify-center'>
            <div className='w-full max-w-7xl flex flex-col md:flex-row justify-between items-start gap-10 pb-8 border-b-2 border-gray-400'>
                <div className='flex-1'>
                    <img src="./logo.png" alt="Logo" className='w-32 h-auto' />
                    <p className='text-white mt-4 text-sm md:text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, perspiciatis. Debitis, deleniti <br className='hidden md:block' />
                        consequuntur voluptates alias provident laudantium sit praesentium numquam <br className='hidden md:block' />
                        officia eum accusantium nemo cupiditate consequatur in dignissimos impedit non!
                    </p>
                    <div className='flex mt-5 gap-3'>
                        <img src="./facebook_icon.png" alt="Facebook" className='w-6 h-6' />
                        <img src="./twitter_icon.png" alt="Twitter" className='w-6 h-6' />
                        <img src="./linkedin_icon.png" alt="LinkedIn" className='w-6 h-6' />
                    </div>
                </div>
                <div className='text-white flex-1'>
                    <h2 className='text-xl md:text-2xl mb-2 font-semibold'>COMPANY</h2>
                    <ul>
                        <li className='my-2'>Home</li>
                        <li className='my-2'>About Us</li>
                        <li className='my-2'>Delivery</li>
                        <li className='my-2'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='text-white flex-1'>
                    <h2 className='text-xl md:text-2xl mb-2 font-semibold'>GET IN TOUCH</h2>
                    <ul>
                        <li className='my-2'>+92 999999999</li>
                        <li className='my-2'>kamran@gmail.com</li>
                    </ul>
                </div>
            </div>
            <h2 className='text-white text-sm md:text-lg font-semibold text-center'>© 2024 Dulanjali - All Rights Reserved.</h2>
        </div>
    )
}

export default Footer
