import { ExternalLink, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { works } from '../data/content';

export default function WorksDashboard() {
  return (
    <section id="works" className="section works-section">
      <SectionHeader
        eyebrow="Development Works Dashboard"
        title="A transparent tracker for Udupi priorities"
        text="Infrastructure, employment, fisheries, education, and tourism are presented as live public dashboards."
      />
      <div className="flagship">
        <div>
          <span>Flagship Initiative</span>
          <h3>IT-BT Park for local employment opportunities</h3>
          <p>
            A future-facing proposal to keep Udupi talent close to home through technology jobs,
            startup support, and industry partnerships.
          </p>
        </div>
        <a href="#reports">
          View roadmap <ExternalLink size={17} />
        </a>
      </div>
      <div className="works-grid">
        {works.map((work) => {
          const Icon = work.icon;
          return (
            <motion.article
              className="work-card"
              key={work.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="work-icon" style={{ backgroundColor: `${work.accent}18`, color: work.accent }}>
                <Icon size={24} />
              </div>
              <h3>{work.title}</h3>
              <ul>
                {work.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="progress-label">
                <span><TrendingUp size={16} /> Portfolio progress</span>
                <strong>{work.progress}%</strong>
              </div>
              <div className="progress-track"><span style={{ width: `${work.progress}%`, backgroundColor: work.accent }} /></div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
