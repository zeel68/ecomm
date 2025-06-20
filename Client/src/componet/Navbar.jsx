import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
    const { user } = useSelector((state) => state.auth);
    const [username, setUsername] = useState('');
    // const [email, setemail] = useState('');


    useEffect(() => {
        if (user?.username) {
            setUsername(user.username);
            // setemail(user.email);
        } else {
            const storedName = localStorage.getItem('username');
            // const storedemail = localStorage.getItem('email');
            if (storedName) setUsername(storedName);
            // if (storedemail) setemail(storedemail);
        }
    }, [user]);

    return (
        <nav className='navbar w-[100%] bg-white relative index-[10] text-black border border-[#00538A]'>
            <div className="inner flex justify-between items-center p-[15px]">
                <i className="fa fa-bars menu-toggle-btn" onClick={toggleSidebar}></i>

                <div className="left">
                    <input className='relative  w-[400px] rounded-md border border-[#D7D7D7DA] shadow-custom bg-[#E0F0FB] p-[5px] text-sm' type="text" placeholder='Search' />
                    <CiSearch className='absolute top-[24px] left-[380px] ' />
                </div>

                <div className="right flex justify-between">
                    <div className="w-[50px]">
                        <FaBell className='text-[#232323] m-[10px]' />
                    </div>
                    <div className="user">
                        <img className="w-[100%] rounded-[50%] max-w-[35px]" src="../src/assets/img.jpg" alt="User" />
                    </div>
                    <div className="flex items-center">
                        <div className="flex flex-wrap p-[5px] items-center justify-start mr-[12px] w-[85px]">
                            <p className='text-black text-[14px]'>{username || 'User'}</p>
                            {/* <span className='text-inner'>{email || 'user@example.com'}</span> */}
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;