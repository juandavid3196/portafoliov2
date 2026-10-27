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
  email: 'juandavid3196@gmail.com', // empty → hide mailto, show honest notice
  linkedin: 'https://www.linkedin.com/in/juan-david-rios-rodriguez-93415b214', // empty → hide
  whatsapp: '573026635805', // digits only, international format (e.g. 573001234567); empty → hide
  github: 'https://github.com/juandavid3196',
  githubHandle: 'juandavid3196',
  cvUrl: '', // empty → "CV available on request"
  fieldops: {
    repoUrl: 'https://github.com/juandavid3196/fieldops',
    demoUrl: '',
    manualUrl: '',
  },
};
