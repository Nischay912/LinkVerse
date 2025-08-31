// step29: now we can import client promise , install mongoDB using "npm i mongodb" and copy rest of the code used in trimsy here below.
import clientPromise from "@/lib/mongodb"

// step23: copy the documentation code for route.js in next js here below.

// step24: lets create POST named function here below to hadnle POST requests here below.
export async function POST(request){

    // step30: so we make a database named "linkverse" now.
    const client = await clientPromise;
    const db = client.db("linkverse")

    // step31: then we make a collection named "links" now.
    const collection = db.collection("links")

    // step25: now lets get the body of the  incoming POST request here below.
    const body = await request.json()

    // step83: lets put a check to ensure that if a particular handle name has been claimed by some other user , then another person cannot create a linkverse with the same handle name.
    const doc = await collection.findOne({handle : body.handle})

    // step84: so the database is searched with that handle name ; and if handle exists the function responds with success false and an error message here below.

    // step85: see next steps in generat folder's page.js file there now.
    if(doc){
        return Response.json({success: false , error : true , message : "Handle name already taken" , result : null})
    }

    // step32: lets now insert the body returned from the request here in the database now.
    const result = await collection.insertOne(body)

    // step26: can see the body in console of server in temrinal of vs code now.
    // console.log(body)

    // step27: sends back a response after recieving the request to indicate success here below.

    // step28: we can now go on postman and send a raw body request for like { "linktext" : "facebook" , "linkurl" : "www.facebook.com" , "handle" : "nischay kumar" } and send request to "localhost:3000/api/generate" and see the response there now.

    // step33: now when we send POST requets on postman it will show the response mentioned below after success send of the request.

    // step34: it will also create a new database on mongodb compass named "linkverse" then there.

    // step35: now see the generate page.js file there now.

    // step82: updated the message to be responded back which toast also shows below.
    return Response.json({success: true , error : false , message : "Your LinkVerse has been created🎉" , result : result})
}