import { Quote, Video } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <SectionHeader
        eyebrow="Testimonials"
        title="Citizen, youth, business, and fisheries voices"
        text="Designed to support video testimonials as the site matures."
      />
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.name}>
            <Quote size={24} />
            <p>{item.quote}</p>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
            <button><Video size={16} /> Video testimonial</button>
          </article>
        ))}
      </div>
    </section>
  );
}
