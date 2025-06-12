import React from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { useContextAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { newPost } = useContextAuth()
  return (
    <>
      {newPost.length === 0 && <p>Nenhum Post</p>}
      {newPost.map((post) =>
        <div className='flex justify-between items-center bg-gray-200 p-2 max-w-[50%] mx-auto mt-2'>
          <h1 className='font-bold'>{post.titulo}</h1>
          <div className='flex items-center gap-2'>
            <button className='text-xl bg-green-400 p-2 text-gray-600 cursor-pointer rounded-sm'><BiEdit /></button>
            <button className='text-xl bg-red-400 p-2 text-gray-600 cursor-pointer rounded-sm'><BiTrash /></button>
          </div>
        </div>
      )}
    </>
  );
}


export default Dashboard;
