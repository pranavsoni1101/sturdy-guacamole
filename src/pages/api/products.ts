import clientPromise from "../../../lib/mongodb";
 
const handler = async (req: any, res: any) => {
    const client = await clientPromise;
    const db = client.db("nextjs-mongodb-demo");
    switch (req.method) {
        case "GET":
        const allPosts = await db.collection("products").find({}).toArray();
        res.json({ status: 200, data: allPosts });
        break;
    }
}

export default handler;