import Image from 'next/image';

type ProductShotProps = {
  src: string;
  alt: string;
  // Intrinsic size of the picture (defaults to the 1672×941 product designs).
  width?: number;
  height?: number;
  // Warm border and shadow for Bosvia.
  warm?: boolean;
  // next/image `sizes` for the slot the picture sits in.
  sizes?: string;
  priority?: boolean;
};

// Product-design picture in the shared mockup frame (rounded, shadowed).
export function ProductShot({
  src,
  alt,
  warm = false,
  width = 1672,
  height = 941,
  sizes = '(min-width: 1320px) 760px, (min-width: 900px) 56vw, 100vw',
  priority = false,
}: ProductShotProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[14px] border bg-white ${
        warm
          ? 'border-warm-line shadow-[0_24px_48px_-28px_rgba(70,45,20,.4),0_2px_6px_rgba(70,45,20,.08)]'
          : 'border-[#dde2dc] shadow-[0_24px_48px_-28px_rgba(20,40,35,.4),0_2px_6px_rgba(20,40,35,.08)]'
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}
