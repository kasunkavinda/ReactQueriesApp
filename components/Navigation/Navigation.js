import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/traditional-super-heroes">
            <a>TraditionalSuperHeroes</a>
          </Link>
        </li>
        <li>
          <Link href="/rq-super-heroes">
            <a>RQSuperHeroes</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
