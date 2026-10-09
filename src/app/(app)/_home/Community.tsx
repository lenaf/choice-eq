import Image from "next/image";

const PHOTOS = [
  { alt: "Four riders smiling with their ribbons in front of horse stalls", className: "md:col-span-2 md:row-span-2", src: "/images/site/community-ribbons.jpg" },
  { alt: "Two riders walking their horses down a farm path toward the camera", className: "", src: "/images/site/barn-path.jpg" },
  { alt: "A gray horse between two smiling women holding a red ribbon", className: "md:row-span-2", src: "/images/site/ribbon-day.jpg" },
  { alt: "A young rider on a palomino listening to Emily", className: "", src: "/images/site/young-rider.jpg" },
  { alt: "Two riders standing with their horses outside the barn", className: "col-span-2", src: "/images/site/friends.jpg" },
  { alt: "A paint horse resting in a bed of shavings", className: "col-span-2", src: "/images/site/resting.jpg" },
];

export function Community() {
  return (
    <section className="bg-base-200 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Community</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Ride. Learn. Connect.</h2>
          </div>
          <p className="max-w-md text-base-content/80">
            Show days, trail walks, and quiet moments in the barn. Growing our community through horses.
          </p>
        </div>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {PHOTOS.map((photo) => (
            <div key={photo.src} className={`relative overflow-hidden rounded-xl ${photo.className}`}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
