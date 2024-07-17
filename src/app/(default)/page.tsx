import { Features, Hero, Reviews, Sponsors, TopAuthors, TopStories } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
        <Hero />
        <Features />
        <TopAuthors />
        <TopStories />
        <Sponsors />
        <Reviews />
    </main>
  );
}
