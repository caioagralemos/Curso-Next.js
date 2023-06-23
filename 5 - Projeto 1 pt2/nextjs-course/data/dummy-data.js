const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programação para Todo Mundo',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking para Introvertidos',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'https://plus.unsplash.com/premium_photo-1673853653885-5b596669f7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50cm92ZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking para Extrovertidos',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV0d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(year, month) {
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }