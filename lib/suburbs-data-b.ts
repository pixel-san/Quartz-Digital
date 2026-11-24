import type { SuburbEntry } from "./suburbs-more";

/* Inner Melbourne, north, east and south-east. Every paragraph is written
   for that suburb only. Do not copy text between entries. */

export const DATA_B: SuburbEntry[] = [
  {
    name: "Essendon",
    region: "Inner Melbourne",
    character:
      "Essendon is an established north-western suburb with Mt Alexander Road shops, a mix of period homes and Essendon Fields near the airport.",
    hook: "Older, established suburbs tend to hire on reputation, which means your website has to confirm what neighbours and friends already say about you.",
    nbrs: ["Brunswick", "Tullamarine", "Footscray"],
    blocks: [
      {
        title: "Period homes mean renovation work",
        body: "Essendon's older streets keep builders, restorers, painters and landscapers busy. Homeowners here want to see finished work in houses like theirs, so we build galleries organised by project type, such as extensions, kitchens or facade restoration, rather than one mixed photo wall.",
      },
      {
        title: "Practices and professionals",
        body: "Dentists, physios and accountants along Mt Alexander Road are chosen after a quick check of credentials and reviews. Team pages with qualifications, a clear services list and an obvious way to book earn trust without overselling.",
      },
      {
        title: "Boutiques and cafes",
        body: "Independent shops need their opening hours, location and personality visible in seconds. We keep the design clean and the photography central, and make sure what your Google listing says matches the site exactly.",
      },
    ],
    tip: "Long-established Essendon businesses should say how many years they have operated here. It is a strong signal locally.",
    qa: [
      {
        q: "We have been here for 20 years and rely on referrals. Do we need SEO?",
        a: "Referred customers still look you up. A strong site protects your reputation and also brings in people who have never heard of you.",
      },
      {
        q: "Can you showcase heritage renovation work?",
        a: "Yes. Project galleries with short descriptions of the work are a good fit.",
      },
    ],
  },
  {
    name: "Brunswick",
    region: "Inner Melbourne",
    character:
      "Brunswick is an inner-northern suburb known for Sydney Road, a lively hospitality scene and many creative and independent businesses.",
    hook: "Sydney Road is one of Melbourne's most-searched shopping strips, and visitors come looking for something specific, not just browsing.",
    nbrs: ["Carlton", "Fitzroy", "Essendon"],
    blocks: [
      {
        title: "Independent character, practical details",
        body: "Brunswick customers like businesses with personality, but they still want to know opening hours, whether you take bookings and how to get there. We give the site your voice and keep the practical details impossible to miss.",
      },
      {
        title: "Yoga, fitness and wellness studios",
        body: "Studios compete on class variety and atmosphere. A live timetable, instructor profiles, first-class offers and a simple booking link do more than a long mission statement. We build these pages for speed on phones, since most bookings happen there.",
      },
      {
        title: "Creative and hospitality businesses",
        body: "Cafes, bars and small studios need strong images, current menus or portfolios and an events page. We build flexible pages so you can update specials and events without needing a developer.",
      },
    ],
    tip: "In Brunswick, aesthetics matter. Invest in good photography and keep the design distinctive but fast.",
    qa: [
      {
        q: "Will a distinctive design slow the site down?",
        a: "Not if it is built properly. We optimise images and keep scripts light so a distinctive look still loads quickly.",
      },
      {
        q: "Can the timetable on my site update itself?",
        a: "If your booking platform offers an embed or feed, yes. Otherwise we make it easy to edit.",
      },
    ],
  },
  {
    name: "Preston",
    region: "North",
    character:
      "Preston is a northern suburb centred on High Street, with Preston Market and a mix of long-standing businesses and newer arrivals.",
    hook: "High Street has everything from fruit stalls to physios within a few blocks, and customers compare on price, convenience and reviews.",
    nbrs: ["Brunswick", "Epping", "Fitzroy"],
    blocks: [
      {
        title: "Competing within a few blocks",
        body: "When five similar businesses sit along the same strip, the one with the most complete Google profile and the clearest site usually gets the call. We focus on the basics that separate you from the others: services listed in detail, up-to-date photos and recent reviews shown prominently.",
      },
      {
        title: "Trades serving the north",
        body: "Tilers, plumbers and electricians in Preston often cover Reservoir, Thornbury and Coburg too. We build a page per area you work in, each with real examples, so you appear in searches across the north rather than only in one suburb.",
      },
      {
        title: "Food and market businesses",
        body: "Stallholders and food producers can use a simple site to say what they sell, where and when. Even a one-page site with hours, location and a few photos can outperform a social media page for local searches.",
      },
    ],
    tip: "Ask satisfied High Street customers for Google reviews. A handful of recent ones can lift a listing noticeably.",
    qa: [
      {
        q: "I only run a market stall. Do I need a website?",
        a: "A simple one-page site with your products, location and hours can help people find you between market days.",
      },
      {
        q: "Can I show I cover Reservoir and Thornbury too?",
        a: "Yes. We build separate pages for each area you serve.",
      },
    ],
  },
  {
    name: "Box Hill",
    region: "East",
    character:
      "Box Hill is a major eastern commercial centre, with Box Hill Central, Whitehorse Road, a large hospital and a busy transport interchange.",
    hook: "Box Hill packs more dentists, accountants and restaurants into a small area than most suburbs, so generic pages get lost fast.",
    nbrs: ["Doncaster", "Camberwell", "Ringwood"],
    blocks: [
      {
        title: "One page per treatment or service",
        body: "A dental or medical practice that lists everything on one page competes poorly against rivals with separate pages for each treatment. We build individual pages for services like implants, check-ups or paediatric care, each answering the questions a patient would actually have.",
      },
      {
        title: "Accountants and finance firms",
        body: "Clients choose an accountant on trust and clarity. Pages that explain tax, bookkeeping and business advisory work in plain language, with a short enquiry form and a free-consultation option, work better than lists of jargon.",
      },
      {
        title: "Restaurants and food businesses",
        body: "Box Hill's food scene is competitive and visual. A mobile-friendly menu, location information and photos that load fast are the essentials. We then add pages for catering, events or group bookings if you offer them.",
      },
    ],
    tip: "In a dense market, the pages for specific services are where small practices can beat bigger ones.",
    qa: [
      {
        q: "Should each practitioner have a profile?",
        a: "Yes. Patients and clients like to know who they are seeing, and profiles add useful, unique content.",
      },
      {
        q: "Can you build the site in English and another language?",
        a: "Yes, we can add key pages in an additional language where that helps your customers.",
      },
    ],
  },
  {
    name: "Glen Waverley",
    region: "East",
    character:
      "Glen Waverley is a south-eastern suburb with a busy Kingsway retail strip, a large shopping centre and a strong focus on education.",
    hook: "Education is a defining part of Glen Waverley, and parents researching tutors, music teachers or childcare read carefully before they commit.",
    nbrs: ["Clayton", "Box Hill", "Ringwood"],
    blocks: [
      {
        title: "Tutoring and education providers",
        body: "Parents want to know the subjects, year levels, teaching approach, class sizes and results. We structure the site with a page per subject or program, clear fees and a trial-class booking path, so a parent can decide without having to phone first.",
      },
      {
        title: "Clinics and personal services",
        body: "Dentists, optometrists and beauty providers around Kingsway rely on reviews and convenience. Pages that show the practitioners, services and parking or transport details tend to convert better than generic descriptions.",
      },
      {
        title: "Hospitality along Kingsway",
        body: "Restaurants and bubble tea shops here compete on photos and reviews. We design the site for quick loading, easy menu viewing and clear location information, and link it to your Google profile.",
      },
    ],
    tip: "For education providers, a published timetable and trial-lesson offer is usually the strongest conversion tool.",
    qa: [
      {
        q: "Can parents book a trial lesson online?",
        a: "Yes. We can add a booking form or link to your scheduling tool.",
      },
      {
        q: "Should I show results and testimonials?",
        a: "Genuine ones, yes, with permission. Avoid anything you cannot back up.",
      },
    ],
  },
  {
    name: "Ringwood",
    region: "East",
    character:
      "Ringwood is an outer-eastern hub with Eastland shopping centre, a transport interchange and Maroondah Highway running through it.",
    hook: "Maroondah Highway carries heavy traffic, and Ringwood's trades and automotive businesses serve a wide spread of eastern suburbs beyond the town centre.",
    nbrs: ["Box Hill", "Doncaster", "Glen Waverley"],
    blocks: [
      {
        title: "Trades with a wide patch",
        body: "A Ringwood electrician may work in Croydon, Mitcham and Warrandyte on the same day. We build a page for each area, each with its own details, instead of one page claiming to serve everywhere, which is easier for Google to match to local searches.",
      },
      {
        title: "Automotive businesses",
        body: "Mechanics, tyre shops and auto electricians along the highway need clear service lists, hours, location and easy contact. We include vehicle makes serviced, warranty information and a quote or booking form.",
      },
      {
        title: "Health and retail around Eastland",
        body: "Practices and shops near a large centre benefit from consistent details across the site and Google profile, plus clear parking or access information, which often decides whether someone books.",
      },
    ],
    tip: "List the suburbs you genuinely cover. It helps both customers and Google.",
    qa: [
      {
        q: "How many area pages should I have?",
        a: "As many as you genuinely serve with real detail, usually three to six for a typical trade.",
      },
      {
        q: "Can I add parking and access details?",
        a: "Yes. It is a small addition that makes a real difference for customers.",
      },
    ],
  },
  {
    name: "Doncaster",
    region: "East",
    character:
      "Doncaster is an eastern suburb with a large shopping centre, a busy Doncaster Road corridor and many family homes.",
    hook: "Doncaster is largely residential, so most local searches come from families looking for services close to home.",
    nbrs: ["Box Hill", "Ringwood", "Camberwell"],
    blocks: [
      {
        title: "Family health and wellness",
        body: "Physios, GPs, psychologists and chiropractors serve households across several age groups. We build pages that explain each service in plain language, show who the practitioners are and let patients book online.",
      },
      {
        title: "Beauty and personal care",
        body: "Salons and clinics rely heavily on reviews and results. We feature price lists, before-and-after photos where appropriate, and a simple booking button, then connect the site to your Google listing.",
      },
      {
        title: "Finance, property and local services",
        body: "Mortgage brokers, agents and tutors sell on trust. Clear descriptions of how you work, what it costs and who you help, with real testimonials, give a prospective client the confidence to enquire.",
      },
    ],
    tip: "Residential suburbs favour service-based pages. Describe the exact problem you solve for each page.",
    qa: [
      {
        q: "Do I need online booking?",
        a: "It helps, especially outside business hours. If you already use a booking tool, we link to it.",
      },
      {
        q: "Can you help with Google Business Profile reviews?",
        a: "We can set up the link to request reviews and advise on how to ask for them.",
      },
    ],
  },
  {
    name: "Camberwell",
    region: "East",
    character:
      "Camberwell is an established eastern suburb with the Burke Road shops, Camberwell Junction and a strong professional services community.",
    hook: "Camberwell clients tend to be selective, and a polished, credible website is often the first thing they use to judge a firm.",
    nbrs: ["Hawthorn", "Box Hill", "Doncaster"],
    blocks: [
      {
        title: "Legal and accounting firms",
        body: "A firm's website should explain what it does, who it works for and how engagements begin. We write in plain language, include practitioner profiles with credentials and make it easy to request an initial consultation.",
      },
      {
        title: "Interior and home design",
        body: "Designers and renovators here are hired for taste. Large, well-composed project photography, a short explanation of your process and a clear enquiry route do the work. We build galleries that look sharp and still load quickly.",
      },
      {
        title: "Boutique retail and medical practices",
        body: "Independent shops and specialists benefit from sites that feel as considered as their service. Clean layout, accurate details and strong reviews all reinforce a premium reputation.",
      },
    ],
    tip: "Premium suburbs expect premium presentation, so avoid stock photos where you can.",
    qa: [
      {
        q: "Should lawyers publish fixed fees?",
        a: "Where you can, yes. Clarity on cost helps clients decide, but follow your professional guidelines.",
      },
      {
        q: "How do you handle professional rules on advertising?",
        a: "We follow the wording you approve and avoid claims that your profession restricts.",
      },
    ],
  },
  {
    name: "Hawthorn",
    region: "Inner Melbourne",
    character:
      "Hawthorn is an inner-eastern suburb with Glenferrie Road, Swinburne University and a mix of professional firms, cafes and retailers.",
    hook: "Hawthorn has students, young professionals and long-time residents all searching on the same streets, with very different needs.",
    nbrs: ["Camberwell", "Richmond", "Box Hill"],
    blocks: [
      {
        title: "Serving students and professionals",
        body: "A fitness studio or cafe near Glenferrie Road can appeal to students and office workers alike. Short pages, clear pricing, student offers where relevant and quick booking suit both groups, since neither has much time.",
      },
      {
        title: "Personal trainers and gyms",
        body: "People pick a trainer based on results and rapport. We include your approach, qualifications, client stories where you have permission, and a free-consultation form to start the conversation.",
      },
      {
        title: "Accountants and advisers",
        body: "Hawthorn's professional firms benefit from pages that explain services in specific terms, such as small business accounting versus personal tax, each of which matches a different type of search.",
      },
    ],
    tip: "If you offer a student discount, put it on the page. It is a common search.",
    qa: [
      {
        q: "Can I list class timetables?",
        a: "Yes, and we can embed or link to your booking system.",
      },
      {
        q: "How should a trainer use client testimonials?",
        a: "Only with permission and without exaggerated claims. Honest stories are more convincing.",
      },
    ],
  },
  {
    name: "Richmond",
    region: "Inner Melbourne",
    character:
      "Richmond is an inner-city suburb with Swan Street, Bridge Road and Victoria Street, home to many hospitality, design and retail businesses.",
    hook: "Richmond's main streets sit close to major sporting and event venues, which means demand spikes with the calendar.",
    nbrs: ["Hawthorn", "Fitzroy", "St Kilda"],
    blocks: [
      {
        title: "Event days change the search pattern",
        body: "Hospitality venues see demand surge on match and concert days. A page that lists event-day hours, bookings and menus, kept up to date, captures people searching for 'bar near the MCG' as well as locals.",
      },
      {
        title: "Fitness and wellness studios",
        body: "Gyms and studios here compete for professionals who live and work nearby. A clear timetable, trial offers and an easy online join process give you an edge over rivals who require a phone call.",
      },
      {
        title: "Fashion, retail and design",
        body: "Bridge Road and Swan Street retailers benefit from a site that shows the products well, states opening hours and gives directions, since many customers decide quickly and in person.",
      },
    ],
    tip: "Update your Google Business Profile hours before big events. Customers check.",
    qa: [
      {
        q: "Can I show special event-day hours?",
        a: "Yes, both on your site and your Google profile.",
      },
      {
        q: "Is an online shop worth it for a Richmond boutique?",
        a: "It can be, particularly for items customers buy after visiting. We can scope it with you.",
      },
    ],
  },
  {
    name: "St Kilda",
    region: "Inner Melbourne",
    character:
      "St Kilda is a bayside inner suburb known for its beach, Acland Street and Fitzroy Street, with a strong visitor economy as well as local residents.",
    hook: "St Kilda draws visitors from interstate and overseas, so businesses here are often searched in the evening by someone planning a trip.",
    nbrs: ["Brighton", "Richmond", "Moorabbin"],
    blocks: [
      {
        title: "Visitors and locals search differently",
        body: "A visitor searches 'things to do St Kilda' or 'brunch near the beach', while a resident searches for a specific service. We structure the site so both can find what they want without wading through content aimed at the other.",
      },
      {
        title: "Accommodation and hospitality",
        body: "For accommodation and venues, trust signals matter: genuine photos, clear pricing, cancellation terms and directions. We build those in, along with booking links and structured data so Google shows the right information.",
      },
      {
        title: "Wellness and boutique businesses",
        body: "Yoga studios, massage therapists and independent shops benefit from a calm, simple design and obvious booking options, with details on first-time visits to put new customers at ease.",
      },
    ],
    tip: "Add a short getting-here section (tram, parking, walking time). Visitors look for it.",
    qa: [
      {
        q: "Should my site be in other languages for tourists?",
        a: "It can help for tourism-facing businesses. We can add key pages in the languages your visitors use.",
      },
      {
        q: "Can I take online bookings?",
        a: "Yes, through a link or embed from your existing system.",
      },
    ],
  },
  {
    name: "Carlton",
    region: "Inner Melbourne",
    character:
      "Carlton is an inner-city suburb home to the University of Melbourne, Lygon Street and a strong mix of hospitality, research and professional services.",
    hook: "With a large student and research population, Carlton businesses are searched by people who read quickly and compare many options.",
    nbrs: ["Brunswick", "Fitzroy", "Richmond"],
    blocks: [
      {
        title: "Student-friendly pages",
        body: "Tutors, cafes and study services should lead with price, location and how to contact you. Students scan on mobile between classes, so we keep the pages short, direct and fast, with a clear next step on every page.",
      },
      {
        title: "Lygon Street hospitality",
        body: "Lygon Street restaurants have long histories, and a good site helps tell that story while still doing the practical work of showing the menu, hours and booking options. We balance both.",
      },
      {
        title: "Professional and research-adjacent services",
        body: "Legal, medical and consulting firms near the university need credibility. Team profiles, areas of expertise and clear service descriptions help prospective clients feel they are in the right place.",
      },
    ],
    tip: "If you cater to students, add your location relative to the campus. It is a frequent search term.",
    qa: [
      {
        q: "Can I advertise student discounts on the site?",
        a: "Yes. A dedicated page for student offers is simple to build and easy for Google to find.",
      },
      {
        q: "How do I keep the menu up to date?",
        a: "We build the menu so you can edit it yourself, or we can update it for you.",
      },
    ],
  },
  {
    name: "Fitzroy",
    region: "Inner Melbourne",
    character:
      "Fitzroy is an inner-northern suburb known for Brunswick Street and Smith Street, with many independent shops, studios, bars and creative businesses.",
    hook: "Fitzroy's independents survive on personality, and customers often find them through Google Maps long before they walk through the door.",
    nbrs: ["Brunswick", "Carlton", "Richmond"],
    blocks: [
      {
        title: "Personality without sacrificing the basics",
        body: "Barbers, tattoo studios and independent bars thrive on a distinctive look. We design to match your identity while keeping hours, booking links, prices and the address clear and easy to tap on a phone.",
      },
      {
        title: "Studios and appointment-based services",
        body: "Appointment-based businesses live and die by how easy booking is. We include artist or practitioner profiles, portfolios and a booking path that takes seconds, so a first-time customer does not drop off.",
      },
      {
        title: "Retail and vintage",
        body: "Independent retailers benefit from showing what is in store. We build simple, editable pages for new arrivals or featured items, and link them to your Google listing and social channels.",
      },
    ],
    tip: "Keep your Google Maps photos current. Fitzroy browsers judge a venue by them.",
    qa: [
      {
        q: "Can a tattoo studio show portfolio images online?",
        a: "Yes. Portfolios are a core part of a studio site, organised by style or artist.",
      },
      {
        q: "Is a website better than relying on Instagram?",
        a: "They do different jobs. Instagram builds your look; a website converts searches into bookings.",
      },
    ],
  },
  {
    name: "Dandenong",
    region: "South-east",
    character:
      "Dandenong is the south-east's main commercial centre, with Dandenong Market, a large industrial area in Dandenong South and a diverse community.",
    hook: "Dandenong South is one of Victoria's largest industrial precincts, and its suppliers are found online by buyers across the state.",
    nbrs: ["Clayton", "Narre Warren", "Cranbourne"],
    blocks: [
      {
        title: "Industrial suppliers and manufacturers",
        body: "Buyers searching for a supplier want product ranges, capacity, certifications and lead times. We build clear catalogue and capability pages, each with its own detail, and a quote form that captures specification, quantity and delivery location.",
      },
      {
        title: "Food businesses and market traders",
        body: "Food producers and market traders serve a wide customer base. A simple site with your products, location, hours and any wholesale information helps both retail customers and trade buyers find you.",
      },
      {
        title: "Mechanics and trades",
        body: "Workshops and trades in and around Dandenong rely on local search. We list the services, makes and areas you cover and make calling or requesting a quote effortless on a phone.",
      },
    ],
    tip: "If you supply wholesale, give it its own page. Trade buyers search differently from retail customers.",
    qa: [
      {
        q: "Can the site list wholesale and retail separately?",
        a: "Yes, with separate pages and separate enquiry routes.",
      },
      {
        q: "How do I get found by buyers outside Dandenong?",
        a: "Pages describing the regions and industries you supply help you appear in searches beyond your suburb.",
      },
    ],
  },
  {
    name: "Clayton",
    region: "South-east",
    character:
      "Clayton is a south-eastern suburb best known for Monash University and the Monash Medical Centre, alongside a large industrial area.",
    hook: "Clayton has a large research and medical presence, plus a student population that searches for everything on a phone.",
    nbrs: ["Glen Waverley", "Dandenong", "Moorabbin"],
    blocks: [
      {
        title: "Allied health near a medical centre",
        body: "Patients and staff around Monash Medical Centre look for physio, psychology and pharmacy services nearby. We build pages for each service, explain referral and funding options and make booking simple.",
      },
      {
        title: "Student-focused businesses",
        body: "Restaurants, tutors and service providers near the university benefit from short, price-led pages and mobile-friendly menus or booking. Offers aimed at students help you stand out.",
      },
      {
        title: "Industrial and trade suppliers",
        body: "Clayton's industrial area supports many suppliers and contractors. Capability pages and clear quote forms are the way to be found by business buyers.",
      },
    ],
    tip: "Mention the campus or hospital by name if you are close. People search that way.",
    qa: [
      {
        q: "Is it worth targeting students?",
        a: "If your business suits them, yes. Student-specific offers and pages can capture a lot of local search.",
      },
      {
        q: "Can I list direct-billing or funding options?",
        a: "Yes. Patients search for them, so state them clearly.",
      },
    ],
  },
  {
    name: "Narre Warren",
    region: "South-east",
    character:
      "Narre Warren is a south-eastern suburb in the City of Casey, home to the large Fountain Gate shopping centre and many growing families.",
    hook: "Casey is one of Victoria's fastest-growing areas, and Narre Warren sits at the centre of it, with plenty of new households choosing local providers.",
    nbrs: ["Berwick", "Dandenong", "Cranbourne"],
    blocks: [
      {
        title: "Growing families, growing demand",
        body: "Family-focused businesses, from childcare to hairdressers, serve households that are still settling in. Clear information, easy online contact and strong reviews help you become the default choice for a newcomer.",
      },
      {
        title: "Tradies across Casey",
        body: "A Narre Warren landscaper or plumber often covers Berwick, Hampton Park and Cranbourne too. We create a page per area, each with its own wording and examples, so you can be found in each.",
      },
      {
        title: "Competing with the big centre",
        body: "Independent hairdressers and beauty providers compete with chains in Fountain Gate. A personal, specific site with real photos and reviews helps you offer something the chains do not.",
      },
    ],
    tip: "Narre Warren customers often compare several local options, so make your points of difference obvious.",
    qa: [
      {
        q: "Do I need a page for Hampton Park and Berwick too?",
        a: "If you genuinely serve them, yes. Each page matches its own searches.",
      },
      {
        q: "Can the site take enquiries for after-hours?",
        a: "Yes. A simple enquiry form works around the clock and sends the details straight to you.",
      },
    ],
  },
  {
    name: "Cranbourne",
    region: "South-east",
    character:
      "Cranbourne is a growth suburb on Melbourne's south-eastern edge, with a mix of established town centre and new estates.",
    hook: "Cranbourne sits at the edge of the metropolitan area, where the line between suburban and rural business is thin.",
    nbrs: ["Narre Warren", "Berwick", "Dandenong"],
    blocks: [
      {
        title: "Trades and construction",
        body: "New estates keep builders, concreters and landscapers busy. We create service pages with project photos, material details and a clear quote request, so homeowners can judge your work before calling.",
      },
      {
        title: "Rural and horse-related services",
        body: "On the outskirts, rural supply, farrier, vet and horse services serve customers who search by location and speciality. We make sure your site shows the exact services and the areas you cover.",
      },
      {
        title: "Mobile services across the south-east",
        body: "Mobile groomers, mechanics and cleaners often cover multiple suburbs. A page for each, listing where you travel and how to book, helps you rank in each area instead of just one.",
      },
    ],
    tip: "Cranbourne customers search by estate and nearby town names, so include them in your coverage pages.",
    qa: [
      {
        q: "What should a rural business put on its site?",
        a: "Services, service area, contact details and a clear explanation of how enquiries and call-outs work.",
      },
      {
        q: "Does a new-estate suburb have much competition?",
        a: "Less than inner suburbs, which is why a good site can make a visible difference.",
      },
    ],
  },
  {
    name: "Berwick",
    region: "South-east",
    character:
      "Berwick is a south-eastern suburb with a village centre, a hospital precinct and a mix of established homes and new estates.",
    hook: "Berwick Village has a distinct feel, and local businesses benefit from a site that reflects it rather than looking like everyone else's.",
    nbrs: ["Narre Warren", "Cranbourne", "Dandenong"],
    blocks: [
      {
        title: "Village-style retail and cafes",
        body: "Boutiques and cafes thrive on a sense of place. We design around your story and photography, include the practical details, and make sure Google shows the same hours and address as the site.",
      },
      {
        title: "Health practices near the hospital precinct",
        body: "Specialists and allied health providers benefit from clear descriptions of services and referral processes. We make it easy for patients and GPs to find the information they need.",
      },
      {
        title: "Established and new-estate households",
        body: "Berwick has long-time residents and new arrivals. Plumbers, painters and cleaners can use area pages to speak to both, and highlight years of local experience for those who value it.",
      },
    ],
    tip: "Reference Berwick Village by name if you trade there. Locals do.",
    qa: [
      {
        q: "How do I reflect a village feel online?",
        a: "Real photos, a warm tone and local references do more than stock imagery.",
      },
      {
        q: "Can GPs find my referral information easily?",
        a: "Yes. We add a dedicated referrals page with the details they need.",
      },
    ],
  },
  {
    name: "Frankston",
    region: "South-east",
    character:
      "Frankston is a bayside city on the edge of the Mornington Peninsula, with a busy centre, a pier and a large local population.",
    hook: "Frankston is the gateway to the Peninsula, and many local businesses serve customers well beyond the city itself.",
    nbrs: ["Cranbourne", "Dandenong", "Moorabbin"],
    blocks: [
      {
        title: "Covering the wider Peninsula",
        body: "A Frankston tradesperson may serve Langwarrin, Seaford and Mornington. We build a page for each, with local examples, so customers searching in those suburbs find you rather than only a competitor based there.",
      },
      {
        title: "Marine and boating businesses",
        body: "Boat services, chandlers and charters need a site that shows the work, lists services and prices where possible, and makes enquiries easy. Seasonal updates keep the information accurate.",
      },
      {
        title: "Health and hospitality",
        body: "Physios, dentists and cafes in the Frankston centre benefit from consistent details across site and profile, accurate hours and honest photography. Clear booking paths convert searches into appointments.",
      },
    ],
    tip: "If you serve the Peninsula, say which suburbs. Customers there search by suburb name.",
    qa: [
      {
        q: "Can I rank outside Frankston itself?",
        a: "With a separate page for each area, yes. Results depend on competition in each.",
      },
      {
        q: "Do you handle seasonal businesses?",
        a: "Yes. We build the site so hours and offers can be changed easily through the year.",
      },
    ],
  },
  {
    name: "Moorabbin",
    region: "South-east",
    character:
      "Moorabbin is a south-eastern suburb with Moorabbin Airport, a large industrial and commercial area and a long-established business community.",
    hook: "Moorabbin's mix of airport, workshops and trades means many customers are businesses searching for suppliers and specialists.",
    nbrs: ["Brighton", "Clayton", "St Kilda"],
    blocks: [
      {
        title: "Automotive and workshop businesses",
        body: "Mechanics, panel shops and specialists need pages for each service and vehicle type, plus prices or price ranges where possible. We also feature accreditations and warranties, which buyers look for.",
      },
      {
        title: "Aviation and specialist suppliers",
        body: "Airport-linked services such as flight training, maintenance and supplies are niche and technical. We write clear pages for each offering, state qualifications and approvals and provide a direct enquiry route.",
      },
      {
        title: "Trades and industrial suppliers",
        body: "Plumbers, electricians and industrial suppliers across Moorabbin serve both homes and businesses. We create separate pages for residential and commercial work so each audience finds what suits them.",
      },
    ],
    tip: "Show your accreditations and insurance. Business buyers check.",
    qa: [
      {
        q: "We serve both homes and businesses. Do we need two sections?",
        a: "Yes. Separate pages let each audience see relevant work and information.",
      },
      {
        q: "Can I list the vehicle makes I specialise in?",
        a: "Yes, and it helps match searches for specific brands.",
      },
    ],
  },
  {
    name: "Brighton",
    region: "South-east",
    character:
      "Brighton is an established bayside suburb known for Church Street, Bay Street, its beaches and a high-end residential and retail market.",
    hook: "Brighton customers expect a high standard, and a website is part of how a business shows it meets it.",
    nbrs: ["St Kilda", "Moorabbin", "Camberwell"],
    blocks: [
      {
        title: "Presentation as part of the product",
        body: "Boutiques, designers and specialists here are chosen partly on how they present themselves. We pay close attention to typography, photography and layout, so the site reflects the quality of the service rather than undermining it.",
      },
      {
        title: "Health and wellness practices",
        body: "Osteopaths, dermal clinics and personal trainers in Brighton compete on reputation. We feature practitioner profiles, services explained in calm, plain language and an easy booking path.",
      },
      {
        title: "Home design and renovation",
        body: "Architects, builders and interior designers are hired after reviewing portfolios. We build image-led project pages with short descriptions of the brief and the result, plus a clear way to start a conversation.",
      },
    ],
    tip: "For high-end services, show a few projects in depth rather than many in brief.",
    qa: [
      {
        q: "Do you build image-heavy sites that still load fast?",
        a: "Yes. We optimise images and structure pages so they look sharp without slowing down.",
      },
      {
        q: "Can the site match an existing brand?",
        a: "Yes, we work from your logo, colours and tone, or help create one.",
      },
    ],
  },
];
