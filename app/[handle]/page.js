import Link from "next/link";
import Image from "next/image";

// step125: now lets bring the actual data from the database now here below.
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

// step115: now lets form this dynamic routes page code now here below , by copying the code from the documentation of NextJs for dynamic routes here below.
export default async function Page({params}){

    // step116: here our slug is "handle" due to folder [handle] in the generate page now.
    const handle = (await params).handle

    // step126: now lets bring all the data from the database now here below.
    const client = await clientPromise;
    const db = client.db("linkverse")
    const collection = db.collection("links")
    const item = await collection.findOne({handle : handle})

    // step129: now lets add a condition to show not found error page if the handle is not found in the database now here below.
    if(!item){

        // step130: so we use the notFound function here below to show not found error page if the handle is not found in the database now.
        return notFound()

        // step131: now see th enext steps in the generate folder's page.js file now there.
    }


    // step117: so we will noe see "abc" written on going on webpage : "localhost:3000/abc"
    // return <div>{handle}</div>

    // step119: copied one object for now from the mongodb compass and paster here below , to test things for now and WILL LATER access it from database directly there.

    /*const item = {
  "_id": {
    "$oid": "68b395b745316fb08e8c3e15"
  },
  "links": [
    {
      "link": "https://www.facebook.com/ben.gorge.31",
      "linktext": "Facebook"
    },
    {
      "link": "https://www.instagram.com/nk_912kr/",
      "linktext": "Instagram"
    },
    {
      "link": "https://x.com/nk_912_kr",
      "linktext": "Twitter"
    },
    {
      "link": "https://nischay-kumar.netlify.app",
      "linktext": "Portfolio"
    }
  ],
  "pic": "https://pics.craiyon.com/2023-07-04/627a4100816b4689a411cc50ed118632.webp"
}*/

    // step118: lets now design this page properly now below.
    return (

        // step128: give it items start to be at top there in the webpage and then give some padding from top too there.
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-8 px-4 flex justify-center items-start">
            <div className="w-full max-w-md">

            {/* step120: lets try to print the pic there first along with the handle name. */}

            {/* step121: see next steps in Navabar.js file now. */}

            {/* step127: lets now add "item &&" to make this div below to be visible only if items are present there. */}
            {item && <div className="photo flex flex-col justify-center items-center gap-4">
                 <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <img 
                            className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg" 
                            src={item.pic} 
                            alt={`${handle}'s profile`} 
                        />
                </div>
                 <h1 className="text-2xl md:text-3xl font-bold text-gray-800">@{item.handle}</h1>

                {/* step124: now lets add a description too which user will enter for the database too there. */}
                {/* <span className="desc w-80 text-center">{item.desc}</span> */}

                {item.desc && (
                        <p className="text-gray-600 text-center px-4 md:px-6 max-w-md">
                            {item.desc}
                        </p>
                )}

                {/* step122: now lets also print the links here now below. */}
                <div className="w-full mt-4 space-y-4">

                    {/* step123: the links were stored in the "links" array so we iterate through it using map and print the linktext and link ; also we by rule must specify the key here so let it be the index. */}
                    {item.links.map((item , index) => {
                        return <Link key={index} href={item.link} target="_blank" className="block w-full"><div className="w-full px-6 py-4 bg-white text-purple-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex justify-center items-center font-medium text-center border border-purple-100 hover:bg-purple-50">
                            {item.linktext}
                        </div></Link>
                    })}
                </div>
                <div className="mt-8 text-center text-gray-500 text-sm">
                        <p>LinkVerse • By Nischay</p>
                </div>
                <div className="mt-6 w-full">
                            <Link href="/" className="block w-full text-center py-3 px-6 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition-colors duration-200">
                                Go to Home 🏠
                            </Link>
                </div>
            </div>}
        </div>
        </div>
    )
}