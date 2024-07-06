import React from "react";
import ContactSocialMedia from "./ContactSocialMedia";

const ContactHeader = () => {
  return (
    <div className="text-white lg:w-1/2 lg:mx-6 py-20 ">
      <h1 className="text-5xl font-extrabold md:text-6xl">Have an idea?</h1>
      <p className="max-w-xl mt-6  text-xl">
        I'm a passionate designer with a focus on transforming your ideas into
        modern, visually appealing websites and apps. Let's collaborate, to turn
        your dreams into a stunning reality.
      </p>
      <ContactSocialMedia />
    </div>
  );
};

export default ContactHeader;