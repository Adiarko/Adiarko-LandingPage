import Hero from "@/components/hero";
import Service from "@/components/service";
import Brand from "@/components/brand";
import Portfolio from "@/components/portfolio";
import WhyChooseUs from "@/components/whyChooseUs";
import Quotes from "@/components/quotes";
import Posts from "@/components/posts";
import Ready from "@/components/ready";
import Client from "@/components/client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-full w-full">
        <Hero />
        <Service />
        <Brand />
        <Portfolio />
        <WhyChooseUs />
        <Quotes />
        <Posts />
        <Ready />
        <Client />
      </section>
    </main>
  );
}
