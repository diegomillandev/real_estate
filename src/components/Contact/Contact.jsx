import { Section, TitleSection } from "../shared";

export const Contact = () => {
  return (
    <Section id="Contact">
      <TitleSection
        title="Contact"
        highlight="With Us"
        subtitle="Ready to Make a Move? Let's Build Your Future Together"
      />
      <form action="" className="w-full md:w-[650px] mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <label htmlFor="yourName" className="mb-2 block">
              Your Name
            </label>
            <input
              type="text"
              id="yourName"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="">
            <label htmlFor="yourEmail" className="mb-2 block">
              Your Email
            </label>
            <input
              type="email"
              id="yourEmail"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-2 block">
              Message
            </label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              className=" w-full p-3 border border-gray-300 rounded resize-none"
            ></textarea>
          </div>
        </div>
        <button className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 rounded font-medium mt-6">
          Send Message
        </button>
      </form>
    </Section>
  );
};
