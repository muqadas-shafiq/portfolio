import React from 'react'

const Login = () => {

  return (
    <div className='flex justify-center h-screen'>
    <div className=' h-[85%] w-[45%] my-10 bg-slate-300'>
         <div className='flex justify-center items-center mt-5 font-medium'>   <p className='text-3xl '>Login</p></div>
            <form>
                <div className='flex flex-col justify-center items-center'>
                    <input type="name" placeholder='Type your name' className='md:w-96 px-3 m-5 h-14' />
                    <input type="email" placeholder='Type your Email' className='md:w-96 px-3 m-5 h-14' />
                    <input type="password" placeholder='Password' className='md:w-96 px-3 m-5 h-14' />
                    <button type='submit' className='w-96 px-3 m-5 h-14 bg-black text-white text-xl'> Submit</button>
                </div>
            </form>
          <div className='flex ml-28 '>  <p className='text-[19px]'> Don't have an account, <span className='text-[20px] hover:text-green-700'>SignUp</span></p></div>
    </div>
    </div>
  )
}

export default Login