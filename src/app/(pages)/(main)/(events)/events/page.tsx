"use client";
import { allEvents, getFilters } from '../../../../data/lib/date';
import EventList from './EventList';
import { EventsPageProps } from '@/types/types';

export default function EventsPage({ searchParams }: EventsPageProps) {
  const events = allEvents;
  const filters = getFilters(events);
  const query = searchParams?.q || '';
  const category = searchParams?.category || 'all';
  const page = Number(searchParams?.page) || 1;

  return (
    <EventList
      events={events}
      filters={filters}
      initialQuery={query}
      initialCategory={category}
      initialPage={page}
    />
  );
}