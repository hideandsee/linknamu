import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          width={144}
          height={144}
          priority
          className="h-28 w-28 rounded-full object-cover shadow-lg shadow-orange-900/10 ring-4 ring-white/80 sm:h-36 sm:w-36 dark:ring-white/10"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-400 text-4xl font-bold text-white shadow-lg shadow-orange-900/10 ring-4 ring-white/80 sm:h-36 sm:w-36 sm:text-5xl dark:ring-white/10"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
        {bio}
      </p>
    </section>
  );
}
