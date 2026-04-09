export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  club: "Cyber knights" | "Script Soldiers" | "Both";
  type: "past" | "upcoming";
  invitationFile?: string; // path in /events/invitations/
  photos?: string[]; // paths in /events/photos/
  registrationLink?: string;
  poster?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "TECH RHYTHM",
    date: "26 Feb 2026",
    time: "9.30 AM - 3.30 PM",
    venue: "Beta conference hall ",
    description: "An intense 6-hour coding marathon where teams competed to solve real-world problems using innovative algorithms and data structures.",
    club: "Both",
    type: "past",
    poster: "/events/invitations/event1.jpg",
    invitationFile: " ",
    photos: ["/events/photos/event1-1.jpg", "/events/photos/event1-2.jpg"],
  },
  {
    id: "2",
    title: "Cyber VerteX",
    date: "02 Sep 2025",
    time: "1:00 PM - 3:30 PM",
    venue: "Beta conference hall",
    description: "Cyber VerteX -- where Security Meets innovation.",
    club: "Cyber knights",
    type: "past",
    poster: "/events/invitations/event2.jpg",
    invitationFile: " ",
    photos: ["/events/photos/event2-1.jpg", "/events/photos/event2-2.jpg"],
  },
  {
    id: "3",
    title: "Code Voyage",
    date: "26 Aug 2025",
    time: "12:45 AM - 3:30 PM",
    venue: "Delta conference hall",
    description: "Code Voyage is more than just a coding event- it's a journey.A journey where young innovators set sail into the wast ocean of logic.problem solving and creativity.",
    club: "Script Soldiers",
    type: "past",
    poster: "/events/invitations/event3.jpg",
    invitationFile: " ",
    photos: ["/events/photos/event3-1.jpg", "/events/photos/event3-2.jpg"],
  },
  {
    id: "4",
    title: "Cyber Nexus",
    date: "14 Aug 2025",
    time: "01:00 PM - 04:00 PM",
    venue: "Beta conference hall",
    description: "join the cipher Run Fun,Games and challenges.",
    club: "Cyber knights",
    type: "past",
    poster: "/events/invitations/event4.jpg",
    invitationFile: " ",
    photos: ["/events/photos/event4-1.jpg", "/events/photos/event4-2.jpg"],
  },
  {
    id: "5",
    title: "Brains & Bytes",
    date: "13 Aug 2025",
    time: "01:00 PM - 04:00 PM",
    venue: "Beta conference hall",
    description: "Seminar on AI and Machine learning.",
    club: "Script Soldiers",
    type: "past",
    poster: "/events/invitations/event5.jpg",
    invitationFile: " ",
    photos: ["/events/photos/event5-1.jpg", "/events/photos/event5-2.jpg"],
  },
 
  {
    id: "6",
    title: "Glitchyugam'26",
    date: "28 Apr 2026",
    time: "9:00 AM - 5:00 PM",
    venue: "Zeta conference hall & Beta conference hall",
    description: "Annual technical festival featuring coding contests, cybersecurity challenges, project exhibitions, and guest lectures from industry leaders.",
    club: "Both",
    type: "upcoming",
    poster: "/events/invitations/event6.jpg",
    invitationFile: "/events/invitations/event6.jpg",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzvU7pPBYC1QopicbreUlLtqCmBY1e5lcKNkwGJRihhMAH0Q/viewform",
  },
];
