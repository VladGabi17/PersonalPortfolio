const FooterBrand = () => {
    return (
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <a
          href="/home"
          className="transition duration-300 text-slate-950 hover:text-amber-500 text-2xl font-bold"
        >
          Vlad Gabriel
        </a>
        <p className="mt-4 text-base text-gray-500 sm:mt-0">
          Made with ❤️ by Gabi
        </p>
      </div>
    );
  };
  
  export default FooterBrand;