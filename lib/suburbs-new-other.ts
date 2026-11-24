import type { NewSub } from "./suburbs-new";

/* Other high-traffic Melbourne areas (north, west, south-east).
   Each entry is written for that suburb only. */

export const NEW_OTHER: NewSub[] = [
  {
    name: "Reservoir",
    region: "North",
    character:
      "Reservoir is a large northern suburb along Broadway and Edwardes Street, with a busy railway station, a diverse community and many local businesses.",
    hook: "Reservoir's size and mix of long-established and new businesses mean local search is competitive and varied.",
    nbrs: ["Preston", "Thornbury", "Coburg"],
    blocks: [
      {
        title: "A diverse local market",
        body: "Customers speak many languages, so plain English, clear pricing and obvious contact options help everyone. Key pages can also be added in other languages.",
      },
      {
        title: "Food, retail and services",
        body: "Shops and food businesses benefit from photos, accurate hours and a profile that matches the site.",
      },
      {
        title: "Trades across the north",
        body: "Trades benefit from coverage pages for Reservoir, Preston and Thornbury and photos of real jobs.",
      },
    ],
    example:
      "Imagine a family-run bakery on Edwardes Street. The site would show the range, opening hours, an order form for celebrations and a catering page. Key details are available in a second language to match local customers.",
    tip: "Multilingual key pages can widen your reach. Start with hours and contact details.",
    qa: [
      {
        q: "Can the site have more than one language?",
        a: "Yes, for the pages that matter most.",
      },
      {
        q: "Do you handle photography?",
        a: "We build around your photos and advise on what to shoot.",
      },
    ],
  },
  {
    name: "Northcote",
    region: "North",
    character:
      "Northcote is an inner-north suburb with High Street's cafes, bars, vintage shops and a strong independent business culture.",
    hook: "High Street Northcote is a destination for independent retail and hospitality, and it is closely watched by locals and visitors alike.",
    nbrs: ["Thornbury", "Fitzroy North", "Preston"],
    blocks: [
      {
        title: "Independent retail and vintage",
        body: "Shops need a site that shows personality and stock. Featured items, a clear story and opening hours help people plan a visit.",
      },
      {
        title: "Cafes, bars and live venues",
        body: "Hospitality venues benefit from menus, events and booking links that stay current on both the site and Google profile.",
      },
      {
        title: "Studios and creatives",
        body: "Photographers, designers and makers benefit from portfolios and simple enquiry forms.",
      },
    ],
    example:
      "Picture a vintage clothing store on High Street. The site would show new arrivals, shop hours, an events page for markets and a simple enquiry form for sourcing requests. A page for selling or consigning items captures another audience.",
    tip: "New arrivals pages give people a reason to return to your site.",
    qa: [
      {
        q: "Can we update new arrivals quickly?",
        a: "Yes. We build a simple way to add items.",
      },
      {
        q: "Do you sell online?",
        a: "We can add a shop if you want to sell directly.",
      },
    ],
  },
  {
    name: "Coburg",
    region: "North",
    character:
      "Coburg is a northern suburb with Sydney Road's strip of shops, Coburg Lake, a railway station and a diverse local community.",
    hook: "Sydney Road Coburg mixes long-standing family businesses with new cafes and studios, all competing for the same strip.",
    nbrs: ["Brunswick", "Pascoe Vale", "Preston"],
    blocks: [
      {
        title: "Sydney Road retail",
        body: "Shops compete with the larger Brunswick strip. Clear details, strong photos and genuine reviews help you stand out.",
      },
      {
        title: "Cafes and food businesses",
        body: "Menus, hours and photos matter. We keep sites fast and simple for phone users.",
      },
      {
        title: "Local trades and services",
        body: "Trades benefit from coverage pages for Coburg and neighbouring suburbs and galleries of recent work.",
      },
    ],
    example:
      "Imagine a tailoring and alterations shop on Sydney Road. The site would list services and prices, show opening hours, explain turnaround times and offer a booking form. A page for wedding alterations targets a higher-value search.",
    tip: "Turnaround times drive choices for alterations and repairs. State them.",
    qa: [
      {
        q: "Can customers send photos for a quote?",
        a: "Yes, where it suits your business.",
      },
      {
        q: "Do you add price lists?",
        a: "Yes, since customers filter by price.",
      },
    ],
  },
  {
    name: "Heidelberg",
    region: "North",
    character:
      "Heidelberg is a north-eastern suburb with a major hospital precinct, Burgundy Street's cafes and a long history as a hub for health and professional services.",
    hook: "The hospital precinct supports many nearby clinics and services, and patients and staff search for them every day.",
    nbrs: ["Ivanhoe", "Eltham", "Bulleen"],
    blocks: [
      {
        title: "Clinics near the hospital precinct",
        body: "Specialists and allied health providers benefit from pages per service, referral information and clear travel and parking details.",
      },
      {
        title: "Cafes and retail on Burgundy Street",
        body: "Venues benefit from clear hours, menus and photos, and a Google profile that matches.",
      },
      {
        title: "Professional services",
        body: "Accountants, lawyers and advisers benefit from team pages and a simple first-contact route.",
      },
    ],
    example:
      "Consider a physiotherapy and rehabilitation clinic near the hospital. The site would cover conditions treated, funding options, referral steps and online booking. A page for patients leaving hospital explains early rehabilitation.",
    tip: "Say how far you are from the hospital. Patients search that way.",
    qa: [
      {
        q: "Can the site include referral forms?",
        a: "Yes, for GPs and specialists to use.",
      },
      {
        q: "Do you add parking details?",
        a: "Yes, since patients look for them.",
      },
    ],
  },
  {
    name: "Eltham",
    region: "North",
    character:
      "Eltham is a green north-eastern suburb known for its artistic community, mudbrick buildings, a village shopping centre and the Diamond Creek trail.",
    hook: "Eltham's village has a strong creative identity, and local businesses often draw customers from across the north-east.",
    nbrs: ["Greensborough", "Heidelberg", "Warrandyte"],
    blocks: [
      {
        title: "Artists and makers",
        body: "Galleries, studios and makers benefit from portfolios, open-studio information and a simple way to buy or enquire.",
      },
      {
        title: "Village cafes and shops",
        body: "Small businesses benefit from warm photography, current hours and a Google profile that matches the site.",
      },
      {
        title: "Trades for bushland properties",
        body: "Gardeners, tree services and builders benefit from safety information, galleries and coverage pages.",
      },
    ],
    example:
      "Imagine a ceramics studio in Eltham. The site would show current work, workshop dates, a shop or enquiry form for commissions and studio opening times. A page for classes and corporate workshops targets another audience.",
    tip: "Workshop dates drive bookings. Keep them current.",
    qa: [
      {
        q: "Can we sell workshop places online?",
        a: "Yes, via a booking tool linked to the site.",
      },
      {
        q: "Do you build galleries?",
        a: "Yes, organised by collection or year.",
      },
    ],
  },
  {
    name: "Moonee Ponds",
    region: "West",
    character:
      "Moonee Ponds is an inner north-west suburb with Puckle Street, Hall Street, Moonee Ponds Creek and a busy railway station.",
    hook: "Puckle Street and Hall Street support a mix of cafes, professional services and boutiques serving affluent local households.",
    nbrs: ["Essendon", "Ascot Vale", "Flemington"],
    blocks: [
      {
        title: "Cafes and boutiques",
        body: "Venues benefit from strong photos, current hours and booking links, linked to Google profiles.",
      },
      {
        title: "Professional and medical practices",
        body: "Accountants, lawyers and clinics benefit from clear service pages and team profiles.",
      },
      {
        title: "Family and education services",
        body: "Tutors and children's activity providers benefit from clear programs and easy booking.",
      },
    ],
    example:
      "Picture a small accounting practice near Puckle Street. The site would list services for individuals and small business, show the team, publish tax-time guidance and offer a consultation booking. A page for new small businesses explains setup support.",
    tip: "A short guide for new businesses attracts a valuable search audience.",
    qa: [
      {
        q: "Can we publish guides?",
        a: "Yes, and we structure them so Google can read them clearly.",
      },
      {
        q: "Do you link to bookings?",
        a: "Yes, via a link or embed.",
      },
    ],
  },
  {
    name: "Williamstown",
    region: "West",
    character:
      "Williamstown is a historic bayside suburb with Nelson Place's cafes and shops, the waterfront and a thriving visitor economy.",
    hook: "On a sunny weekend the foreshore fills with day-trippers, and the businesses that capture them are the ones with clear, current information online.",
    nbrs: ["Newport", "Altona", "Yarraville"],
    blocks: [
      {
        title: "Visitor-driven hospitality",
        body: "Cafes, restaurants and shops benefit from weekend hours, menus and directions that match how visitors search.",
      },
      {
        title: "Marine and tourism businesses",
        body: "Cruises, charters and marine services benefit from clear descriptions, photos, prices and booking.",
      },
      {
        title: "Local services",
        body: "Home trades and personal services benefit from coverage pages and photos of real jobs.",
      },
    ],
    example:
      "Imagine a small harbour cruise or charter in Williamstown. The site would show tours, schedules, prices, what is included and a booking form. A page for private charters and events targets a higher-value search.",
    tip: "Weather affects bookings. A notice section for cancellations helps customers.",
    qa: [
      {
        q: "Can we take bookings online?",
        a: "Yes, via a booking tool or enquiry form.",
      },
      {
        q: "How do we manage seasonal changes?",
        a: "A simple section for hours and availability keeps customers informed.",
      },
    ],
  },
  {
    name: "Yarraville",
    region: "West",
    character:
      "Yarraville is an inner west suburb with a village centre, the Sun Theatre, Anderson Street's cafes and a strong community feel.",
    hook: "Yarraville Village is a foodie and family destination, and its small businesses thrive on local loyalty.",
    nbrs: ["Footscray", "Williamstown", "Newport"],
    blocks: [
      {
        title: "Village cafes and food",
        body: "Menus, hours and photos matter. We build fast, simple sites that look good on a phone.",
      },
      {
        title: "Family and wellness services",
        body: "Practitioners and children's services benefit from clear information and easy booking.",
      },
      {
        title: "Independent retail",
        body: "Shops benefit from featured products, a clear story and a Google profile that matches.",
      },
    ],
    example:
      "Consider a children's activity studio in Yarraville Village. The site would show classes by age, timetables, fees and a trial class form. A birthday party page captures another valuable search.",
    tip: "Birthday party enquiries are a strong income stream. Give them a page.",
    qa: [
      {
        q: "Can we take party bookings online?",
        a: "Yes, with a form that captures date, numbers and package.",
      },
      {
        q: "Do you add photo galleries?",
        a: "Yes, with attention to consent.",
      },
    ],
  },
  {
    name: "Keilor",
    region: "West",
    character:
      "Keilor is a north-western suburb on the Maribyrnong River with a historic village feel, larger blocks and a mix of residential and rural land.",
    hook: "Keilor's households tend to be established, and local services are often chosen on trust and recommendation.",
    nbrs: ["St Albans", "Tullamarine", "Sunbury"],
    blocks: [
      {
        title: "Local trades and home services",
        body: "Larger properties mean steady demand for landscapers, fencing and maintenance. Galleries and coverage pages help match searches.",
      },
      {
        title: "Village shops and cafes",
        body: "Clear details, photos and reviews support loyalty and attract newcomers.",
      },
      {
        title: "Health and family services",
        body: "Practices benefit from service pages and easy booking.",
      },
    ],
    example:
      "Imagine a landscaper working across Keilor and nearby suburbs. The site would show completed gardens, list services, name areas covered and offer a consultation request. A page on retaining walls and fencing targets specific searches.",
    tip: "Larger blocks need larger jobs. Show scale in your photos.",
    qa: [
      {
        q: "Can we show project size?",
        a: "Yes, with short captions on each project.",
      },
      {
        q: "Do you add coverage pages?",
        a: "Yes, for each suburb you genuinely serve.",
      },
    ],
  },
  {
    name: "St Albans",
    region: "West",
    character:
      "St Albans is a large western suburb with Alfrieda Street's shops, a railway station and a diverse, multilingual community.",
    hook: "Alfrieda Street is a busy local strip, and businesses here serve customers who speak many languages.",
    nbrs: ["Sunshine", "Keilor", "Deer Park"],
    blocks: [
      {
        title: "A multilingual community",
        body: "Plain English, clear pricing and, where useful, key details in other languages help everyone. We design for easy reading on a phone.",
      },
      {
        title: "Food and retail",
        body: "Shops and food businesses benefit from photos, menus, hours and a Google profile that matches.",
      },
      {
        title: "Trades and services",
        body: "Trades benefit from coverage pages and photos of real jobs, with quick contact options.",
      },
    ],
    example:
      "Picture a family-run restaurant on Alfrieda Street. The site would show the menu with photos, opening hours, a booking form and a catering page. Key details are available in a second language.",
    tip: "WhatsApp contact options suit many local customers. Offer one.",
    qa: [
      {
        q: "Can we add a WhatsApp button?",
        a: "Yes, and it often increases enquiries.",
      },
      {
        q: "Do you build menus in two languages?",
        a: "Yes, where it helps your customers.",
      },
    ],
  },
  {
    name: "Springvale",
    region: "South-east",
    character:
      "Springvale is a south-eastern suburb known for its vibrant Buckingham Avenue and Springvale Road shops, a large food scene and a diverse community.",
    hook: "Customers travel to Springvale for specific dishes and groceries they cannot find elsewhere, so businesses that name what they sell tend to win the search.",
    nbrs: ["Noble Park", "Dandenong", "Mulgrave"],
    blocks: [
      {
        title: "A destination for food",
        body: "Restaurants and bakeries benefit from clear cuisine descriptions, menus, hours and photos, in English and, where useful, other languages.",
      },
      {
        title: "Professional services for the community",
        body: "Accountants, migration advisers and health providers benefit from clear pages and, where useful, multilingual details.",
      },
      {
        title: "Retail and trades",
        body: "Shops and trades benefit from accurate details and coverage pages for neighbouring suburbs.",
      },
    ],
    example:
      "Imagine a small accounting practice in Springvale serving local businesses. The site would list services, show the team, offer key pages in another language and provide a booking link for a first meeting. A page for new migrant business owners targets a specific audience.",
    tip: "Language-specific pages can be your biggest differentiator.",
    qa: [
      {
        q: "Which languages can you support?",
        a: "We can add key pages in the languages your customers use, with a native speaker reviewing the text.",
      },
      {
        q: "Do you handle menus in two languages?",
        a: "Yes.",
      },
    ],
  },
  {
    name: "Pakenham",
    region: "South-east",
    character:
      "Pakenham is a major south-eastern growth suburb with a town centre, a railway terminus and rapid residential growth.",
    hook: "Pakenham's rapid growth means new residents are constantly looking for local providers, and competition is lower than in older suburbs.",
    nbrs: ["Officer", "Berwick", "Cranbourne"],
    blocks: [
      {
        title: "A growth suburb with new customers",
        body: "New residents search before they ask around. A clear site with a page per service and area helps you become their first choice.",
      },
      {
        title: "Trades and home services",
        body: "New homes mean demand for landscapers, fencers, cleaners and installers. Galleries and coverage pages for Pakenham and nearby areas help.",
      },
      {
        title: "Health and family services",
        body: "Practices, childcare and tutors benefit from clear information and easy booking.",
      },
    ],
    example:
      "Consider a concreting and paving business in Pakenham. The site would show driveways and patios, explain materials and timelines and offer a quote form that asks for the size and suburb. A page for new-home packages targets recent buyers.",
    tip: "New-home owners search for bundles. Package your services and say so.",
    qa: [
      {
        q: "Can we promote packages for new homes?",
        a: "Yes, with a page written for that audience.",
      },
      {
        q: "Do you cover Officer and Berwick?",
        a: "Yes, with separate pages for each area you serve.",
      },
    ],
  },
  {
    name: "Bentleigh",
    region: "South-east",
    character:
      "Bentleigh is a popular south-eastern suburb with Centre Road's shops, cafes, a railway station and a mix of young families and long-time residents.",
    hook: "Centre Road Bentleigh is a busy strip where cafes, specialty shops and professional services all compete for local attention.",
    nbrs: ["Moorabbin", "Carnegie", "Caulfield"],
    blocks: [
      {
        title: "Cafes and specialty retail",
        body: "Businesses benefit from strong photography, accurate hours and a Google profile that matches.",
      },
      {
        title: "Family and health services",
        body: "Practices and tutors benefit from clear service pages, fees and easy booking.",
      },
      {
        title: "Home trades",
        body: "Trades benefit from coverage pages for Bentleigh and nearby suburbs and photos of recent jobs.",
      },
    ],
    example:
      "Imagine a small speech therapy practice in Bentleigh. The site would explain each service, show the practitioners, describe what a first session involves, list funding options and offer online booking. A page for parents answers common questions.",
    tip: "Parents ask about funding first. Put it near the top.",
    qa: [
      {
        q: "Can we explain funding options?",
        a: "Yes, in plain language and with up-to-date details you provide.",
      },
      {
        q: "Do you add online booking?",
        a: "Yes, via a form or link.",
      },
    ],
  },
  {
    name: "Caulfield",
    region: "South-east",
    character:
      "Caulfield is a south-eastern suburb with Monash University's Caulfield campus, Caulfield Racecourse, a railway interchange and a diverse community.",
    hook: "Caulfield's student population and racecourse events create steady, changing demand for local services.",
    nbrs: ["Malvern East", "Bentleigh", "Chadstone"],
    blocks: [
      {
        title: "Student services",
        body: "Tutors, cafes, accommodation and printing benefit from clear pricing, location and quick contact options.",
      },
      {
        title: "Event-driven hospitality",
        body: "Venues benefit from keeping event-day hours and offers current on the site and Google profile.",
      },
      {
        title: "Professional and health services",
        body: "Clinics and professional firms benefit from service pages and easy booking.",
      },
    ],
    example:
      "Picture a student tutoring service near the Caulfield campus. The site would list subjects, show tutors and prices and offer a trial session booking form. A page for exam periods captures seasonal demand.",
    tip: "Exam periods bring surges. Plan a page for them.",
    qa: [
      {
        q: "Can we target students without being spammy?",
        a: "Yes. Helpful, specific pages for student needs work well.",
      },
      {
        q: "Do you add event-day notices?",
        a: "Yes, with a simple update section.",
      },
    ],
  },
  {
    name: "Sandringham",
    region: "South-east",
    character:
      "Sandringham is a bayside south-eastern suburb with a village centre on Bay Road, a railway station and a marina and beach nearby.",
    hook: "Sandringham's village is a compact, well-loved centre, and local businesses draw customers from Brighton, Hampton and Black Rock.",
    nbrs: ["Brighton", "Hampton", "Moorabbin"],
    blocks: [
      {
        title: "Village cafes and boutiques",
        body: "Strong photos, accurate hours and a clear story help small businesses stand out in a premium area.",
      },
      {
        title: "Wellness and health",
        body: "Practitioners and studios benefit from calm, clear service pages and easy booking.",
      },
      {
        title: "Marine and lifestyle",
        body: "Marine services and lifestyle businesses benefit from clear service descriptions, photos and coverage across the bay.",
      },
    ],
    example:
      "Consider a boat detailing service near Sandringham's marina. The site would list services and prices, show before-and-after photos, explain insurance and offer a booking form. A page for seasonal packages captures spring demand.",
    tip: "Seasonal packages work well for marine services. Plan them early.",
    qa: [
      {
        q: "Can we show insurance and credentials?",
        a: "Yes, in a clear section customers can find easily.",
      },
      {
        q: "Do you cover nearby suburbs?",
        a: "Yes, with separate pages for each you serve.",
      },
    ],
  },
];
