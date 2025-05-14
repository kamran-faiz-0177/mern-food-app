import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <nav className='w-full py-2 px-10 border-b-2 flex items-center justify-between'>
            <div>
                <Link to="/">
                    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                </Link>
                <h1>Admin Panel</h1>
            </div>
            <div>
                <img
                    src='./download.jpeg'
                    alt="img is loading"
                    className='rounded-full w-[100px] h-[100px] object-cover'
                />
            </div>
        </nav>
    )
}

export default AdminNavbar