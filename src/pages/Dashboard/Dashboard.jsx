import React from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';

const Dashboard = () => {
  return (
    <>
      <div className='flex justify-between items-center bg-gray-200 p-2'>
        <h1 className='font-bold'>TItulo do post</h1>
        <div className='flex items-center gap-2'>
          <button className='text-xl bg-green-400 p-2 text-gray-600 cursor-pointer rounded-sm'><BiEdit /></button>
          <button className='text-xl bg-red-400 p-2 text-gray-600 cursor-pointer rounded-sm'><BiTrash /></button>
        </div>
      </div>
    </>
  );
}


export default Dashboard;
