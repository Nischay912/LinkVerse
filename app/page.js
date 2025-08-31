// step97: lets make it client component to use use state here below.
"use client";
import React from 'react'
import Link from 'next/link';
import { useState } from "react";

// step101: lets import the router from next/navigation to navigate to other pages.
import { useRouter } from "next/navigation";

import Image from "next/image";

export default function Home() {

  // step98: now lets create a state for the value of the input tag there below.

  // step100: now lets make th edefault value there to be the domain , which we show using PUBLIC as its a client component now ; so to show env variables here , we need to use PUBLIC by rule.
  const [text , setText] = useState(`${process.env.NEXT_PUBLIC_AUTH_URL}/`)

  // step102: now lets use the router hook here below.
  const router = useRouter();

  // step108: lets Create a new state to control if the button is disabled ; It starts as true because the initial text doesn't include a handle ; so initially its true i.e. button disabled.
  const [isDisabled, setIsDisabled] = useState(true);

  // step109: lets Create a handler function to manage text input tag changes.
  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    const baseUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/`;

    // step110: lets Check if the input is valid (starts with the base URL and has a handle) ; same condition as in the createTree function ; The button will be disabled if the condition is not met.
    if (newText.startsWith(baseUrl) && newText.length > baseUrl.length) {
      setIsDisabled(false); // Enable the button
    } else {
      setIsDisabled(true); // Disable the button
    }
  };

  // step96: lets create a function named create tree here below.
  const createTree = () =>{

    // step103: lets define the base url to check against here below.
    const baseUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/`;

    // step104: now lets check if the text starts with the base url and also that it has some text after the base url too ; its done because if user deleets all current contents of input tag and starts typing by himslef , but doesn't put the baseURL at start OR if has entered the base url but has not typed anything after that i.e. the handle part after localhost:3000/ is empty , then also we dont proceed further and keep the button disabled there.

    // if (text.startsWith(baseUrl) && text.length > baseUrl.length) {

      // step105: now lets get the handle from the text here below ; by getting the text after the base url part there ; so we use the substring function which is : string.substring(startIndex): This will grab everything from your starting position to the very end of the string.
      const handle = text.substring(baseUrl.length);

      // step106: now lets navigate the user to the generate page with the handle as a query parameter ; like discussd in generate page earlier that the input of handle will automatically be populated there with the value of the handle parameter passed in the URL as ?handle=abc ; so that "abc" will be the default value of the handle input tag there.
      // router.push(`/generate?handle=${handle}`);

      // step107: Using standard browser navigation is recommended instead of Next.js router for preview compatibility.
      window.location.href = `/generate?handle=${handle}`;
    
    
  }

  return (
    <main>
      {/* step5: created two sections of 100vh each here below. */}

      {/* step6: lets make it grid now to get 2 columns. */}
      <section className="bg-[#ffceee] min-h-screen flex flex-col lg:grid lg:grid-cols-2">

        {/* step7: now lets make the two div for the two columns of the grid now. */}

        {/* step8: now lets make the two paragraphs in first div to be one below the other like a flex column ; and then since we had given right width to navbar of 10vw in Navbar.js ; here also lets make the div below have margin from left as 10vw and the div of 2nd column to have 10vw margin from right too ; so that it gets aligned with the navbar below it there. */}

        {/* step10: remove ditems centre from below later tomake text to be left aligned there. */}
        <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:ml-[10vw] lg:px-0 order-2 lg:order-1">
          <h1 className="text-4xl font-extrabold text-[#54043f] sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Your entire</span>
            <span className="block">online world, unified</span>
            <span className="block">in a single link.</span>
          </h1>

          <p className="text-lg text-[#54043f] mt-4 mb-6 md:text-xl lg:text-2xl">Step into a smarter way to share online. Linkverse empowers you to direct your audience from Instagram, TikTok, Twitter, and YouTube to your full collection of content, products, and platforms. Build your universe in minutes, share it everywhere.</p>

        {/* step11: lets put an input tag and a button here below */}

        {/* step12: see next step in "lib" folder there. */}
        <div className="flex flex-col gap-4 sm:flex-row">

        {/* step99: now lets make the input tag value to be the state which we created and its avlue will be thus updated by "setText" function we created in the last steps there. */}

        {/* step111: now we use the onChange function to call the handler function */}
          <input value={text} onChange={(e) => {handleInputChange(e)}} className="bg-white text-[#54043f] px-4 py-3 focus:outline-[#54043f] rounded-md flex-grow" type="text" placeholder="linkverse.vercel.app/url" />

          {/* step95: now on homepage , when someone clicks on this , then we run a create tree function here below. */}
          <button onClick={() => {createTree()}} 
          
          // step112: we make it to show light color an cursor disabled when the button is disabled here below.
          disabled={isDisabled}

          // step113: lets style the button when its disabled here below.

          // step114: see the next steps in [handle] folder ka page.js file there.
          className="bg-[#54043f] text-white px-6 py-3 rounded-full font-semibold disabled:bg-[#a5a5a5] disabled:cursor-not-allowed cursor-pointer whitespace-nowrap sm:px-8">Claim Your LinkVerse</button>
        </div>

        </div>
        <div className="flex justify-center items-center px-6 py-8 lg:py-0 lg:pr-[10vw] order-1 lg:order-2">
          {/* step9: now lets make the image here below. */}
          <div className="relative w-full max-w-md md:max-w-lg">
              <Image src="/linkverse.png" width={500} height={500} alt="linkverse" className="w-full h-auto mt-10 md:mt-0" priority />
          </div>

        </div>
      </section>

      {/* SECOND SECTION HERE BELOW. */}
      <section className="bg-[#a1c0ff] min-h-screen py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] md:text-5xl">About LinkVerse</h2>
            <div className="w-24 h-1 bg-[#1a365d] mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-[#1a365d] max-w-3xl mx-auto md:text-xl">
              LinkVerse is the modern solution for content creators, businesses, and influencers to unify their digital presence. We help you connect all your platforms in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Our Mission</h3>
              <p className="text-[#1a365d]">
                To simplify how people share their online presence. We believe everyone should have a centralized hub that represents their complete digital identity.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Why Choose Us</h3>
              <p className="text-[#1a365d]">
                Easy setup, beautiful designs, and powerful analytics. LinkVerse helps you understand your audience while providing a seamless experience.
              </p>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1a365d] mb-8">Connect With Us</h3>
            <div className="flex justify-center space-x-8 md:space-x-12">
              {/* GitHub Icon */}
              <a href="https://github.com/Nischay912" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#1a365d]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Twitter Icon */}
              <a href="https://x.com/nk_912_kr" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#1a365d]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/nk_912kr/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#1a365d]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/nischay-kumar-29ba9527b/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#1a365d]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Ready to get started?</h3>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/generate"><button className="bg-[#1a365d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2a4a7d] transition-colors cursor-pointer">
                Create Your LinkVerse
              </button></Link>
              <Link href="/about"><button className="bg-white text-[#1a365d] border-2 border-[#1a365d] px-8 py-3 rounded-full font-semibold hover:bg-[#f0f5ff] transition-colors cursor-pointer">
                Learn More
              </button></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
