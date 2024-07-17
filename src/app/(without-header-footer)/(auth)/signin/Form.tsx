'use client'
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/validations/schema";

const Form = () => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { isValid, errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
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
            <p className="text-3xl font-bold mb-8 text-center">Sign In</p>

            <ul className="text-red-600 list-disc px-4 mb-3">
                {errors?.email?.message && <li>{errors?.email?.message}</li>}
                {errors?.password?.message && (
                    <li>{errors?.password?.message}</li>
                )}
            </ul>
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
                Login
            </button>
           </div>
        </form>
    );
};

export default Form;
