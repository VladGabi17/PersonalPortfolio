import React from "react";

const CTAContact = () => {
  return (
    <section className="py-24 flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl space-y-3 md:mx-auto justify-ce">
          <p className="text-5xl text-slate-700 font-extrabold mx-auto md:text-6xl">
            Let's collaborate!
          </p>
          <p className="py-5 text-slate-700 text-xl max-w-2xl mx-auto">
            Ready to turn your dreams into a stunning reality? Contact me today
            to get started on your project!
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <a href="/contact">
            <button className="text-amber-500 relative h-[42px] w-36 overflow-hidden border border-amber-500 bg-white px-3 rounded-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-amber-500 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
              <span className="text-md font-semibold relative z-10">
                Contact<i className="text-sm ml-2 fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAContact;





