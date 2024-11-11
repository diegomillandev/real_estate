import { useState } from "react";
import { Section, TitleSection } from "../shared";
import { toast } from "react-toastify";

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully");
      setResult("");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Error sending message");
      setResult("");
    }
  };

  return (
    <Section id="Contact">
      <TitleSection
        title="Contact"
        highlight="With Us"
        subtitle="Ready to Make a Move? Let's Build Your Future Together"
      />
      <form
        action=""
        className="w-full md:w-[650px] mt-10 "
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <label htmlFor="yourName" className="mb-2 block">
              Your Name
            </label>
            <input
              type="text"
              id="yourName"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="">
            <label htmlFor="yourEmail" className="mb-2 block">
              Your Email
            </label>
            <input
              type="email"
              id="yourEmail"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-2 block">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              className=" w-full p-3 border border-gray-300 rounded resize-none"
              required
            ></textarea>
          </div>
        </div>
        <button className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 rounded font-medium mt-6">
          {result ? result : "Send Message"}
        </button>
      </form>
    </Section>
  );
};
