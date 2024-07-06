import React from "react";

const messages = [
  {
    name: "Bogdan Posedaru",
    handle: "@ChessCoders",
    avatar:
      "https://www.chesscoders.com/wp-content/uploads/2023/06/logo-w-text.png",
    text: "The final design is exactly how I wanted it.",
  },
  {
    name: "Tiberiu Georgescu",
    handle: "@ChessCoders",
    avatar:
      "https://www.chesscoders.com/wp-content/uploads/2023/06/logo-w-text.png",
    text: "The whole team is happy and satisfied with the design.",
  },
  {
    name: "Victor Ocnarescu",
    handle: "@ChessCoders",
    avatar:
      "https://www.chesscoders.com/wp-content/uploads/2023/06/logo-w-text.png",
    text: "The new website looks modern, and I'm glad it was finished so quickly.",
  },
  {
    name: "Sebi Amarii",
    handle: "@ChessCoders",
    avatar:
      "https://www.chesscoders.com/wp-content/uploads/2023/06/logo-w-text.png",
    text: "I'm very proud, everything went smoothly and quickly at the same time.",
  },
  {
    name: "Costin",
    handle: "@ElectroAZ",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEVHcEw1P0g1P0gzPkg1P0g1P0g1P0g1P0g1P0g1P0gxPkg1P0j///8yPEYnMz0oOUVCSlKVmZwcKzj/middY2qkp6t/hInp6uqytbgJGyxtc3ny8vPd3d6qbDPIysz7w5RgUESNlJj/0Kv1lTT/8OL/sGbvJRuvAAAAC3RSTlMAh8KH32Ay7T8YwijDhBcAAAEbSURBVCiRhZPteoMgDIXRqdRFvrWKH9Wu3f3f4hImrq6dOz/gMe+T5ASQsagiSTkAT5OC/VaOIIrnO1RmsFNW/rATPOl0wDZavmIA35Wpn0CFkFiFfYNPAGl132ur9qnkmYNohgo19FKdq1VnBRxnx8QY6eUjhIIlCJs1MvoN1tg1YSma0I31mkISNAjqYSQ2TbElwm5sW4JaCD/ifvHknTNisRZC2+HWelgUYoSSvpuaUnVwNNjJudsiAMvKCxkI6VCHmcb7fXY3xdGQNFtZEX1XH87p9zBKMEP58AjVGx2CsNeuq2tjDNBizHWeP92kCjo+zJVSCFyAFtI0LdgyHPyzFE6Sxyt7oez/yz58JscP7PhpHj/qP36HL0nJIIPsXgtxAAAAAElFTkSuQmCC",
    text: "Thank you, Gabi. Sales have increased in the last few months.",
  },
  {
    name: "Edi",
    handle: "@BijuteriiDeLux",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAeFBMVEU4WOk3V+ksUOgfSegaRucxVOkoTugtUeikr/Pn6vz///8WROeeqvLV2vmDk+/y8/1UbOvu8P3e4vq4wPUALeY9XOkjS+iosvP4+f7ByPcRQufR1vkAOueUofHK0Phvgu12iO5ZcOvc4PqJmPCyu/WPnfFddOxGYuplDsAWAAABOElEQVR4AbWRRWLDQAwApUV71htGUzj5/wvLGLi1cx2x5I9QfSSMdd47a+4EhFiUAGURw3VaqsgDSUkGmSrpL+fycGSjimi0o3F2P23Kk+RF30bSMCWnH/2q8SzMdb5Iyc/DEqi++moEVus6A+PKFgBRP6R5nbNpJXVQuLfQvjAf0pabMXhVD+MkpoNtaT+kIxbQRbEN7LwumCxwHy099Rz2VuIBjkESVYvXT5nsHt6WYJjEMq8/pTjm5gSdceMjnM22dHPc10CDGGBfb9c7ONZ9txh8DWSK7BY9hH5TDxnO8C5/raKGXdjCaezCEg77tOP7caZbuXrFahr0AhzqVWfki9SU7essXtwE2rJJIj/tasu4FgknJsMv92k76OfOXV53+nKfmNDtASZdMHKDxoWz1i2iyj/zDLQeE7ps+rsUAAAAAElFTkSuQmCC",
    text: "I didn't expect a redesign can boost store traffic so much.",
  },
];

const TestimonialsPeople = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pb-32 lg:px-36">
      {messages.map((message, index) => (
        <div key={index} className="my-4 md:m-0">
          <div className="rounded-lg border border-gray-100 p-4">
            <div className="flex items-center">
              <div className="group flex items-center">
                <img
                  className="w-10 rounded-full"
                  src={message.avatar}
                  alt={`${message.name}'s avatar`}
                />
                <div className="ml-2 leading-tight">
                  <div className="font-bold text-slate-700">{message.name}</div>
                  <div className="text-xs text-slate-500">{message.handle}</div>
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm text-slate-700 font-medium">
              {message.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsPeople;