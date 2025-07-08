import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
    e.preventDefault();
    }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-indigo-200 shadow-xl shadow-indigo-100 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
              <div className='w-full py-6 text-center'>
                <h1 className='text-3xl font-bold'><span className='text-indigo-600'>Admin</span> Login</h1>
                <p className='font-light'>Enter your credentials to access the admin panel</p>
              </div>
              <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
                <div className='flex flex-col '>
                    <label>Email</label>
                    <input onChange={e=> setEmail(e.target.value)} value={email}  type='email' placeholder='your email id' className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
                </div>
                 <div className='flex flex-col '>
                    <label>Password</label>
                    <input onChange={e=> setPassword(e.target.value)} value={password} type='password' placeholder='your password' className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
                </div>
                <button type='submit' className='w-full py-3 font-medium bg-indigo-600 text-white rounded cursor-pointer hover:bg-indigo-500 transition-all'>Login</button>
              </form>
        </div>
      </div>
    </div>
  )
}

export default Login
