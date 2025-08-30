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

    // step32: lets now insert the body returned from the request here in the database now.
    const result = await collection.insertOne(body)

    // step26: can see the body in console of server in temrinal of vs code now.
    // console.log(body)

    // step27: sends back a response after recieving the request to indicate success here below.

    // step28: we can now go on postman and send a raw body request for like { "linktext" : "facebook" , "linkurl" : "www.facebook.com" , "action" : "add" , "handler" : "nischay kumar" } and send request to "localhost:3000/api/generate" and see the response there now.
    return Response.json({success: true , error : false , message : "Added" , result : result})
}