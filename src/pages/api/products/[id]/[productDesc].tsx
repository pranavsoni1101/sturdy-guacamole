import clientPromise from "../../../../../lib/mongodb";
 
const handler = async (req: any, res: any) => {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    // console.log("product desc query herer heheheheh",req.query);
    const id = req.query.id;
    const desc = req.query.productDesc;
    // console.log("prod desc from api", desc);
    
    
    switch (req.method) {
        case "GET":
        const singleProduct = await db.collection("allProducts").findOne({label : id});
        // console.log("this is single product children data",singleProduct!.childrenProduct);
        const childrenData = singleProduct!.childrenProduct;
        const findDesc = childrenData.find((child: any) => child.label === desc );
        // console.log("this is find desc aaaaaaaaaaaaaaaaaaaaa",findDesc);
        
        res.json({ status: 200, data: findDesc });
        break;
    }
}

export default handler;