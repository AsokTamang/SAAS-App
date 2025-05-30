"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignedIn,SignIn,SignUp,SignUpButton,SignedOut,SignOutButton, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./button";

export default function NavItmes(){
    const pathname=usePathname();
    const items=  [
        {label:'Home',href:'/'},
         {label:'Companions',href:'/companions'},
        {label:'Journey',href:'/myjourney'},
   

    ]

    const elements=items.map((item,index)=>(
     
        <Link  key={index} href={item.href} className={pathname===item.href? "text-primary font-bold":""}>{item.label}</Link>
      
     
    ))
      
           


 
    return(
        <nav className="flex flex-center gap-4">
            {elements}
            <SignedOut>  {/**here we are checking if the user is signed out then we show them the sign in button */}
                <SignInButton>
                    <Button className="btn-signin relative bottom-1">
                        Sign In

                    </Button>
                </SignInButton>
            </SignedOut>

            <SignedIn> {/**and if the user is signed in then we show them the user button which manages the logout and other stuffs */}
                <UserButton/>
            </SignedIn>
            
        </nav>
    )
}