import StylingButton from "@/components/stylingButton";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type ArticlePageProps = {
  params: {
    id: string;
  };
};

const Blog = ({ params }: ArticlePageProps) => {
  const article = articles.find((article) => article.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="max-w-full w-full">
        <div className="container flex flex-col gap-4 py-8">
          <div className="flex text-black text-xs space-x-2">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="font-semibold">{article.title}</span>
          </div>
          <div className="flex flex-col mx-auto gap-4">
            <div className="flex mx-auto">
              <Badge className="text-base rounded-lg cursor-pointer bg-[#F3E8FF] text-[#6B21A8] hover:bg-fuchsia-100 hover:text-fuchsia-700">
                Adiarko
              </Badge>
            </div>
            <h1 className="font-bold text-4xl text-balance">{article.title}</h1>
          </div>
          <div className="h-[512px] my-4">
            <img
              src={article.image}
              className="w-full h-full object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="px-48">
            <p className="text-justify">{article.content}</p>
          </div>
          <div className="flex px-48">
            <Link href="/">
              <StylingButton
                className="bg-[#FED45B] text-xs text-black shadow-md hover:bg-yellow-500"
                className2="gap-4"
                title="Get Started"
                icon="&#x1F872;"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
