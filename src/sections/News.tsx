import SectionHeader from '../components/SectionHeader';
import { news } from '../data/content';

export default function News() {
  return (
    <section className="section news-section">
      <SectionHeader
        eyebrow="Latest News & Updates"
        title="Press releases, activities, schemes, and announcements"
        text="Cards are structured so an admin panel can later publish images, videos, and PDFs."
      />
      <div className="news-grid">
        {news.map((item) => {
          const Icon = item.icon;
          return (
            <article className="news-card" key={item.title}>
              <div><Icon size={20} /><span>{item.type}</span></div>
              <h3>{item.title}</h3>
              <time>{item.date}</time>
            </article>
          );
        })}
      </div>
    </section>
  );
}
