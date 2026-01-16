import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function Seo({ title, description, canonical }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Musa Jamaldeen, Frontend Developer, Web Developer Lagos, React Developer, Next.js Developer, Software Engineer Nigeria" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* JSON-LD for Google Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Musa Jamaldeen",
          "url": "https://musa-jamaldeen.vercel.app",
          "jobTitle": "Frontend Developer",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lagos",
            "addressCountry": "Nigeria"
          },
          "sameAs": [
            "https://github.com/Jd33n27",
            "https://linkedin.com/in/MusaJamaldeen",
            "https://x.com"
          ]
        })}
      </script>
    </Helmet>
  );
}