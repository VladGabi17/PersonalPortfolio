import React from "react";
import { ContactBackground, ContactHeader, ContactForm } from "@components";

function App() {
  return (
    <ContactBackground>
      <div className="container flex flex-col flex-1 py-12 mx-auto">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6 lg:px-32">
          <ContactHeader />
          <ContactForm />
        </div>
      </div>
    </ContactBackground>
  );
}

export default App;