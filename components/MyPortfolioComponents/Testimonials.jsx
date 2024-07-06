import React from "react";
import {
  TestimonialsHeader,
  TestimonialsCount,
  TestimonialsPeople,
} from "@components";

function Testimonials() {
  return (
    <div className="pt-20">
      <TestimonialsHeader />
      <TestimonialsCount />
      <TestimonialsPeople />
    </div>
  );
}

export default Testimonials;