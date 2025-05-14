import { Link } from "react-router-dom";
import React from 'react';

const AdminSidebar = () => {
    return (
        <div className="w-[13vw] h-[88vh] bg-gray-900 text-white p-5">
            <h2 className="text-2xl font-bold mb-5">Sidebar</h2>
            <ul>    
               <li className="mb-2">
                    <Link to="/dashboard?tab=additems" className="block p-2 hover:bg-gray-700 rounded">Add Items</Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard?tab=listitems" className="block p-2 hover:bg-gray-700 rounded">List Items</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
