import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"
// import { auth } from "./app/firebase";

export function middleware(request: NextRequest) {
//    console.log(auth.currentUser, " new")
   console.log("next")
    return NextResponse.next()
    // return NextResponse.redirect(
    //     new URL("/", request.url)
    // )
}

export const config = {
    matcher: [
        "/main/AskAQuestion",
    ],
}