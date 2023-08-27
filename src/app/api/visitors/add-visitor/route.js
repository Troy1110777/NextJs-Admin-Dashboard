import connectDatabase from "@/database";
import { NextResponse } from "next/server";
// import Product from "@/models/product";
import Visitor from "@/models/visitors";


export const dynamic = 'force-dynamic';

export async function POST(req){
    try{
        await connectDatabase()
        const extractData = await req.json()
        const newlyCreatedVisitorsInfo = await Visitor.create(extractData)

        if(newlyCreatedVisitorsInfo){
            return NextResponse.json({
                success: true,
                message: 'Visitors data added successfully'
            })
        }else{
            return NextResponse.json({
                success: false,
                message: 'failed to add a Visitor!! Please add after some time'
            })
        }

    }catch(err){
        console.log("error in add-Visitor: ",err)
        return NextResponse.json({
            success:false,
            message:'Something went wrong'
        })
    }
}