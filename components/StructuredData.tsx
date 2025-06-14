export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://quietview.app/#website",
        "url": "https://quietview.app/",
        "name": "Quiet View",
        "description": "A quiet place to watch cities live. Six windows. One quiet world.",
        "publisher": {
          "@id": "https://quietview.app/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://quietview.app/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://quietview.app/#organization",
        "name": "Quiet View",
        "url": "https://quietview.app/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://quietview.app/#/schema/logo/image/",
          "url": "https://quietview.app/og.jpg",
          "contentUrl": "https://quietview.app/og.jpg",
          "width": 1200,
          "height": 630,
          "caption": "Quiet View"
        },
        "image": {
          "@id": "https://quietview.app/#/schema/logo/image/"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://quietview.app/#webpage",
        "url": "https://quietview.app/",
        "name": "Quiet View — Six quiet windows to the world",
        "isPartOf": {
          "@id": "https://quietview.app/#website"
        },
        "about": {
          "@id": "https://quietview.app/#organization"
        },
        "description": "A quiet place to watch cities live. Six windows. One quiet world. Watch the present moment unfold across cities.",
        "breadcrumb": {
          "@id": "https://quietview.app/#breadcrumb"
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://quietview.app/"]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://quietview.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://quietview.app/"
          }
        ]
      },
      {
        "@type": "WebApplication",
        "name": "Quiet View",
        "url": "https://quietview.app/",
        "description": "Watch live cameras from six cities around the world with optional lo-fi music",
        "applicationCategory": "Entertainment",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Live camera feeds from 6 cities",
          "Real-time clocks with timezone display", 
          "Lo-fi music toggle",
          "Minimalist dark theme",
          "Responsive design"
        ],
        "screenshot": "https://quietview.app/og.jpg"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}