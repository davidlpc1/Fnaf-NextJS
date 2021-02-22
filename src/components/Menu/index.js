import React from "react";
import Link from "../Link";
import { Header, Nav } from "./styles";

export default function Menu({ animatronicsLength }) {
  return (
    <Header>
      {/* <h1 style={{ margin: 5 }}>
        Fnaf API - {animatronicsLength || 0} Animatronics
      </h1> */}
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
