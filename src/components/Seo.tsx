import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

const siteUrl = "https://musa-jamaldeen.vercel.app";
const defaultImage = `${siteUrl}/api/og?title=Building%20Digital%20Assets%20That%20Scale`;

export default function Seo({
  title,
  description,
  canonical,
  image = defaultImage,
}: SeoProps) {
  const pageUrl = canonical ?? siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Musa Jamaldeen, Frontend Developer, Web Developer Lagos, React Developer, Next.js Developer, Software Engineer Nigeria" />
      <meta name="author" content="Musa Jamaldeen" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Musa Jamaldeen Portfolio" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} preview image`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={pageUrl} />
      
      {/* JSON-LD for Google Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Musa Jamaldeen",
          "url": siteUrl,
          "image": image,
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
