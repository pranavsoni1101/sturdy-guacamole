import clientPromise from "../../../../lib/mongodb";
 
const handler = async (req: any, res: any) => {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    console.log("query herer heheheheh",req.query.id);
    const id = req.query.id
    
    switch (req.method) {
        case "GET":
        const singleProduct = await db.collection("allProducts").findOne({label : id});
        res.json({ status: 200, data: singleProduct });
        break;
    }
}

export default handler;