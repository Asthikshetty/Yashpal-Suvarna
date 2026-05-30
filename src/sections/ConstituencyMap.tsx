import { MapPinned } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { mapPins } from '../data/content';

export default function ConstituencyMap() {
  const [active, setActive] = useState(mapPins[0]);
  return (
    <section id="map" className="section map-section">
      <SectionHeader
        eyebrow="Interactive Constituency Map"
        title="Udupi areas, villages, and major project pins"
        text="Conceptual dashboard for Udupi City, Malpe, Kaup region references, village belts, and active projects."
      />
      <div className="map-layout">
        <div className="map-canvas" aria-label="Interactive constituency map">
          <div className="coastline" />
          <div className="map-label">Arabian Sea</div>
          <div className="map-area">Udupi Assembly Constituency</div>
          {mapPins.map((pin) => (
            <button
              className={`map-pin ${pin.area === active.area ? 'active' : ''}`}
              key={pin.area}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              onClick={() => setActive(pin)}
              aria-label={`Show ${pin.area}`}
            >
              <MapPinned size={18} />
            </button>
          ))}
        </div>
        <article className="pin-card">
          <span>{active.area}</span>
          <h3>{active.project}</h3>
          <dl>
            <div><dt>Budget</dt><dd>{active.budget}</dd></div>
            <div><dt>Status</dt><dd>{active.status}</dd></div>
            <div><dt>Completion</dt><dd>{active.completion}%</dd></div>
          </dl>
          <div className="progress-track"><span style={{ width: `${active.completion}%` }} /></div>
        </article>
      </div>
    </section>
  );
}
