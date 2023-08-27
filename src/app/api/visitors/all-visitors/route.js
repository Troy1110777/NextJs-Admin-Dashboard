import connectDatabase from "@/database"
// import Product from "@/models/product";
import Visitor from "@/models/visitors";
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic';

export async function GET(req) {
    try {
        await connectDatabase()
        const getAllVisitorsInfo = await Visitor.find({})
        if (getAllVisitorsInfo) {
            return NextResponse.json({
                success: true,
                data: getAllVisitorsInfo,
            });
        } else {
            return NextResponse.json({
                success: false,
                message:"failed to fetch the visitors ! Please try again after some time",
            });
        }
    }
    catch (err) {
        console.log("error in all-visitors: ", err)
        return NextResponse.json({
            success: false,
            message: 'Something went wrong'
        })
    }
}