import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="py-3">
      <ul className="type-list-none flex flex-row gap-10 items-center justify-center text-3xl">
        <li>
          <Button variant="link" size={"lg"} asChild>
            <Link href={"/"}>Home</Link>
          </Button>
        </li>
        <li>
          <Button variant="link" size={"lg"} asChild>
            <Link href={"/features"}>Features</Link>
          </Button>
        </li>
        <li>
          <Button variant="link" size={"lg"} asChild>
            <Link href={"/login"}>Sign in</Link>
          </Button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
