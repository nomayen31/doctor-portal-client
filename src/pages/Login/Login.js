import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { handleSubmit, register,  formState: { errors } } = useForm()
    const handleLogin =data =>{
        console.log(data);
        console.log(errors);
    }



    return (

        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" 
                         {...register("email", {
                            required:"Email Address id required"
                        })}
                          className="input input-bordered w-full max-w-xs" />
                           {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" 
                         {...register("password",{
                            required:"Password is required",
                            minLength:{value:6, message:'password should be 6 characters '},
                        })}
                          className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget password?</span>
                        </label>
                        {errors.password && <p className='text-red-600' >{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                </form>
                <p>New to Doctor portal <Link className='text-secondary' to="/signup">Create New account</Link></p>

                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>

    );
};

export default Login;