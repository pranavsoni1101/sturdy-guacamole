import clientPromise from "../../../lib/mongodb";
 
const handler = async (req: any, res: any) => {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    switch (req.method) {
        case "GET":
        const allProducts = await db.collection("products").find().toArray();
        res.json({ status: 200, data: allProducts });
        break;
    }
}

export default handler;