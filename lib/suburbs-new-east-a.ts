import type { NewSub } from "./suburbs-new";

/* Eastern suburbs, part A: Boroondara, Manningham, Maroondah.
   Each entry is written for that suburb only. */

export const NEW_EAST_A: NewSub[] = [
  {
    name: "Kew",
    region: "East",
    character:
      "Kew is an established inner-east suburb with Kew Junction and High Street, leafy streets, major schools and many professional practices.",
    hook: "Kew households tend to research providers carefully and rely on recommendations, so a credible site backs up every referral.",
    nbrs: ["Hawthorn", "Balwyn", "Kew East"],
    blocks: [
      {
        title: "Professional and medical practices",
        body: "Accountants, solicitors, dentists and specialists near Kew Junction are compared on credentials and clarity. Team pages, plain-language service descriptions and easy first-contact options build trust.",
      },
      {
        title: "Tutoring and education services",
        body: "With several well-known schools nearby, tutors and music teachers draw steady demand. Year levels, subjects, prices and a trial lesson form answer parents' first questions.",
      },
      {
        title: "Home services for established houses",
        body: "Renovators, gardeners and painters serve large older homes. Project galleries and coverage pages for Kew and neighbouring suburbs match how owners search.",
      },
    ],
    example:
      "Imagine a physiotherapy clinic on High Street. The site would list conditions treated, show the practitioners, explain funding and rebates and offer online booking. A page on sports injuries and one on desk-worker pain answer two common searches.",
    tip: "Kew searchers often add the street or Junction to their search. Mention them where accurate.",
    qa: [
      {
        q: "Should practitioners have individual pages?",
        a: "Yes. Individual profiles help patients choose and give Google more specific content.",
      },
      {
        q: "Can the site show school-term timetables?",
        a: "Yes. We build timetables you can update each term.",
      },
    ],
  },
  {
    name: "Kew East",
    region: "East",
    character:
      "Kew East is a quieter residential suburb on the Eastern Freeway corridor, with local shops along High Street and Cotham Road's edges.",
    hook: "Kew East businesses often serve a tight catchment, and a few well-placed pages can make them the obvious local choice.",
    nbrs: ["Kew", "Balwyn North", "Balwyn"],
    blocks: [
      {
        title: "Neighbourhood shops and cafes",
        body: "Small shops benefit from consistent details on Google and the site, with current hours and photos that show what makes you different.",
      },
      {
        title: "Mobile and home-based services",
        body: "Many Kew East trades and personal services work from home. A service-area profile and a site naming the suburbs you cover let you appear without publishing a home address.",
      },
      {
        title: "Family and health services",
        body: "Childcare, allied health and tutoring here depend on trust. Clear fees, availability and an easy way to enquire reduce friction.",
      },
    ],
    example:
      "Picture a mobile hairdresser servicing Kew East, Kew and Balwyn North. The site would list services and prices, show work, explain how home visits work and offer a booking form. Each suburb has a short page with local detail.",
    tip: "Home-based businesses should use a service-area listing rather than showing a private address.",
    qa: [
      {
        q: "Can I appear on Google Maps without a shopfront?",
        a: "Yes, as a service-area business, if the profile is set up correctly.",
      },
      {
        q: "Do I need separate pages for Kew and Kew East?",
        a: "If you serve both, yes. Each page can then match its own searches.",
      },
    ],
  },
  {
    name: "Balwyn",
    region: "East",
    character:
      "Balwyn is a prosperous eastern suburb along Whitehorse Road with a busy shopping strip, strong schools and many family practices.",
    hook: "Balwyn's competitive education and health sectors mean customers compare many options before choosing.",
    nbrs: ["Kew", "Balwyn North", "Camberwell"],
    blocks: [
      {
        title: "Education and tutoring",
        body: "Parents compare tutors and coaching centres on subject coverage, class sizes and results. A page per subject or year level, plus a trial option, converts best.",
      },
      {
        title: "Dental, medical and allied health",
        body: "Practices along Whitehorse Road need pages for each treatment and clear, calm explanations. Online booking reduces phone load.",
      },
      {
        title: "Boutiques and lifestyle businesses",
        body: "Independent shops benefit from quality photography and consistent hours across the site and Google profile.",
      },
    ],
    example:
      "Consider a tutoring centre in Balwyn. The site would have pages for each year level and subject, show tutors' qualifications, state fees and class sizes and offer a free assessment booking. A parent guide page covers how progress is reported.",
    tip: "Parents search by subject and year level. Use both in your page headings.",
    qa: [
      {
        q: "How do we show results honestly?",
        a: "With permission and without exaggerated claims. Honest, specific stories are more convincing than inflated promises.",
      },
      {
        q: "Can we take enrolments online?",
        a: "We can link to your enrolment tool or add a simple enquiry form.",
      },
    ],
  },
  {
    name: "Balwyn North",
    region: "East",
    character:
      "Balwyn North is a large residential suburb with local shopping strips along Doncaster Road and Bulleen Road, many families and several well-known schools.",
    hook: "Balwyn North's size and spread mean customers search by neighbourhood strip as much as by suburb.",
    nbrs: ["Balwyn", "Doncaster", "Bulleen"],
    blocks: [
      {
        title: "Local strips and neighbourhood shops",
        body: "Shops spread across several strips depend on searchers finding the nearest one. Clear addresses, hours and photos matter on every page.",
      },
      {
        title: "Family health and wellbeing",
        body: "Physios, psychologists and dental practices serve households of all ages. Plain-language pages for each service and simple booking help.",
      },
      {
        title: "Trades serving the eastern suburbs",
        body: "Trades here often cover Balwyn North, Doncaster and Bulleen. Suburb pages with real photos and licence details improve trust and relevance.",
      },
    ],
    example:
      "Imagine an electrician servicing Balwyn North, Doncaster and Bulleen. The site would list services (switchboards, lighting, safety checks), show licence and insurance, give response times and offer a quote form. Each suburb has its own short page.",
    tip: "Add your licence number. Homeowners look for it before calling.",
    qa: [
      {
        q: "Do I need separate pages for Doncaster and Bulleen?",
        a: "If you serve them, yes, with real detail on each rather than copied text.",
      },
      {
        q: "Can you add an emergency call-out page?",
        a: "Yes. It targets urgent searches and is simple to add.",
      },
    ],
  },
  {
    name: "Glen Iris",
    region: "East",
    character:
      "Glen Iris is a leafy suburb in the inner east, with High Street's shops, Gardiner's Creek and a large number of young families.",
    hook: "Glen Iris families look for local childcare, health and lifestyle services and read reviews carefully.",
    nbrs: ["Malvern East", "Ashburton", "Camberwell"],
    blocks: [
      {
        title: "Childcare and children's activities",
        body: "Parents compare programs, fees and availability. Clear information, photos of the space and a tour booking form help them decide.",
      },
      {
        title: "Wellness and fitness",
        body: "Pilates, yoga and personal training studios benefit from timetables, trial offers and booking links.",
      },
      {
        title: "Home renovation",
        body: "Established homes keep renovators busy. Project galleries sorted by room or type, and a clear quoting process, set expectations.",
      },
    ],
    example:
      "Picture a pilates studio on High Street Glen Iris. The site would show class types and levels, timetable, instructor profiles, pricing and a first-class offer. A page for pre- and post-natal classes captures a specific search.",
    tip: "Class descriptions should state who each class suits. Beginners search for exactly that.",
    qa: [
      {
        q: "Can the timetable update itself?",
        a: "If your booking system offers an embed, yes. Otherwise we make it easy to edit.",
      },
      {
        q: "Do you add reviews from Google?",
        a: "We link to them and show selected quotes with permission.",
      },
    ],
  },
  {
    name: "Ashburton",
    region: "East",
    character:
      "Ashburton is a family-oriented eastern suburb with a village-style shopping strip on High Street and Alamein railway station nearby.",
    hook: "Ashburton's local strip supports many small businesses that rely on neighbourhood loyalty and weekend foot traffic.",
    nbrs: ["Glen Iris", "Burwood", "Camberwell"],
    blocks: [
      {
        title: "Village-strip businesses",
        body: "Cafes, florists and boutiques depend on locals. A simple site with accurate hours and warm photography supports word of mouth.",
      },
      {
        title: "Family services",
        body: "Tutors, music teachers and child health providers need clear age groups, fees and booking options.",
      },
      {
        title: "Local trades",
        body: "Trades covering Ashburton, Glen Iris and Burwood benefit from separate coverage pages and a quick quote form.",
      },
    ],
    example:
      "Imagine a florist on Ashburton's High Street. The site would show seasonal ranges, same-day delivery areas, an order form for events and weddings and opening hours. A page for sympathy flowers explains lead times and delivery.",
    tip: "Delivery zones are among the most-searched details for florists. State them clearly.",
    qa: [
      {
        q: "Can we take orders online?",
        a: "We can add an order form or a full shop depending on how you work.",
      },
      {
        q: "How do we handle peak seasons?",
        a: "A banner or page for special periods like Mother's Day can be updated easily.",
      },
    ],
  },
  {
    name: "Surrey Hills",
    region: "East",
    character:
      "Surrey Hills is a popular eastern suburb with Union Road's village shops, a railway station and a strong cafe and professional community.",
    hook: "Union Road's mix of cafes, boutiques and professional offices means local reputation travels quickly.",
    nbrs: ["Mont Albert", "Camberwell", "Box Hill"],
    blocks: [
      {
        title: "Cafes and boutiques on Union Road",
        body: "Independent venues benefit from fast sites with current hours, menus and photos, and Google profiles that match.",
      },
      {
        title: "Professional offices",
        body: "Accountants, solicitors and consultants rely on trust. Clear service pages and team profiles help clients choose you.",
      },
      {
        title: "Health and personal services",
        body: "Physio, beauty and wellness providers benefit from service pages and easy booking.",
      },
    ],
    example:
      "Consider a small accounting firm near Surrey Hills station. The site would have pages for individuals, small business and bookkeeping, a team page, testimonials with consent and a booking link. A page covering tax time explains deadlines and what to bring.",
    tip: "Seasonal pages, such as tax time, attract searches and are easy to refresh each year.",
    qa: [
      {
        q: "Can we publish seasonal checklists?",
        a: "Yes. They help customers and give Google useful, specific content.",
      },
      {
        q: "Do you cover nearby suburbs?",
        a: "Yes, with separate pages for those you serve.",
      },
    ],
  },
  {
    name: "Canterbury",
    region: "East",
    character:
      "Canterbury is a prestigious inner-east suburb with Maling Road's village shops, a railway station and many period homes.",
    hook: "Maling Road is a boutique strip where customers expect a certain polish, online as well as in store.",
    nbrs: ["Surrey Hills", "Camberwell", "Balwyn"],
    blocks: [
      {
        title: "Boutique retail and gifts",
        body: "Shops rely on atmosphere. Quality photography, clear hours and a story about your range help you stand out from online competitors.",
      },
      {
        title: "Cafes and food producers",
        body: "Small food businesses benefit from a simple, attractive site with menus, events and catering enquiries.",
      },
      {
        title: "Heritage home trades",
        body: "Restorers, painters and landscapers working on period homes need galleries of relevant work and clear information on process.",
      },
    ],
    example:
      "Imagine a gift shop on Maling Road. The site would show featured ranges, seasonal collections, opening hours and an enquiry form for gift hampers. A page for corporate gifting captures a higher-value audience.",
    tip: "Gifting is seasonal. Plan pages for the weeks before key dates.",
    qa: [
      {
        q: "Should we sell online?",
        a: "It depends on your range. Some shops do well with a catalogue and enquiry form, others benefit from a shop.",
      },
      {
        q: "Can the site feature seasonal collections?",
        a: "Yes, with sections you can update easily.",
      },
    ],
  },
  {
    name: "Mont Albert",
    region: "East",
    character:
      "Mont Albert is a quiet residential suburb on the Lilydale line with a small shopping strip, a railway station and several well-known schools.",
    hook: "Mont Albert's small strip supports specialist and personal businesses that draw customers from several suburbs.",
    nbrs: ["Surrey Hills", "Box Hill", "Balwyn"],
    blocks: [
      {
        title: "Specialist local services",
        body: "Practitioners and small specialists serve customers across Surrey Hills, Box Hill and Balwyn. Pages naming each area help you appear for all of them.",
      },
      {
        title: "Tutoring and music",
        body: "Music and tutoring providers benefit from clear levels, availability and trial options.",
      },
      {
        title: "Trades and home services",
        body: "Local trades with real photos, licence details and a quick form earn trust quickly in a close community.",
      },
    ],
    example:
      "Picture a music teacher based in Mont Albert. The site would list instruments and levels, lesson pricing, availability, a short bio and a trial lesson request. A page for school music preparation targets a specific search.",
    tip: "Say which instruments and levels you teach. It matches how parents search.",
    qa: [
      {
        q: "Can lessons be booked online?",
        a: "Yes, through a form or link to your scheduling tool.",
      },
      {
        q: "Do you add bios and photos?",
        a: "Yes. Teachers and practitioners are chosen on personality as much as skill.",
      },
    ],
  },
  {
    name: "Hawthorn East",
    region: "East",
    character:
      "Hawthorn East is a residential suburb of established homes, with Auburn Village and Burwood Road shops, schools and the Auburn railway station.",
    hook: "Auburn Village and Burwood Road support cafes, specialty shops and professional services that serve households across Hawthorn and Camberwell.",
    nbrs: ["Hawthorn", "Camberwell", "Glen Iris"],
    blocks: [
      {
        title: "Village cafes and specialty shops",
        body: "Small venues depend on repeat customers. Accurate hours, menus and photos on the site and Google profile keep regulars informed and attract new ones.",
      },
      {
        title: "Professional and personal services",
        body: "Accountants, hairdressers and consultants benefit from clear service pages and easy booking.",
      },
      {
        title: "Family and education",
        body: "Tutors and children's services need clear fees, availability and trial offers.",
      },
    ],
    example:
      "Imagine a hair salon in Auburn Village. The site would show services and prices, stylist profiles, photos of work and an online booking link. A page on bridal and event hair captures a higher-value search.",
    tip: "Auburn Village is a landmark locals use. Mention it.",
    qa: [
      {
        q: "Can we show stylist portfolios?",
        a: "Yes. Photos of real work are the most persuasive content for salons.",
      },
      {
        q: "Do bookings sync with our diary?",
        a: "If your booking system offers integration, we link it to the site.",
      },
    ],
  },
  {
    name: "Templestowe",
    region: "East",
    character:
      "Templestowe is a green, family-oriented suburb in Melbourne's north-east, with Templestowe Village, large blocks and a strong sense of community.",
    hook: "Templestowe Village is compact, and local businesses compete for a catchment that spans several nearby suburbs.",
    nbrs: ["Templestowe Lower", "Doncaster", "Bulleen"],
    blocks: [
      {
        title: "Village shops and cafes",
        body: "Small businesses around the village thrive on local trust. A clear, friendly site and a well-kept Google profile support that.",
      },
      {
        title: "Landscaping and home services",
        body: "Larger blocks mean demand for landscapers, pool services and maintenance. Galleries of real projects and coverage pages for Templestowe and nearby suburbs help.",
      },
      {
        title: "Family health and tutoring",
        body: "Local practitioners and tutors benefit from simple booking and parent-friendly information.",
      },
    ],
    example:
      "Consider a landscape gardener working across Templestowe and Doncaster. The site would show completed gardens, explain the design-to-build process, list services and offer a consultation request. Seasonal pages cover autumn planting.",
    tip: "Gardens are seasonal. Update your gallery and offers with the seasons.",
    qa: [
      {
        q: "Can I show seasonal work?",
        a: "Yes. Seasonal pages and galleries help keep the site fresh and relevant.",
      },
      {
        q: "Do you cover both Templestowe and Templestowe Lower?",
        a: "Yes, with separate pages for each.",
      },
    ],
  },
  {
    name: "Templestowe Lower",
    region: "East",
    character:
      "Templestowe Lower is a residential suburb along Manningham Road with Macedon Square shops and nearby parklands beside the Yarra.",
    hook: "Local shops and services serve a close community and also draw trade from Bulleen and Doncaster.",
    nbrs: ["Templestowe", "Bulleen", "Doncaster East"],
    blocks: [
      {
        title: "Neighbourhood shopping",
        body: "A clear site and accurate Google profile make a small shop easy to find among larger centres nearby.",
      },
      {
        title: "Health and wellbeing",
        body: "Local clinics and studios benefit from service pages and easy online booking.",
      },
      {
        title: "Trades",
        body: "Trades serving Templestowe Lower, Bulleen and Doncaster East benefit from suburb pages and photos of real jobs.",
      },
    ],
    example:
      "Imagine a local plumber servicing Templestowe Lower and surrounding suburbs. The site would list services, response times, licence details and emergency contact options. Each suburb has a short page with local detail.",
    tip: "Highlight response times. They are a major factor in choosing a trade.",
    qa: [
      {
        q: "How should we show emergency availability?",
        a: "A clear phone button and a short emergency page work well.",
      },
      {
        q: "Do I need a page for every nearby suburb?",
        a: "Only those you genuinely serve.",
      },
    ],
  },
  {
    name: "Bulleen",
    region: "East",
    character:
      "Bulleen is a north-eastern suburb along the Yarra, with Bulleen Plaza, Manningham Road's shops, Heide Museum of Modern Art and a mix of residential and light-industrial areas.",
    hook: "Bulleen sits between several larger centres, so local businesses benefit from being clearly visible in their own right.",
    nbrs: ["Templestowe Lower", "Doncaster", "Balwyn North"],
    blocks: [
      {
        title: "Retail and services around Bulleen Plaza",
        body: "Shops and services compete with larger centres. A specific, well-structured site and strong local reviews help.",
      },
      {
        title: "Arts, hospitality and visitors",
        body: "Cafes and creative businesses near Heide draw visitors who search ahead. Hours, location and what to expect are the essentials.",
      },
      {
        title: "Light industrial and trades",
        body: "Suppliers and workshops need capability pages and quote forms for business customers.",
      },
    ],
    example:
      "Picture a small workshop in Bulleen supplying custom joinery. The site would show projects, materials, lead times and a quote form that accepts plans or photos. A page for builders and designers explains trade terms.",
    tip: "Trade customers want lead times and terms up front. Put them on the page.",
    qa: [
      {
        q: "Can the form accept plans?",
        a: "Yes, where it suits your business.",
      },
      {
        q: "Do you build galleries of past work?",
        a: "Yes. Past projects are among the strongest proof for trades.",
      },
    ],
  },
  {
    name: "Doncaster East",
    region: "East",
    character:
      "Doncaster East is a large residential suburb with The Pines shopping centre, multiple local strips and many families.",
    hook: "Doncaster East's size means several distinct shopping areas, and customers tend to search for the one closest to them.",
    nbrs: ["Doncaster", "Donvale", "Templestowe Lower"],
    blocks: [
      {
        title: "Neighbourhood strips and The Pines",
        body: "Businesses benefit from stating exactly which strip or centre they are in, with parking and access details.",
      },
      {
        title: "Health, beauty and wellbeing",
        body: "Clinics and salons compete heavily. Service pages, practitioner profiles and online booking help them stand out.",
      },
      {
        title: "Tutoring and children's activities",
        body: "Parents search by subject, age and distance. Clear pages for each program and a trial option work best.",
      },
    ],
    example:
      "Imagine a children's swim or dance school in Doncaster East. The site would show age groups, class times, fees, venue and a trial booking form. A page for holiday programs captures another search.",
    tip: "Holiday programs are searched in bursts. Update them early.",
    qa: [
      {
        q: "Can parents book classes online?",
        a: "Yes, through a form or link to your booking tool.",
      },
      {
        q: "How do we show class availability?",
        a: "We can link to a live timetable or update a simple one regularly.",
      },
    ],
  },
  {
    name: "Donvale",
    region: "East",
    character:
      "Donvale is a leafy residential suburb with a small village shopping strip and many larger family homes along Mullum Mullum Creek.",
    hook: "Donvale's small centre serves a wide catchment, and customers often drive from nearby suburbs for local services.",
    nbrs: ["Doncaster East", "Warrandyte", "Ringwood North"],
    blocks: [
      {
        title: "Village businesses",
        body: "Cafes and small shops benefit from clear photos, menus and hours, and a Google profile that stays current.",
      },
      {
        title: "Larger home services",
        body: "Landscapers, pool and fencing contractors serve larger blocks. Project galleries and coverage pages for neighbouring suburbs help.",
      },
      {
        title: "Family and education services",
        body: "Tutors, child care and activity providers need clear programs, fees and booking.",
      },
    ],
    example:
      "Consider a fencing contractor servicing Donvale and nearby suburbs. The site would show fence types (timber, Colorbond, pool), photos, service areas and a quote form that asks for length and material. A page on council permits adds helpful content.",
    tip: "Explain permits and timelines. It saves calls and builds trust.",
    qa: [
      {
        q: "Can the quote form ask for measurements?",
        a: "Yes. Asking for length and type gets you better enquiries.",
      },
      {
        q: "Do you cover neighbouring suburbs?",
        a: "Yes, with separate pages for each you genuinely serve.",
      },
    ],
  },
  {
    name: "Warrandyte",
    region: "East",
    character:
      "Warrandyte is a bush-and-river village on the Yarra, known for its main street, artists, bakeries and a strong local identity.",
    hook: "Much of Warrandyte's trade arrives on Saturdays and Sundays, so a village business lives or dies by how easily a visitor can check hours and directions beforehand.",
    nbrs: ["Donvale", "Templestowe", "Park Orchards"],
    blocks: [
      {
        title: "Visitor-driven hospitality",
        body: "Cafes, bakeries and galleries on Main Road need accurate weekend hours, menus and directions. A site that mentions the river and bridge matches how visitors search.",
      },
      {
        title: "Artists and makers",
        body: "Galleries and makers benefit from portfolios, a clear shop or enquiry path and notes about open studios and events.",
      },
      {
        title: "Bushfire-aware home services",
        body: "Tree services, gardeners and builders here serve bushland properties. Pages for each service, with safety and insurance information, build trust.",
      },
    ],
    example:
      "Imagine a small gallery on Warrandyte's main street. The site would show current exhibitions, featured artists, opening hours, an events page and a shop or enquiry form for works. Directions mention the bridge and parking.",
    tip: "Weekend hours and parking are the details visitors search for most.",
    qa: [
      {
        q: "Can we promote events and open studios?",
        a: "Yes. An events page is simple to build and easy to update.",
      },
      {
        q: "Do we need an online shop?",
        a: "Not necessarily. Many galleries use enquiry forms. We can add a shop if you want to sell directly.",
      },
    ],
  },
  {
    name: "Croydon",
    region: "East",
    character:
      "Croydon is an outer-eastern suburb with a busy Main Street, a railway station and a mix of retail, trades and local services.",
    hook: "Croydon's central strip is the commercial heart of the Maroondah area's north, and local businesses compete for a wide catchment.",
    nbrs: ["Croydon North", "Ringwood East", "Kilsyth"],
    blocks: [
      {
        title: "Main Street retail and hospitality",
        body: "Shops and cafes benefit from accurate hours, photos and a map. A page for each category you sell helps match searches.",
      },
      {
        title: "Trades serving Maroondah",
        body: "Trades often cover Croydon, Ringwood and Mooroolbark. Coverage pages for each area, with real photos and licence details, help.",
      },
      {
        title: "Health and personal services",
        body: "Practices benefit from service pages, practitioner bios and easy online booking.",
      },
    ],
    example:
      "Picture a plumber servicing Croydon, Croydon North and Kilsyth. The site would list services, response times, licence details and an emergency call-out page. Each suburb has a short page with local detail.",
    tip: "Customers in outer suburbs often search by suburb plus service. Match that pattern in page titles.",
    qa: [
      {
        q: "How many suburbs should I include?",
        a: "Those you serve with real detail, usually three to six for a trade.",
      },
      {
        q: "Can the site show our reviews?",
        a: "Yes. We link to Google reviews and show selected quotes with permission.",
      },
    ],
  },
  {
    name: "Croydon North",
    region: "East",
    character:
      "Croydon North is a suburban area on Maroondah Highway's north side, with local shops, schools and a mix of homes and light commercial uses.",
    hook: "Croydon North customers often choose between local shops and the larger Croydon and Ringwood centres, so clear local information matters.",
    nbrs: ["Croydon", "Kilsyth", "Croydon Hills"],
    blocks: [
      {
        title: "Local shops and services",
        body: "A clear, up-to-date site and Google profile help you win customers who would otherwise default to a bigger centre.",
      },
      {
        title: "Automotive and trades",
        body: "Mechanics and tradespeople benefit from clear service lists, prices or ranges and quick contact options.",
      },
      {
        title: "Family and community services",
        body: "Childcare, tutoring and community groups should state ages, fees and enrolment steps plainly.",
      },
    ],
    example:
      "Imagine a mechanic in Croydon North. The site would list services, makes serviced, hours, location and a booking form. Separate pages cover logbook servicing, brakes and roadworthy checks.",
    tip: "Roadworthy and logbook servicing are high-volume searches. Give each its own page.",
    qa: [
      {
        q: "Should I list prices?",
        a: "Ranges or 'from' prices help, as customers filter by cost.",
      },
      {
        q: "Can customers book online?",
        a: "Yes, through a form or link to your booking system.",
      },
    ],
  },
  {
    name: "Heathmont",
    region: "East",
    character:
      "Heathmont is a leafy outer-east suburb with Heathmont Village, Canterbury Road shops and a strong community feel.",
    hook: "Heathmont Village is small, so local businesses benefit from reaching customers in neighbouring suburbs as well.",
    nbrs: ["Ringwood", "Ringwood East", "Bayswater"],
    blocks: [
      {
        title: "Village cafes and shops",
        body: "Small venues benefit from good photography, accurate hours and menus that load quickly on a phone.",
      },
      {
        title: "Wellness and fitness",
        body: "Studios and practitioners benefit from timetables, bios and online booking.",
      },
      {
        title: "Home services",
        body: "Gardeners, cleaners and tradespeople should name Heathmont and neighbouring suburbs on dedicated pages.",
      },
    ],
    example:
      "Consider a cleaning service in Heathmont. The site would list regular and end-of-lease cleaning, give pricing guidance, show areas covered and offer an instant quote form. A page explaining what is included reduces questions.",
    tip: "State what is and is not included in each service. It prevents disputes and builds trust.",
    qa: [
      {
        q: "Can an instant quote form work for cleaning?",
        a: "Yes. A short form asking for property type and size gives a useful estimate.",
      },
      {
        q: "Do you add insurance information?",
        a: "Yes. Customers look for it, so we place it clearly.",
      },
    ],
  },
  {
    name: "Ringwood East",
    region: "East",
    character:
      "Ringwood East is a residential and light-commercial suburb along Maroondah Highway and Canterbury Road, with a railway station and local shopping strip.",
    hook: "Ringwood East sits beside larger centres, and local businesses often win trade by being easier to reach and easier to deal with.",
    nbrs: ["Ringwood", "Croydon", "Heathmont"],
    blocks: [
      {
        title: "Local strip businesses",
        body: "Cafes, salons and specialist shops benefit from an accurate profile, local photos and a clear explanation of what makes them different.",
      },
      {
        title: "Automotive and trades",
        body: "Workshops and tradespeople need service pages, coverage areas and fast contact options.",
      },
      {
        title: "Community and family services",
        body: "Childcare, tutors and community services should show fees, hours and enrolment details.",
      },
    ],
    example:
      "Picture a tyre and automotive workshop in Ringwood East. The site would list services (tyres, alignment, servicing), brands, hours and a booking form. A page for fleet customers explains accounts and priority service.",
    tip: "Fleet and trade accounts are valuable. Give them their own page.",
    qa: [
      {
        q: "Can we show brands we stock?",
        a: "Yes, and brand terms help match specific searches.",
      },
      {
        q: "Do you set up quote or booking forms?",
        a: "Yes, matched to how you work.",
      },
    ],
  },
  {
    name: "Kilsyth",
    region: "East",
    character:
      "Kilsyth is an outer-eastern suburb at the foot of the Dandenong Ranges, with local shopping centres, industrial estates and a growing residential population.",
    hook: "Kilsyth's industrial areas and residential streets together support a wide mix of trades, suppliers and family services.",
    nbrs: ["Croydon", "Mooroolbark", "Montrose"],
    blocks: [
      {
        title: "Industrial suppliers and workshops",
        body: "Businesses supplying other businesses need capability pages, trade information and a quote form that captures specifications.",
      },
      {
        title: "Home and garden trades",
        body: "Landscapers, arborists and builders serve larger blocks near the ranges. Project galleries and coverage pages for neighbouring suburbs help.",
      },
      {
        title: "Local shops and services",
        body: "Small businesses benefit from accurate details on Google and the site, and a clear explanation of what you offer.",
      },
    ],
    example:
      "Imagine an arborist servicing Kilsyth, Montrose and Mooroolbark. The site would have pages for tree removal, pruning and stump grinding, safety and insurance information, and a quote form that accepts photos. A page on council permits adds helpful content.",
    tip: "Photo-based quotes save visits. Let customers upload an image.",
    qa: [
      {
        q: "Can customers upload photos with a quote request?",
        a: "Yes, where it suits your business.",
      },
      {
        q: "How do we show safety credentials?",
        a: "A dedicated section for licences, insurance and safety practices builds trust.",
      },
    ],
  },
  {
    name: "Ringwood North",
    region: "East",
    character:
      "Ringwood North is a leafy residential suburb with Warrandyte Road shops and larger family properties near the Mullum Mullum Creek.",
    hook: "Ringwood North's customers are mainly homeowners who search for reliable local trades and family services.",
    nbrs: ["Ringwood", "Donvale", "Warranwood"],
    blocks: [
      {
        title: "Home and garden trades",
        body: "Landscapers, painters and handymen benefit from project galleries and suburb pages that name Ringwood North and neighbouring areas.",
      },
      {
        title: "Local shops and cafes",
        body: "Small businesses should keep hours, menus and photos current on both the site and Google profile.",
      },
      {
        title: "Family and health services",
        body: "Tutors, allied health and childcare providers benefit from plain-language pages and simple booking.",
      },
    ],
    example:
      "Consider a painter servicing Ringwood North, Donvale and Warranwood. The site would show interior and exterior projects, explain preparation and paint quality, give guidance on timeframes and offer a quote form with room and size fields.",
    tip: "Explain preparation. Customers who understand the process trust your quote more.",
    qa: [
      {
        q: "How do we show past work?",
        a: "With photos grouped by job type, each with a short description.",
      },
      {
        q: "Can I list the brands I use?",
        a: "Yes. Brand and product details help match specific searches.",
      },
    ],
  },
];
