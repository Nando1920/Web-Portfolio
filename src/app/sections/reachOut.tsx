"use client";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ITextField {
  value: string;
  name: string;
  type?: string;
  onChange?: (e: any) => void;
  label?: string;
  placeholder?: string;
}

export function TextField({
  value,
  name,
  type = "text",
  onChange,
  label,
  placeholder,
}: ITextField) {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="text-xs font-semibold px-2">{label}</label>}
      <input
        className="p-2 rounded-xl border-[1px] focus border-cyan-300 text-sm"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default function ReachOutSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const sendEmail = () => {
    setLoading(true);

    // setLoading(false);
  };

  return (
    <section className="  flex flex-col items-center gap-[32px] p-4 ">
      <h1 className="text-2xl text-cyan-500">Get in touch</h1>
      <div className="flex flex-col items-center w-full gap-5">
        <TextField
          value={formData.name}
          name={"name"}
          onChange={handleInput}
          label="Name"
          placeholder="Enter your name..."
        />
        <TextField
          value={formData.email}
          name={"email"}
          type="email"
          onChange={handleInput}
          label="Email"
          placeholder="Enter your email..."
        />
        <div className="flex flex-col w-full ">
          <label className="font-semibold text-xs px-2">Message</label>
          <textarea
            className="  h-fit min-h-24 p-2 rounded-xl border-[1px] focus border-cyan-300 text-sm"
            name="message"
            onChange={handleInput}
            value={formData.message}
            placeholder="Leave a message..."
          />
        </div>
      </div>
      <button
        onClick={sendEmail}
        className="text-sm hover:shadow-lg hover:shadow-cyan-300/50 transition-shadow duration-500 rounded-3xl px-12 py-2 sm:p-4 bg-cyan-300 sm:w-38 text-white">
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          "Send"
        )}
      </button>
    </section>
  );
}
