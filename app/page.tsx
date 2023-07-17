import { Search } from "@components/search/search.component";
import Image from "next/image";
import Link from "next/link";

const news = [
  {
    id: "1",
    title: "qwerty",
    body: "hello my friend",
    slug: "qwerty",
  },
  {
    id: "2",
    title: "qwerty2",
    body: "hello my friend2",
    slug: "qwerty2",
  },
  {
    id: "3",
    title: "qwerty3",
    body: "hello my friend3",
    slug: "qwerty3",
  },
  {
    id: "4",
    title: "qwerty4",
    body: "hello my friend4",
    slug: "qwerty4",
  },
];
export default function Home() {
  const news1 = news.map((item) => {
    return (
      <Link href={`news/${item.slug}`} key={item.id}>
        {item.title} {item.body}
      </Link>
    );
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search />
      {news1}
    </main>
  );
}
