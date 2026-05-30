import { CalendarPlus, FileUp, ImagePlus, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminPanel() {
  return (
    <main className="admin-page">
      <section className="admin-shell">
        <div>
          <span className="official-pill">Admin Console Concept</span>
          <h1>Content Publishing Desk</h1>
          <p>
            A structured admin panel blueprint for adding press releases, activity photos,
            videos, PDFs, downloadable reports, and calendar events.
          </p>
          <Link className="secondary-action" to="/">Return to website</Link>
        </div>
        <div className="admin-grid">
          {[
            ['Add Images', ImagePlus],
            ['Upload Videos', Video],
            ['Attach PDFs', FileUp],
            ['Schedule Event', CalendarPlus],
          ].map(([label, Icon]) => {
            const AdminIcon = Icon as typeof ImagePlus;
            return (
              <button key={label as string}>
                <AdminIcon size={24} />
                <span>{label as string}</span>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
