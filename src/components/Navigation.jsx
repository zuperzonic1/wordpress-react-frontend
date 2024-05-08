// import { Navbar } from "flowbite-react";
// import { Link } from "react-router-dom";

// export default function Navigation() {
//   return (
//     <Navbar fluid rounded>
//       <Navbar.Brand href="/">
//         <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//       <Navbar.Collapse>
//         <Navbar.Link as={Link} to="/" active>
//           Home
//         </Navbar.Link>
//         <Navbar.Link as={Link} to="/articles">
//           Articles
//         </Navbar.Link>
//         {/* <Navbar.Link as={Link} to="/">
          
//         </Navbar.Link>
//         <Navbar.Link as={Link} to="/">
          
//         </Navbar.Link>
//         <Navbar.Link as={Link} to="/">
          
//         </Navbar.Link> */}
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }


"use client";

import {Link} from "react-router-dom";
import { Navbar } from "flowbite-react";

export default function Navigation() {
  return (
    <Navbar fluid rounded>
    <Navbar.Brand as={Link} href="/">
      <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link as={Link} href="#">
        About
      </Navbar.Link>
      <Navbar.Link href="/articles">Articles</Navbar.Link>
      <Navbar.Link href="#">Home</Navbar.Link>
      <Navbar.Link href="#">HOME</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  );
}
