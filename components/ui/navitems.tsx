"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
        </nav>
    )
}