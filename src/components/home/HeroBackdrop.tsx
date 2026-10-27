import Image from 'next/image';

// Sierra Nevada de Santa Marta photo under a deep green filter: the photo keeps its light and
// shadow (luminosity blend) while the colour comes from the green base. Decorative only.
export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#0a2c25]">
      <Image
        src="/images/hero-sierra-nevada.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_55%] opacity-70 mix-blend-luminosity"
      />
      {/* Green wash, deeper on the left where the text sits */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,29,24,.92)_0%,rgba(8,38,31,.7)_42%,rgba(10,44,37,.35)_100%)]" />
      {/* Darker at top (header) and bottom (band) */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,29,24,.55)_0%,rgba(6,29,24,0)_22%,rgba(6,29,24,0)_62%,rgba(5,25,20,.85)_100%)]" />
    </div>
  );
}
