import connectDatabase from "@/database"
import Product from "@/models/product";
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic';

export async function GET(req) {
    try {
        await connectDatabase()
        const getAllProducts = await Product.find({})
        if (getAllProducts) {
            return NextResponse.json({
                success: true,
                data: getAllProducts,
            });
        } else {
            return NextResponse.json({
                success: false,
                message:"failed to fetch the products ! Please try again after some time",
            });
        }
    }
    catch (err) {
        console.log("error in all-product: ", err)
        return NextResponse.json({
            success: false,
            message: 'Something went wrong'
        })
    }
}