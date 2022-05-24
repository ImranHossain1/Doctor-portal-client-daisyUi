import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    /* -----------------Firebase Authentications------------------------*/
    const [signInWithGoogle, guser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    let signInErrorMessage;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user || guser)
    useEffect(()=>{
        if(token){
            navigate(from, { replace: true });
        }
    },[token, from, navigate])
    if(loading || gLoading){
        return <Loading></Loading>
    }
    if(error || gError){
        signInErrorMessage = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" 
                                placeholder="Your Email" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("email", {
                                    required:{
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                      message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                                    }
                                  })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" 
                                placeholder="Your Password" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("password", {
                                    required:{
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character or longer' // JS only: <p>error message</p> TS only support string
                                      }
                                  })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInErrorMessage}
                        <input type="submit" className='btn w-full max-w-xs' value='LOGIN'/>
                    </form>
                    <p><small>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button 
                        className="btn btn-outline"
                        onClick={() => signInWithGoogle()}
                    >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;