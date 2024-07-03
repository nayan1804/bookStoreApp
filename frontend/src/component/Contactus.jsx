import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


function Contactus() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

  return (
    <>
        <div className='flex h-screen items-center justify-center'>
            <div id="my_modal_3" className="w-[500px]">
                <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                    <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                    <h3 className="font-extrabold text-lg">ContactUs</h3>
                {/* name  */}
                    <div className='mt-4 space-y-2'>
               
                    <span>Name</span>
                    <br />
                    <input
                    type="text"
                    placeholder='Enter your fullname'
                    className='w-80 px-3 py-1 border rounded-md outline-none'
                    {...register("name", { required: true })}
                    /> <br />
                    {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
                    </div>
                {/* Email  */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input
                        type="email"
                        placeholder='Enter your email'
                        className='w-80 px-3 py-1 border rounded-md outline-none'
                        {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                    </div>
                       

                 {/* Message */}
                    <div className='mt-4 space-y-2'>
                        <span>Message</span>
                        <br />
                        <textarea className="px-3 py-1 border rounded-md outline-none h-36 w-80" 
                        name="message" placeholder="Type your message"
                        {...register("message", { required: true })}
                        />
                        <br />
                        {errors.message && <span className='text-sm text-red-600'>This field is required</span>}

                        
                    </div>
                 {/* Button  */}
              <div className='flex justify-around mt-4'>
                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700'>
                  Submit
                </button>
                </div>   
      
    </form>
        </div>
        </div>
        </div>
   
     
    </>
  )
}

export default Contactus
