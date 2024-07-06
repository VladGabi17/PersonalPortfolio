import React from "react";
import { Footer } from "@components";
import { ContactSection } from "@components";
import { NavBar } from "@components";
import { FAQ } from "@components";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <ContactSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Contact;