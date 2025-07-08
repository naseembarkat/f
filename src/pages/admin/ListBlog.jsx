import React, { useEffect, useState } from 'react'
import BlogTableItem from '../../components/admin/BlogTableItem';
import { blog_data } from '../../assets/assets';


const ListBlog = () => {

  const [bolgs, setBlogs] = useState([]);

  const fetchBolg = async () => {
    setBlogs(blog_data)
  }

  useEffect(()=>{
    fetchBolg();
  },[])

  return (
    <div className='flex-1 pt-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h1>All bolgs</h1>

       <div className='relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white mb-8'>
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-xs text-gray-600 text-left uppercase'>
                        <tr>
                            <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                            <th scope='col' className='px-2 py-4'>Blog Title</th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                            <th scope='col' className='px-2 py-4'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bolgs.map((bolg,index)=>{
                            return <BlogTableItem key={bolg._id} blog={bolg} fetchBlog={fetchBolg} index={index + 1} />
                        })}
                    </tbody>
                </table>
            </div>
      
    </div>
  )
}

export default ListBlog
