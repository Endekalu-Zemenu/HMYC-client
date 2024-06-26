import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import "../../App.css";
import axios from "axios";
import { Toaster, toast } from 'sonner'

export function LoginForm() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [response, setResponse] = useState('');

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
    const { phone, password } = formData;
    if(
      phone !== "",
      password !== ""
    ) {
      try {
        const res = await axios.post("http://localhost:3000/register", formData);
        setResponse(res.data.success);
        console.log("Form sent to the backend");
        toast.success("User Logged In successfully", { className: "text-lg" });
        setFormData({
          phone: "",
          password: "",
        })
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong", { className: "text-lg" });
      }
    } else {
      toast.info("Fields are empty", { className: "text-lg" });
    }
  };

  return (
      <div className="w-1/3 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black border-2 border-neutral-500">
        <Toaster richColors/>
        <h2 className="font-bold text-4xl text-white dark:text-neutral-200">
          Welcome to HMYC
        </h2>
        <p className="text-neutral-400 text-base mt-2 dark:text-neutral-300 flex justify-center w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, fugiat!
        </p>

        <form
          className="my-8"
          action="http://localhost:3000/login"
          method="POST"
        >
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder=""
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
              placeholder=""
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
            onClick={handleSubmit}
          >
            Login &rarr;
            <BottomGradient />
          </button>

          {/* Horizontal line */}
          {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}
        </form>
      </div>
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
  {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
