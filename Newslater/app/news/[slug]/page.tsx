import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";
import Image from "next/image";
export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item)=> item.slug=== newsSlug)
  return (
    <article>
      <header>
        <Image width='100'height='100' src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date} </time>

      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
