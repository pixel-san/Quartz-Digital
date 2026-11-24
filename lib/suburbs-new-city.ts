import type { NewSub } from "./suburbs-new";

/* City of Melbourne suburbs. Each entry is written for that suburb only. */

export const NEW_CITY: NewSub[] = [
  {
    name: "Carlton North",
    region: "Inner Melbourne",
    character:
      "Carlton North is a leafy inner-north suburb of Victorian terraces, Princes Park and the Rathdowne Street shops.",
    hook: "Rathdowne Street's cafes, delis and boutiques are mostly independents, and most of their customers live within a few streets.",
    nbrs: ["Carlton", "Fitzroy North", "Brunswick"],
    blocks: [
      {
        title: "Independent shops need local visibility",
        body: "A small shop or cafe on Rathdowne Street competes for neighbours who search on a phone. Accurate hours, a menu or product list and a map pin on both your site and Google listing matter more than elaborate design.",
      },
      {
        title: "Home renovation in heritage streets",
        body: "Terrace owners hire restorers, painters and builders who understand period houses. A site with galleries sorted by job type (extensions, facades, bathrooms) lets those homeowners see work like theirs.",
      },
      {
        title: "Family and wellness practices",
        body: "Physios, psychologists and childcare services here are chosen on trust. Practitioner profiles, a plain explanation of a first visit and easy booking do most of the persuading.",
      },
    ],
    example:
      "Imagine a small bakery near Princes Park. The site would show the weekly specials, opening hours, a pre-order form for celebration cakes and a map. A catering page captures office orders. The Google listing and the site carry the same details, so a search for 'bakery Carlton North' shows consistent information everywhere.",
    tip: "Many Carlton North searches include the street name. Mention Rathdowne Street if you trade there.",
    qa: [
      {
        q: "Can a small cafe benefit from a website if it has a loyal local crowd?",
        a: "Yes. Loyal customers still check hours, and a site brings in people who have never walked past, such as visitors and new residents.",
      },
      {
        q: "Do you handle heritage-style imagery?",
        a: "We design around your own photography, which is what suits period-home trades and boutiques best.",
      },
    ],
  },
  {
    name: "Docklands",
    region: "Inner Melbourne",
    character:
      "Docklands is a waterfront precinct of apartments, offices and hospitality beside Marvel Stadium, the harbour and the Yarra's edge.",
    hook: "Docklands has a large residential and office population but relatively few local services, so well-presented businesses stand out quickly.",
    nbrs: ["Southbank", "West Melbourne", "North Melbourne"],
    blocks: [
      {
        title: "Serving apartment dwellers",
        body: "Thousands of Docklands residents live in towers and search for cleaners, dry cleaners, repair services and personal trainers close by. A page that names the buildings or areas you cover helps you match those searches.",
      },
      {
        title: "Offices and corporate services",
        body: "Professional firms, coworking spaces and corporate caterers are judged on presentation. Clear service pages, team profiles and a quick enquiry route suit busy office buyers.",
      },
      {
        title: "Event-driven hospitality",
        body: "Match days and events change foot traffic. Venues should keep hours, menus and event-day information current on both the site and the Google profile.",
      },
    ],
    example:
      "Picture a mobile cleaning or concierge-style service in Docklands. The site would name the precincts you service, explain what is included, show prices or ranges and offer a booking form. A page for building managers handles regular contracts, which is a different audience from residents.",
    tip: "Add the precinct or building names you work in. Residents search by them.",
    qa: [
      {
        q: "We serve apartment buildings. How do we show that?",
        a: "Create a page for property managers and owners corporations explaining your service, insurance and how you work in buildings.",
      },
      {
        q: "Does the site need to be mobile-first?",
        a: "Yes. Most local searches in dense areas happen on phones.",
      },
    ],
  },
  {
    name: "East Melbourne",
    region: "Inner Melbourne",
    character:
      "East Melbourne is a quiet, established suburb beside the Fitzroy Gardens and Melbourne Cricket Ground, known for its specialist medical and professional rooms.",
    hook: "Victoria Parade and the streets around it hold many consulting rooms, and patients choose specialists largely from what they read online.",
    nbrs: ["Richmond", "Fitzroy", "Carlton"],
    blocks: [
      {
        title: "Specialist practices",
        body: "Patients and referrers want to see qualifications, areas of interest, how to be referred and what to expect. We build a page for each procedure or condition, plus practitioner profiles written clearly.",
      },
      {
        title: "Professional services",
        body: "Lawyers, financial advisers and consultants in the area rely on reputation. A restrained, credible site with clear service descriptions and a simple route to a first meeting fits.",
      },
      {
        title: "Hospitality near the MCG and the gardens",
        body: "Cafes and small venues pick up event-day trade. Current hours, menus and a map are the essentials, and event-day updates keep customers from being turned away.",
      },
    ],
    example:
      "Imagine a specialist clinic in a Victoria Parade consulting suite. The site would include a page for each condition treated, how referrals work, fees and rebates in plain language, and parking and tram information. A short page for GPs explains how to refer, which is often the main source of new patients.",
    tip: "For medical practices, a clear referral page is often the most-used page on the site.",
    qa: [
      {
        q: "Can the site follow advertising rules for health practitioners?",
        a: "Yes. We use wording you approve and avoid claims your profession restricts.",
      },
      {
        q: "Do patients book online?",
        a: "Where your system supports it, we link to booking. Otherwise a clear phone and enquiry form work.",
      },
    ],
  },
  {
    name: "Flemington",
    region: "Inner Melbourne",
    character:
      "Flemington is an inner-west suburb best known for Flemington Racecourse, with a busy Racecourse Road dining strip and a diverse local community.",
    hook: "Racecourse Road's restaurants and cafes serve a mix of locals and visitors, and race days and events bring extra demand.",
    nbrs: ["Kensington", "North Melbourne", "Ascot Vale"],
    blocks: [
      {
        title: "Food businesses on Racecourse Road",
        body: "Restaurants and takeaways compete on photos, cuisine and reviews. A fast mobile menu page, clear hours and a map are the basics, and cuisine terms in titles help match searches.",
      },
      {
        title: "Event and race-day trade",
        body: "Catering, accommodation and transport services near the racecourse benefit from pages describing event-day services and bookings, updated before major events.",
      },
      {
        title: "Community services and trades",
        body: "Local trades and community organisations serve many language groups. Plain language, obvious contact options and, where useful, key details in other languages help.",
      },
    ],
    example:
      "Consider a small restaurant a short walk from the racecourse. The site would show the menu with dish photos, opening hours including event days, a booking link and a catering page for groups. Directions mention the nearby station and tram so visitors can find you.",
    tip: "Update your Google profile hours before big race days. Visitors rely on it.",
    qa: [
      {
        q: "Can we promote event-day offers?",
        a: "Yes. A dedicated page for event-day hours and offers is simple to add and easy to update.",
      },
      {
        q: "Do you build multilingual pages?",
        a: "We can add key pages in additional languages where it helps your customers.",
      },
    ],
  },
  {
    name: "Kensington",
    region: "Inner Melbourne",
    character:
      "Kensington is an inner-west suburb of terraces and warehouses beside the Moonee Ponds Creek, with a mix of creatives, families and small businesses.",
    hook: "Kensington's small studios, trades and cafes sit close to the city, and many of their customers find them through Google Maps first.",
    nbrs: ["Flemington", "North Melbourne", "Footscray"],
    blocks: [
      {
        title: "Studios and creative businesses",
        body: "Photographers, designers and makers need a portfolio that loads fast and shows the work immediately, with a simple enquiry form that captures a brief.",
      },
      {
        title: "Trades serving the inner west",
        body: "Plumbers, electricians and renovators here cover Kensington, Flemington and neighbouring suburbs. A page per area, with real examples, helps you appear across all of them.",
      },
      {
        title: "Cafes and local retail",
        body: "Neighbourhood cafes live on regulars and passing trade. Hours, menu and location, plus a few strong photos, are the core of a good site.",
      },
    ],
    example:
      "Picture a small furniture restorer working from a Kensington workshop. The site would have a gallery of before-and-after pieces, a page describing what you restore and typical timeframes, and an enquiry form that asks for photos. Local pages for nearby suburbs capture pick-up searches.",
    tip: "Photo-led enquiries save time, so let customers upload an image with their message.",
    qa: [
      {
        q: "Can the enquiry form accept photos?",
        a: "Yes, where it suits your business, so you can quote more accurately.",
      },
      {
        q: "Do I need a page for each nearby suburb?",
        a: "Only for those you genuinely serve, written with real detail.",
      },
    ],
  },
  {
    name: "North Melbourne",
    region: "Inner Melbourne",
    character:
      "North Melbourne is an inner suburb of terraces and warehouses, centred on Errol Street's village feel and close to the city and the university precinct.",
    hook: "Errol Street's mix of cafes, small retail and services depends heavily on local reputation and on being easy to find.",
    nbrs: ["West Melbourne", "Parkville", "Kensington"],
    blocks: [
      {
        title: "A village high street",
        body: "Errol Street businesses succeed when they feel local. Real photos, honest descriptions and recent reviews carry more weight than polished stock imagery.",
      },
      {
        title: "Creative and professional offices",
        body: "Design studios, agencies and consultants in converted warehouses need sites that reflect their standard. Clear case studies and a simple way to start a conversation work best.",
      },
      {
        title: "Services near the city edge",
        body: "Trades, health and wellness providers here serve people who live and work nearby. Suburb-specific pages help you appear in searches that name North Melbourne.",
      },
    ],
    example:
      "Imagine an allied health clinic near Errol Street. The site would explain each service, show practitioners, list funding and rebate options and offer online booking. A page covering nearby suburbs captures patients from Kensington and Parkville.",
    tip: "Use Errol Street or a nearby landmark in your location copy. Locals search that way.",
    qa: [
      {
        q: "Is it worth having a site if I mainly get walk-ins?",
        a: "Yes. Walk-ins often check hours and reviews online first, and a site brings in people who have never passed your door.",
      },
      {
        q: "Can you work with an existing logo?",
        a: "Yes. We design around your current brand or help refresh it.",
      },
    ],
  },
  {
    name: "Parkville",
    region: "Inner Melbourne",
    character:
      "Parkville is home to the University of Melbourne, the Royal Melbourne and Royal Children's hospitals and a major research precinct beside Royal Park.",
    hook: "A large student, staff and patient population means constant searches for food, tutoring, accommodation and health services nearby.",
    nbrs: ["Carlton", "North Melbourne", "Brunswick"],
    blocks: [
      {
        title: "Student-focused services",
        body: "Tutors, cafes, printing and accommodation services are searched by students on phones. Clear pricing, location and a quick way to book or enquire are the priorities.",
      },
      {
        title: "Services for hospital staff and visitors",
        body: "Families visiting patients and staff finishing shifts search for food, accommodation and wellbeing services close by. Pages stating walking time from the hospitals help.",
      },
      {
        title: "Research and professional services",
        body: "Consultants and small research-related businesses need credibility. Clear service descriptions, team profiles and publications or credentials, where appropriate, build trust.",
      },
    ],
    example:
      "Consider a short-stay accommodation provider near the hospitals. The site would show room photos, rates, walking distances to the main hospitals, cancellation terms and a booking enquiry form. A page for long-stay visitors explains discounts for extended stays.",
    tip: "Say how many minutes you are from the main campuses or hospitals. It matches how people search.",
    qa: [
      {
        q: "Can we target students without being spammy?",
        a: "Yes. A page of student-specific information and offers is helpful and easy for Google to match.",
      },
      {
        q: "Should accommodation sites take direct bookings?",
        a: "Direct booking keeps more of the revenue, though many businesses also list on platforms. We can set up a simple enquiry or booking link.",
      },
    ],
  },
  {
    name: "Port Melbourne",
    region: "Inner Melbourne",
    character:
      "Port Melbourne is a bayside inner suburb with Bay Street's shops and cafes, a creative and marine business community and the Fishermans Bend redevelopment area.",
    hook: "Bay Street trades on a beachside, village feel, while Fishermans Bend and the surrounding streets host many studios, offices and industrial businesses.",
    nbrs: ["South Melbourne", "Albert Park", "Southbank"],
    blocks: [
      {
        title: "Bay Street retail and hospitality",
        body: "Cafes, boutiques and personal services depend on strong photos, accurate hours and reviews. We build simple, fast sites that make those obvious and tie them to your Google profile.",
      },
      {
        title: "Creative studios and design businesses",
        body: "Studios in converted industrial buildings need portfolios that present work well and a straightforward way to enquire. Case studies with a short brief and outcome work best.",
      },
      {
        title: "Marine and trade businesses",
        body: "Boat services, marine suppliers and trades benefit from pages for each service, areas covered and clear contact details, since customers often search with specific equipment or boat terms.",
      },
    ],
    example:
      "Imagine a small marine services business near the bay. The site would have pages for servicing, repairs and storage, photos of work, coverage along the bay and a quote form asking for boat type and length. Seasonal updates keep the information current.",
    tip: "Customers search for Port Melbourne along with Bay Street or Beacon Cove. Mention them where accurate.",
    qa: [
      {
        q: "Does our studio need a case-study page?",
        a: "Case studies are often the most persuasive part of a creative studio site. We can structure them clearly.",
      },
      {
        q: "Can the site show boat types serviced?",
        a: "Yes, and listing them helps match specific searches.",
      },
    ],
  },
  {
    name: "Southbank",
    region: "Inner Melbourne",
    character:
      "Southbank is a high-density riverside precinct of apartments, offices, the Arts Centre, Crown and the Yarra promenade.",
    hook: "Southbank's mix of residents, office workers and visitors gives businesses a steady flow of searches at lunch, evenings and weekends.",
    nbrs: ["South Wharf", "South Melbourne", "Docklands"],
    blocks: [
      {
        title: "Hospitality along the river",
        body: "Venues compete on location, views and atmosphere. Strong photography, a clear menu, booking links and event information are what turn a search into a visit.",
      },
      {
        title: "Services for apartment residents",
        body: "Dense apartment living creates steady demand for cleaners, trainers, beauty and health services. Pages stating the buildings or precincts you cover help match local searches.",
      },
      {
        title: "Corporate and arts-adjacent businesses",
        body: "Event suppliers, caterers and creative businesses near the Arts Centre benefit from portfolios and clear service pages tailored to corporate buyers.",
      },
    ],
    example:
      "Picture a small personal training studio in a Southbank tower. The site would show class times, trainers, pricing and a free-session booking form, with a page for local workers describing lunchtime sessions. The Google profile mirrors the details and encourages reviews.",
    tip: "Lunchtime and after-work searches peak here. Keep your hours and offers current.",
    qa: [
      {
        q: "How do we reach office workers rather than just residents?",
        a: "A dedicated page for workers, with lunchtime options or corporate packages, matches the way they search.",
      },
      {
        q: "Can the site handle event enquiries?",
        a: "Yes, with a simple form that captures date, numbers and requirements.",
      },
    ],
  },
  {
    name: "South Wharf",
    region: "Inner Melbourne",
    character:
      "South Wharf is a small riverside precinct on the Yarra, home to the Melbourne Convention and Exhibition Centre, DFO shopping and hotels.",
    hook: "Convention and exhibition events bring waves of visitors, and suppliers to those events are chosen months in advance.",
    nbrs: ["Southbank", "Docklands", "West Melbourne"],
    blocks: [
      {
        title: "Event and exhibition suppliers",
        body: "Stand builders, printers, caterers and AV suppliers are found by organisers searching for specific services near the venue. Clear capability pages and a quote form that asks for the event date matter.",
      },
      {
        title: "Visitors and accommodation",
        body: "Hotels and short-stay providers serve conference delegates, who search by venue name and walking distance. Pages that say so match those searches.",
      },
      {
        title: "Retail and hospitality for visitors",
        body: "Shops and cafes near the precinct depend on visitor traffic. Hours, location and what makes you different should be obvious in seconds.",
      },
    ],
    example:
      "Imagine a stand-building and signage business serving exhibitions at the convention centre. The site would have pages for exhibition stands, banners and installation, a portfolio of past events and a quote form requesting event date, size and budget range. A page for organisers explains lead times.",
    tip: "Organisers search by venue and event type. Put both in your service page headings.",
    qa: [
      {
        q: "Do we need a separate site for event work?",
        a: "Usually no. A dedicated section of your main site is enough.",
      },
      {
        q: "Can we show past events?",
        a: "Yes. A portfolio of past events is one of the most persuasive parts of an events supplier's site.",
      },
    ],
  },
  {
    name: "South Yarra",
    region: "Inner Melbourne",
    character:
      "South Yarra is an upmarket inner suburb known for Chapel Street, Toorak Road, a busy railway station and a mix of boutiques, clinics and professional firms.",
    hook: "South Yarra's customers are used to high standards, so a business's website is often judged as part of its quality.",
    nbrs: ["Prahran", "Toorak", "Richmond"],
    blocks: [
      {
        title: "Beauty, fashion and wellness",
        body: "Salons, clinics and boutiques compete on presentation and reviews. We prioritise strong imagery, clear price lists and smooth booking, then connect everything to your Google profile.",
      },
      {
        title: "Medical and cosmetic practices",
        body: "Patients research practitioners carefully. Credentials, procedures explained plainly and honest descriptions of results, within advertising rules, build trust.",
      },
      {
        title: "Real estate and professional services",
        body: "Agents, advisers and lawyers sell on credibility. Case results, team profiles and a straightforward enquiry path make a site feel as considered as the service.",
      },
    ],
    example:
      "Consider a boutique skin clinic near Toorak Road. The site would have a page per treatment, practitioner profiles, a clear explanation of consultations and online booking. A page on first visits and aftercare answers common questions and reduces calls.",
    tip: "In premium markets, fewer, better photos beat many average ones.",
    qa: [
      {
        q: "Do you follow advertising rules for health and beauty?",
        a: "Yes. We use approved wording and avoid restricted claims.",
      },
      {
        q: "Can the site match a premium brand?",
        a: "Yes. We work from your brand and keep the design restrained and fast.",
      },
    ],
  },
  {
    name: "West Melbourne",
    region: "Inner Melbourne",
    character:
      "West Melbourne is a commercial and light-industrial inner suburb beside Southern Cross Station, with warehouses, trade suppliers, hotels and a growing residential population.",
    hook: "Trade suppliers and service businesses here sit minutes from the CBD and rely on being found by both businesses and households.",
    nbrs: ["North Melbourne", "Docklands", "Southbank"],
    blocks: [
      {
        title: "Trade suppliers and workshops",
        body: "Buyers shortlist suppliers online. Pages for each product or service, with opening hours, trade account information and a quick quote form, make shortlisting easy.",
      },
      {
        title: "Accommodation and transport links",
        body: "Hotels and short-stay providers near Southern Cross attract travellers who search by walking distance from the station. Saying so in your headings matches those searches.",
      },
      {
        title: "Creative and professional offices",
        body: "Studios and agencies in converted warehouses need portfolios and credibility. Clear case studies and a simple enquiry form do the work.",
      },
    ],
    example:
      "Imagine a commercial printing or signage supplier in West Melbourne. The site would have pages for each product, turnaround times, file requirements and a quote form with upload. A trade account page explains terms for regular customers.",
    tip: "State turnaround times clearly. Buyers filter suppliers by them.",
    qa: [
      {
        q: "Can the site take file uploads for quotes?",
        a: "Yes, where it suits your business.",
      },
      {
        q: "Do trade customers need a separate page?",
        a: "A short page explaining trade accounts and terms is useful and easy to add.",
      },
    ],
  },
];
