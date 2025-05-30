interface companionListType {
  title: string;
  classNames: string;
  companions: Companion[];
}
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Companionlist = ({
  title,
  classNames,
  companions,
}: companionListType) => {
  const listedItems = companions.map((compa) => (
    <TableRow key={compa.id} className="flex gap-5 justify-center items-center">
      <TableCell className="text-lg w-2/3 items-center ">
      <Link href={`/companions/${compa.id}`}>
        <div className="flex items-center gap-4">
            <div className="size-[82px] flex items-center justify-center max-md:hidden rounded-2xl" style={{backgroundColor:compa.color}}>
          <Image
            src={`/icons/${compa.subject}.svg`}
            width={35}
            height={35}
            alt="compaimage"
          />
          </div>

          <div className="flex flex-col">
            <p className="text-xl font-bold"> {compa.name}</p>
            <p> {compa.topic}</p>
          </div>
        </div>
        </Link>
      </TableCell>
      <TableCell className="text-lg ">
        <div className="subject-badge">{compa.subject}</div>
      </TableCell>
      <TableCell className="text-lg justify-between">
       <div> {compa.duration} mins</div>
      </TableCell>
    </TableRow>
  ));
  return (
    <section className={`companion-list ${classNames}`}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>
      <Table>
        <TableHeader>
          <TableRow className="flex gap-5">
            <TableHead className="text-lg w-2/3"> Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{listedItems}</TableBody>
      </Table>
    </section>
  );
};

export default Companionlist;
