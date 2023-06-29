import Fetcher from "./Fetcher";

export async function getAllEvents() {
  const data = await Fetcher(
    "https://nextjs-course-13a42-default-rtdb.firebaseio.com/events.json"
  );
  return data;
}

export async function getFeaturedEvents() {
  const data = await getAllEvents();
  return data.filter((event) => event.isFeatured);
}

export async function getFilteredEvents(year, month) {
  const data = await getAllEvents();
  let filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
}

export async function getEventById(id) {
  const data = await getAllEvents();
  return data.find((event) => event.id === id);
}
