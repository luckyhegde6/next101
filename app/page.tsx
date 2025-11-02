import ExploreBtn from '@/components/ExploreBtn';
import EventCard from '@/components/EventCard';
import { events, type Event } from '@/lib/constants';

const page = () => {
  return (
    <main className="container mx-auto py-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Dev Events for Next.js</h1>
        <ExploreBtn />
      </section>

      <section id="events" className="mt-20">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: Event) => (
            <li key={event.id} className="">
              {/* Add a link to the event */}
              <a href={`/events/${event.link}`} target="_blank" rel="noopener noreferrer" aria-label={`View details for ${event.title}`}>
                <EventCard {...event} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default page;