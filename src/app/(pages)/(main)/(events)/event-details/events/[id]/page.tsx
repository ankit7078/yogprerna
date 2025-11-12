import { getEventById } from "../../../../../../data/lib/eventdetail";
import EventDetails from "../../components/EventDetails";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const event = await getEventById(params.id);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} | Yoga Events`,
    description: event.description.substring(0, 160), // Truncate for meta description
  };
}

// It's an 'async' Server Component
export default async function EventPage({ params }) {
  const { id } = params;
  const event = await getEventById(id);

  // If no event is found, show the 'not-found' page
  if (!event) {
    notFound();
  }

  // Pass the fetched 'event' object as a prop to the Client Component
  return <EventDetails event={event} />;
}