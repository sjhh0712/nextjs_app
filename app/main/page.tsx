import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions } from "@/lib/session";
import MainForms from "@/components/MainForms";

export default async function MainPage(){
    const session = await getIronSession(await cookies(), sessionOptions);

    console.log(session.SeLogin);
    console.log(session.SeLogin.id);
    
    return (
        <MainForms userInfo={session.SeLogin} />
    );
}