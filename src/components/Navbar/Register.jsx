import React, { useState } from 'react'

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username)
        console.log(email)
        console.log(password)
    }
  return (
    <div className='bg-gray-100 w-full h-screen flex items-center justify-center'>
        <div className='bg-white p-10 rounded w-96 shadow-sm'>
            <h2 className='text-2xl font-bold mb-6'>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="username" className='block text-gray-600 text-sm font-semibold mb-2'>Username</label>
                    <input type="text" onChange={(e)=>setUsername(e.target.value)} name='username' id='username' className ="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder='Username' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="Email" className='block text-gray-600 text-sm font-semibold mb-2'>Email</label> 
                    <input type="email" placeholder='Email'  onChange={(e)=>setEmail(e.target.value)} name='email' id='email' className='px-3 py-2 w-full border rounded focus:outline-none focus:border-blue-500'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="Password" className='block text-gray-600 font-semibold text-sm mb-2'>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500' />
                </div>
                <button className='btn btn-primary w-full'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register