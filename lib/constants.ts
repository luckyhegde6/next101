export interface Event {
  title: string;
  link: string;
  date: string;
  location: string;
  imagePath: string;
  id?: string;
}

export const events: Event[] = [
  {
    id: "event1",
    title: "Next.js Conf 2023",
    date: "November 8-9, 2023",
    location: "New York City",
    imagePath: "/images/events/event1.jpg",
    link: "#event1"
  },
  {
    id: "event2",
    title: "2023 SXSW Conference",
    date: "March 6-9, 2023",
    location: "San Antonio, TX",
    imagePath: "", // no specific image provided for this event. Can be added later if needed.
    link: "#event2"
  },
  {
    id: "event3",
    title: "DEF CON Hackathon NYC",
    date: "June 7 – July 15, 2023",
    location: "(New York City)",
    imagePath: "", // No specifics available
    link: "#event3"
  },
  {
    id: "event4",
    title: "GitHub Universe Virtual Event",
    date: "December 4–5",
    location: "Online",
    imagePath: "", // no specific event provided for this. Can be added later if needed.
    link: "#event4"
  }
]