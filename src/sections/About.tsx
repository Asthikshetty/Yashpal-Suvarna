import { Award, Compass, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { timeline } from '../data/content';

type Props = {
  about: string;
  vision: string;
};

export default function About({ about, vision }: Props) {
  return (
    <section id="about" className="section about-section">
      <SectionHeader
        eyebrow="About the Leader"
        title="Public leadership shaped around constituency delivery"
        text="A focused profile section for political journey, public service, vision, and leadership achievements."
      />
      <div className="about-grid">
        <motion.article className="about-panel" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="icon-head"><Handshake size={22} /> Public Service</div>
          <p>{about}</p>
          <div className="about-metrics">
            <span><Award size={18} /> Constituency MLA since 2023</span>
            <span><Compass size={18} /> Udupi development agenda</span>
          </div>
        </motion.article>
        <motion.article className="timeline-card" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="icon-head"><Award size={22} /> Leadership Timeline</div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div className="timeline-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <p>{vision}</p>
        </motion.article>
      </div>
    </section>
  );
}
