import connectDatabase from "@/database";
import { NextResponse } from "next/server";
import Product from "@/models/product";


export const dynamic = 'force-dynamic';

export async function POST(req){
    try{
        await connectDatabase()
        const extractData = await req.json()
        const newlyCreatedProduct = await Product.create(extractData)

        if(newlyCreatedProduct){
            return NextResponse.json({
                success: true,
                message: 'Product added successfully'
            })
        }else{
            return NextResponse.json({
                success: false,
                message: 'failed to add a product!! Please add after some time'
            })
        }

    }catch(err){
        console.log("error in add-product: ",err)
        return NextResponse.json({
            success:false,
            message:'Something went wrong'
        })
    }
}