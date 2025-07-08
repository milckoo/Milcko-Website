import React from "react";
import scrapbookImage from "../assets/images/scrapbook.png"; // regular image to show below

const LifeAtMilcko = () => {
  return (
    <section className="bg-[#fffefb] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center text-black">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Life At <span className="text-yellow-600">Milcko</span>.
        </h2>
        <p className="text-lg sm:text-xl font-semibold  max-w-5xl mx-auto mb-10">
  We’re more than a workplace — we’re a team driven by purpose, passion, and people. From rural mornings to tech brainstorms, Milcko is where real impact begins.
</p>
       
        <img
          src={scrapbookImage}
          alt="Life at Milcko Scrapbook"
          className="mx-auto rounded-xl shadow-lg w-full max-w-6xl h-auto"
        />
      </div>
    </section>
  ); 
};

export default LifeAtMilcko;
