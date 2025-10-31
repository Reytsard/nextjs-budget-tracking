import React from "react";

function Header() {
  return (
    <header className="py-3">
      <ul className="type-list-none flex flex-row gap-10 items-center justify-center text-xl">
        <li>Home</li>
        <li>Features</li>
        <li>Sign in</li>
      </ul>
    </header>
  );
}

export default Header;
