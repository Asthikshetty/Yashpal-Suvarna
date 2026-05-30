import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { achievements } from '../data/content';
import { useCounter } from '../hooks/useCounter';

function CounterCard({ item }: { item: (typeof achievements)[number] }) {
  const value = useCounter(Number(item.value));
  const Icon = item.icon;
  return (
    <motion.article className="achievement-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Icon size={26} />
      <strong>{value}{item.suffix}</strong>
      <span>{item.label}</span>
    </motion.article>
  );
}

export default function Achievements() {
  return (
    <section className="section achievements-section">
      <SectionHeader eyebrow="Achievements Counter" title="Development and citizen connect at a glance" />
      <div className="achievement-grid">
        {achievements.map((item) => <CounterCard item={item} key={item.label} />)}
      </div>
    </section>
  );
}
