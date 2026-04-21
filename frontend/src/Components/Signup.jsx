import React from 'react';

const Signup = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-60px)]">
            <div className="card w-full max-w-sm shadow-lg bg-base-100">
                <div className="card-body">

                    <h1 className='text-2xl flex items-center justify-center mb-4'>
                        <span className='italic text-fuchsia-600'>Signup now -</span>
                        <span className='flex ml-1 font-bold items-center gap-1'>
                            <img src="/favicon.svg" className='w-5' />
                            TradeLab
                        </span>
                    </h1>

                    <form className="space-y-3">
                        {/* Name */}
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="********"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <button className="btn btn-primary w-full mt-2">
                            Sign Up
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Signup;