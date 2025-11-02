'use client';

import Link from "next/link";
import { FaCalendar, FaMapMarker } from 'react-icons/fa';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  link: string;
}

const EventCard = ({ title, date, location, link }: EventCardProps) => {
  return (
    <Link href={link} id='event-card' className="rounded-lg hover:shadow-lg transition-shadow">
    <div>
      <h2 className="title border-l-blue-500">{title}</h2>
      <p className="text-gray-500"><FaCalendar /> {date}</p>
      <p className="text-gray-500"><FaMapMarker /> {location}</p>
    </div>
    </Link>
  )
}

export default EventCard