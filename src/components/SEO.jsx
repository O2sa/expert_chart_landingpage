import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const { t, i18n } = useTranslation();
  const siteUrl = window.location.origin;
  return (
    // <HelmetProvider>
    <Helmet>
      {/* English Version */}

      {/* Set current language */}
      <html lang={i18n.language} />
      <link
        rel="alternate"
        href={siteUrl}
        // hrefLang="en"
      />
      {/* Dynamically change the title */}
      <title>{t("seo.title")}</title>

      {/* Meta description */}
      <meta name="description" content={t("seo.description")} />

      {/* Keywords */}
      <meta name="keywords" content={t("seo.keywords")} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={t("seo.ogTitle")} />
      <meta property="og:description" content={t("seo.ogDescription")} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/images/small_logo.png`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t("seo.twitterTitle")} />
      <meta name="twitter:description" content={t("seo.twitterDescription")} />
      <meta
        name="twitter:image"
        content={`${siteUrl}images/info.png`}
      />

      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {`
        {
         "@context": "https://schema.org",
        "@type": "Organization",
        "name": {
          "@language": "en",
          "@value": "ChartXpert.io"
        },
        "alternateName": {
          "@language": "ar",
          "@value": "ChartXpert.io"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "availableLanguage": ["English", "Arabic"]
        },
          "url": ${siteUrl},
          "logo": ${siteUrl + "/images/small_logo.png"},
    
        }
        `}
      </script>
    </Helmet>
    // </HelmetProvider>
  );
};

export default SEO;
