// src/app/[id]/page.tsx

import Image from "next/image";

export const generateStaticParams = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const posts = await response.json();
  return posts.map((post: { id: number }) => ({
    id: post.id.toString(),
  }));
  // [{ id: "1"}, { id: "2"}, { id: "3"}, ...]
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // 다른 API도 한 번에 사용하여 API 호출 수 늘어난다고 가정
  await fetch("https://jsonplaceholder.typicode.com/todos/");
  await fetch("https://restcountries.com/v3.1/all");
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const post = await response.json();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Post Detail</h1>
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <Image src={post.image} alt={post.title} width={400} height={600} />
      <p>{post.description}</p>
    </div>
  );
}
