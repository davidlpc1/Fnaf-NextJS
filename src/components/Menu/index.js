import React from "react";
import Link from "../Link";
import { Header, Nav } from "./styles";

export default function Menu() {
  return (
    <Header>
      <Nav>
        <div>
          <Link href="/">List</Link>
        </div>
        <div>
          <Link href="/api/v1/all">Api</Link>
        </div>
        <div>
          <Link href="/docs">Docs</Link>
        </div>
      </Nav>
    </Header>
  );
}