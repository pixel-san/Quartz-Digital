import type { NewSub } from "./suburbs-new";

/* Eastern suburbs, part B: Whitehorse, Knox, Yarra Ranges, Monash.
   Each entry is written for that suburb only. */

export const NEW_EAST_B: NewSub[] = [
  {
    name: "Blackburn",
    region: "East",
    character:
      "Blackburn is a leafy eastern suburb around Blackburn Lake, with a village shopping strip on Whitehorse Road and a railway station.",
    hook: "Blackburn's village strip is a destination for locals, and nearby businesses compete for the same loyal customers.",
    nbrs: ["Box Hill", "Nunawading", "Blackburn South"],
    blocks: [
      {
        title: "Village cafes and shops",
        body: "Small venues benefit from consistent hours, menus and photos on both the site and Google profile, and a story that sounds local.",
      },
      {
        title: "Allied health and family services",
        body: "Practices and tutors serve families across several suburbs. Service pages and easy booking help them stand out.",
      },
      {
        title: "Home services",
        body: "Gardeners, builders and cleaners benefit from project galleries and coverage pages for Blackburn and neighbouring suburbs.",
      },
    ],
    example:
      "Imagine a cafe near Blackburn Lake. The site would show the menu, opening hours, a map and a catering page for local events. A short page about the owners and suppliers adds personality, and the Google profile mirrors it.",
    tip: "Locals use Blackburn Lake as a landmark. Mention it in your location copy.",
    qa: [
      {
        q: "How often should we update the menu?",
        a: "Whenever it changes. We make it quick to edit so it never goes stale.",
      },
      {
        q: "Do you handle catering enquiries?",
        a: "Yes, with a form that captures date, numbers and requirements.",
      },
    ],
  },
  {
    name: "Blackburn South",
    region: "East",
    character:
      "Blackburn South is a quieter residential suburb with the Blackburn South shopping centre on Canterbury Road and nearby Deakin University's Burwood campus within reach.",
    hook: "Blackburn South's local centre competes with nearby larger centres, so local clarity wins customers.",
    nbrs: ["Blackburn", "Burwood", "Box Hill South"],
    blocks: [
      {
        title: "A local centre with local customers",
        body: "Shops and services benefit from clear details and reviews that show you are trusted by neighbours.",
      },
      {
        title: "Student-adjacent services",
        body: "Tutors, cafes and printers near the university campuses benefit from pricing, hours and quick contact options.",
      },
      {
        title: "Trades for established homes",
        body: "Home trades benefit from galleries and coverage pages that name Blackburn South and surrounding suburbs.",
      },
    ],
    example:
      "Picture a small tutoring service in Blackburn South. The site would list subjects and year levels, show tutors' qualifications and fees and offer a trial session form. A page for university students targets a second audience.",
    tip: "Two audiences, two pages. Parents and students search differently.",
    qa: [
      {
        q: "Can we target both parents and students?",
        a: "Yes, with separate pages written for each audience.",
      },
      {
        q: "Do you add online booking?",
        a: "Yes, via a form or link to your booking tool.",
      },
    ],
  },
  {
    name: "Burwood",
    region: "East",
    character:
      "Burwood is an eastern suburb along Burwood Highway, home to Deakin University's Burwood campus and a mix of retail, medical and student services.",
    hook: "Deakin's campus brings thousands of students and staff, creating steady demand for food, housing and study services nearby.",
    nbrs: ["Burwood East", "Box Hill South", "Ashburton"],
    blocks: [
      {
        title: "Student services",
        body: "Tutors, cafes, accommodation and print services benefit from simple pages with prices, location and quick contact options.",
      },
      {
        title: "Medical and allied health on the highway",
        body: "Practices near Burwood Highway serve a wide catchment. Service pages, access and parking details help patients choose.",
      },
      {
        title: "Retail and trades",
        body: "Shops and trades benefit from accurate details and local photos, plus coverage pages for nearby suburbs.",
      },
    ],
    example:
      "Imagine a student accommodation or share-house service near the campus. The site would show rooms, pricing, distance to campus and transport, house rules and an enquiry form. A page for international students answers common questions.",
    tip: "Distance to campus is the first thing students search. State it clearly.",
    qa: [
      {
        q: "Can we show distance and transport details?",
        a: "Yes, with a short section and a map.",
      },
      {
        q: "Do you add translations?",
        a: "We can add key pages in other languages where it helps.",
      },
    ],
  },
  {
    name: "Burwood East",
    region: "East",
    character:
      "Burwood East is a residential and retail suburb with the Burwood One shopping centre, Burwood Highway and a large local population.",
    hook: "Burwood One draws shoppers from several suburbs, and nearby businesses compete for the same customers.",
    nbrs: ["Burwood", "Forest Hill", "Glen Waverley"],
    blocks: [
      {
        title: "Retail and services near Burwood One",
        body: "Businesses benefit from stating exactly where they are, with parking and access, and from reviews that show consistent service.",
      },
      {
        title: "Beauty and wellbeing",
        body: "Salons and clinics should show prices, photos of work and easy booking.",
      },
      {
        title: "Family services",
        body: "Tutors and childcare providers benefit from clear programs and enrolment steps.",
      },
    ],
    example:
      "Consider a beauty salon near Burwood One. The site would list treatments and prices, show the team, feature before-and-after photos with consent and link to online booking. A gift voucher page captures seasonal demand.",
    tip: "Gift vouchers are popular seasonally. Make them easy to find.",
    qa: [
      {
        q: "Can we sell vouchers online?",
        a: "Yes, via a simple order form or integration with your booking system.",
      },
      {
        q: "Do you add before-and-after galleries?",
        a: "Yes, with client consent.",
      },
    ],
  },
  {
    name: "Forest Hill",
    region: "East",
    character:
      "Forest Hill is an eastern suburb known for Forest Hill Chase shopping centre, Canterbury Road businesses and a mix of residential and commercial land.",
    hook: "Forest Hill's retail and service businesses compete for a wide catchment along Canterbury Road and Burwood Highway.",
    nbrs: ["Burwood East", "Vermont", "Blackburn"],
    blocks: [
      {
        title: "Retail and services around Forest Hill Chase",
        body: "Businesses here benefit from clear details, reviews and a site that loads quickly for shoppers searching on the go.",
      },
      {
        title: "Automotive and trade services",
        body: "Workshops and trades benefit from service pages and quick quote or booking forms.",
      },
      {
        title: "Health and community",
        body: "Clinics and community services should show hours, services and access clearly.",
      },
    ],
    example:
      "Imagine a car service workshop in Forest Hill. The site would list services, brands serviced, pricing guidance, hours and a booking form. A page for fleet customers explains accounts and turnaround times.",
    tip: "Turnaround time is a key selling point for workshops. State it.",
    qa: [
      {
        q: "Should we publish prices?",
        a: "Ranges or 'from' prices help, and they filter out poor-fit enquiries.",
      },
      {
        q: "Can the site take bookings?",
        a: "Yes, via form or link to your booking tool.",
      },
    ],
  },
  {
    name: "Mitcham",
    region: "East",
    character:
      "Mitcham is an eastern suburb with a village shopping area on Whitehorse Road, a railway station and many family homes.",
    hook: "Mitcham's village centre serves a loyal local base, and online visibility brings in customers from nearby suburbs.",
    nbrs: ["Nunawading", "Vermont", "Ringwood"],
    blocks: [
      {
        title: "Village shops and cafes",
        body: "Clear hours, photos and a strong Google profile help small businesses compete with larger centres.",
      },
      {
        title: "Health and wellbeing",
        body: "Physios, dentists and counsellors benefit from plain-language service pages and easy booking.",
      },
      {
        title: "Home and garden services",
        body: "Gardeners and trades benefit from project photos and coverage pages for Mitcham and neighbouring suburbs.",
      },
    ],
    example:
      "Picture a physiotherapy clinic in Mitcham. The site would cover conditions treated, funding options, practitioner profiles and online booking. A page for older clients covers balance and mobility programs.",
    tip: "Older patients often book by phone. Keep your number prominent as well as online booking.",
    qa: [
      {
        q: "Do we still need a phone number if we have online booking?",
        a: "Yes. Some customers prefer to call, so offer both.",
      },
      {
        q: "Can we list funding options?",
        a: "Yes, and patients search for them.",
      },
    ],
  },
  {
    name: "Nunawading",
    region: "East",
    character:
      "Nunawading is a busy eastern suburb along Whitehorse Road with a railway station, large retail areas and a mix of residential and commercial land.",
    hook: "Nunawading's retail and trade corridor draws customers from several suburbs, which makes search visibility particularly valuable.",
    nbrs: ["Mitcham", "Blackburn", "Box Hill"],
    blocks: [
      {
        title: "Retail and trade corridor",
        body: "Businesses along Whitehorse Road benefit from clear service pages, parking information and quick contact options.",
      },
      {
        title: "Commercial and industrial suppliers",
        body: "Suppliers need capability pages, trade information and a quote form that captures job details.",
      },
      {
        title: "Local services",
        body: "Tutors, clinics and personal services benefit from simple, fast sites and online booking.",
      },
    ],
    example:
      "Consider a building supplies business in Nunawading. The site would list product ranges, trade account terms, delivery areas, opening hours and a quote form. A page for builders explains ordering and lead times.",
    tip: "Trade customers search by product type and delivery area. Use both.",
    qa: [
      {
        q: "Can we list delivery areas?",
        a: "Yes, with pages for key suburbs where useful.",
      },
      {
        q: "Do you build trade account forms?",
        a: "Yes, with the fields you need.",
      },
    ],
  },
  {
    name: "Vermont",
    region: "East",
    character:
      "Vermont is a residential eastern suburb along Burwood Highway and Canterbury Road, with local shopping strips and a large number of families.",
    hook: "Vermont's strips serve a close community, and local businesses often win customers through recommendation first and Google second.",
    nbrs: ["Vermont South", "Forest Hill", "Ringwood"],
    blocks: [
      {
        title: "Local strip businesses",
        body: "Small shops and services benefit from accurate profiles, clear photos and reviews that show consistent service.",
      },
      {
        title: "Home trades",
        body: "Plumbers, electricians and renovators benefit from pages that show real jobs and name Vermont and nearby suburbs.",
      },
      {
        title: "Family and education services",
        body: "Tutoring, music and child health providers benefit from clear pricing and easy trial bookings.",
      },
    ],
    example:
      "Imagine an electrician in Vermont. The site would list services, show licence and insurance, give response times and offer a quote form. Pages for Vermont, Vermont South and Forest Hill each carry local detail.",
    tip: "Recommendations are checked online. Make sure your reviews and site agree.",
    qa: [
      {
        q: "Do reviews matter for trades?",
        a: "Very much. They are often the deciding factor for a first-time customer.",
      },
      {
        q: "Can we show a licence number?",
        a: "Yes, and we recommend it.",
      },
    ],
  },
  {
    name: "Vermont South",
    region: "East",
    character:
      "Vermont South is an eastern suburb with Vermont South Shopping Centre on Burwood Highway, family homes and nearby parkland.",
    hook: "Vermont South's shopping centre anchors the area, and nearby businesses benefit from being easy to find by those visiting it.",
    nbrs: ["Vermont", "Glen Waverley", "Burwood East"],
    blocks: [
      {
        title: "Businesses around the centre",
        body: "Clear location details, hours and parking help customers choose you when already nearby.",
      },
      {
        title: "Health and personal services",
        body: "Clinics and salons benefit from service pages and simple online booking.",
      },
      {
        title: "Education and children's activities",
        body: "Parents search by suburb, age and subject. Programs with clear details and a trial option convert best.",
      },
    ],
    example:
      "Picture a dental practice near Vermont South Shopping Centre. The site would explain treatments, show the team, give parking and transport information and link to online booking. A page for children's dentistry addresses a common search.",
    tip: "Parking details matter near shopping centres. Include them.",
    qa: [
      {
        q: "Can we promote new-patient offers?",
        a: "Yes, within professional advertising rules.",
      },
      {
        q: "Do you add maps and directions?",
        a: "Yes, and we link your Google profile.",
      },
    ],
  },
  {
    name: "Bayswater",
    region: "East",
    character:
      "Bayswater is an outer-eastern suburb with a railway station, a major industrial area along Mountain Highway and a mix of homes and light industry.",
    hook: "Bayswater's industrial estate is one of the east's larger business clusters, and suppliers there are searched for by trade buyers.",
    nbrs: ["Boronia", "Bayswater North", "Ferntree Gully"],
    blocks: [
      {
        title: "Industrial suppliers and manufacturers",
        body: "Buyers search by product and process. Capability pages, certifications and a quote form that captures specification support shortlisting.",
      },
      {
        title: "Trades and workshops",
        body: "Workshops and trades benefit from service pages, coverage areas and quick contact options.",
      },
      {
        title: "Local retail and services",
        body: "Shops near the station benefit from accurate hours, clear photos and a strong Google profile.",
      },
    ],
    example:
      "Imagine a metal fabricator in Bayswater. The site would have pages for each process, materials, certifications and recent projects, with a quote form that accepts drawings. A downloadable capability statement helps buyers shortlist.",
    tip: "Drawings and specifications speed up quotes. Let buyers upload them.",
    qa: [
      {
        q: "Can the form accept CAD or PDF drawings?",
        a: "Yes, where it suits your business.",
      },
      {
        q: "Do you list certifications?",
        a: "Yes, in a clear section buyers can find easily.",
      },
    ],
  },
  {
    name: "Boronia",
    region: "East",
    character:
      "Boronia is an outer-eastern suburb with Boronia Junction, a railway station and a busy local centre serving the surrounding Knox area.",
    hook: "Boronia Junction draws customers from several suburbs, and nearby businesses compete for their attention.",
    nbrs: ["Bayswater", "Ferntree Gully", "Wantirna South"],
    blocks: [
      {
        title: "Retail and services at the Junction",
        body: "Businesses benefit from clear location details, hours and reviews that prove consistent service.",
      },
      {
        title: "Health and wellness",
        body: "Clinics and studios benefit from service pages, bios and simple online booking.",
      },
      {
        title: "Trades serving Knox",
        body: "Trades benefit from coverage pages for Boronia and neighbouring suburbs and photos of real jobs.",
      },
    ],
    example:
      "Consider a hairdresser near Boronia Junction. The site would list services and prices, show stylists and recent work and link to online booking. A page for weddings and events targets a higher-value search.",
    tip: "Stylist profiles help customers choose. Add photos and specialties.",
    qa: [
      {
        q: "Can each stylist have a profile?",
        a: "Yes, with their own bookings if your system supports it.",
      },
      {
        q: "Do you add price lists?",
        a: "Yes, since customers filter by price.",
      },
    ],
  },
  {
    name: "Ferntree Gully",
    region: "East",
    character:
      "Ferntree Gully is an outer-eastern suburb at the edge of the Dandenong Ranges, with a village centre, railway station and nearby national park.",
    hook: "Ferntree Gully sits where suburbia meets the ranges, and local businesses serve both residents and visitors to the park.",
    nbrs: ["Boronia", "Rowville", "Wantirna South"],
    blocks: [
      {
        title: "Visitor-driven hospitality",
        body: "Cafes and small venues benefit from weekend hours, menus and directions that match how visitors search.",
      },
      {
        title: "Outdoor and lifestyle services",
        body: "Tour, fitness and outdoor providers benefit from clear program details, safety information and easy booking.",
      },
      {
        title: "Trades serving the foothills",
        body: "Tree services, builders and landscapers serve bushland properties. Safety and insurance information build trust.",
      },
    ],
    example:
      "Imagine an outdoor guiding or fitness business using the national park. The site would describe each program, show dates and prices, explain safety and insurance and offer online booking. A page for corporate groups targets a higher-value search.",
    tip: "Safety and insurance details reassure customers. Put them where they can see them.",
    qa: [
      {
        q: "Can the site take bookings and payments?",
        a: "Yes, via a booking tool integrated with the site.",
      },
      {
        q: "How do we handle weather changes?",
        a: "A banner or page for updates keeps customers informed.",
      },
    ],
  },
  {
    name: "Rowville",
    region: "East",
    character:
      "Rowville is a large outer-eastern suburb with Stud Park Shopping Centre, estates and a strong family population.",
    hook: "Rowville's size and spread mean customers search by neighbourhood as well as suburb, and local services are in constant demand.",
    nbrs: ["Scoresby", "Wantirna South", "Lysterfield"],
    blocks: [
      {
        title: "Family services",
        body: "Tutors, childcare, health and fitness providers benefit from clear programs, fees and trial options.",
      },
      {
        title: "Home and garden trades",
        body: "Estates mean steady demand for landscapers, painters and cleaners. Galleries of local work and coverage pages for nearby suburbs help.",
      },
      {
        title: "Retail near Stud Park",
        body: "Shops and services benefit from accurate hours, access details and strong reviews.",
      },
    ],
    example:
      "Picture a swim school in Rowville. The site would show class levels and ages, term timetables, fees, the venue and a trial lesson booking form. A page for holiday intensives targets another seasonal search.",
    tip: "Waitlists matter. Let families join one from the site.",
    qa: [
      {
        q: "Can the site manage a waitlist?",
        a: "Yes, with a simple form that sends details to you.",
      },
      {
        q: "Do you add term dates?",
        a: "Yes. We keep term timetables easy to update.",
      },
    ],
  },
  {
    name: "Scoresby",
    region: "East",
    character:
      "Scoresby is an outer-eastern suburb with a mix of residential streets and a large industrial and commercial area near Scoresby Road and EastLink.",
    hook: "Scoresby's industrial estates host many suppliers and workshops, and buyers search for them online.",
    nbrs: ["Rowville", "Wantirna South", "Knoxfield"],
    blocks: [
      {
        title: "Industrial and trade suppliers",
        body: "Capability pages, certifications and quote forms help buyers shortlist you.",
      },
      {
        title: "Automotive and workshops",
        body: "Service pages, brands and fast booking suit workshops and mechanics.",
      },
      {
        title: "Local services",
        body: "Community and family services benefit from plain-language pages and easy contact options.",
      },
    ],
    example:
      "Imagine a commercial cleaning supplier in Scoresby. The site would list product categories, trade pricing information, delivery areas and a quote form for regular orders. A page for facility managers explains accounts and delivery schedules.",
    tip: "Delivery schedules are a major buying factor. State them.",
    qa: [
      {
        q: "Can we show trade-only pricing?",
        a: "We can place it behind a simple enquiry or account request.",
      },
      {
        q: "Do you build product catalogues?",
        a: "Yes, as enquiry catalogues or full shops.",
      },
    ],
  },
  {
    name: "Wantirna",
    region: "East",
    character:
      "Wantirna is an eastern suburb with the Wantirna Mall, Burwood Highway's commercial strips and a mix of residential and retail areas.",
    hook: "Wantirna sits beside Knox's largest centre, and local businesses benefit from being clearly distinct and easy to reach.",
    nbrs: ["Wantirna South", "Bayswater", "Ferntree Gully"],
    blocks: [
      {
        title: "Local retail and services",
        body: "Businesses benefit from accurate details, strong photos and reviews that show consistent service.",
      },
      {
        title: "Health and personal care",
        body: "Clinics and salons benefit from service pages and easy booking.",
      },
      {
        title: "Trades",
        body: "Trades benefit from suburb pages and photos of real jobs.",
      },
    ],
    example:
      "Consider a pet grooming business in Wantirna. The site would list services and prices by breed or size, show before-and-after photos, explain vaccination requirements and offer online booking. A page for mobile grooming covers coverage areas.",
    tip: "Explain your requirements, such as vaccinations. It saves calls.",
    qa: [
      {
        q: "Can customers book by pet size?",
        a: "Yes, with a booking form that captures breed or weight.",
      },
      {
        q: "Do you add price lists?",
        a: "Yes, since customers filter by price.",
      },
    ],
  },
  {
    name: "Wantirna South",
    region: "East",
    character:
      "Wantirna South is home to Knox City Shopping Centre, EastLink and a large residential population, with many retail and service businesses nearby.",
    hook: "Knox City is one of the east's biggest retail destinations, which means heavy competition for nearby search results.",
    nbrs: ["Wantirna", "Rowville", "Scoresby"],
    blocks: [
      {
        title: "Competing near a major centre",
        body: "Independent businesses can win by being specific: clear service pages, honest pricing guidance and strong reviews.",
      },
      {
        title: "Health and professional services",
        body: "Practices near Knox benefit from pages per service, easy booking and clear access details.",
      },
      {
        title: "Family and education",
        body: "Tutors, child care and activity providers benefit from clear information and trial offers.",
      },
    ],
    example:
      "Imagine a small accounting practice near Knox City. The site would explain individual, business and bookkeeping services, show the team and offer an initial consultation booking. A page on tax time explains deadlines and what to bring.",
    tip: "Seasonal tax content brings in specific searches each year. Keep it fresh.",
    qa: [
      {
        q: "How do we stand out next to a big centre?",
        a: "By being specific, local and easy to deal with, which a good site communicates.",
      },
      {
        q: "Can we publish tax-time guides?",
        a: "Yes, and we can update them annually.",
      },
    ],
  },
  {
    name: "Lilydale",
    region: "East",
    character:
      "Lilydale is the main town of the outer-east Yarra Valley gateway, with a railway station, Lilydale Lake and a growing residential population.",
    hook: "Lilydale is where the suburbs meet the Yarra Valley, and local businesses serve both residents and visitors heading to wineries.",
    nbrs: ["Mooroolbark", "Chirnside Park", "Montrose"],
    blocks: [
      {
        title: "Local retail and services",
        body: "Shops and services benefit from a clear site and strong Google profile, particularly for customers coming from nearby towns.",
      },
      {
        title: "Visitors and Yarra Valley trade",
        body: "Accommodation, tours and food businesses serve visitors searching by experience and distance.",
      },
      {
        title: "Trades and home services",
        body: "Trades benefit from coverage pages for Lilydale and surrounding suburbs and from photos of real jobs.",
      },
    ],
    example:
      "Picture a small tour or event business in Lilydale. The site would describe each experience, show dates and prices, explain what is included and offer a booking form. A page for groups and corporate events targets a higher-value search.",
    tip: "Visitors search by experience. Name it, then the place.",
    qa: [
      {
        q: "Can we take group bookings?",
        a: "Yes, with a form that captures numbers, dates and requirements.",
      },
      {
        q: "Do you add seasonal offers?",
        a: "Yes, with sections you can update.",
      },
    ],
  },
  {
    name: "Mooroolbark",
    region: "East",
    character:
      "Mooroolbark is a large outer-eastern suburb with a village shopping centre, railway station and many families.",
    hook: "Mooroolbark's local centre serves a big catchment, and customers often search by service and suburb name.",
    nbrs: ["Lilydale", "Kilsyth", "Chirnside Park"],
    blocks: [
      {
        title: "Local shops and cafes",
        body: "Small businesses benefit from accurate hours, menus and photos, with a Google profile that matches the site.",
      },
      {
        title: "Family and health services",
        body: "Tutors, clinics and child services benefit from plain-language pages and easy booking.",
      },
      {
        title: "Trades",
        body: "Trades benefit from suburb pages, licence details and galleries of recent work.",
      },
    ],
    example:
      "Imagine a mobile dog groomer in Mooroolbark. The site would list services, coverage areas, pricing and a booking form with space for pet details. A page on how mobile grooming works reassures first-time customers.",
    tip: "Explain how your service works. First-time customers want to know.",
    qa: [
      {
        q: "Can we show areas covered?",
        a: "Yes, with a page for each suburb you serve.",
      },
      {
        q: "Do you add photos of work?",
        a: "Yes. Real photos are the most persuasive content.",
      },
    ],
  },
  {
    name: "Chirnside Park",
    region: "East",
    character:
      "Chirnside Park is an outer-eastern suburb with the Chirnside Park Shopping Centre and a growing population along Maroondah Highway.",
    hook: "Chirnside Park's centre and highway frontage draw customers from the surrounding hills and valley.",
    nbrs: ["Lilydale", "Mooroolbark", "Kilsyth"],
    blocks: [
      {
        title: "Retail and services near the centre",
        body: "Clear location details, hours and reviews help customers choose you among nearby options.",
      },
      {
        title: "Health and wellness",
        body: "Practices benefit from service pages and online booking.",
      },
      {
        title: "Trades and rural services",
        body: "Trades serving acreage properties benefit from service pages, photos and coverage across the area.",
      },
    ],
    example:
      "Consider a fencing and landscaping business in Chirnside Park. The site would show fence types and landscape projects, list areas covered and offer a quote form asking for site details. A page on rural property services targets acreage owners.",
    tip: "Acreage customers search differently. Give them their own page.",
    qa: [
      {
        q: "Can we show rural services separately?",
        a: "Yes, with a page written for acreage owners.",
      },
      {
        q: "Do you add quote forms with photo upload?",
        a: "Yes, where it suits your business.",
      },
    ],
  },
  {
    name: "Healesville",
    region: "East",
    character:
      "Healesville is a Yarra Valley town known for Healesville Sanctuary, local wineries and a main street of cafes and shops.",
    hook: "Healesville draws large numbers of visitors, and local businesses depend on being found by people planning a day or weekend away.",
    nbrs: ["Lilydale", "Mooroolbark", "Chirnside Park"],
    blocks: [
      {
        title: "Tourism and hospitality",
        body: "Cafes, wineries and accommodation benefit from clear photos, menus and booking links, and from describing the experience visitors will have.",
      },
      {
        title: "Local trades and services",
        body: "Trades and services serving residents benefit from coverage pages for Healesville and surrounding towns.",
      },
      {
        title: "Markets and makers",
        body: "Makers and producers benefit from simple sites with products, stockists and event information.",
      },
    ],
    example:
      "Imagine a small bed and breakfast in Healesville. The site would show rooms and rates, nearby attractions, availability enquiry and directions. A page on local experiences, written for visitors, captures planning searches.",
    tip: "Visitors search for experiences and distances. Include both.",
    qa: [
      {
        q: "Can we take direct bookings?",
        a: "Yes, via an enquiry form or booking tool.",
      },
      {
        q: "Do you write the local guide content?",
        a: "We can structure it and help write it.",
      },
    ],
  },
  {
    name: "Belgrave",
    region: "East",
    character:
      "Belgrave is a Dandenong Ranges township known for Puffing Billy, a village main street, cafes, shops and weekend visitors.",
    hook: "Belgrave's businesses live on weekend visitors and local residents, and both check Google before heading out.",
    nbrs: ["Upwey", "Ferntree Gully", "Mount Evelyn"],
    blocks: [
      {
        title: "Visitor-driven cafes and shops",
        body: "Weekend hours, menus and directions are the essentials. We keep the site fast and simple for mobile users planning a trip.",
      },
      {
        title: "Tourism and activities",
        body: "Tours, experiences and accommodation benefit from clear descriptions, photos, prices and booking.",
      },
      {
        title: "Local trades",
        body: "Trades serving the ranges benefit from pages for each town covered and safety and insurance information.",
      },
    ],
    example:
      "Picture a gift and homewares shop on Belgrave's main street. The site would show product ranges, opening hours, seasonal collections and an enquiry form for custom orders. A page for visitors explains parking and public transport.",
    tip: "Visitors check parking and transport. Include a short section on both.",
    qa: [
      {
        q: "Can we promote seasonal offers?",
        a: "Yes, with easily updated sections.",
      },
      {
        q: "Do you handle online shops?",
        a: "Yes, via Shopify where it suits.",
      },
    ],
  },
  {
    name: "Mount Evelyn",
    region: "East",
    character:
      "Mount Evelyn is a leafy foothill township with a village main street, local shops and many families and home-based businesses.",
    hook: "Mount Evelyn's small centre supports a tight-knit community, and many local businesses operate from home or small premises.",
    nbrs: ["Montrose", "Mooroolbark", "Lilydale"],
    blocks: [
      {
        title: "Village shops and cafes",
        body: "Small businesses benefit from clear details, warm photography and a profile that matches the site.",
      },
      {
        title: "Home-based services",
        body: "Many local businesses work from home. A service-area profile and a site naming the towns you serve help you appear without a shopfront.",
      },
      {
        title: "Trades for bushland homes",
        body: "Tree services, landscapers and builders benefit from galleries, safety information and coverage across the hills.",
      },
    ],
    example:
      "Imagine a home-based massage therapist in Mount Evelyn. The site would list treatments, show the therapist's qualifications, explain what to expect and offer online booking. A page for gift vouchers captures seasonal demand.",
    tip: "Qualifications and what to expect reassure first-time clients.",
    qa: [
      {
        q: "Can a home-based business appear on Google?",
        a: "Yes, with a service-area setup that does not show your address.",
      },
      {
        q: "Do you offer gift voucher pages?",
        a: "Yes, with a simple form.",
      },
    ],
  },
  {
    name: "Mount Waverley",
    region: "East",
    character:
      "Mount Waverley is a well-established south-eastern suburb with a village centre on Stephensons Road, a railway station and strong schools.",
    hook: "Mount Waverley's village is busy and competitive, with many tutoring, health and food businesses within a few streets.",
    nbrs: ["Glen Waverley", "Oakleigh", "Mulgrave"],
    blocks: [
      {
        title: "Tutoring and education",
        body: "Parents compare tutors by subject, level and results. Pages per subject and year level, with a trial offer, convert best.",
      },
      {
        title: "Health and wellbeing",
        body: "Clinics benefit from pages per treatment and online booking.",
      },
      {
        title: "Restaurants and cafes",
        body: "Menus, hours and photos matter. We keep sites fast and simple.",
      },
    ],
    example:
      "Consider a music school in Mount Waverley. The site would list instruments and levels, teacher profiles, term fees and a trial lesson form. A page for exam preparation targets a specific search.",
    tip: "Exam preparation is searched seasonally. Plan a page for it.",
    qa: [
      {
        q: "Can we list teacher qualifications?",
        a: "Yes, and parents look for them.",
      },
      {
        q: "Do you add term dates?",
        a: "Yes, and keep them easy to update.",
      },
    ],
  },
  {
    name: "Oakleigh",
    region: "East",
    character:
      "Oakleigh is a south-eastern suburb known for its Eaton Mall, a large Greek community, a railway station and a busy food and retail precinct.",
    hook: "Around the Eaton Mall, trade swings with festivals and holidays, so shopfronts need online details that stay accurate through the busiest weeks.",
    nbrs: ["Chadstone", "Mulgrave", "Mount Waverley"],
    blocks: [
      {
        title: "Food and hospitality",
        body: "Restaurants, bakeries and delis benefit from clear menus, photos and hours, and from describing cuisine specifically.",
      },
      {
        title: "Retail and services",
        body: "Shops and services benefit from clear location details, parking and a Google profile that matches the site.",
      },
      {
        title: "Professional services",
        body: "Accountants and advisers serving the local community benefit from clear pages and, where useful, key details in other languages.",
      },
    ],
    example:
      "Imagine a bakery near the Eaton Mall. The site would show the range, opening hours, a pre-order form for special occasions and a catering page. Holiday hours are published well in advance.",
    tip: "Holiday trade is critical for bakeries. Publish hours and pre-order dates early.",
    qa: [
      {
        q: "Can we take pre-orders?",
        a: "Yes, with a form that captures items, date and pickup time.",
      },
      {
        q: "Can the site be in more than one language?",
        a: "We can add key pages in another language where it helps.",
      },
    ],
  },
  {
    name: "Mulgrave",
    region: "East",
    character:
      "Mulgrave is a south-eastern suburb with Waverley Gardens shopping centre, industrial areas and a large residential population.",
    hook: "Mulgrave combines large retail with industrial estates, so businesses here range from consumer shops to trade suppliers.",
    nbrs: ["Wheelers Hill", "Oakleigh", "Mount Waverley"],
    blocks: [
      {
        title: "Retail and services near the centre",
        body: "Clear location details, hours and reviews help customers choose you among nearby options.",
      },
      {
        title: "Industrial suppliers",
        body: "Capability pages, certifications and a quote form help buyers shortlist suppliers.",
      },
      {
        title: "Local trades",
        body: "Trades benefit from suburb pages, photos and licence details.",
      },
    ],
    example:
      "Picture a commercial printing business in Mulgrave. The site would list products, turnaround times, file requirements and a quote form with file upload. A page for repeat corporate customers explains accounts.",
    tip: "File requirements save back-and-forth. State them on the page.",
    qa: [
      {
        q: "Can the form accept artwork files?",
        a: "Yes, where it suits your business.",
      },
      {
        q: "Do you list turnaround times?",
        a: "Yes, since buyers compare them.",
      },
    ],
  },
  {
    name: "Wheelers Hill",
    region: "East",
    character:
      "Wheelers Hill is a south-eastern suburb with a shopping centre on Ferntree Gully Road, Jells Park and many family homes.",
    hook: "Wheelers Hill's families search for local tutors, health services and trades, and often choose the closest option.",
    nbrs: ["Mulgrave", "Glen Waverley", "Rowville"],
    blocks: [
      {
        title: "Family and education services",
        body: "Tutors and activity providers benefit from clear programs, fees and trial offers.",
      },
      {
        title: "Health and wellbeing",
        body: "Clinics and studios benefit from service pages, bios and online booking.",
      },
      {
        title: "Trades",
        body: "Home trades benefit from suburb pages and photos of real jobs.",
      },
    ],
    example:
      "Imagine a physio clinic in Wheelers Hill. The site would cover conditions treated, show practitioners, list funding options and offer online booking. A page for children's sports injuries targets a specific audience.",
    tip: "Specific conditions bring in specific searches. Give each its own page.",
    qa: [
      {
        q: "Can we have a page per condition?",
        a: "Yes, and each can be written for that search.",
      },
      {
        q: "Do you add funding information?",
        a: "Yes, so patients can see what applies.",
      },
    ],
  },
  {
    name: "Chadstone",
    region: "East",
    character:
      "Chadstone is a south-eastern suburb dominated by Chadstone Shopping Centre, with surrounding retail, offices and industrial areas.",
    hook: "Chadstone draws shoppers from all over Melbourne, and nearby businesses compete for their attention and for local trade.",
    nbrs: ["Oakleigh", "Malvern East", "Mulgrave"],
    blocks: [
      {
        title: "Businesses near the centre",
        body: "Clear location details, parking and hours help customers choose you when they are already nearby.",
      },
      {
        title: "Offices and professional services",
        body: "Firms around Chadstone benefit from credible, clear service pages and a quick enquiry route.",
      },
      {
        title: "Trades and local services",
        body: "Local trades benefit from suburb pages and photos of real work.",
      },
    ],
    example:
      "Consider a small accounting or finance practice near Chadstone. The site would list services, explain how engagements work, show the team and offer a consultation booking. A page for small business owners targets that audience.",
    tip: "Say how far you are from the centre. It helps people place you.",
    qa: [
      {
        q: "Can a small business compete near a huge centre?",
        a: "Yes, on specific services and local trust rather than on foot traffic.",
      },
      {
        q: "Do you cover neighbouring suburbs?",
        a: "Yes, with separate pages for each you serve.",
      },
    ],
  },
];
