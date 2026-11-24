import type { NewSub } from "./suburbs-new";

/* Inner Melbourne suburbs (Yarra, Stonnington, Port Phillip). Each entry is
   written for that suburb only. */

export const NEW_INNER: NewSub[] = [
  {
    name: "Collingwood",
    region: "Inner Melbourne",
    character:
      "Collingwood is an inner-north suburb of converted warehouses, Smith Street and Johnston Street, with a dense mix of studios, breweries and independent retailers.",
    hook: "Collingwood has one of the highest concentrations of creative and design businesses in Melbourne, so presentation is part of the product.",
    nbrs: ["Fitzroy", "Abbotsford", "Richmond"],
    blocks: [
      {
        title: "Creative agencies and studios",
        body: "Agencies here are judged by their own site first. Case studies with a brief, the work and the result, plus a fast, uncluttered layout, signal quality to prospective clients.",
      },
      {
        title: "Breweries, bars and venues",
        body: "Venues need current menus, events and booking links. We make updating a menu or event quick, so the site and Google profile never disagree.",
      },
      {
        title: "Independent retail on Smith Street",
        body: "Shops compete with online stores. A clear product story, photos and click-to-call or click-to-visit details give browsers a reason to come in.",
      },
    ],
    example:
      "Picture a small design studio in a Collingwood warehouse. The site would lead with three detailed projects, a services page and a short enquiry form that asks for scope and timeline. Fast loading and a restrained layout let the work speak.",
    tip: "Creative buyers read case studies. Show the process as well as the polished result.",
    qa: [
      {
        q: "Should a studio site be image-heavy?",
        a: "Visuals matter, but we optimise images so the site stays fast and Google can read it.",
      },
      {
        q: "Can venues manage events themselves?",
        a: "Yes. We build the events section so you can update it without a developer.",
      },
    ],
  },
  {
    name: "Abbotsford",
    region: "Inner Melbourne",
    character:
      "Abbotsford sits on the Yarra between Victoria Street and Johnston Street, with the Abbotsford Convent, breweries and a growing cluster of offices and studios.",
    hook: "Victoria Street's food and retail strip draws customers from across Melbourne, while converted warehouses host many small businesses.",
    nbrs: ["Collingwood", "Richmond", "Clifton Hill"],
    blocks: [
      {
        title: "Victoria Street food and retail",
        body: "Restaurants and shops on this strip compete for repeat trade. Clear menus, hours and photos, plus reviews and a booking link, help convert searchers into visitors.",
      },
      {
        title: "Warehouse offices and start-ups",
        body: "Small firms in converted buildings need sites that look as established as larger rivals. We build clear service pages and credible about pages.",
      },
      {
        title: "Wellness and yoga near the river",
        body: "Studios and practitioners here benefit from simple timetables, bios and booking. Online booking links reduce calls and increase trial bookings.",
      },
    ],
    example:
      "Imagine a small architecture practice in an Abbotsford warehouse. The site would show a handful of projects with plans and photos, explain how a project runs from brief to completion and invite enquiries with a short form. A page on residential and commercial work targets each audience.",
    tip: "Add the street or precinct name to your location copy. It matches how people search.",
    qa: [
      {
        q: "We are a small team. Do we need a big site?",
        a: "No. A few well-written pages usually outperform a large site with thin content.",
      },
      {
        q: "Can the site show our team?",
        a: "Yes. Team profiles build trust, especially for professional firms.",
      },
    ],
  },
  {
    name: "Cremorne",
    region: "Inner Melbourne",
    character:
      "Cremorne is a compact inner-east suburb that has become a technology, design and professional services precinct beside Richmond.",
    hook: "Cremorne's offices are full of start-ups and agencies, and many of them need a website that reads as credible to investors and clients.",
    nbrs: ["Richmond", "South Yarra", "Prahran"],
    blocks: [
      {
        title: "Tech and start-up credibility",
        body: "Early-stage companies are judged on clarity. A page that states what you do, who for and proof (clients, metrics, press) in the first screen helps more than a long story.",
      },
      {
        title: "Agencies and professional services",
        body: "Competition is high and prospects compare many firms. Specific service pages, team profiles and case studies help you stand out.",
      },
      {
        title: "Cafes and lunch trade",
        body: "Office workers decide on lunch in a minute. Menus, hours and ordering links should be one tap away on a phone.",
      },
    ],
    example:
      "Consider a small software consultancy in Cremorne. The site would explain services in plain language, show two or three case studies with outcomes, list the team and offer a short contact form that captures project size. A blog page supports search for specific technical topics.",
    tip: "Investors and clients check the team page. Make it real and current.",
    qa: [
      {
        q: "Does a start-up need SEO from day one?",
        a: "Basic structure and speed yes, since it is cheap to do early. Larger content programs can wait.",
      },
      {
        q: "Can you build a site that scales?",
        a: "Yes. We build so new pages and sections can be added without a rebuild.",
      },
    ],
  },
  {
    name: "Fitzroy North",
    region: "Inner Melbourne",
    character:
      "Fitzroy North is a village-style inner suburb around St Georges Road, Edinburgh Gardens and Nicholson Street, popular with young families.",
    hook: "Local families here search for kids' activities, allied health and cafes, and word of mouth is strong but increasingly checked against Google.",
    nbrs: ["Fitzroy", "Clifton Hill", "Carlton North"],
    blocks: [
      {
        title: "Family and children's services",
        body: "Music teachers, child health practitioners and activity providers need clear age groups, prices and booking details. Parents read carefully, so plain language builds confidence.",
      },
      {
        title: "Cafes and small retail",
        body: "Independent cafes and shops thrive on neighbourhood loyalty. Accurate hours, friendly copy and good photos help newcomers find and trust you.",
      },
      {
        title: "Home and garden trades",
        body: "Gardeners, painters and renovators serve heritage homes. Galleries of past jobs and suburb coverage pages match how locals look for them.",
      },
    ],
    example:
      "Picture a children's music teacher in Fitzroy North. The site would list classes by age, show a term timetable, introduce the teacher and offer a trial lesson form. A page for parents answers questions about instruments, group sizes and policies.",
    tip: "Parents search by age group, such as 'music lessons for 5 year olds'. Use those phrases.",
    qa: [
      {
        q: "Can parents book trial lessons online?",
        a: "Yes. We add a simple booking form or link to your scheduling tool.",
      },
      {
        q: "Do I need a separate page per class?",
        a: "If classes differ by age or level, a page for each helps match specific searches.",
      },
    ],
  },
  {
    name: "Clifton Hill",
    region: "Inner Melbourne",
    character:
      "Clifton Hill is a small inner-north suburb of Victorian streets, Queens Parade's retail strip and the Merri Creek trail.",
    hook: "Queens Parade has a mix of homewares, furniture and bargain retail that draws shoppers from across the north and east.",
    nbrs: ["Fitzroy North", "Collingwood", "Abbotsford"],
    blocks: [
      {
        title: "Homewares and furniture retail",
        body: "Shoppers research before they visit. Product categories, brands, opening hours and parking information help turn a search into a trip.",
      },
      {
        title: "Local services for residents",
        body: "Tradies, tutors and wellness providers rely on neighbours' recommendations. A site confirming what you do, where and how to book backs those up.",
      },
      {
        title: "Cafes and community businesses",
        body: "Small venues benefit from a simple site, a current menu and a Google profile with fresh photos and replies to reviews.",
      },
    ],
    example:
      "Imagine a furniture shop on Queens Parade. The site would have category pages for sofas, dining and storage, showroom hours, delivery areas and a contact form for stock enquiries. A page covering delivery suburbs helps buyers from further away.",
    tip: "Add delivery areas to retail pages. Shoppers search for them.",
    qa: [
      {
        q: "Do we need online sales?",
        a: "Not necessarily. Many showrooms do well with a catalogue and enquiry form. An online store can be added later.",
      },
      {
        q: "Can the site list in-store stock?",
        a: "We can show featured items and update them easily, though live stock feeds depend on your system.",
      },
    ],
  },
  {
    name: "Prahran",
    region: "Inner Melbourne",
    character:
      "Prahran is an inner-south suburb known for Chapel Street, the Prahran Market, Greville Street and The Alfred hospital.",
    hook: "Chapel Street and the market bring a constant stream of shoppers, and the hospital creates demand for nearby health and support services.",
    nbrs: ["South Yarra", "Windsor", "Toorak"],
    blocks: [
      {
        title: "Retail and hospitality on Chapel Street",
        body: "Fashion, cafes and bars compete on atmosphere and photography. We build fast, image-led sites with accurate hours and bookings, linked to your Google profile.",
      },
      {
        title: "Clinics near The Alfred",
        body: "Allied health and specialist practices benefit from pages for each service, referral information and travel details from the hospital.",
      },
      {
        title: "Market traders and food producers",
        body: "Producers near the Prahran Market benefit from a site that explains what they sell, where and when, plus wholesale and catering enquiries.",
      },
    ],
    example:
      "Consider a physio clinic a short walk from The Alfred. The site would cover conditions treated, funding and referral options, practitioner profiles and online booking. A page for patients leaving hospital explains early rehabilitation and what to bring.",
    tip: "State the walking time from The Alfred or the market. Patients and shoppers search that way.",
    qa: [
      {
        q: "Is Chapel Street too competitive for a small shop?",
        a: "It is competitive, but specific pages and good local signals can still win targeted searches.",
      },
      {
        q: "Do you add online booking?",
        a: "Yes. We link or embed your existing booking system.",
      },
    ],
  },
  {
    name: "Windsor",
    region: "Inner Melbourne",
    character:
      "Windsor is a compact inner-south suburb along Chapel Street's southern end, with Windsor station, small cafes, dental practices and creative businesses.",
    hook: "Windsor sits between Prahran and St Kilda, which means many of its customers also search for neighbouring suburbs.",
    nbrs: ["Prahran", "St Kilda", "Balaclava"],
    blocks: [
      {
        title: "Cafes and independent retail",
        body: "Small venues depend on passing trade and regulars. A simple site with current hours, location and photos supports both.",
      },
      {
        title: "Dental and health practices",
        body: "Practices here compete with larger groups. Service pages for each treatment, clear pricing guidance and easy booking help smaller practices stand out.",
      },
      {
        title: "Creative and professional studios",
        body: "Photographers, designers and consultants need portfolios and clear services. A quick enquiry form that captures project type saves back-and-forth.",
      },
    ],
    example:
      "Imagine a small dental practice near Windsor station. The site would explain check-ups, hygiene and emergency care, show the team and offer online booking. A page covering nervous patients addresses a common worry and builds trust.",
    tip: "Mention Windsor station. Many local searches start from the station.",
    qa: [
      {
        q: "Can a small practice compete with larger groups?",
        a: "Yes. Personal service, specific pages and good reviews are strengths a larger group cannot easily copy.",
      },
      {
        q: "Do you cover nearby suburbs?",
        a: "We can add pages for Prahran, St Kilda and Balaclava where you genuinely serve them.",
      },
    ],
  },
  {
    name: "Toorak",
    region: "Inner Melbourne",
    character:
      "Toorak is one of Melbourne's most prestigious suburbs, centred on Toorak Village and Toorak Road, with high-end retail, specialists and private services.",
    hook: "Customers in Toorak expect discretion and quality, so a restrained, polished website matters more than flashy marketing.",
    nbrs: ["South Yarra", "Armadale", "Malvern"],
    blocks: [
      {
        title: "Private and specialist practices",
        body: "Clients want credentials, privacy and a clear first step. We build calm, well-written pages for each service and discreet contact options.",
      },
      {
        title: "Boutiques and high-end retail",
        body: "Strong photography, a clear story and easy contact matter. We avoid cluttered layouts and keep pages fast.",
      },
      {
        title: "Home services for larger properties",
        body: "Landscapers, interior designers and property managers working on larger homes need portfolios and a professional enquiry process.",
      },
    ],
    example:
      "Picture a boutique interior design practice in Toorak. The site would lead with a few fully photographed projects, explain how engagements start and invite enquiries through a short, private form. A page on the design process sets expectations.",
    tip: "Quality over quantity. Fewer, better projects beat a long, average gallery.",
    qa: [
      {
        q: "Can the site stay discreet?",
        a: "Yes. We design low-key sites with careful contact options and no aggressive pop-ups.",
      },
      {
        q: "Do you offer photography?",
        a: "We build around your photography. We can advise on what to shoot.",
      },
    ],
  },
  {
    name: "Malvern",
    region: "Inner Melbourne",
    character:
      "Malvern is an established inner-south-east suburb with Glenferrie Road and High Street shops, Malvern Central and many professional practices.",
    hook: "Glenferrie Road and High Street serve affluent households who research providers carefully before they book.",
    nbrs: ["Armadale", "Toorak", "Malvern East"],
    blocks: [
      {
        title: "Professional practices",
        body: "Accountants, lawyers and financial planners sell on trust. Team profiles, clear service descriptions and a simple first-meeting form suit this audience.",
      },
      {
        title: "Health and wellness",
        body: "Dentists, physios and beauty clinics benefit from detailed service pages, honest pricing guidance and easy online booking.",
      },
      {
        title: "Local retail and cafes",
        body: "Established shops keep loyal customers and attract newcomers through accurate hours, good photos and recent reviews on Google.",
      },
    ],
    example:
      "Consider an accounting practice on Glenferrie Road. The site would have pages for individuals, small business and SMSF work, a team page, client testimonials with permission and a booking link for an initial consultation.",
    tip: "Use clear, specific service names. Clients search for them directly.",
    qa: [
      {
        q: "Can testimonials be shown safely?",
        a: "Yes, with consent and within your profession's rules.",
      },
      {
        q: "Do you handle ongoing updates?",
        a: "We can update the site for you or hand over a simple way to edit it.",
      },
    ],
  },
  {
    name: "Malvern East",
    region: "Inner Melbourne",
    character:
      "Malvern East is a residential suburb along Wattletree Road and Dandenong Road, with Central Park, local shops and growing medical and professional services.",
    hook: "Malvern East's strips are quieter than Glenferrie Road, which means a clear site can help a local business draw customers from beyond the immediate street.",
    nbrs: ["Malvern", "Chadstone", "Armadale"],
    blocks: [
      {
        title: "Local services along Wattletree Road",
        body: "Hair, beauty, trades and cafes serve established households. Accurate hours, clear services and reviews help them choose you over the next suburb.",
      },
      {
        title: "Medical and allied health",
        body: "Practices near Dandenong Road serve patients from several suburbs. Pages for each service and clear access and parking details help.",
      },
      {
        title: "Home renovation and trades",
        body: "Established houses mean steady renovation demand. Project galleries and coverage pages for Malvern East and neighbouring suburbs help match searches.",
      },
    ],
    example:
      "Imagine a small landscaping business working in Malvern East and Glen Iris. The site would have a page for garden design, one for maintenance and one for hard landscaping, each with photos. A coverage page names each suburb, and a form asks for garden size.",
    tip: "Name nearby suburbs you serve. Residents often search across borders.",
    qa: [
      {
        q: "Should I list all nearby suburbs?",
        a: "Only those you genuinely serve, each on its own page with real detail.",
      },
      {
        q: "Can I show before and after photos?",
        a: "Yes, and they are among the most persuasive content for trades.",
      },
    ],
  },
  {
    name: "Armadale",
    region: "Inner Melbourne",
    character:
      "Armadale is an inner-south-east suburb known for High Street's antique dealers, interior design showrooms and boutique cafes.",
    hook: "High Street Armadale is a destination for design and antiques, so customers often travel and search ahead.",
    nbrs: ["Toorak", "Malvern", "Prahran"],
    blocks: [
      {
        title: "Antiques and design showrooms",
        body: "Buyers research before visiting. Featured pieces, a clear explanation of what you stock and showroom hours help convert searches into visits.",
      },
      {
        title: "Interior designers and decorators",
        body: "Portfolios of finished rooms and a clear process page are what clients look for. A short enquiry form that asks about scope saves time.",
      },
      {
        title: "Cafes and lifestyle businesses",
        body: "Small venues benefit from strong photography, accurate hours and links to bookings and events.",
      },
    ],
    example:
      "Picture an antique dealer on High Street. The site would show recent arrivals, categories, provenance notes, opening hours and an enquiry form for specific items. A page for trade customers explains terms and shipping.",
    tip: "Update featured items regularly. Fresh stock gives people a reason to visit.",
    qa: [
      {
        q: "Can we list items without selling online?",
        a: "Yes. Many showrooms feature items and handle sales by enquiry or in person.",
      },
      {
        q: "How do we show provenance?",
        a: "A short note per item or category adds trust and useful content.",
      },
    ],
  },
  {
    name: "South Melbourne",
    region: "Inner Melbourne",
    character:
      "South Melbourne is a lively inner suburb with the South Melbourne Market, Clarendon Street's cafes and a mix of creative and professional offices.",
    hook: "The market and Clarendon Street draw locals and visitors every day, and the offices nearby add weekday lunch trade.",
    nbrs: ["Albert Park", "Port Melbourne", "Southbank"],
    blocks: [
      {
        title: "Market traders and food businesses",
        body: "Stalls and cafes need a simple, clear site: what you sell, when, where to find you and how to order or cater. Strong photos do much of the persuading.",
      },
      {
        title: "Creative and professional offices",
        body: "Studios and consultancies around Clarendon and Coventry streets need portfolios and case studies that read as credible to clients.",
      },
      {
        title: "Health, fitness and wellbeing",
        body: "Studios and clinics benefit from timetables, practitioner profiles and online booking, since customers often decide quickly.",
      },
    ],
    example:
      "Imagine a specialty food producer selling at the South Melbourne Market. The site would show products, market days and times, wholesale enquiries and a catering page. A short story page explains where ingredients come from.",
    tip: "Market traders should state their stall location and days clearly. It is the most-searched detail.",
    qa: [
      {
        q: "Do market stalls need a website?",
        a: "A simple site helps customers find you, order for events and discover wholesale options.",
      },
      {
        q: "Can the site list weekly specials?",
        a: "Yes. We make it easy to update.",
      },
    ],
  },
  {
    name: "Albert Park",
    region: "Inner Melbourne",
    character:
      "Albert Park is a bayside inner suburb around Albert Park Lake, the Grand Prix circuit and the Bridport Street and Victoria Avenue shops.",
    hook: "Albert Park has a settled, family-focused community and a calendar of major events that change local demand.",
    nbrs: ["South Melbourne", "Port Melbourne", "Middle Park"],
    blocks: [
      {
        title: "Family and lifestyle services",
        body: "Tutors, child health, fitness and beauty providers rely on neighbourhood trust. Clear services, pricing and easy booking help families decide.",
      },
      {
        title: "Event-driven hospitality",
        body: "Cafes and venues see demand spikes around major events. Keeping hours and offers updated on the site and Google profile avoids lost trade.",
      },
      {
        title: "Home and garden trades",
        body: "Established homes need renovators, gardeners and cleaners. Coverage pages for Albert Park and Middle Park help local trades appear in suburb searches.",
      },
    ],
    example:
      "Consider a personal trainer who runs sessions around the lake. The site would explain group and one-on-one options, list session times and locations, show pricing and offer a free first session booking. A seasonal page covers winter indoor options.",
    tip: "Mention the lake or the shops by name. Locals use them as landmarks.",
    qa: [
      {
        q: "Can I advertise outdoor sessions?",
        a: "Yes. We include locations, times and any permits or insurance information customers expect.",
      },
      {
        q: "How do events affect my site?",
        a: "A simple event-hours section lets you update availability before major events.",
      },
    ],
  },
  {
    name: "Elwood",
    region: "Inner Melbourne",
    character:
      "Elwood is a relaxed bayside suburb with Ormond Esplanade, Glen Huntly Road's cafes and a mix of young professionals and families.",
    hook: "Elwood's cafes, wellness studios and small services depend on a community that checks Google before trying somewhere new.",
    nbrs: ["St Kilda", "Brighton", "Balaclava"],
    blocks: [
      {
        title: "Cafes and beach-side hospitality",
        body: "Weather and the season shape trade. Current hours, menus and a good photo gallery help visitors and locals decide quickly.",
      },
      {
        title: "Wellness, yoga and fitness",
        body: "Studios benefit from clear timetables, trial offers and simple booking. We keep the site calm and fast.",
      },
      {
        title: "Pet and family services",
        body: "Dog walkers, groomers and family services depend on trust. Real photos, reviews and a plain explanation of how you work help new customers get in touch.",
      },
    ],
    example:
      "Picture a dog walking and grooming business in Elwood. The site would list services, areas covered, pricing, a booking form and photos of happy dogs. A page on safety and insurance reassures new customers.",
    tip: "Add your coverage area and insurance details. Pet owners look for both.",
    qa: [
      {
        q: "Do you add reviews to the site?",
        a: "Yes, with permission, and we link to your Google reviews.",
      },
      {
        q: "Can I take bookings for recurring services?",
        a: "We can add a form or link to your scheduling tool for repeat bookings.",
      },
    ],
  },
  {
    name: "Balaclava",
    region: "Inner Melbourne",
    character:
      "Balaclava is an inner-south suburb known for Carlisle Street's delis, bakeries and kosher food businesses, and for its busy railway station.",
    hook: "Carlisle Street is a food destination, and many of its businesses draw customers from well beyond the suburb.",
    nbrs: ["St Kilda", "Elwood", "Windsor"],
    blocks: [
      {
        title: "Food destinations",
        body: "Bakeries, delis and restaurants need clear menus, opening hours (including around holidays) and photos. Dietary and certification details matter to many customers.",
      },
      {
        title: "Community and family services",
        body: "Tutors, health and community services here are chosen on recommendation. A site that confirms what you do and how to contact you supports those referrals.",
      },
      {
        title: "Trades and professional offices",
        body: "Local trades and professionals benefit from suburb-specific pages and clear contact options, since customers often search across St Kilda, Elwood and Caulfield.",
      },
    ],
    example:
      "Imagine a bakery on Carlisle Street that takes large orders for festivals and events. The site would show the range, opening hours, an order form with lead times and a catering page. Holiday opening hours are posted well in advance.",
    tip: "Publish holiday hours early. Customers plan around them.",
    qa: [
      {
        q: "Can we show certification information?",
        a: "Yes. A clear note on certification and dietary information helps customers choose confidently.",
      },
      {
        q: "Do you build order forms?",
        a: "Yes. We add forms for large orders with lead times and pickup details.",
      },
    ],
  },
];
