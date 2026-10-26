export type HeadingParts = { l1?: string; pre: string; em: string; post: string };

// The single italic-serif accent word used inside headings.
export function Em({ children }: { children: React.ReactNode }) {
  return <em className="font-accent font-normal italic">{children}</em>;
}

type DisplayHeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'p';
  h: HeadingParts;
  id?: string;
  // Size, leading and tracking come from the call site (they differ per page).
  className?: string;
};

export function DisplayHeading({ as: Tag = 'h2', h, id, className = '' }: DisplayHeadingProps) {
  const tail = (
    <>
      {h.pre}
      <Em>{h.em}</Em>
      {h.post}
    </>
  );
  return (
    <Tag id={id} className={`m-0 font-sans font-bold ${className}`}>
      {h.l1 ? (
        <>
          <span className="block">{h.l1}</span>
          <span className="block">{tail}</span>
        </>
      ) : (
        tail
      )}
    </Tag>
  );
}
