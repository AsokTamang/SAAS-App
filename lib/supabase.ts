import {createClient} from '@supabase/supabase-js'
import { auth } from '@clerk/nextjs/server'
export const createSupaBaseclient=()=>{  
    return createClient(    //here we are creating the client on supabase using the url and key provided in our .env file which helps us to interact with the supabase backend for logical operations
        process.env.NEXT_PUBLIC_SUPABASE_URL!,    
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{  //then we are accessing the token of authenticated user from clerk using async accessToken function
            async accessToken () {
                return (await auth()).getToken()
                
            }
        }
    )
}