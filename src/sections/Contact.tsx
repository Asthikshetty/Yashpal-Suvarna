import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <SectionHeader eyebrow="Contact" title="MLA office and constituency access" />
      <div className="contact-grid">
        <article>
          <h3>MLA Office</h3>
          <p><MapPin size={18} /> Udupi, Karnataka</p>
          <p><Phone size={18} /> Office contact to be updated</p>
          <p><Mail size={18} /> office@yashpalsuvarna.in</p>
          <small>Portrait: Babukashyap, Wikimedia Commons, CC BY-SA 4.0.</small>
          <div className="socials">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </article>
        <div className="map-embed">
          <iframe
            title="Udupi map"
            src="https://www.google.com/maps?q=Udupi%2C%20Karnataka&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
