/* How local searches behave, written per suburb (part A: City of Melbourne,
   inner suburbs, Boroondara, Manningham, Maroondah). One paragraph each,
   written for that suburb only. Never copy between entries. */

export const SEARCH_A: Record<string, string> = {
  "Carlton North":
    "Neighbours here type a street or a landmark with the service, such as 'cafe Rathdowne Street' or 'plumber near Princes Park'. Nearby Fitzroy North and Brunswick East also appear in the same breath. We check which of those phrases your competitors already use, then write pages that answer them more clearly, without padding the site with suburbs you do not serve.",
  Docklands:
    "Docklands searches often name a building, a precinct or Marvel Stadium rather than the suburb alone, and a lot happens at lunchtime and after work on a phone. Because few local sites are written for these phrases, a page that mentions the actual places you serve can be easier to win here than in a crowded suburb. We research the wording first, then build around it.",
  "East Melbourne":
    "Specialist searches tend to be specific: a procedure, a condition or a practitioner type plus 'East Melbourne' or 'Victoria Parade'. Referrers search too, looking for who accepts referrals. We map those phrases and build one clear page for each, rather than a single overview that tries to answer everything and answers nothing well.",
  Flemington:
    "Racecourse Road searches combine cuisine with the street, like 'Vietnamese Racecourse Road', while event days produce short bursts of 'near the racecourse' searches. The pattern differs a lot between a Tuesday lunch and Cup week, so we plan for both and keep the event-day information easy to update.",
  Kensington:
    "Kensington searches often share the inner-west basket: Kensington, Flemington, North Melbourne and Footscray in one session. A trade or studio that wants to be found across all four needs a page for each rather than one catch-all. We check which suburbs bring real enquiries and which would only be thin pages.",
  "North Melbourne":
    "Errol Street is the landmark people use, so searches like 'cafe Errol Street' and 'physio North Melbourne' dominate. West Melbourne and Parkville sit close by and overlap with them. We look at what ranks today, then build specific pages that tell Google exactly what you do and where.",
  Parkville:
    "Searches here follow the academic and medical calendar: students arrive in February and July, exam periods bring surges, and the hospitals generate steady daily demand. We build pages that match those cycles and keep seasonal sections ready to refresh, so the site is relevant when demand peaks.",
  "Port Melbourne":
    "Port Melbourne searches split between Bay Street, Beacon Cove and the Fishermans Bend side, and marine searches use specific boat and equipment terms. We find which versions your customers actually type, then give each its own page, so a boat owner and a Bay Street shopper both land somewhere that fits.",
  Southbank:
    "Southbank searches are heavily mobile and time-sensitive: 'lunch near Crown', 'gym Southbank', 'cleaner Southbank apartments'. Short, direct pages that load fast and state location and hours clearly do best. We study the phrases used near the Arts Centre and the promenade and mirror them where accurate.",
  "South Wharf":
    "Buyers of event services search by venue and date, often months ahead, with phrases like 'exhibition stand builder Melbourne Convention Centre'. Delegates searching for places to stay or eat use walking distance instead. We build pages for each audience and keep event calendars in mind when planning updates.",
  "South Yarra":
    "Chapel Street, Toorak Road and Greville Street all show up as qualifiers, and customers frequently search for the exact treatment or product. Competition is high, so specific pages (one per treatment or category) and strong reviews are the practical route in. We review the current results and find gaps worth filling.",
  "West Melbourne":
    "Trade and supplier searches here name the product, the turnaround or the delivery area, and buyers often compare three suppliers in one sitting. Pages that state specifics, such as lead times and trade terms, rank and convert better than slogans. We shape the content around those details.",
  Collingwood:
    "Searches combine the suburb with a style or specialty, such as 'craft brewery Collingwood' or 'branding studio Collingwood', and Smith Street or Johnston Street appear as location hooks. We look at how rivals describe themselves, then write in the specific language your own customers use instead of generic agency phrases.",
  Abbotsford:
    "Victoria Street and the Convent area anchor local searches, while offices in converted warehouses are found through service plus suburb. Richmond and Collingwood overlap heavily, so we are careful to give Abbotsford its own genuine content and not a lightly edited copy of a neighbour's page.",
  Cremorne:
    "Cremorne is searched mostly by business buyers looking for specialist providers, with phrases that mention the service and the precinct. Because the suburb is small, many searches share results with Richmond, so a page that clearly states your Cremorne address and focus helps Google separate you from the pack.",
  "Fitzroy North":
    "Parents searching here use age-specific terms, such as 'swimming for toddlers', plus St Georges Road or Nicholson Street, while cafe searches lean on Edinburgh Gardens. We choose phrases with real volume and keep pages short enough to read between school drop-off and work.",
  "Clifton Hill":
    "Shoppers use Queens Parade as the anchor ('furniture Queens Parade') and often mention a product category, while services search the suburb directly. Delivery area is a strong filter for homewares, so we include it. Neighbouring Fitzroy North and Collingwood overlap, which we handle with separate pages rather than shared text.",
  Prahran:
    "Prahran searches mention Chapel Street, the market or The Alfred, and shoppers refine by category: vintage, vegan, jewellery. Clinics near the hospital attract searches by condition. We build a page per category or service so each term has a destination that fits.",
  Windsor:
    "Windsor customers often search 'near Windsor station' or Chapel Street and may also try Prahran and St Kilda, so overlap is high. We keep your Windsor page distinct, with its own details and photos, and add neighbours only where you genuinely trade.",
  Toorak:
    "Toorak searches are specific and quality-driven, usually naming Toorak Village or Toorak Road along with the exact service. There is less volume but higher value per enquiry, so we focus on clarity, credentials and good photography rather than chasing broad terms.",
  Malvern:
    "Malvern searches carry the street name, Glenferrie Road or High Street, and customers often compare practices by credentials. Armadale, Toorak and Malvern East overlap in the same journeys. We write distinct pages for each of those you serve instead of one page that name-drops every suburb.",
  "Malvern East":
    "Wattletree Road and Central Park are common qualifiers, and customers often search from Chadstone or Glen Iris too. Volume per suburb is modest, so we group coverage sensibly, giving Malvern East its own page and linking to genuinely related areas rather than creating thin extras.",
  Armadale:
    "Armadale searches revolve around High Street and its specialties: antiques, design, homewares. Buyers often name the item type, like 'Danish furniture Armadale'. We use those product and style terms in headings, since they match what people type and what you actually sell.",
  "South Melbourne":
    "Market-related searches use the market name and the stall type, while office-based searches use Clarendon or Coventry Street. Weekend and weekday intent differ, so we make hours and market days obvious and write separate pages for the two audiences.",
  "Albert Park":
    "Albert Park searches often reference the lake, the Grand Prix or Bridport Street, and event weekends cause short, sharp spikes. We plan an easily updated event section so your site matches what customers are searching during those weekends, and stays calm and simple the rest of the year.",
  Elwood:
    "Elwood customers search with the beach, Ormond Esplanade or Glen Huntly Road as markers, and wellness searches use specific class types. St Kilda and Brighton overlap, so we make sure your Elwood page says something only Elwood can say, such as walking distance from the beach.",
  Balaclava:
    "Carlisle Street searches are often food-specific and sometimes tied to dietary needs and certification, and customers plan around holidays well in advance. We put certification and holiday trading details where searchers will find them quickly, and give each product category a clear heading.",
  Kew:
    "Kew searches include Kew Junction, High Street and Cotham Road, and professional searches often combine a specialty with 'Kew'. Hawthorn and Balwyn overlap, so we avoid duplicate pages and focus each one on what is genuinely different about serving that part of the east.",
  "Kew East":
    "Searches here are often 'near me' style or use neighbouring suburbs because Kew East is small. We do not create separate thin pages for each neighbour. Instead we write one strong Kew East page and a few well-chosen coverage pages where you actually work.",
  Balwyn:
    "Balwyn searches usually name Whitehorse Road and a subject or service, and parents add year levels for tutoring. Competition is strong from Box Hill and Camberwell practices, so specific service pages and honest credentials help smaller operators stand out.",
  "Balwyn North":
    "Balwyn North customers frequently search by the nearest strip, such as Doncaster Road or Bulleen Road, as well as by suburb. We capture those local markers in headings and keep each page focused, so Google can tell your Balwyn North page apart from Balwyn.",
  "Glen Iris":
    "Glen Iris searches mention High Street, the creek trail or nearby schools, and families add ages to the query. Burke Road is a frequent qualifier. We use the real local markers in page copy and build around age groups and services, which is how parents actually search.",
  Ashburton:
    "Ashburton searches are small in volume but very local: 'florist Ashburton', 'tutor Ashburton'. The result pages are often thin, which gives a well-built local page a real chance. We also note Alamein and Burwood searches that overlap, and cover them only where relevant.",
  "Surrey Hills":
    "Surrey Hills is searched as 'Union Road' or 'near Surrey Hills station' for hospitality, and by service for professionals. Mont Albert and Canterbury overlap, so we write each page with its own markers and avoid copying between them.",
  Canterbury:
    "Canterbury searches mention Maling Road and often the product, like 'gifts Maling Road' or 'florist Canterbury'. Seasonal peaks around Christmas and Mother's Day are strong, so we plan content to be ready before those dates, rather than after.",
  "Mont Albert":
    "Mont Albert searches are quiet but intent-rich, often using the station or Whitehorse Road as a marker. Because customers also search Surrey Hills and Box Hill, we focus on being the clear Mont Albert choice and link to those areas where you work.",
  "Hawthorn East":
    "Searches here use Auburn Village, Burwood Road or Camberwell as markers, and many customers travel from neighbouring suburbs. We emphasise your exact location, parking and any specialties in the page copy, so people deciding between suburbs have the information they need.",
  Templestowe:
    "Templestowe Village is the common marker, and customers often add Doncaster or Bulleen to the search. Larger properties mean searches for landscaping, pools and maintenance have their own vocabulary. We use those terms and keep seasonal pages ready for spring planting.",
  "Templestowe Lower":
    "Searches mention Manningham Road, Macedon Square or the Yarra trail, and overlap with Templestowe, Bulleen and Doncaster East. We give the Lower page real local detail, such as access and landmarks, so it stands on its own instead of competing with its neighbour.",
  Bulleen:
    "Bulleen searches combine the Plaza or Manningham Road with a service, and visitors to Heide search by gallery and cafe. Trade buyers search by product. We write separate pages for each audience, because a homeowner and a purchasing officer do not read the same page.",
  "Doncaster East":
    "Customers search by the specific centre, such as The Pines, or by street, and parents add children's ages. Because the suburb is large, we write location detail that helps people confirm you are close, then link to Doncaster and Donvale pages where relevant.",
  Donvale:
    "Donvale searches usually name the village, the creek or Mitcham Road, and many are for trades serving larger blocks. Search volume is modest, so we target a few high-value phrases, such as fencing, landscaping and pool services, with proper pages for each.",
  Warrandyte:
    "Visitor searches here are experience-led: 'Warrandyte cafe by the river', 'Warrandyte markets', 'gallery Warrandyte'. Locals search for trades and services. We write separate content for visitors and residents, and keep opening hours and seasonal events easy to update.",
  Croydon:
    "Croydon searches use Main Street or the station as markers, and trades often add Ringwood and Mooroolbark. We write a distinct page for each area you serve, with its own examples, instead of a list of suburb names in one block of text.",
  "Croydon North":
    "Searches in Croydon North are frequently highway-based, using Maroondah Highway or Dorset Road as landmarks, and automotive searches mention specific services like 'roadworthy' or 'logbook service'. We build a page per service, since each is its own search.",
  Heathmont:
    "Heathmont searches use the village name and sometimes Canterbury Road, and customers often compare Heathmont with Ringwood and Bayswater. We focus on what is genuinely local: access, parking, hours and personality, so people choosing between centres can see why yours is the easier choice.",
  "Ringwood East":
    "Ringwood East searches reference the station, Maroondah Highway or Canterbury Road, and workshops are found by service and brand. We write pages by service and brand, because 'tyres Ringwood East' and 'European car servicing Ringwood East' are different customers.",
  Kilsyth:
    "Kilsyth searches blend residential and industrial intent: trades are searched by service, while suppliers are searched by product. Montrose and Mooroolbark overlap. We build specific pages and avoid generic suburb lists, which tend to be thin and ignored.",
  "Ringwood North":
    "Ringwood North customers search with Warrandyte Road or the creek as markers, and for larger-block services such as landscaping and painting. We write pages that answer the typical homeowner questions, like timing and preparation, which also tend to be what Google rewards.",
};
