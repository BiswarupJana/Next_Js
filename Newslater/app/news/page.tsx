import React from "react";
import Link from "next/link";
export default function NewsPage(){
  return (
    <>
    <h1>NewsPage</h1>
  <ul>
    <li>
      <Link href="/news/first-news">First Link</Link>
    </li>
    <li>
      <Link href="/news/second-news">Second Link</Link>
    </li>
    <li>
      <Link href="/news/third-news">Third Link</Link>
    </li>
    <li>
      <Link href="/news/forth-news">Forth Link</Link>
    </li>
  </ul></>
  )
}