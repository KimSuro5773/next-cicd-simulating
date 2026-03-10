// src/app/page.tsx

import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const response = await fetch("https://fakestoreapi.com/products");
  const posts = await response.json();
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Posts</h1>
      <ul className="list-disc pl-5">
        {posts.map((post: { id: number; title: string; image: string }) => (
          <Link href={`/${post.id}`} key={post.id}>
            <li className="mb-2 text-blue-400 underline">
              <h3>{post.title}</h3>
              <Image
                src={post.image}
                alt={post.title}
                width={100}
                height={100}
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
