import React, { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')

    const navigate =useNavigate();
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { 
                        saveUser(data.name,data.email );
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name,email) =>{
        const user ={name, email};
        fetch ('http://localhost:3000/users',{
            method: 'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('save user',data);
            navigate('/');
        })
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
                        <input  {...register("name", {
                            required: "Name ius required"
                        })} type="text"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email", {
                            required: true
                        })} type="email"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: "password must be 6 charter long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} type="password"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-res-500'>{signUpError}</p>}
                </form>
                <p>already have an account?<Link className='text-secondary' to="/login">please login</Link></p>

                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;