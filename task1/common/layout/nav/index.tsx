import Link from "next/link";
import React, { useState } from "react";
import { Nav } from "./style";
import { Button, TextLittle500 } from "../../../common/style";
import Modal from "../../../components/modal/Modal";
const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <Nav>
        <Link href="/" className="brand-name">
          <a>
            <TextLittle500>MACROSOFT</TextLittle500>
          </a>
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link href="/about">
                <a>
                  <TextLittle500 className="nav-links">ABOUT US</TextLittle500>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>
                  <TextLittle500 className="nav-links"> BLOG</TextLittle500>
                </a>
              </Link>
            </li>
            <li>
              <Button className="button" onClick={() => setIsOpen(true)}>
                CONTACT US
              </Button>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
};

export default NavBar;
