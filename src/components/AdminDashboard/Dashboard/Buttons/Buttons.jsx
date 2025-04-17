import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const Buttons = () => {
  const location = useLocation();

  const getButtonStyle = (path) => {
    return location.pathname === path
      ? 'bg-[#00A58E]/[33%] text-black border-[#C2D6EE]'
      : 'bg-white border-[#C2D6EE] text-[#697D95]';
  };

  return (
    <ul className='w-fit flex items-center justify-self-center gap-6 mt-8'>
      {[
        { path: '/superadmin/customers', label: 'View Customers' },
        { path: '/superadmin/agents', label: 'View Agents' },
        { path: '/superadmin/builders', label: 'View Builders' },
      ].map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={`no-underline rounded-lg flex border px-6 py-2 items-center ${getButtonStyle(path)}`}
        >
          <li className='list-none flex items-center gap-2'>
            <span className='text-lg font-semibold'>{label}</span>
            <Icon icon="ei:arrow-up" width="24" height="24" className='rotate-45' />
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default Buttons;
