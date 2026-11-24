import type { SuburbEntry } from "./suburbs-more";

/* West, north-west and north. Every paragraph here is written for that
   suburb only. Do not copy text between entries. */

export const DATA_A: SuburbEntry[] = [
  {
    name: "Altona",
    region: "West",
    character:
      "Altona is a bayside suburb in Melbourne's west, known for its beach, the Pier Street shops and a mix of long-time residents and young families.",
    hook: "Walk Pier Street on a sunny weekend and you can see how much of Altona's trade depends on being found quickly by someone nearby with a phone in their hand.",
    nbrs: ["Laverton", "Williams Landing", "Hoppers Crossing"],
    blocks: [
      {
        title: "Beach-side businesses have two audiences",
        body: "A cafe or beauty studio near the water serves regulars all year and day-trippers in summer. Those groups search differently: locals type 'hairdresser Altona', visitors type 'cafe near Altona Beach'. A site with a page for each, plus current hours and a map pin, catches both rather than only the one you happened to think about.",
      },
      {
        title: "What a good Altona tradie page contains",
        body: "Behind the beachfront are plenty of houses needing plumbers, painters and sparkies. For these, the page that wins is practical: the suburbs covered (Altona, Altona Meadows, Seaholme), the jobs you take on, a licence number, three real photos and a phone number that works from a tap. We leave out the fluff.",
      },
      {
        title: "Seasonal swings are worth planning for",
        body: "Hospitality and wellness traffic in a bayside suburb rises and falls with the weather. We build in an easy way to update opening hours, specials and events so the page and your Google listing never contradict each other in peak season.",
      },
    ],
    tip: "Pier Street foot traffic means your Google listing photos are often the first thing a visitor sees, so keep them fresh.",
    qa: [
      {
        q: "I run a cafe near the beach. What matters most on the site?",
        a: "Accurate hours, a menu people can read on a phone, your location and a few strong photos. Everything else is secondary for a walk-in business.",
      },
      {
        q: "Can one site cover Altona and Altona North?",
        a: "Yes, but we would give each suburb its own page so each can match its own searches.",
      },
    ],
  },
  {
    name: "Sunshine",
    region: "West",
    character:
      "Sunshine is one of the west's main hubs, with a major railway station, a busy shopping strip along Hampshire Road and a large local population.",
    hook: "Thousands of people pass through Sunshine every day without stopping, which makes the ones who search for a service while they are there worth winning.",
    nbrs: ["Footscray", "Caroline Springs", "Essendon"],
    blocks: [
      {
        title: "A transport hub changes how people search",
        body: "Commuters search for a dentist, a tailor or a repair shop during a lunch break or on the train home. They read on a small screen, with patchy attention, and want the address and opening hours immediately. For Sunshine businesses we put those two things at the top of every page.",
      },
      {
        title: "Trades and builders around Sunshine",
        body: "The surrounding streets have a lot of older housing, which means steady demand for renovators, roof repairers and electricians. A builder's site should lead with finished projects and a clear explanation of how quoting works, since homeowners are wary of vague prices.",
      },
      {
        title: "Medical and dental practices",
        body: "Practices in a busy centre compete on trust and convenience. We build a page per treatment, show the practitioners, and make booking one tap. Where a practice already uses an online booking system, we link to it rather than replacing it.",
      },
    ],
    tip: "Sunshine searches often come from phones in transit, so speed and a visible phone number matter more than polish.",
    qa: [
      {
        q: "My shop is on Hampshire Road. How do I show up for people nearby?",
        a: "Start with your Google Business Profile: correct address, hours and photos. Then a site page that mentions Sunshine and what you sell, so Google can connect the two.",
      },
      {
        q: "Does it help to mention nearby suburbs?",
        a: "If you genuinely serve them, yes. A trade or mobile service can have a page each for Sunshine, Footscray and Caroline Springs.",
      },
    ],
  },
  {
    name: "Footscray",
    region: "West",
    character:
      "Footscray is an inner-west suburb with a busy market, a strong food scene and a mix of long-established and brand-new businesses along Barkly Street and Hopkins Street.",
    hook: "Few Melbourne suburbs have as many independent food businesses per street, and most of them are competing for the same few search results.",
    nbrs: ["Sunshine", "Brunswick", "Altona"],
    blocks: [
      {
        title: "Food businesses win on photos and clarity",
        body: "A Footscray restaurant is judged first on pictures and second on whether the menu, price range and opening hours are obvious. We build menu pages that load fast, show dishes properly and handle dietary information, rather than a PDF menu a phone can barely open.",
      },
      {
        title: "Creative studios and independents",
        body: "Designers, photographers and makers around Footscray need a portfolio that shows work immediately and a clear way to enquire. We keep the structure simple so the work does the talking, and add a short brief form so enquiries arrive with useful details.",
      },
      {
        title: "Standing out in a crowded search",
        body: "Searches like 'restaurant Footscray' return dozens of options. The ones that rank have complete Google profiles, recent reviews and a website that confirms the same details. We set up that consistency, then help you add pages for specific dishes, events or catering.",
      },
    ],
    tip: "Reviews with photos on Google do a lot of the selling for Footscray food businesses, so ask for them.",
    qa: [
      {
        q: "Do I need a website if I already have a busy Instagram?",
        a: "Instagram builds a following, but a website is what turns a search into a booking or an order. The two work best together.",
      },
      {
        q: "Can you handle online ordering links?",
        a: "We can link to your existing ordering or booking platform from the site so customers can act straight away.",
      },
    ],
  },
  {
    name: "Melton",
    region: "West",
    character:
      "Melton is an outer-western growth area with new housing estates, a town centre and rapid population growth.",
    hook: "In a suburb where thousands of new households arrive each year, being the first credible result is worth far more than being the cheapest.",
    nbrs: ["Caroline Springs", "Sunbury", "Sunshine"],
    blocks: [
      {
        title: "New residents search before they ask around",
        body: "Someone who has just moved to a new estate does not yet know a local plumber or landscaper. They search, skim two or three results and call one. A Melton business with a clear site and good reviews is the one that gets that first job, which often becomes years of repeat work.",
      },
      {
        title: "Landscapers, fencers and outdoor trades",
        body: "New estates mean new backyards. Before-and-after photos, the types of work you do (decking, turf, retaining walls) and an honest note about lead times are what homeowners want to see. We build galleries that load fast and quote forms that ask for a rough size and suburb.",
      },
      {
        title: "Mobile services and childcare",
        body: "Mobile groomers, cleaners and tutors travel across the area, while childcare centres serve fixed catchments. The first group needs service-area pages; the second needs a clear explanation of programs, fees and how to enrol.",
      },
    ],
    tip: "Add the specific estates or neighbourhoods you work in, since newer residents often search by estate name.",
    qa: [
      {
        q: "Is Melton too small a market to bother with SEO?",
        a: "It is growing fast, and growth areas tend to have less established local competition. That makes a good site more valuable, not less.",
      },
      {
        q: "Do you cover Melton South and Melton West?",
        a: "Yes. We can build pages for each area you service.",
      },
    ],
  },
  {
    name: "Caroline Springs",
    region: "West",
    character:
      "Caroline Springs is a planned residential suburb in the west, centred on its lake, town centre and family-focused estates.",
    hook: "A planned suburb has a clear centre, and businesses near it tend to be found by people who already live within a short drive.",
    nbrs: ["Sunshine", "Melton", "Sydenham"],
    blocks: [
      {
        title: "Family services need clear next steps",
        body: "Tutors, swimming teachers and kids' activity providers are chosen by parents who are comparing quickly. The site should state ages, class times, prices and how to book in plain language, because a parent who cannot find those in ten seconds moves on.",
      },
      {
        title: "Health and wellness practices",
        body: "Physios, psychologists and beauty clinics around Caroline Springs benefit from pages that explain who they help and what a first appointment involves. We write these in a calm, plain style and add practitioner profiles to build trust.",
      },
      {
        title: "Real estate and finance",
        body: "Agents and brokers rely on reputation, so recent results, testimonials and clear contact details matter. We build those sections in, with structured data so Google can display your profile accurately.",
      },
    ],
    tip: "Many Caroline Springs searches mention the suburb name directly, so make sure it appears in your page titles and headings.",
    qa: [
      {
        q: "I teach from home. Can I still show up locally?",
        a: "Yes. A service-area Business Profile and a site that names the suburbs you teach in can appear without publishing your home address.",
      },
      {
        q: "How do I handle bookings on the site?",
        a: "We link to your existing booking system or add a simple enquiry form, depending on what you use now.",
      },
    ],
  },
  {
    name: "Sunbury",
    region: "North",
    character:
      "Sunbury is a town on Melbourne's north-western fringe with its own town centre, a V/Line rail connection and a growing residential population.",
    hook: "Sunbury people often prefer to hire locally rather than travel into the city, which is a real advantage if your site makes clear you are nearby.",
    nbrs: ["Craigieburn", "Melton", "Tullamarine"],
    blocks: [
      {
        title: "A town feel that rewards local identity",
        body: "Sunbury customers respond to businesses that sound like they belong to the area. Mentioning the places you work, using real photos from local jobs and showing reviews from nearby customers builds more trust than generic stock imagery ever will.",
      },
      {
        title: "Rural and lifestyle suppliers",
        body: "On the town's outskirts there are acreage properties, farm suppliers and equine services. These customers search for specific products and services, so a clear catalogue, delivery areas and a phone number are better than a polished brochure.",
      },
      {
        title: "Trades covering the wider north-west",
        body: "A Sunbury tradie often travels to Diggers Rest, Bulla or Melton. We build one page per area you cover so each can be found on its own, rather than lumping them all under 'north-west Melbourne'.",
      },
    ],
    tip: "Add a short line about how long you have worked in Sunbury, since longevity counts for a lot in smaller communities.",
    qa: [
      {
        q: "Is it worth having separate pages for nearby towns?",
        a: "If you genuinely work there, yes. Each page matches searches for that town.",
      },
      {
        q: "I sell rural supplies. Can the site list products?",
        a: "Yes, as a catalogue with enquiry buttons, or as a full online shop if you want to sell directly.",
      },
    ],
  },
  {
    name: "Tullamarine",
    region: "North",
    character:
      "Tullamarine is best known for Melbourne Airport and for its industrial and logistics areas, with a smaller residential community around them.",
    hook: "Most of Tullamarine's businesses sell to other businesses, and those buyers will shortlist you from a screen before they ever pick up the phone.",
    nbrs: ["Essendon", "Broadmeadows", "Sunbury"],
    blocks: [
      {
        title: "Capability pages beat slogans",
        body: "A freight company or manufacturer is judged on what it can handle: volumes, lead times, accreditations, coverage. We build dedicated pages for each service line with those facts stated plainly, which is also what search engines match to business queries.",
      },
      {
        title: "Airport-adjacent services",
        body: "Accommodation, parking, transport and food businesses near the airport serve travellers searching on a phone, often under time pressure. Fast pages, clear pricing, travel times to terminals and instant contact options are what convert them.",
      },
      {
        title: "Quote forms that save time",
        body: "For industrial suppliers, a good quote form asks the right questions up front: quantity, delivery location, timeframe. That filters poor-fit enquiries and gets you a useful request instead of a vague one.",
      },
    ],
    tip: "Add your ABN, certifications and any industry memberships to the site. Business buyers look for them.",
    qa: [
      {
        q: "We only sell business to business. Do we need SEO?",
        a: "Buyers research suppliers online. Being on page one for your product and region puts you on shortlists you would not otherwise be on.",
      },
      {
        q: "Can you build a site with downloadable spec sheets?",
        a: "Yes. PDFs and specification downloads are straightforward to include.",
      },
    ],
  },
  {
    name: "Craigieburn",
    region: "North",
    character:
      "Craigieburn is a large northern growth suburb with the Craigieburn Central shopping centre, a railway station and many young families.",
    hook: "Craigieburn has grown across several distinct estates, and residents often search using the name of the one they live in.",
    nbrs: ["Epping", "Broadmeadows", "Sunbury"],
    blocks: [
      {
        title: "Neighbourhood-level pages capture more searches",
        body: "A mobile service in Craigieburn might work across Craigieburn West, Aston, Highlands and Mickleham. Each of those is something a resident could type. We build pages for the neighbourhoods you serve, each with its own detail, instead of one page that tries to cover them all.",
      },
      {
        title: "Beauty, grooming and personal services",
        body: "Salons and mobile beauty providers depend on bookings and reviews. We feature a clear price list, photos of real results, your availability and an easy booking link, then connect the site to your Google profile so ratings show up beside your name.",
      },
      {
        title: "Cleaners, mechanics and mobile trades",
        body: "Mobile mechanics and carpet cleaners work from a van, not a shopfront. The site is their shopfront: services, prices where possible, coverage area, and a message button that works at 7pm after a long day.",
      },
    ],
    tip: "Craigieburn customers often message first rather than call, so offer a text or WhatsApp option.",
    qa: [
      {
        q: "Do I need a page for each estate?",
        a: "Only for the ones you actually serve. Quality beats quantity: a handful of well-written pages is better than twenty thin ones.",
      },
      {
        q: "Can you add WhatsApp or SMS contact buttons?",
        a: "Yes. Messaging buttons are a quick addition and often increase enquiries from mobile visitors.",
      },
    ],
  },
  {
    name: "Epping",
    region: "North",
    character:
      "Epping is a northern suburb with a major shopping centre, the Northern Hospital nearby and a mix of residential and industrial areas.",
    hook: "Proximity to a major hospital brings a steady flow of health-related searches, from physio and pharmacy to specialist referrals.",
    nbrs: ["Craigieburn", "Broadmeadows", "Preston"],
    blocks: [
      {
        title: "Allied health near a hospital",
        body: "Patients leaving hospital often need follow-up care such as physio, podiatry or counselling, and search for providers close by. A clear page per service, a note on referrals and funding options, and easy online booking make you easy to choose.",
      },
      {
        title: "Retail and food around the centre",
        body: "Businesses near a large centre compete with chain stores. A small shop can stand out by telling a story: what you make or recommend, why customers come back, and where exactly you are. We help you write that, then make it findable.",
      },
      {
        title: "Industrial suppliers in the north",
        body: "Epping's industrial areas include suppliers, workshops and contractors who rely on trade enquiries. We build clear service pages with delivery and coverage information and a quote form that asks for the details you need.",
      },
    ],
    tip: "If you accept referrals or work with funding schemes, say so clearly. Patients search for it.",
    qa: [
      {
        q: "Can the site list my referral process?",
        a: "Yes. A short page explaining who can refer, what to bring and how long it takes helps patients and referrers alike.",
      },
      {
        q: "Does being near a hospital help my SEO?",
        a: "Not by itself, but mentioning your location and services clearly helps Google match you to relevant local searches.",
      },
    ],
  },
  {
    name: "Broadmeadows",
    region: "North",
    character:
      "Broadmeadows is a large northern suburb with a long industrial history, a regional shopping and civic centre and a diverse community.",
    hook: "Broadmeadows businesses serve customers from many backgrounds, which makes clear, simple, scannable pages more important than clever copy.",
    nbrs: ["Craigieburn", "Tullamarine", "Epping"],
    blocks: [
      {
        title: "Plain language works across communities",
        body: "When your customers speak many first languages, short sentences, obvious buttons and clear pricing help everyone. We write in plain English, and where it makes sense we can add key details in other community languages.",
      },
      {
        title: "Automotive businesses",
        body: "Mechanics, panel beaters and tyre shops are among the most-searched local services. The pages that win list the services and car makes you handle, show your hours and location, and make a phone call one tap away.",
      },
      {
        title: "Community and professional services",
        body: "Community organisations, migration agents, accountants and health providers need to establish trust fast. Staff profiles, credentials and straightforward explanations of how the first meeting works make the difference.",
      },
    ],
    tip: "A Google Business Profile with accurate hours and plenty of recent reviews is often the first thing customers see here.",
    qa: [
      {
        q: "Can the website be in more than one language?",
        a: "Yes, we can add key pages in additional languages where it helps your customers.",
      },
      {
        q: "What is the best first step for a mechanic?",
        a: "Claim and complete your Google Business Profile, then build a site with a page for each service you offer.",
      },
    ],
  },
];
