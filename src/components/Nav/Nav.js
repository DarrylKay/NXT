import React from "react";

import LogIn from "../Nav/LogIn/LogIn";
import MainNav from "../Nav/MainNav/MainNav";
import MobileNav from "../Nav/MobileNav/MobileNav";

function Nav() {
  return (
    <div>
      <LogIn />
      <MainNav />
      <MobileNav />
    </div>
  );
}

export default Nav;
