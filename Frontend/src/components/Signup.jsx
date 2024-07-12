import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center ">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg">Sign-Up</h3>
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input
                  type='text'
                  placeholder='Enter your Name'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input
                  type='email'
                  placeholder='Enter your mail id'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
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
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className='flex justify-around mt-4'>
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p>
                  Have an account? <button className="underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_2").showModal()}>Login!</button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
