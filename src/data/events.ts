export interface Event {
  title: string;
  date: string;
  event_info: string;
  speaker: string;
  speaker_img: string;
  speaker_info: string;
  linkedin: string;
  where: string;
}

export const events: Event[] = [
  {
    title: "Git started with Git & Github",
    date: "28th October 2022, 10:00 - 11:00 AM",
    event_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    speaker: "Srajan Kumar",
    speaker_img: "",
    speaker_info: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    linkedin: "https://www.linkedin.com/example",
    where: "Online - YouTube",
  },
  {
    title: "Web Development Workshop",
    date: "15th November 2022, 2:00 - 4:00 PM",
    event_info: "",
    speaker: "Jessica Smith",
    speaker_img: "",
    speaker_info: "Join us for an interactive workshop on web development...",
    linkedin: "https://www.linkedin.com/jessica",
    where: "Virtual Event",
  },
  {
    title: "Data Science Conference",
    date: "5th December 2022, 9:30 AM - 5:00 PM",
    event_info: "",
    speaker: "Dr. John Watson",
    speaker_img: "",
    speaker_info:
      "Explore the latest trends in data science and machine learning...",
    linkedin: "https://www.linkedin.com/drjohn",
    where: "Conference Center, City Hall",
  },
];
