import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Événements',
  description: 'Découvrez les projections, festivals et événements à venir autour des films de Jean-Pierre Bekolo.',
  keywords: ['Événements', 'Projections', 'Festivals', 'Rencontres'],
  openGraph: {
    title: 'Événements | Jean-Pierre Bekolo',
    description: 'Projections, festivals et événements',
    type: 'website',
  },
};

export default function EvenementsPage() {
  // Données d'exemple pour les événements
  const events = [
    {
      id: 1,
      title: 'Projection - Le Goût du Vin de Palme',
      date: '2026-06-15',
      time: '20:00',
      location: 'Cinéma Le Balzac, Paris',
      description: 'Projection suivie d\'une rencontre avec le réalisateur Jean-Pierre Bekolo.',
      type: 'Projection',
    },
    {
      id: 2,
      title: 'FESPACO 2027',
      date: '2027-02-25',
      time: '18:00',
      location: 'Ouagadougou, Burkina Faso',
      description: 'Présentation du nouveau projet en compétition officielle.',
      type: 'Festival',
    },
    {
      id: 3,
      title: 'Masterclass - Afrofuturisme et Cinéma',
      date: '2026-09-10',
      time: '14:00',
      location: 'La Fémis, Paris',
      description: 'Masterclass avec Jean-Pierre Bekolo sur l\'afrofuturisme dans le cinéma contemporain.',
      type: 'Rencontre',
    },
  ];

  const eventsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: events.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Event',
        name: event.title,
        startDate: `${event.date}T${event.time}`,
        location: {
          '@type': 'Place',
          name: event.location,
        },
        description: event.description,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      },
    })),
  };

  return (
    <>
      <JsonLd data={eventsJsonLd} />

      <div className="container mx-auto px-4 py-20">
        <header className="mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Événements
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Retrouvez Jean-Pierre Bekolo et ses films lors de projections, festivals et rencontres. 
            Découvrez les prochains événements et ne manquez aucune occasion de découvrir son univers cinématographique.
          </p>
        </header>

        <div className="space-y-6">
          {events.map((event) => {
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('fr-FR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <article
                key={event.id}
                className="bg-gray-900 rounded-lg p-8 hover:ring-2 hover:ring-accent-500 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-48 flex-shrink-0">
                    <div className="bg-accent-500 text-black rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">
                        {eventDate.getDate()}
                      </div>
                      <div className="text-sm uppercase">
                        {eventDate.toLocaleDateString('fr-FR', { month: 'short' })}
                      </div>
                      <div className="text-lg font-semibold">
                        {eventDate.getFullYear()}
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block bg-gray-800 px-3 py-1 rounded-full text-xs">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold mb-3">
                      {event.title}
                    </h2>

                    <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span className="capitalize">{formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🕐</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl p-12 text-center">
          <h2 className="font-display text-3xl font-bold text-black mb-4">
            Restez informé
          </h2>
          <p className="text-black/80 mb-6">
            Suivez-nous sur les réseaux sociaux pour ne manquer aucun événement
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://twitter.com/jpbekolo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/jeanpierrebekolo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
