import React from "react";
import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
export default function NewsPage() {
  return (
    <>
      <h1>NewsPage</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((item) => (
          <li key={item.id}>
            <Link href={`news/${item.id}`}>
            <Image width='400' height='400' src={`/images/news/${item.image}`} alt={item.title}/>
            <span>{item.title}</span>
            </Link>
          </li>
          ))}
      </ul>
    </>
  );
}
