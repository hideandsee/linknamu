import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/144x144/orange/white/png",
};

const links = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-16 pt-16 sm:px-8 sm:pt-24">
      <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />

      <ul className="mt-12 flex flex-col gap-4 sm:gap-5">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
