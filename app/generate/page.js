// step44: need to make client component to use use state here below.
"use client";
import { useState , Suspense} from "react";

// step15: lets define the page to generate the links for the linktree here below.
import React from "react";

// step36: lets import the toastify here below.
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";

// step90: lets now import useSearchParams here below.
import { useSearchParams } from "next/navigation";

function GenerateContent() {

    // step91: lets use the useSearchParams hook here below ; which does what : const searchParams = useSearchParams();   searchParams.get('foo') // returns 'bar' when ?foo=bar in the URL.

    const searchParams = useSearchParams();
    
    
    // step43: now lets create two states to handle form submissions here now below.
    
    // const[link , setLink] = useState("")
    // const[linktext , setLinktext] = useState("")
    
    // step51: we now want all the links to be entered first before final submission , so we decide to comment the above two states and create a combined state here below.
    const[links , setLinks] = useState([{link : "" , linktext : ""}])
    
    // const[handle , setHandle] = useState("")

    // step92: so now we by default set the handle input tag's value to the value of the handle parameter passed in the URL as ?handle=abc ; so that "abc" will be the default value of the handle input tag there.

    // step93: so now if we go on "localhost:3000/generate?handle=abc" then the default value of the handle input tag will be "abc" now ; and if we go on "localhost:3000/generate?handle=xyz" then the default value of the handle input tag will be "xyz" now.

    // step94: see the next steps in page.js of root app directory now there.
    const[handle , setHandle] = useState(searchParams.get('handle'))

    const[pic , setPic] = useState("")

    // step134: also now so create a state to control the input tag value for description there.
    const[desc , setdesc] = useState("")

    // step136: now lets create a state to store the generated url here below.
    const[generatedUrl , setGeneratedUrl] = useState("")

    // step59: now lets define the setlink function here below.

    // step67: now lets make the handleChange function here below which runs every time user types in any of the link related input tags there ; we had index in those there where index meant which pair of input tag is user typing in out of the multiple input tag pairs being created there.
    const handleChange = (index , link , linktext) =>{

        // step68: we first update the links state with the current state at which the update runs as react wants to return new array and not update existing one , so we use initialLinks which is the current links state and map over it to update the array there now ; and then return new array with updated values there.
        setLinks((initialLinks) => {

            // step69: now we map over the whole initialLink array where "item" is each object in that array and "i" is index of each object ; we check now that the current input tag user is typing in matches or not with the "index" passed ; as we had passed corresponding index in the handleChange funtion for the input tag that called this function ; so we check now that the current input tag user is typing in matches or not with the "index" passed ; if it matches we return the new array with updated values there ; else we return the original array there ; it basically helps to prevent any mismatch here.

            return initialLinks.map((item , i) =>{

                // step70: so we had the input tag in which each input tag there was marked with index ; whwn user types in 2nd input tag , uska vala index is passed in this handleChange function from there here below ; so we are using loop using "map" here because we want to update the object at correct index ; so if user typed in index 2 vala input tag there ; as there are multiple input tags created by clicking on +add button there ; so it matches that the input tag user typed in.

                // step71: so basically overall here ; we first load the latest array of objects containing values in them using the initialLinks array ; then we map over the current array in initialLinks and then use map function to check which index in the current array of object has user typed in ; because the input tag user typed in having index "index" had called the "handleChange" function here ; so we using handleChange have to update it with the new value user typed ; so we iterate in the current array "initialLink" using map , find the index "i" matching the index that called this function ; and then inside the if statement ; for that index return a new object containing the updated value user typed ; and in each iteration of map ; obviously else will run in all except the correct matching index one ; so else returns same object for all other index and updated object for the index of that input tag in which the user typed in.

                // step72: example: 
                /*
                step73: Suppose initial state loaded in initialLinks is like this ; i.e user had clicked add three times to get three objects in the array i.e. three pair of input tags ; so lets say currently the array is like this below.

                    links = [
                    {link: "a.com", linktext: "A"},
                    {link: "b.com", linktext: "B"},
                    {link: "c.com", linktext: "C"}
                    ]


                    step74: now user types "newB.com" in the second input (index=1) and thus onChange of that input tag calls the handleChange function ;

                    step75: so handleChange(1, "newB.com", "B") is called.

                    step76: Inside map , in each iteration now:

                    i=0 → not matching index → else returns the same {link:"a.com", linktext:"A"}

                    i=1 → matches index → replace with {link:"newB.com", linktext:"B"} and return this updated object

                    i=2 → not matching → keep {link:"c.com", linktext:"C"}

                    Final result:

                    links = [
                    {link: "a.com", linktext: "A"},
                    {link: "newB.com", linktext: "B"},
                    {link: "c.com", linktext: "C"}
                    ]


                    // step77: Thus only the second one updated, others unchanged ; this is why this "if" was important to update the correct input pair out of so many input tag pairs create by the user using the +  button there.
                */
                if(i==index){
                    return {link , linktext}
                }
                else{
                    return item
                }
            })
        })
    }

    // step63: now lets define the addLink function here below.
    const addLink = () => {
        // step64: so now this will keep adding empty value objects in the array of objects "links" now here below.

        // step65: "concat" returns a new array by adding (concatenating) elements to the existing one ; It does not modify the original array → it creates a new one (which is what React state requires) ; so better to use "concat" rather than "push" a spush doesn't returns a new array like concat does.
        setLinks(links.concat([{link : "" , linktext : ""}]))
    }

    // for removal of links added there
    const removeLink = (index) => {
      // Only remove if there's more than 1 link remaining
      if (links.length > 1) {
        setLinks(links.filter((_, i) => i !== index));
      }
    };

    const hasEmptyLinks = () => {
      return links.length === 0 || links.some(item => item.link === "" || item.linktext === "");
    };

    // step137: added a function to copy the generated URL to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedUrl)
        toast.success("Link copied to clipboard!")
    }

    // step37: lets now make a function below to make a POST request to the backend here below.
    // const addLink = async (text , link , handle) =>{

    // step60: renamed this to submitLinks here below.
    const submitLinks = async () =>{

        // step38: we copied the code from POSTMAN > clicking on </> on right sidebar of it and copying "JavaScript-fetch" code from there and pasting inside this here below.
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({

        // step39: replaced the pre-written data by the parameteres of the function now here below.
        // "linktext": text,
        // "link-url": link,

        // step61: we now will send links together and not seperately like we were sending earlier above.
        "links": links,
        "handle": handle,
        "pic": pic,
        // step135: so now also send the description there.
        "desc": desc
        });

        // step62: can do console log now here below to print the "raw" data in console of server in temrinal of vs code now for debugging.
        // console.log(raw)

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        // fetch("http://localhost:3000/api/generate", requestOptions)
        // .then((response) => response.text())
        // .then((result) => console.log(result))
        // .catch((error) => console.error(error));

        // step40: now commented the above line and will write our own code here below.

        // step41: now we are fetching the response , which gets stored as string in "r" , so next we also need to convert it into json here below ; ALSO MUST PUT "AWAIT" TO CONVERT TO JSON FILE THERE TOO.
        const r = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL || ''}/api/generate`, requestOptions)
        const result = await r.json()

        // step42: lets also show a toast on successfully adding the link here below ; which shows the text we wrote in the response object under the field "message" there in the backend there.

        // step86: now we will show success toast if success is true in response object returned from backend ; else we will show error toast if success is false in response object returned from backend.
        if(result.success){
            toast.success(result.message)
            // step87: we also empty all the input tags empty after a tree successfully got created there.
            setLinks([{link : "" , linktext : ""}])
            setPic("")
            setHandle("")
            setdesc("")

            // step138: lets set the generated url when a tree successfully got created there.
            setGeneratedUrl(`${process.env.NEXT_PUBLIC_AUTH_URL}/${handle}`)
        }
        else{
            toast.error(result.message)
        }

        // step50: after showing toast we also clear all the input fields there.

        // step52: so no use fo these two below too now.
        // setLink("")
        // setLinktext("")
    }

  return (
<>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
    />

    <div className="bg-[#ffceee] min-h-screen md:grid md:grid-cols-2 ">
      {/* step20: lets make the content to come at centre here below. */}
      <div className="col1 flex flex-col justify-center items-center px-4 md:px-0">
        {/* step19: now lets make the content in the 1st column of the grid here below. */}

        {/* step21: design the page now below to accept various things via input tags here below. */}

        {/* step22: now see next steps in route.js file there now. */}
        <div className="flex flex-col gap-5 my-8 w-full max-w-lg">
          <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left mt-10 md:mt-8">Create your LinkVerse</h1>
          <div className="item">
            <h2 className="font-semibold text-xl md:text-2xl text-slate-700">Choose handle</h2>
            <div className="mx-0 md:mx-4">
              <input

            // step46: also lets make the value of the input tag to be equal to whatever is present in the handle state here below.
            value={handle}

            // step45: now lets make this input tag to run the function setHandle ; that takes the current value written inside this input tag as its parameter here below ; and thus updates the handle state with the current value of the input tag.
                onChange={(e) => {setHandle(e.target.value)}}
                className="w-full px-4 py-2 mx-0 md:mx-2 my-2 bg-white text-[#54043f] focus:outline-[#54043f] rounded-full"
                type="text"
                placeholder="Enter Handle"
              />
            </div>
          </div>

          <div className="item">
            <h2 className="font-semibold text-xl md:text-2xl text-slate-700">Enter links to add</h2>

            {/* step53: now we want the div below to be keep coming till all the links user wants is not added */}

            {/* links && was written to ensure to add only if links exist there i.e. if "links" is not null there. */}

            {/* step54: so we use map function now , which will show the two input boxes for each of the {link , linktext} object present in this array of object "links" ; so that we see as many pair of input boxes , as much we have the link pairs added by the user there ; so now as much objects are there in the state , that much input tag pairs should be shown there.  */}

            {/* step55: we need to add a unique key as usual in the map function now ; so let index of iteration by map be the key here below now. */}

            {/* step56: item represnts each {link , linktext} object now ; so we make the {linktext} to {item.linktext} in the input tag below and same for {link} to {item.link} now. */}
            {links && links.map((item , index) => {
            return <div key={index} className="mx-0 md:mx-4 flex flex-col md:flex-row gap-2">
                {/* step47: lets now similarly handle these both input tags too below here. */}

            <input
               value={item.linktext}
                // onChange={(e) => {setLink(e.target.value)}}

                // step58: same way as lat step done here too below.
                onChange={(e)=>{handleChange(index ,item.link,  e.target.value)}}
                className="w-full px-4 py-2 mx-0 md:mx-2 my-2 bg-white text-[#54043f] focus:outline-[#54043f] rounded-full"
                type="text"
                placeholder="Enter link text"
              />
              <input
               value={item.link}

               // onChange={(e) => {setLinktext(e.target.value)}}

            //    step57: now lets make the handleChange function whi1h will take parameters like "index" to tell which link you want to change based on the index of that link's object in the array of objects there ; then it takes the current value of that input tag as its second parameter here below ; and thus updates the linktext state with the current value of the input tag.

            // step78: now doubt may come why (index , e.target.value , item.linktext) passed in linktext input , but (index ,item.link,  e.target.value) in the 2nd input tag here ; its because : the handlechange function is : const handleChange = (index, link, linktext) => { ... } ; so we when type in these array of objects where each object had {_ , _} : first value of linktext and 2nd place for link ; so when user types in a same lined input tag pairs ; i.e. when user tries to update a particular object's linktext only not link : example there are three input tags created by user pressing + there , which he filled as :
            /*
                [
                {
                    linktext: "linktext1", link: "link1",
                },
                {
                    linktext: "linktext2", link: "link2",
                },
                {
                    linktext: "linktext3", link: "link3",
                },
                ]
                // ; step79: now if he tries to change value of link in index1 vala object keeping linktext as it is as obviously user can type in one input tag at a time ; so if he wants to make {linktext: "linktext2", link: "link2"} ; this one to {linktext: "linktext2", link: "link5"} ; so handlechange must keep the linktext as it is and pass the updated value fo link only for changing the input tags in the handlechange function ; so since hadnleChange has arguments in order : (index , link , linktext) : so we pass (index ,item.link,  e.target.value) in the 2nd input tag here , so that : we keep the linktext as it is present int hat input tag using "e.target.value" and pass the updated value of link using "item.link" only for changing the input tags in the handlechange function ; because the value of input tag was set to "item.link" so whatever is value updated in that input tas is actually the value stored in "item.link" only there : so that is what we send to be updated in the handlechange function there; and same this happens with vice-versa if user changes only the linketxt and not link in a particular object of the array fo objects there ; so basically the order of sending like this in both input tags below was that when there are two input tags in same row/same object ,and user is changing only one of the input in them ; then the other should't be affected and its current value "e.target.value" should be sent to handleChange and only the updated input tag's current updated value typed by user which is stored in "item.link" as we had set <input value={item.link} ......  > there : so that "item.link" i.e. the updated value typed by user is what we now only send in handleChange function there.
                */

            onChange={(e)=>{handleChange(index , e.target.value , item.linktext)}}
                className="w-full px-4 py-2 mx-0 md:mx-2 my-2 bg-white text-[#54043f] focus:outline-[#54043f] rounded-full"
                type="text"
                placeholder="Paste your link here"
              />

              {/* Remove button for each link pair - only show if more than 1 link exists */}
              {links.length > 1 && (
                <svg 
                  onClick={() => removeLink(index)}
                  className="w-12 h-12 text-black cursor-pointer hover:text-slate-700 transition-colors"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  title="Remove this link"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              
            </div>})}
              {/* step49: now lets make the add link button to call the addLink function here below  on clicking it. */}
              {/* <button onClick={() => {addLink(linktext , link , handle)}} className="px-5 py-2 mx-2 bg-[#54043f] text-white rounded-full font-bold">Add Link</button> */}

              {/* step66: we now no need to pass any arguments inside the addLink function for now as it just creates input fields every time we click on it. */}
              <button onClick={() => {addLink()}} className="px-5 py-2 mx-0 md:mx-2 bg-[#54043f] text-white rounded-full font-bold cursor-pointer w-full md:w-auto">+ Add Link</button>
          </div>

          <div className="item">
            {/* step132: lets give option to add description too along with picture here below. */}
            <h2 className="font-semibold text-xl md:text-2xl mx-0 md:mx-2 my-2 text-slate-700">Add your picture and description</h2>
            <div className="mx-0 md:mx-4 flex flex-col">
                <input
                // step48: also do same to handle the picture link too here below.
                value={pic}
                onChange={(e) => {setPic(e.target.value)}}
                className="px-4 py-2 mx-0 md:mx-2 my-2 bg-white text-[#54043f] focus:outline-[#54043f] rounded-full"
                type="text"
                placeholder="Add your picture"
              />

              {/* step133: so we make a copy of the above input tag here below for description now. */}
              <input
                value={desc}
                onChange={(e) => {setdesc(e.target.value)}}
                className="px-4 py-2 mx-0 md:mx-2 my-2 bg-white text-[#54043f] focus:outline-[#54043f] rounded-full"
                type="text"
                placeholder="Enter your description"
              />

              {/* step80: and finally when user press Proceed it runs the submitLinks function , where : the data filled by user is sent to the database using the code written there ; and we hd sone console.log too so we can see in browser there too the data entered in json form by the user there. */}

              {/* step81: see the next steps in route.js file now there. */}

              {/* step88: we can also put up the button to be disabled if any of the input fields are empty. */}

              {/* step89: can even put up a toast instead of disabled too ; by using if statement with below conditions to show toast and run the submitLinks function in the else part. */}
              <button disabled={pic==="" || links.length===0 || handle===""|| desc===""} onClick={()=>{submitLinks()}} 
              
            //  step89: also lets show a toast message when user clicks on proceed button if any of the input fields are empty and also lets lighten the color of the button when it is disabled ; and also make cursor disabled shown when hovered , when it is disabled.

              className="px-5 py-2 mx-0 md:mx-2 w-full md:w-fit my-5 bg-[#54043f] text-white rounded-full font-bold disabled:bg-[#a4a4a4] disabled:cursor-not-allowed cursor-pointer">Finalize & Proceed</button>

              {/* step139: lets add a section to show the generated link and the copy button here now ; this will be shown only if the link is generated i.e if the generatedUrl is not null here below. */}
              {generatedUrl && (
              <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg text-slate-700 mb-2">Your LinkVerse is live!</h3>
                  <div className="flex flex-col sm:flex-row items-center">
                    <input
                      value={generatedUrl}
                      readOnly
                      className="px-4 py-2 w-full sm:flex-grow bg-gray-100 text-[#54043f] rounded-l-full sm:rounded-r-none border border-gray-300"
                      type="text"
                    />
                    <button 
                      onClick={copyToClipboard}
                      className="px-4 py-2 w-full sm:w-auto mt-2 sm:mt-0 bg-[#54043f] text-white rounded-r-full border border-l-0 border-[#54043f] hover:bg-[#3a032c] transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Share this link with your audience</p>
                </div>
              )}

            </div>
          </div>

          
        </div>
      </div>

      {/* step17: we now make the div take 100vh height and width  */}
      <div className="col2 w-full h-screen hidden md:block">
        {/* step16: we always put / when the image is in public folder. */}

        {/* step18: also we make the image to take 100% height of container and be object-contain which makes it to fit the container maintaining its aspect ratio. */}
        <img className="h-full object-contain" src="/generate.png" alt="" />
      </div>
    </div>
  </>
  );
};

// DURING DEPLOYMENT SOME ERROR COMING DUE TO USESEARCH PARAMS , SO WE USE THE FOLLOWING CODE WITH SUSPENSE TO FIX IT.
/*
// SUSPENSE EXPLANATION:
// Why Suspense is used here:
// 1. useSearchParams() hook requires Suspense boundary in Next.js App Router
// 2. During server-side rendering, search parameters are async and need to be "suspended"
// 3. Suspense provides a fallback UI while the search params are being resolved
// 4. This prevents the "missing suspense boundary" error and makes the component SSR-compatible
// 5. Once the data loads, React replaces the fallback with your actual component
//
// Without Suspense: Error during build/prerendering
// With Suspense: Works perfectly on both server and client side
*/
const Page = () => {
  return (
    <Suspense fallback={
      <div className="bg-[#ffceee] min-h-screen flex items-center justify-center">
        <div className="text-[#54043f] text-xl">Loading...</div>
      </div>
    }>
      <GenerateContent />
    </Suspense>
  );
};

export default Page;