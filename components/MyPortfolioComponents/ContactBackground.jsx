import React from "react";

const ContactBackground = ({ children }) => {
  return (
    <section
      className="min-h-screen bg-cover pb-16"
      style={{
        backgroundImage: "url('http://localhost:3000/images/HeroCoder.png')",
      }}
    >
      <div className="flex flex-col min-h-screen bg-black/60">{children}</div>
    </section>
  );
};

export default ContactBackground;