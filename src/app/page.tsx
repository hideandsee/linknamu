import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// TODO: 보여주기용 더미 값입니다. 실제 내용으로 교체하세요.
const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  imageUrl: "/profile-dummy.svg",
};

const links = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-12 sm:py-16">
      <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />

      <ul className="mt-10 flex flex-col gap-5">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
