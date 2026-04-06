import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions } from "@/lib/session";

export async function POST(request: NextRequest){
    const {UserId, PassWord} = await request.json();
    console.log({UserId, PassWord});

    const session = await getIronSession(await cookies(), sessionOptions);
    
    if(UserId === "admin" && PassWord === "0000"){
        // 세션에 저장
        session.SeLogin = {
            id: UserId,
            pwd: PassWord,
        };
        await session.save();

        return NextResponse.json({success: true, message: "로그인 성공"});
    }else{
        return NextResponse.json({success: false, message: "아이디 또는 비밀번호가 올바르지 않습니다."});
    }
}