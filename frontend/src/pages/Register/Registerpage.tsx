import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "../../api/auth";
import planeImage from "../../assets/plane.jpg"; // You will add your airplane image here
import { AxiosError } from "axios";
import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  password: string;
};

const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<FormData>({ resolver: yupResolver(schema) });

const [ successMessage , setSuccessMessage] = useState("")

  const onSubmit = async (data: FormData) => {
    try {
      const res = await registerUser(data);
      console.log("Registered:", res);
      setSuccessMessage("🎉 Registration successful! You can now log in.")
    } catch (err) {
        const error = err as AxiosError<{message?: string}>;
        setSuccessMessage("")
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 relative">
        <img src={planeImage} alt="Airplane wing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-100 flex flex-col justify-center items-start px-12">
          <h1 className="text-white text-3xl font-bold leading-tight mb-4">
            Get better <br /> Travel Experience <br /> With us!
          </h1>
          <div className="flex gap-4 mt-4">
            {/* Example icons - replace with actual ones */}
            <span className="bg-white p-2 rounded-full">✈️</span>
            <span className="bg-white p-2 rounded-full">🏨</span>
            <span className="bg-white p-2 rounded-full">🚗</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
<div className="flex flex-col w-full lg:w-1/2 px-8 lg:px-24 relative">
  
  {/* Top Bar */}
  <div className="absolute top-4 left-8 right-8 flex justify-between items-center">
    {/* Brand Name */}
    <h1 className="text-xl font-bold text-blue-600">G-Airline</h1>

    {/* Language Selector */}
    <select
      className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
      defaultValue="en"
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="de">Deutsch</option>
    </select>
  </div>

  {/* Centered Content */}
  <div className="flex flex-col justify-center flex-1">
    <div className="mb-8 mt-12">
      <h2 className="text-2xl font-bold">Welcome</h2>
      <p className="text-gray-500 text-sm">Please enter your details</p>
    </div>

    {
      successMessage && (

        <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4"> {successMessage} </div>
      )
    }

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Fullname */}
      <div>
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition"
      >
        {isSubmitting ? "Registering..." : "Sign Up"}
      </button>
    </form>

    <p className="text-sm text-center text-gray-500 mt-6">
      Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
    </p>
  </div>
</div>

    </div>
  );
}
