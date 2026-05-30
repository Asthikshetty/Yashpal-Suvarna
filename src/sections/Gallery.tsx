import { PlayCircle, Search } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { udupiImages } from '../assets/images';
import { gallery } from '../data/content';

export default function Gallery() {
  const [preview, setPreview] = useState<string | null>(null);
  return (
    <section id="gallery" className="section gallery-section">
      <SectionHeader
        eyebrow="Gallery"
        title="Photo and video documentation"
        text="Masonry-style categories for meetings, temple visits, development projects, youth programs, and fisheries events."
      />
      <div className="masonry">
        {gallery.map((item, index) => (
          <button className="gallery-tile" key={item} onClick={() => setPreview(udupiImages[index])}>
            <img src={udupiImages[index]} alt={item} />
            <span>{item}</span>
            <Search size={18} />
          </button>
        ))}
      </div>
      <div className="video-grid">
        {['Assembly updates', 'Public interviews', 'Development briefings'].map((video) => (
          <article key={video}>
            <PlayCircle size={30} />
            <h3>{video}</h3>
            <p>YouTube embed placeholder for speeches, interviews, and development updates.</p>
          </article>
        ))}
      </div>
      {preview && (
        <button className="lightbox" onClick={() => setPreview(null)} aria-label="Close preview">
          <img src={preview} alt="Gallery preview" />
        </button>
      )}
    </section>
  );
}
