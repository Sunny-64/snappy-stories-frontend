'use client'
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/validations/schema";

const Form = () => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { isValid, errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
        },
        criteriaMode: "all",
    });
    const onSubmit = (data:any) => {
        console.log(data); 
    }
    return (
        <form
            className=""
            onSubmit={handleSubmit(onSubmit)}
        >
            <p className="text-3xl font-bold mb-8 text-center">Signup</p>

            <ul className="text-red-600 list-disc px-4 mb-3">
                {errors?.name?.message && <li>{errors?.name?.message}</li>}
                {errors?.username?.message && (
                    <li>{errors?.username?.message}</li>
                )}
                {errors?.email?.message && <li>{errors?.email?.message}</li>}
                {errors?.password?.message && (
                    <li>{errors?.password?.message}</li>
                )}
            </ul>

            <div className="flex flex-col sm:flex-row mb-8 gap-4">
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <div className="flex flex-col sm:w-[48%]">
                            <label htmlFor="" className="font-bold mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="john"
                                className={`bg-gray-200 border-[2px] border-gray-500 py-2 px-3 rounded-md ${
                                    errors?.name &&
                                    "border-[1px] border-red-600"
                                }`}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        </div>
                    )}
                />

                <Controller
                    control={control}
                    name="username"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <div className="flex flex-col sm:w-[48%]">
                            <label htmlFor="" className="font-bold mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="john"
                                className={`bg-gray-200 border-[2px] border-gray-500 py-2 px-3 rounded-md ${
                                    errors?.username &&
                                    "border-[1px] border-red-600"
                                }`}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        </div>
                    )}
                />
            </div>

            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <div className="mb-8 flex flex-col">
                        <label htmlFor="" className="font-bold mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="example@gmail.com"
                            className={`bg-gray-200 border-[2px] border-gray-500 py-2 px-3 rounded-md ${
                                errors?.email && "border-[1px] border-red-600"
                            }`}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </div>
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <div className="mb-8 flex flex-col">
                        <label htmlFor="" className="font-bold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="6+ characters"
                            className={`bg-gray-200 border-[2px] border-gray-500 py-2 px-3 rounded-md ${
                                errors?.password &&
                                "border-[1px] border-red-600"
                            }`}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </div>
                )}
            />
           <div className="flex justify-center">
           <button
                className="mb-6 inline-block w-2/5 h-10 bg-blue text-white rounded-md"
                type="submit"
            >
                Create Account
            </button>
           </div>
        </form>
    );
};

export default Form;
