import { motion } from 'framer-motion';

type Props = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHeader({ eyebrow, title, text }: Props) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}
