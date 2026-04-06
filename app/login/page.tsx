"use client"; // useState : react 기능 사용을 위해 선언

import {useState} from "react"; // 입력값을 저장하는 react 기능
import {useRef} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link"; // 페이지 이동 시 사용 <a>태그 대용

export default function LoginPage(){
    // UserId : 현재 아이디 입력값, setUserId : 아이디 값을 바꾸는 함수, useState("") : 빈문자열로 초기화
    const [UserId, setUserId] = useState("");
    const [PassWord, setPassword] = useState("");
    const uId = useRef(null);
    const passWd = useRef(null);
    const router = useRouter();

    const GoLogin = async () =>{
        if(UserId == ""){
            alert("아이디를 입력해주세요.");
            uId.current.focus();
            return false;
        }else if(PassWord == ""){
            alert("비밀번호를 입력해주세요.");
            passWd.current.focus();
            return false;
        }else{
            const res = await fetch("/api/login",{
                method: "post",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({UserId,PassWord}),
            });

            const data = await res.json();
            console.log(data);

            if(res.ok){
                router.push("/main");
            }else{
                alert("아이디 또는 비밀번호를 확인해주세요.");
                return false;
            }
        }
        // console.log(UserId);
        // console.log(PassWord);
        // console.log('로그인 버튼 호출');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-sm">

                <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
                로그인
                </h1>

                <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-1">아이디</label>
                    <input
                        type="text"
                        ref={uId}
                        value={UserId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="아이디를 입력하세요"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm text-gray-600 mb-1">비밀번호</label>
                    <input
                        type="password"
                        ref={passWd}
                        value={PassWord}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력하세요"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* 로그인 버튼 */}
                <button
                onClick={GoLogin}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
                >
                로그인
                </button>

                {/* 아이디 찾기 / 비밀번호 찾기 / 회원가입 */}
                <div className="flex justify-center gap-4 mt-5 text-sm text-gray-500">
                    <Link href="/find-id" className="hover:text-blue-500">
                        아이디 찾기
                    </Link>
                    <span>|</span>
                    <Link href="/find-password" className="hover:text-blue-500">
                        비밀번호 찾기
                    </Link>
                    <span>|</span>
                    <Link href="/join" className="hover:text-blue-500">
                        회원가입
                    </Link>
                </div>

            </div>
        </div>
    );
}