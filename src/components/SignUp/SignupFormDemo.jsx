"use client";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "/home/realkal/Desktop/project-1/client/src/utils/cn.ts";
import { TracingBeam } from "../ui/tracing-beam";
import "/home/realkal/Desktop/project-1/client/src/App.css";
import axios from "axios";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.post("http://localhost:3000/register", formData);
      console.log("Form sent to the backend");
    } catch (err) {
      console.log(err);
    }

    // OR
    // fetch('http://localhost:3000/register' , {
    //   method: "POST",
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
  };

  return (
    <TracingBeam>
      <div className="w-9/12 h-screen mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black border-2 border-neutral-500">
        <h2 className="font-bold text-4xl text-white dark:text-neutral-200">
          Welcome to HMYC
        </h2>
        <p className="text-neutral-400 text-base mt-2 dark:text-neutral-300 flex justify-center w-full">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>

        <form
          className="my-8"
          onSubmit={handleSubmit}
          action="http://localhost:3000/register"
          method="POST"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Your name"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="middlename">Middle name</Label>
              <Input
                id="middlename"
                placeholder="Your father's name"
                type="text"
                name="middleName"
                onChange={handleChange}
                value={formData.middleName}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Your grandpa's name"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                required
              />
            </LabelInputContainer>
          </div>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+25191234567"
              type="phone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              required
            />
          </LabelInputContainer>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="123"
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </LabelInputContainer>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <button
            className="text-lg bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Register &rarr;
            <BottomGradient />
          </button>

          {/* Horizontal line */}
          {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}
        </form>
      </div>
    </TracingBeam>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) =>
  // : {
  //   children: React.ReactNode;
  //   className?: string;
  // }
  {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
