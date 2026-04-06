"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";

interface Props {
    userInfo?: {
        id: number;
        pwd: string;
    };
}

export default function MainForms({ userInfo }: Props){
    const [count, setCount] = useState(0);  // useState 자유롭게 사용 가능
    const router = useRouter();
    
    const BackToLogin = () => {
        router.push("/login");
    }

    return(
        <div>
            <h1>메인페이지 입니다</h1>
            <p>안녕하세요 {userInfo.id}님!</p>
            <p>비밀번호: {userInfo.pwd}</p>
            <button onClick={() => BackToLogin()}
                className="w-auto py-1 px-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">로그인페이지로</button>
        </div>
    );
}