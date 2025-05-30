import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
interface companioncardType {
    id:string;
    title:string;
    subject:string;
     topic:string;
    duration:number;
    color:string;

}
export default function Companioncard({id,title,subject,topic,duration,color}:companioncardType){
    return(
       <article className="companion-card" style={{backgroundColor:color}}>
        <div className="flex justify-between items-center">
            <div className="subject-badge">
                {subject}

            </div>
            <Button className="companion-bookmark">
                <Image src={'/icons/bookmark.svg'} alt="bookmark" width={12.5} height={15}/>

            </Button>

        </div>

        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm">{topic}</p>

        <div className="flex justify-between items-center">
            <Image src={'/icons/clock.svg'} alt="clock" width={13.5} height={15}/>
            <p className="text-sm">{duration} mins duration</p>

        </div>

        <Link href={`/companions/${id}`} className="w-full">
        <Button className="btn-primary w-full justify-center">
            Launch Lesson

        </Button>
        </Link>

       </article>
    )
}