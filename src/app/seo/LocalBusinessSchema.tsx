export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",

    name: "MRTECHYCOOL",

    image: "https://mrtechycool.in/logos/logo-square-v2.png",

    url: "https://mrtechycool.in",

    telephone: "+91-9528013976",

    email: "mytechycoolservice@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No. 819, Mangla Heights App",
      addressLocality: "Dwarka",
      addressRegion: "Delhi",
      postalCode: "110075",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "City",
      name: "Delhi",
    },

    openingHours: "Mo-Su 09:00-20:00",

    priceRange: "₹₹",

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}