
export const INITIAL_CONTENT = {
  pages: {
    home: {
      title: "Home",
      slug: "home",
      sections: {
        hero: {
          title: "ACCRA'S PREMIER SECURE MARKETPLACE",
          description: "Shop with total confidence across Ghana using our secure escrow system. Your funds are protected until you confirm delivery.",
          badge: "Secure Escrow Protection",
          primaryCta: "Start Shopping",
          imageUrl: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999268/kerry-gold-widget-1_ny71cb.jpg"
        },
        highlights: {
          title: "Marketplace Highlights",
          subtitle: "Premium products protected by our Secure Escrow System.",
          badge: "Live Activity Feed"
        },
        trust: {
          title: "Our Verified Partners",
          subtitle: "Trusted Local Vendors",
          description: "Join Ghana's most trusted marketplace. Benefit from multi-signature security and fast GHS payments."
        },
        cta: {
          title: "SECURE YOUR NEXT PURCHASE",
          subtitle: "Escrow Protection is active for all GHS transactions.",
          primaryButton: "Browse Marketplace",
          secondaryButton: "How Escrow Works"
        }
      }
    },
    about: {
      title: "About Us",
      slug: "about",
      sections: {
        mission: {
          title: "OUR MISSION",
          description: "To establish the gold standard for commerce in West Africa through transparency, safety, and escrow excellence.",
          imageUrl: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/132075.b_coq5nl.jpg"
        },
        values: {
          title: "CORE VALUES",
          description: "Integrity, Transparency, and Security are the pillars of the Ecommerce marketplace.",
          imageUrl: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1773999005/97743a_n2dnv3.jpg"
        }
      }
    },
    contact: {
      title: "Contact Us",
      slug: "contact",
      sections: {
        support: {
          title: "GET IN TOUCH",
          description: "Our support team is active 24/7 to assist with inquiries and escrow mediation.",
          imageUrl: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774057991/supermarket-widget-1_cavrxq.jpg"
        }
      }
    }
  },
  settings: {
    siteName: "Ecommerce",
    siteTagline: "The Gold Standard",
    logoUrl: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1774057903/ai-removebg-preview_ikywpe.png",
    supportPhone: "(+233) 05419 88 383",
    supportEmail: "Cybertechgh@gmail.com",
    footerCopyright: "© 2026 Ecommerce. All rights reserved by Cyber.",
    defaultTheme: "sovereign" as const
  }
};
