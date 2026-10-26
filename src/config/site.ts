// Single place to edit contact data and external links.
// Rule: never invent contact data. Any empty value hides its action in the UI.
export const site = {
  name: 'Juan David Ríos Rodríguez',
  // Public origin used for canonical URLs, hreflang, sitemap and Open Graph.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
  email: '', // empty → hide mailto, show honest notice
  linkedin: '', // empty → hide
  github: 'https://github.com/juandavid3196',
  githubHandle: 'juandavid3196',
  cvUrl: '', // empty → "CV available on request"
  fieldops: {
    repoUrl: 'https://github.com/juandavid3196/fieldops',
    demoUrl: '',
    manualUrl: '',
  },
  // Shows the "Placeholder photo" badge on the stock images. Turn off once
  // the files in public/images are replaced with the owner's own photos.
  showPhotoNotes: true,
};
