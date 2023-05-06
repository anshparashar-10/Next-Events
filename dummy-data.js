const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Zynga games hackathon",
    description:
      "Zynga India invites you for a 2-day Hackathon - An unique opportunity to put your game development skills to test and interact with industry experts.",
    location: "Gaming Lab",
    date: "2023-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "KAVACH ",
    description:
      "KAVACH-2023 IS CONCEIVED TO CHALLENGE INDIA INNOVATIVE MINDS TO CONCEPTUALIZE IDEAS AND FRAMEWORKS IN THE DOMAIN OF CYBER SECURITY USING ARTIFICIAL INTELLIGENCE, DEEP LEARNING, MACHINE LEARNING, AUTOMATION, BIG DATA, AND CLOUD COMPUTING. ",
    location: "Lab Complex - 102",
    date: "2024-05-30",
    image: "images/kavach.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Harbinger 2023",
    description:
      "Once again RBI invites your innovative ideas for four select problem statements, that are aimed to transform the financial ecosystem by improving diverse aspects of financial services and making it more inclusive, efficient, accessible and secure.",
    location: "Academic Block -AB302",
    date: "2023-04-10",
    image: "images/harbor.jpg",
    isFeatured: false,
  },
  {
    id: "e4",
    title: "BRIDG-ATHON",
    description:
      "Bridg-Athon is a team-based event, and each team must have a minimum of 4 members and a maximum of 5 members. We are also offering attendees the opportunity to watch the event for a separate fee of Rs. 100.",
    location: "Class Slot - B13, C13. ",
    date: "2023-06-18",
    image: "images/Bridghackathon.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
