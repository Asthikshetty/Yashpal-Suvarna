import { ArrowRight, Building2, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { portraitUrl } from '../assets/images';
import { stats, type Locale } from '../data/content';
import { fadeUp, stagger } from '../animations/variants';

type Props = {
  locale: Locale;
  message: string;
  buttons: string[];
};

export default function Hero({ message, buttons }: Props) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="visible">
        <motion.span className="official-pill" variants={fadeUp}>
          Official Public Service Portal
        </motion.span>
        <motion.h1 variants={fadeUp}>Yashpal Anand Suvarna</motion.h1>
        <motion.h2 variants={fadeUp}>Member of Legislative Assembly · Udupi Constituency</motion.h2>
        <motion.p variants={fadeUp}>{message}</motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="primary-action" href="#works">
            <Building2 size={19} />
            {buttons[0]}
          </a>
          <a className="secondary-action" href="#contact">
            <PhoneCall size={19} />
            {buttons[1]}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-portrait-wrap"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <img src={portraitUrl} alt="Yashpal Anand Suvarna" className="hero-portrait" />
        <div className="portrait-ring" />
        <div className="floating-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <ArrowRight size={18} />
      </a>
    </section>
  );
}
