import { Features, Hero, Reviews, Sponsors, TopAuthors, TopStories } from "@/components";

export default function Home() {
  return (
    <main className="min-h-[100vh]">
        <Hero />
        {/* <Features /> */}
        <TopAuthors />
        <TopStories />
        <Sponsors />
        <Reviews />
    </main>
  );
}
