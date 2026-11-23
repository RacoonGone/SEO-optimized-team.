import {websiteConfig} from "@/lib/seo/index";

// Company JsonLd scheme
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "alternateName": websiteConfig.alternateName,
  "url": websiteConfig.url,
  "logo": `${websiteConfig.url}/logo.png`,
  "description": websiteConfig.description,
  "foundingDate": websiteConfig.foundingDate,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl.Contoh Alamat No.233",
    "addressLocality": "Jakarta Selatan",
    "addressRegion": "DKI Jakarta",
    "postalCode": "12190",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-21-555-0199",
    "contactType": "customer service",
    "areaServed": "ID",
    "availableLanguage": ["Indonesian", "English"]
  },
  "sameAs": [
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com"
  ]
}