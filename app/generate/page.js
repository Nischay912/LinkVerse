// step15: lets define the page to generate the links for the linktree here below.
import React from "react";

const page = () => {
  return (
    <div className="bg-[#ffceee] min-h-screen grid grid-cols-2">
      {/* step20: lets make the content to come at centre here below. */}
      <div className="col1 flex flex-col justify-center items-center">
        {/* step19: now lets make the content in the 1st column of the grid here below. */}

        {/* step21: design the page now below to accept various things via input tags here below. */}

        {/* step22: now see next steps in route.js file there now. */}
        <div className="flex flex-col gap-5 my-8">
          <h1 className="font-bold text-4xl">Create your LinkVerse</h1>
          <div className="item">
            <h2 className="font-semibold text-2xl text-slate-700">Choose handle</h2>
            <div className="mx-4">
              <input
                className="px-4 py-2 mx-2 my-2 bg-white text-[#54043f] focus:outline-[#54043f] rounded-full"
                type="text"
                placeholder="Enter Handle"
              />
            </div>
          </div>

          <div className="item">
            <h2 className="font-semibold text-2xl text-slate-700">Enter links to add</h2>
            <div className="mx-4">
              <input
                className="px-4 py-2 mx-2 my-2 bg-white text-[#54043f] focus:outline-[#54043f] rounded-full"
                type="text"
                placeholder="Enter link text"
              />
              <input
                className="px-4 py-2 mx-2 my-2 bg-white text-[#54043f] focus:outline-[#54043f] rounded-full"
                type="text"
                placeholder="Paste your link here"
              />
              <button className="px-5 py-2 mx-2 bg-[#54043f] text-white rounded-full font-bold">Add Link</button>
            </div>
          </div>

          <div className="item">
            <h2 className="font-semibold text-2xl mx-2 my-2 text-slate-700">Add your picture and finalize</h2>
            <div className="mx-4 flex flex-col">
                <input
                className="px-4 py-2 bg-white text-[#54043f] focus:outline-[#54043f] rounded-full"
                type="text"
                placeholder="Add your picture"
              />
              <button className="px-5 py-2 mx-2 w-fit my-5 bg-[#54043f] text-white rounded-full font-bold">Proceed</button>
            </div>
          </div>

          
        </div>
      </div>

      {/* step17: we now make the div take 100vh height and width  */}
      <div className="col2 w-full h-screen ">
        {/* step16: we always put / when the image is in public folder. */}

        {/* step18: also we make the image to take 100% height of container and be object-contain which makes it to fit the container maintaining its aspect ratio. */}
        <img className="h-full object-contain" src="/generate.png" alt="" />
      </div>
    </div>
  );
};

export default page;
