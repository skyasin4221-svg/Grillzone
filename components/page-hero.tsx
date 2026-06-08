import Image from "next/image";

export function PageHero({
  title,
  text,
  image,
  eyebrow
}: {
  title: string;
  text: string;
  image: string;
  eyebrow: string;
}) {
  return (
    <section className="relative min-h-[48svh] overflow-hidden bg-white pt-20 text-black sm:min-h-[58vh]">
      <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover opacity-30 sm:opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/55 sm:via-white/82 sm:to-white/35" />
      <div className="absolute bottom-10 left-0 hidden h-10 w-2/3 -skew-y-3 red-stripes opacity-85 sm:block" />
      <div className="grill-lines absolute inset-y-0 right-0 hidden w-1/2 sm:block" />
      <div className="container-pad relative z-10 flex min-h-[calc(48svh-5rem)] items-center py-12 sm:min-h-[calc(58vh-5rem)] sm:py-16">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-xl mt-4 text-grillRed">{title}</h1>
          <p className="mt-5 max-w-xl text-base font-bold leading-7 text-black/65 sm:mt-6 sm:text-lg sm:leading-8">{text}</p>
        </div>
      </div>
    </section>
  );
}
