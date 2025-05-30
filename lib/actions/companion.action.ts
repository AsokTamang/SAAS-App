"use server"
import { auth } from "@clerk/nextjs/server"
import { createSupaBaseclient } from "../supabase";

const supabase=createSupaBaseclient();   //here we are just putting the client function inside a supabase constant so that we can do the logical operations like down below.


export const createCompanion=async(values:CreateCompanion)=>{
   const {userId:author}=await auth();   //here we are destructuring the userId which is provided by our clerk authentication operation and naming it as author
  
   const{data,error}=await supabase.from('companions').insert({...values,author}).select()    //then we are storing the formData which is entered through the frontend by the user and also the author data which is provided by our clerk auth
   if(error||!data){
    throw new Error(error.message || 'Failed to create a companion.')
   }
   return data[0];    //as the data returns the only  object  of companion which is the newly created companion

}


