import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sustira.org";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-demo`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      priority: 0.5,
    },

    // Course pages
    {
      url: `${baseUrl}/courses/solar-energy-initiative`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/sap-ehs-basic-course-guidance`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/beginner-product-business-basics`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/organic-seasonal-healthy-pickles`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/chemical-free-soap-making`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/eco-product-basics`,
      lastModified: new Date(),
      priority: 0.8,
    },

    // Brochures / PDFs
    {
      url: `${baseUrl}/brochures/Sustira_Solar_Energy_Brochure.pdf`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${baseUrl}/brochures/SUSTIRA_COURSES_AND_ECO_PRODUCTS.pdf`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${baseUrl}/brochures/SUSTIRA_Seasonal_Healthy_Pickles_Brochure.pdf`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${baseUrl}/brochures/sustira_eco_brochure.pdf`,
      lastModified: new Date(),
      priority: 0.4,
    },
  ];
}