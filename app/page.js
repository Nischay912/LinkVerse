// step97: lets make it client component to use use state here below.
"use client";
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
      <section className="bg-[#ffceee] min-h-[100vh] grid grid-cols-2">

        {/* step7: now lets make the two div for the two columns of the grid now. */}

        {/* step8: now lets make the two paragraphs in first div to be one below the other like a flex column ; and then since we had given right width to navbar of 10vw in Navbar.js ; here also lets make the div below have margin from left as 10vw and the div of 2nd column to have 10vw margin from right too ; so that it gets aligned with the navbar below it there. */}

        {/* step10: remove ditems centre from below later tomake text to be left aligned there. */}
        <div className="flex flex-col justify-center ml-[10vw]">

          <p className="text-7xl font-extrabold text-[#54043f]">Your entire</p> 
          <p className="text-7xl font-extrabold text-[#54043f]">online world, unified</p> 
          <p className="text-7xl font-extrabold text-[#54043f]">in a single link.</p>

          <p className="text-2xl text-[#54043f] mt-4 mb-6">Step into a smarter way to share online. Linkverse empowers you to direct your audience from Instagram, TikTok, Twitter, and YouTube to your full collection of content, products, and platforms. Build your universe in minutes, share it everywhere.</p>

        {/* step11: lets put an input tag and a button here below */}

        {/* step12: see next step in "lib" folder there. */}
        <div className="input flex gap-2">

        {/* step99: now lets make the input tag value to be the state which we created and its avlue will be thus updated by "setText" function we created in the last steps there. */}

        {/* step111: now we use the onChange function to call the handler function */}
          <input value={text} onChange={(e) => {handleInputChange(e)}} className="bg-white text-[#54043f] px-2 py-2 focus:outline-[#54043f] rounded-md" type="text" placeholder="linkverse.vercel.app/url" />

          {/* step95: now on homepage , when someone clicks on this , then we run a create tree function here below. */}
          <button onClick={() => {createTree()}} 
          
          // step112: we make it to show light color an cursor disabled when the button is disabled here below.
          disabled={isDisabled}

          // step113: lets style the button when its disabled here below.

          // step114: see the next steps in [handle] folder ka page.js file there.
          className="bg-[#54043f] text-white px-4 py-4 rounded-full font-semibold disabled:bg-[#a5a5a5] disabled:cursor-not-allowed">Claim Your LinkVerse</button>
        </div>

        </div>
        <div className="flex flex-col justify-center items-center mr-[10vw]">
          {/* step9: now lets make the image here below. */}
          <Image src="/linkverse.png" width={500} height={500} alt="linkverse" />

        </div>
      </section>
      <section className="bg-[#a1c0ff] min-h-[100vh]">
        
      </section>
    </main>
  );
}
