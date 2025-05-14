import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdminSidebar from '../AdminComponents/AdminSidebar';
import AdminNavbar from '../AdminComponents/AdminNavbar';
import AddItems from '../AdminComponents/AddItems';
import LisItems from "../AdminComponents/ListItems";
import React from 'react'


export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className='h-screen'>
      <AdminNavbar />
      <div className='flex flex-col gap-6 md:flex-row'>
        <div className='md:w-56'>
          <AdminSidebar />
        </div>
        {tab === 'additems' && <AddItems />}
        {tab === 'listitems' && <LisItems />}
      </div>
    </div>
  );
}