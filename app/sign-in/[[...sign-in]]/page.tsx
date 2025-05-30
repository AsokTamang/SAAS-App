import { SignIn,SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";



const Signin = () => {
  return (
    <div className="flex items-center flex-col justify-center">
        <SignIn/>
        <br></br>
      
        <p>Don't have an account?</p>
           
            <Link href={'/sign-up'}>
            <Button className="btn-signin">
                
                Sign-up

            </Button>
            </Link>
           
        
          
     

      
    </div>
  )
}

export default Signin;
