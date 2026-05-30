import { CheckCircle2, ClipboardCheck, Download, Mail, SearchCheck } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { reports } from '../data/content';

export default function Services() {
  const [requestId, setRequestId] = useState('UDU-2026-0184');
  return (
    <section id="services" className="section services-section">
      <SectionHeader
        eyebrow="Citizen Services"
        title="Grievance submission, tracking, reports, calendar, and newsletter"
        text="A practical service layer designed for citizens who need help, not just announcements."
      />
      <div className="service-grid">
        <form className="service-form" onSubmit={(event) => event.preventDefault()}>
          <div className="icon-head"><ClipboardCheck size={22} /> Submit Grievance</div>
          <input placeholder="Name" />
          <input placeholder="Mobile" />
          <input placeholder="Address" />
          <select defaultValue="">
            <option value="" disabled>Category</option>
            <option>Roads and infrastructure</option>
            <option>Fisheries welfare</option>
            <option>Education support</option>
            <option>Government schemes</option>
          </select>
          <textarea placeholder="Description" rows={4} />
          <button className="primary-action" type="submit">Generate Request ID</button>
        </form>
        <div className="tracking-panel">
          <div className="icon-head"><SearchCheck size={22} /> Track Request</div>
          <label>Request ID</label>
          <input value={requestId} onChange={(event) => setRequestId(event.target.value)} />
          <div className="status-stack">
            {['Received', 'Assigned to office staff', 'Department review pending'].map((status, index) => (
              <span key={status} className={index < 2 ? 'done' : ''}>
                <CheckCircle2 size={17} /> {status}
              </span>
            ))}
          </div>
          <div id="reports" className="reports">
            {reports.map((report) => (
              <a href="#" key={report}>
                <Download size={17} /> {report}
              </a>
            ))}
          </div>
          <div className="newsletter">
            <Mail size={18} />
            <input placeholder="Email for newsletter" />
          </div>
        </div>
      </div>
    </section>
  );
}
