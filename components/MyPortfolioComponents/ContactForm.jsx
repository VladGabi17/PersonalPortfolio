import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-8 lg:w-1/2 lg:mx-6">
      <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
        <h1 className="text-2xl text-slate-700 font-extrabold md:text-3xl">
          Contact
        </h1>
        <p className="mt-2 text-slate-500 text-lg">
          Let's collaborate! To turn your dreams into a stunning reality.
        </p>
        <form className="mt-6">
          <div className="flex-1">
            <label className="block mb-2 text-base text-slate-700 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Vlad Gabriel"
              className="block w-full px-5 py-3 mt-2 text-slate-500 bg-white border-2 border-gray-200 rounded-lg focus:border-amber-500  focus:outline-none "
            />
          </div>
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-base text-slate-700 font-semibold ">
              Email address
            </label>
            <input
              type="email"
              placeholder="vlad.gabi@example.com"
              className="block w-full px-5 py-3 mt-2 text-slate-500 bg-white border-2 border-gray-200 rounded-lg focus:border-amber-500  focus:outline-none "
            />
          </div>
          <div className="w-full mt-6">
            <label className="block mb-2 text-base text-slate-700 font-semibold ">
              Message
            </label>
            <textarea
              className="block w-full h-32 px-5 py-3 mt-2 text-slate-500 bg-white border-2 border-gray-200 rounded-lg focus:border-amber-500  focus:outline-none"
              placeholder="Tell me about your project"
            ></textarea>
          </div>
          <button className="w-full px-6 py-3 mt-6 text-sm font-medium text-white  transition-colors duration-300 transform bg-amber-500 rounded-md hover:bg-amber-400 ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;