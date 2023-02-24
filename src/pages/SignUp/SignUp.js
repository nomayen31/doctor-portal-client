import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const {register, handleSubmit,  formState: { errors } } =useForm();

    const {createUser} =useContext(AuthContext);

    const handleSignUp =(data) =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user =result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
       
    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl text-center'>Sign Up</h2>

            <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input  {...register("name",{
                        required:"Name ius required"
                    })}type="text"                   
                      className="input input-bordered w-full max-w-xs" />  
                      {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input  {...register("email",{
                          required: true 
                    })}type="email"                   
                      className="input input-bordered w-full max-w-xs" />  
                      {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input  {...register("password",{
                         required: "password is required",
                         minLength:{value:6, message:"password must be 6 charter long"},
                         pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} type="password" 
                      className="input input-bordered w-full max-w-xs" />
                   {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
            </form>
            <p>already have an account?<Link className='text-secondary' to="/login">please login</Link></p>

            <div className='divider'>OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default SignUp;