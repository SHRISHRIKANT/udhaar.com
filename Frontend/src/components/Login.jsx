import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                type='email' 
                placeholder='Enter your mail id' 
                className='w-50 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input 
                type='password' 
                placeholder='Enter your Password' 
                className='w-50 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button 
                type="submit" 
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>Not Registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Sign up!</Link></p>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Login;
