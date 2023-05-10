import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <h1>Learn By Doing App</h1>
      <Link href="/sample/databases">Go back</Link>
      <Link href="/sample/javascript">Go back</Link>
      <Link href="/sample/">Go back</Link>
    </div>
  );
}
