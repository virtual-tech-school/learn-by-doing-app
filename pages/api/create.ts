import { generateNextjsPages } from "./_make"

export default async function route(req,res){
    
    await generateNextjsPages();

    res.status(200).json("hello")
}