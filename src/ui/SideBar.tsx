/** @format */

import { HiOutlineCalendar, HiOutlineHome, HiOutlineUsers } from 'react-icons/hi';
import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHomeModern } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className='p-3.5 border-t-0 border-l-0 border-b-0 border-2 border-r-gray-500 h-screen w-[15%] bg-gray-50'>
      <img src='../../public/logo-light.png' />

      <ul className='text-gray-600 text-xl font-medium flex flex-col items-center my-8'>
        <li className='p-4 w-full text-center hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200 rounded-md cursor-pointer'>
          <Link to='/' className='flex gap-2 items-center'>
            <HiOutlineHome />
            <span>Home</span>
          </Link>
        </li>

        <li className='p-4 w-full text-center hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200 rounded-md cursor-pointer'>
          <Link to='/bookings' className='flex gap-2 items-center'>
            <HiOutlineCalendar />
            <span>Bookings</span>
          </Link>
        </li>

        <li className='p-4 w-full text-center hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200 rounded-md cursor-pointer'>
          <Link to='/cabins' className='flex gap-2 items-center'>
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </Link>
        </li>

        <li className='p-4 w-full text-center hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200 rounded-md cursor-pointer'>
          <Link to='/users' className='flex gap-2 items-center'>
            <HiOutlineUsers />
            <span>Users</span>
          </Link>
        </li>

        <li className='p-4 w-full text-center hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200 rounded-md cursor-pointer'>
          <Link to='/bookings' className='flex gap-2 items-center'>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </Link>
        </li>

        <li className='p-4 w-full text-center hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200 rounded-md cursor-pointer'>
          <Link to='/settings' className='flex gap-2 items-center'>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
