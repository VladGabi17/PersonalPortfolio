const FooterSiteMap = () => {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <p className="text-base font-bold text-slate-700">Who's Gabi?</p>
  
          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="/home"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              Home
            </a>
            <a
              href="/designer"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              Designer
            </a>
            <a
              href="/coder"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              Coder
            </a>
          </div>
        </div>
  
        <div>
          <p className="text-base font-bold text-slate-700">Latest work</p>
  
          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="https://streamlined-input-896370.framer.app/"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              Chess Coders
            </a>
            <a
              href="https://github.com/sebiamr22/chesscoders-ui/tree/CC-17"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              Tailwind React
            </a>
            <a
              href="https://www.atelieralina.art/"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              Logo Design
            </a>
          </div>
        </div>
  
        <div>
          <p className="text-base font-bold text-slate-700">
            Inspiration Gallery
          </p>
  
          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="/sketch-gallery"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              Sketch
            </a>
            <a
              href="/wireframe-gallery"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              Wireframe
            </a>
            <a
              href="/hifi-gallery"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              High Fidelity
            </a>
          </div>
        </div>
  
        <div>
          <p className="font-semibold text-slate-500">Contact</p>
  
          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="#"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              Bucharest, Romania
            </a>
            <a
              href="#"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              +40 737 526 261
            </a>
            <a
              href="#"
              className="text-slate-500 transition-colors duration-100   hover:text-amber-500"
            >
              gheorghe.vlad.gabi@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterSiteMap;