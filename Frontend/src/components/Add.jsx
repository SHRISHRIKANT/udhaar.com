import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Assuming you use React Router for routing

function Add({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitForm = (data) => {
    onSubmit(data); // Pass form data to parent component's onSubmit function
  };

  const handleCloseDialog = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmitForm)} method="dialog">
              <Link to="/Transactions" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseDialog}>✕</Link>
              <h3 className="font-bold text-lg">Add New Entry</h3>
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input 
                  type='text' 
                  placeholder='Enter customer name' 
                  className='w-50 px-3 py-1 border rounded-md outline-none'
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Description</span>
                <br />
                <input 
                  type='text' 
                  placeholder='Enter description' 
                  className='w-50 px-3 py-1 border rounded-md outline-none'
                  {...register("description", { required: true })}
                />
                <br />
                {errors.description && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Total Amount</span>
                <br />
                <input 
                  type='number' 
                  placeholder='Enter total amount' 
                  className='w-50 px-3 py-1 border rounded-md outline-none'
                  {...register("total_amount", { required: true })}
                />
                <br />
                {errors.total_amount && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Categories (comma-separated)</span>
                <br />
                <input 
                  type='text' 
                  placeholder='Enter categories' 
                  className='w-50 px-3 py-1 border rounded-md outline-none'
                  {...register("categories", { required: true })}
                />
                <br />
                {errors.categories && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Dates (comma-separated)</span>
                <br />
                <input 
                  type='text' 
                  placeholder='Enter dates' 
                  className='w-50 px-3 py-1 border rounded-md outline-none'
                  {...register("dates", { required: true })}
                />
                <br />
                {errors.dates && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className='flex justify-around mt-4'>
                <button 
                  type="submit" 
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Add Entry
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
    </>
  );
}

export default Add;
