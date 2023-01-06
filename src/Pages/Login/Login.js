import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    if (user) {
        console.log(user);
    }

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='flex h-screen justify-center items-center  '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>

                    <div className="divider">OR</div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {

                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },

                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                            </label>
                        </div>

                        <input

                            aria-invalid={errors.firstName ? "true" : "false"}
                        />
                        {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

                        <input
                            {...register("mail", { required: "Email Address is required" })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.mail && <p role="alert">{errors.mail?.message}</p>}

                        <input type="submit" />
                    </form>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;