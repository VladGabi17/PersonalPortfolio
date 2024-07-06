const FooterEngagement = () => {
    return (
      <div className="md:flex md:-mx-3 md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-slate-700 md:mx-3">
          Let's collaborate! To turn your dreams into a stunning reality.
        </h1>
  
        <div className="mt-6 md:mx-3 md:mt-0 md:w-auto">
          <a href="/contact">
            <button className="text-amber-500 relative h-[42px] w-36 overflow-hidden border border-amber-500 bg-white px-3 rounded-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-amber-500 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
              <span className="text-md font-semibold relative z-10">
                Let's talk<i className="text-sm ml-2 fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </a>
        </div>
      </div>
    );
  };
  
  export default FooterEngagement;

