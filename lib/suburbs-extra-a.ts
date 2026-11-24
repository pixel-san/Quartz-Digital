/* Extra, suburb-specific copy (part A). Each entry is written for that
   suburb only. `example` is a clearly hypothetical walk-through, not a
   claim about a real client. `search` is how local searches behave. */

export type Extra = { example: string; search: string };

export const EXTRA_A: Record<string, Extra> = {
  Altona: {
    example:
      "Picture a small cafe a few minutes from Altona Beach. We would start with the page that matters most: a clear menu, opening hours that change for summer, a map pin and three bright photos. Then we would add a catering page for local events and a short story page about the owners. Finally we would link it all to the Google listing, so a visitor searching 'breakfast near Altona Beach' sees the same hours and photos in both places.",
    search:
      "Searches in Altona tend to mix suburb names with landmarks, such as the beach, the pier or Pier Street. Customers also search nearby suburbs like Altona Meadows, Altona North and Seaholme. We map out which of those are worth their own page for your business, rather than guessing, and check which ones already have competitors who are doing it well.",
  },
  Sunshine: {
    example:
      "Imagine a dental practice near Sunshine station. The site would open with the address, the walking distance from the platform, opening hours and a booking button. Below that sit pages for check-ups, emergency care, and children's dentistry, each written for the question a patient would actually have. A short page about parking and public transport removes the last bit of friction for anyone arriving by train.",
    search:
      "Sunshine searches often include the station or a main road such as Hampshire Road or Ballarat Road, because people orient themselves by them. We include that kind of location language naturally, and we check how the businesses currently ranking for your main search describe themselves, so we know what a stronger page would need to say.",
  },
  Footscray: {
    example:
      "Consider a small restaurant a few streets from Footscray Market. The site would show the menu with real dish photos, dietary information, a booking link and a map. We would add a page for group bookings and catering, since those are often higher-value enquiries, and make sure the opening hours on the site and on Google never disagree, especially around public holidays.",
    search:
      "Footscray searches are frequently cuisine-led, such as 'pho Footscray' or 'Ethiopian Footscray', rather than generic 'restaurant' searches. For a food business, that means the specific dishes and cuisine matter in your titles and headings. We look at the actual phrases customers use and write your pages around them.",
  },
  Melton: {
    example:
      "Imagine a landscaper working across the newer Melton estates. We would build a page for turf and lawn installs, one for retaining walls and one for decking, each with before-and-after photos from real jobs. A separate page would name the estates and nearby suburbs you cover, and a quote form would ask for yard size and suburb so you can reply with something useful rather than a vague 'how much?'.",
    search:
      "Melton searches include estate names and neighbouring areas such as Melton South, Harkness and Rockbank. In a growth area, people often search using the name on their street sign, so those local names are worth including where they are accurate. We review what ranks today for your main services to see what is missing.",
  },
  "Caroline Springs": {
    example:
      "Picture a children's swimming or music teacher in Caroline Springs. The site would list age groups, class days, prices and the location, with a short trial-class booking form. Parents also want to know about instructors' qualifications and safety, so a short page on each builds confidence. We would link the site to the Google profile so reviews from other parents appear beside your name.",
    search:
      "Caroline Springs searches commonly include the town centre, the lake or the suburb name alongside the service, such as 'tutor Caroline Springs'. Nearby Burnside, Burnside Heights and Hillside show up too. We look at which of those are meaningful for your business and which would just be thin pages.",
  },
  Sunbury: {
    example:
      "Imagine a local electrician who services Sunbury, Diggers Rest and Bulla. The site would include a page on switchboard upgrades, one on safety checks, one on new-home wiring and a coverage page naming each town. Each page would show a licence number, recent jobs and a phone number that works with a tap. A short about page explains how long you have worked in the area.",
    search:
      "Sunbury searches often name the town and sometimes the surrounding localities, such as Diggers Rest, Bulla and Wildwood. Because the competition is smaller than in inner suburbs, well-structured local pages can move up faster. We check the current results for your main services so we know what to outdo.",
  },
  Tullamarine: {
    example:
      "Consider a small freight or packaging supplier near the airport. The site would have a page for each service line, one stating coverage areas and delivery times, one listing accreditations and insurance, and a quote form that asks for volume, pickup location and destination. Buyers could download a capability statement as a PDF. The aim is for a buyer to shortlist you without needing to ring.",
    search:
      "Tullamarine searches are often business-to-business and descriptive, like 'pallet storage Tullamarine' or 'airport freight forwarder Melbourne'. These are narrower than consumer searches, so being specific works. We research the phrases your buyers use and build pages around the ones where a smaller supplier can realistically compete.",
  },
  Craigieburn: {
    example:
      "Imagine a mobile beautician serving Craigieburn and the surrounding estates. The site would list each treatment with prices, show recent work, explain how mobile visits work and cover the areas you travel to. A booking link or message button sits on every page. Reviews from the Google profile appear on the site, so a new customer can see that others have already trusted you.",
    search:
      "Craigieburn searches often include estate or neighbourhood names, plus Aston, Highlands and Mickleham for the wider area. We identify which are realistic for you, write pages with genuine detail for them and avoid the temptation to publish thin pages for every possible suburb.",
  },
  Epping: {
    example:
      "Picture a physio clinic near the Northern Hospital. The site would include a page for each condition treated, clear information on referrals and funding, practitioner profiles and a booking link. A short page for people leaving hospital explains what a first appointment looks like. These pages answer the exact questions patients ask before they book.",
    search:
      "Epping searches often combine a health need with the area, like 'physio Epping' or 'podiatrist near Northern Hospital'. They also include conditions and procedures. We build pages around the conditions you actually treat, written in plain English, and check your Google profile for consistency.",
  },
  Broadmeadows: {
    example:
      "Imagine an independent mechanic in Broadmeadows. The site would list services, makes serviced, hours, location and phone number at the top of the page, with a booking form below. Separate pages cover logbook servicing, brakes and roadworthy certificates. If your customers speak other languages, key details could be added in those languages.",
    search:
      "Broadmeadows searches tend to be direct and practical, such as 'roadworthy Broadmeadows' or 'car service near me'. Mobile searches dominate. We build short, scannable pages that answer the question immediately, and we check how nearby competitors present the same services.",
  },
};
