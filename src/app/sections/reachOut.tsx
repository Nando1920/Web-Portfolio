"use client";
import { LegacyRef, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../styles/getInTouch.css";

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
      {label && (
        <label className="text-xs font-semibold px-2 sm:text-base">
          {label}
        </label>
      )}
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

export default function ReachOutSection({
  forwardedRef,
}: {
  forwardedRef: LegacyRef<HTMLElement> | undefined;
}) {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState: any) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf8",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();

      alert("Message successfully sent");
      setFormData({ name: "", email: "", message: "" }); // Clear form after successful submission
    } catch (err) {
      console.error(err);
      alert("Error sending message. Please try again later");
    }

    setLoading(false);
  };

  return (
    <section
      ref={forwardedRef}
      className="flex flex-col items-center gap-[32px] relative">
      <div className="shapedividers_com-1532 h-12   w-screen"></div>
      <h1 className="text-2xl text-cyan-500">Get in touch</h1>
      <div className="flex flex-col items-center w-full gap-5 sm:w-[50%]">
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
        <div className="flex flex-col w-full">
          <label className="font-semibold text-xs px-2 sm:text-base">
            Message
          </label>
          <textarea
            className="h-fit min-h-32 sm:min-h-48 p-2 rounded-xl border-[1px] focus border-cyan-300 text-sm"
            name="message"
            onChange={handleInput}
            value={formData.message}
            placeholder="Leave a message..."
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="text-sm hover:shadow-lg hover:shadow-cyan-300/50 transition-shadow duration-500 rounded-3xl px-12 py-2 sm:p-4 bg-cyan-300 sm:w-38 text-white">
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          "Send"
        )}
      </button>
      <div className="shapedividers_com-5885 h-12  bottom-0 w-screen"></div>
    </section>
  );
}
