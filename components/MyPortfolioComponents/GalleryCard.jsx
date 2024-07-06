import React from "react";

const GalleryCard = ({ title, description, imageUrl }) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-2xl transition-shadow hover:shadow-xl hover:shadow-black/10">
      <div className="h-auto w-full max-w-xs mx-auto">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:bg-white group-hover:bg-opacity-30 group-hover:backdrop-blur-sm group-hover:backdrop-filter"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="pt-4 text-3xl font-extrabold text-slate-700 opacity-0 group-hover:opacity-100 duration-300">
          {title}
        </h1>
        <p className="pt-3 font-semibold text-base text-slate-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;