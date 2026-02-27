import { person } from '@/lib/content';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#111]">
      <div className="mx-auto max-w-[1400px] px-4 py-12 text-white/62 sm:px-8">
        <div className="text-sm font-medium text-white/74">Questions? Reach out any time.</div>

        <div className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <a className="hover:text-white" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <a className="hover:text-white" href={person.links.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp: {person.phone}
          </a>
          <a className="hover:text-white" href={person.portfolioUrl} target="_blank" rel="noreferrer">
            Legacy Portfolio
          </a>
          <div>{person.location}</div>
        </div>

        <div className="mt-8 text-xs text-white/40">
          Built by {person.name}: Built with Next.js and a Netflix-inspired interface.{' '}
          {person.openTo}
        </div>
      </div>
    </footer>
  );
}
