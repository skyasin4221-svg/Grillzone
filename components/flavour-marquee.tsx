const items = [
  "Flame Grilled",
  "Bright Red Heat",
  "Fresh Chicken",
  "Stacked Burgers",
  "Peri Peri",
  "Crispy Wings",
  "Family Buckets",
  "Sunday Nashta"
];

export function FlavourMarquee() {
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-red-100 bg-grillRed py-4 text-white">
      <div className="marquee-track flex w-max gap-10">
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-4xl uppercase leading-none tracking-wide sm:text-5xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
