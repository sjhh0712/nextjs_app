"use client";
import { useState } from "react";
import {useRef} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function JoinPage(){
    const [AuthYN, setAuthYN] = useState(false);
    const [formData, setFormData] = useState({
        userName: "",
        userId: "",
        userPwd: "",
        userPwd2: "",
        userBirth:"",
        userHp:""
    });

    // 2. 모든 입력창에서 공통으로 사용할 함수
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value 
        });
    };
    const router = useRouter();

    const GoJoin = async () =>{

    }
    return(
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">회원가입</h1>
                    <p className="text-sm text-gray-500 mt-1">서비스 이용을 위해 정보를 입력해주세요</p>
                </div>

                <form className="space-y-5">

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">이름</label>
                    <input type="text" placeholder="실명을 입력해주세요"
                        name="userId" 
                        value={formData.userName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500"/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">아이디</label>
                    <div className="flex gap-2">
                    <input type="text" placeholder="영문/숫자 4~20자"
                        name="userId" 
                        value={formData.userId}
                        onChange={handleChange}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500"/>
                    <button type="button"
                        className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 whitespace-nowrap">
                        중복확인
                    </button>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">비밀번호</label>
                    <input type="password" placeholder="8자 이상 입력해주세요"
                    name="userId" 
                    value={formData.userPwd}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500"/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">비밀번호 확인</label>
                    <input type="password" placeholder="비밀번호를 한 번 더 입력해주세요"
                    name="userId" 
                    value={formData.userPwd2}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500"/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">생년월일</label>
                    <input type="date"
                    name="userId" 
                    value={formData.userBirth}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500"/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">휴대폰 번호</label>
                    <div className="flex gap-2">
                    <input type="tel" placeholder="'-' 없이 입력해주세요" maxLength={11}
                        name="userId" 
                        value={formData.userHp}
                        onChange={handleChange}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500"/>
                    <button type="button" onClick={() => setAuthYN(true)}
                        className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 whitespace-nowrap">
                        {AuthYN ? "재발송" : "인증번호 발송"}
                    </button>
                    </div>

                    {AuthYN && (
                    <div className="flex gap-2 mt-2">
                        <input type="text" placeholder="인증번호 6자리" maxLength={6}
                        // ref={AuthNumber}
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500"/>
                        <button type="button"
                        className="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 whitespace-nowrap">
                        인증 확인
                        </button>
                    </div>
                    )}
                    {AuthYN && (
                    <p className="text-xs text-gray-400 mt-1">인증번호가 발송되었습니다. 5분 이내로 입력해주세요.</p>
                    )}
                </div>

                <button type="button" onClick={GoJoin}
                    className="w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors mt-2">
                    회원가입
                </button>

                <p className="text-center text-sm text-gray-500">
                    이미 계정이 있으신가요?{" "}
                    <a href="/login" className="text-gray-900 font-medium hover:underline">
                    로그인
                    </a>
                </p>

                </form>
            </div>
        </div>
    );
}