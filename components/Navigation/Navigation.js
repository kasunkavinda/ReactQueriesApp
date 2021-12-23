import Link from "next/link";
import classes from "./Navigation.module.css";
function Navigation() {
  return (
    <header>
      <nav className={classes.nav}>
        <ul className={classes.navul}>
          <li className="my-3">
            <Link href="/">
              <a className="text-white">Kasun Kavinda</a>
            </Link>
          </li>
          <li>
            <Link href="/traditional">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link href="/rq">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
