import { ButtonLink } from './Button';
import { Eyebrow } from './Eyebrow';
import { TextLink } from './TextLink';

type CtaBandProps = {
  variant?: 'home' | 'services';
  headingId?: string;
  eyebrow: string;
  title: string;
  sub: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

// Green call-to-action band (home and services).
export function CtaBand({
  variant = 'home',
  headingId,
  eyebrow,
  title,
  sub,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  const home = variant === 'home';
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-x-10 gap-y-7 bg-brand text-ivory ${
        home ? 'rounded-2xl p-[clamp(32px,4vw,46px)]' : 'rounded-lg p-[clamp(26px,3.2vw,37px)]'
      }`}
    >
      <div className={`flex flex-col ${home ? 'gap-3' : 'gap-3.5'}`}>
        <Eyebrow tone="onGreen">{eyebrow}</Eyebrow>
        <h2
          id={headingId}
          className={`m-0 font-sans font-bold leading-none tracking-[-.04em] text-ivory ${
            home ? 'text-[clamp(34px,4.4vw,51px)]' : 'text-[clamp(30px,4.7vw,55px)]'
          }`}
        >
          {title}
        </h2>
        <p className={`m-0 font-serif text-on-green-sub ${home ? 'text-[20px]' : 'text-[19px]'}`}>{sub}</p>
      </div>
      <div className={`flex flex-col items-center ${home ? 'gap-3.5' : 'gap-3'}`}>
        <ButtonLink href={primaryHref} variant="ivory" size="cta" arrow>
          {primaryLabel}
        </ButtonLink>
        <TextLink href={secondaryHref} tone="onGreen" size="sm">
          {secondaryLabel}
        </TextLink>
      </div>
    </div>
  );
}
