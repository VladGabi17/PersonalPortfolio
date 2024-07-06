import React from "react";

const ContactSocialMedia = () => {
  return (
    <div className="mt-6 md:mt-8">
      <h3 className="text-xl text-gray-300">Get in touch</h3>
      <div className="flex mt-4 -mx-1.5">
        <a
          className="mx-3 text-white transition-colors duration-300 transform hover:text-blue-500"
          href="https://www.linkedin.com/in/vlad-gabriel-gheorghe-529a90256/"
        >
          <i className="text-3xl fa-brands fa-linkedin"></i>
        </a>
        <a
          className="mx-3 text-white transition-colors duration-300 transform hover:text-black"
          href="https://github.com/VladGabi17"
        >
          <i className="text-3xl fa-brands fa-github"></i>
        </a>
        <a
          className="mx-3 text-white transition-colors duration-300 transform hover:text-pink-500"
          href="https://dribbble.com/BuiltByG"
        >
          <i className="text-3xl fa-brands fa-dribbble"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactSocialMedia;
