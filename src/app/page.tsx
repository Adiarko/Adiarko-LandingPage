import Brand from "./_section/brand";
import Client from "./_section/client";
import Hero from "./_section/hero";
import Portfolio from "./_section/portfolio";
import Posts from "./_section/posts";
import Quotes from "./_section/quotes";
import Ready from "./_section/ready";
import Service from "./_section/service";
import WhyChooseUs from "./_section/whyChooseUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between scroll-smooth">
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
