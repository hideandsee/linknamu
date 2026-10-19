type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-white/60 bg-white/40 px-6 py-[18px] text-center text-[15px] font-semibold tracking-tight text-stone-700 shadow-[0_4px_24px_-8px_rgba(120,72,40,0.15)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_8px_28px_-10px_rgba(120,72,40,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
