"use client";
import React, { useState } from 'react';
import EventCard from '@/components/EventCard';
import { events, type Event } from '@/lib/constants';

const EventsPage: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>

      <button onClick={handleCreateClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Create Event
      </button>

      {isCreating && (
        <div>
          <h2>Create New Event</h2>
          {/* Add your form here */}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: Event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventsPage;