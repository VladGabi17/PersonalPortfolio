import React from "react";
import { GalleryCard } from "@components";
import { Footer } from "@components";
import { NavBar } from "@components";

const SketchGallery = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-40 pb-28 flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <GalleryCard
            title="Banking App"
            description="The sketch outlines a layout with a top section for the user’s balance, a list of recent transactions in the middle, and quick action buttons at the bottom."
            imageUrl="https://framerusercontent.com/images/LiaOab0WPOBTULIKjZll5MVtyjw.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Fitness App"
            description="he sketch displays categories for different fitness activities such as home workouts and powerlifting, along with featured workout routines for athletes."
            imageUrl="https://framerusercontent.com/images/IX6WOB2Zqr7bG46wYA4rJ90Rk4.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Banking App"
            description="The sketch includes an account overview at the top, a large display for account balance in the middle, and recent transaction details at the bottom."
            imageUrl="https://framerusercontent.com/images/9MDoiHGqiQLI4SwhZTkCP6Ky04.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Welcome Page"
            description="The sketch features a large welcome message for 'MySite!' with options for users to log in or create a new account."
            imageUrl="https://framerusercontent.com/images/uOp2diYXt82B0N8X0Za0saZQlM.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Crypto App"
            description="The sketch displays a user’s total cryptocurrency funds at the top, individual balances for various cryptocurrencies, and action buttons for receiving, sending, swapping, and trading."
            imageUrl="https://framerusercontent.com/images/RPMbH1tLMIJgAxhCiaKZHHiwyw.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Travel App"
            description="The sketch showcases a travel destination with an image, brief details and options to browse other destinations."
            imageUrl="https://framerusercontent.com/images/85unMafTafH90Ptg01XLEMvWFQ.png?scale-down-to=1024"
          />
          <GalleryCard
            title="SignUp Page"
            description="The sketch includes a login form for 'MyWeb' with fields for email and password, options to remember the user, and alternative login methods."
            imageUrl="https://framerusercontent.com/images/5GFCbt9HENcXvAew8vhrgmJTwpY.png?scale-down-to=1024"
          />
          <GalleryCard
            title="E-commerce App"
            description="The sketch highlights an autumn sale with a featured product, categories, and top brands, along with navigation options at the bottom."
            imageUrl="https://framerusercontent.com/images/gnnz6xMdWKhiJwVAJHqOK0S0VI.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Learning App"
            description="The sketch displays a course overview for 'UX/UI Design Process & Principles,' showing progress, course details and additional course recommendations."
            imageUrl="https://framerusercontent.com/images/uruVB82pVekJzF2CcYBdzW0iln0.png?scale-down-to=1024"
          />
          <GalleryCard
            title="E-commerce Product"
            description="The sketch showcases a MacBook with an image, detailed description, price, customer ratings, and a 'More details' button."
            imageUrl="https://framerusercontent.com/images/to5JkSaCSBMXkGnWrEDIp1EK20.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Blog App"
            description="The sketch displays a list of blog posts related to UX/UI design, each with a title, brief description and category, along with a bottom navigation bar."
            imageUrl="https://framerusercontent.com/images/MFH5UuY8k46CqAOn9fSfcuabNw.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Learning App"
            description="The sketch features a course dashboard with a search bar, categories, new career opportunities and personalized course recommendations, with navigation options at the bottom."
            imageUrl="https://framerusercontent.com/images/Xo3P1WB8QZsE263bjMFaDCcSA.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Social Media App"
            description="The sketch shows a chat interface with options to create groups, start video calls, invite friends and a list of contacts with their online status."
            imageUrl="https://framerusercontent.com/images/UmwsiohZb8vgpT74EVtCeQMBU.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Learning App"
            description="The sketch displays a calendar view with scheduled learning sessions and completed courses."
            imageUrl="https://framerusercontent.com/images/wcfovagB6UvLy7ppJDd9P2DvMdc.png?scale-down-to=1024"
          />
          <GalleryCard
            title="LinkedIn Redesign"
            description="The sketch features job categories, listings with filters for job type and location and navigation options for home, jobs, inbox, and profile at the bottom."
            imageUrl="https://framerusercontent.com/images/UzWh5NUWbSHbVvGFfjvHVHi0.png?scale-down-to=1024"
          />
          <GalleryCard
            title="E-commerce Product"
            description="The sketch displays an product image, price, customer reviews, available sizes and navigation options at the bottom."
            imageUrl="https://framerusercontent.com/images/6ocThDUee7AvZm1QeyWcZnIZwA.png?scale-down-to=1024"
          />
          <GalleryCard
            title="E-commerce"
            description="The sketch features an autumn sale with a list of promotional items with options to apply promo codes."
            imageUrl="https://framerusercontent.com/images/ZkyZabF1GK1ApXmBWXFyKanbQ.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Delivery App"
            description="The sketch shows a delivery status page with a map, estimated delivery time, order details, and an 'Order NOW' button at the bottom."
            imageUrl="https://framerusercontent.com/images/D8oG62b3nTy72keyObZq2OhM7SM.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Mobile Navigation"
            description="The sketch provides a sidebar menu with options for profile, notifications, settings, help, and sign out, with an account status at the top."
            imageUrl="https://framerusercontent.com/images/swuPYXLT2znSNXZ1gpTbaBRCuqY.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Booking App"
            description="The sketch displays flight details from Bucharest to Amsterdam, including departure and arrival times, duration, and an option to book the flight."
            imageUrl="https://framerusercontent.com/images/v3aTTnOatzF2AYDjQxeg4wHqRuA.png?scale-down-to=1024"
          />
          <GalleryCard
            title="Booking App"
            description="The sketch features a seat selection interface for a flight, showing available, reserved, and selected seats, along with flight details and a purchase option."
            imageUrl="https://framerusercontent.com/images/wJy6sQLf088CyxiyEQsUgWGT2gA.png?scale-down-to=1024"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SketchGallery;