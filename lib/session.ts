import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
    password: "2026-test-sjh07-keys-session-myapp-develop",  // 암호화 키
    cookieName: "my-app-session",
};

// 세션 타입 정의
declare module "iron-session" {
    interface IronSessionData {
        SeLogin?: {
        id: number;
        userId: string;
        };
    }
}