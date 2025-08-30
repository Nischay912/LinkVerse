import Image from "next/image";

export default function Home() {
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
          <input className="bg-white text-[#54043f] px-2 py-2 focus:outline-[#54043f] rounded-md" type="text" placeholder="linkverse.vercel.app/url" />
          <button className="bg-[#54043f] text-white px-4 py-4 rounded-full font-semibold">Claim Your LinkVerse</button>
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
