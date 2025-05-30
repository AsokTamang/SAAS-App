import Link from "next/link";
import Image from "next/image";
import NavItmes from "./navitems";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <div className="flex flex-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex flex-center gap-8">
        <NavItmes/>
        <p>Sign in</p>

      </div>
    </nav>
  );
}
