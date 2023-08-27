import connectDatabase from "@/database";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        await connectDatabase()
        const {name, email} = await req.json();

        const newUser = await User.create({name, email});

        if (newUser){
            return NextResponse.json({
                success: true,
                message: "User register"
            })
        }
        else{
            return NextResponse.json({
                success: false,
                message: "Failed to register the user! Please try again!!"
            })
        }
    }
    catch(err){
        console.log(err)
        return NextResponse.json({
            success:false,
            message:"Some thing went wrong! please try again"
        })
    }
}