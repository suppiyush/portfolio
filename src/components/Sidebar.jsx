import { SECTIONS } from '../data/sections';
import './Sidebar.css';

export default function Sidebar({ active, onNavigate }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-list">
        {SECTIONS.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`sidebar-item${item.id === active ? ' sidebar-item--active' : ''}`}
            aria-current={item.id === active ? 'true' : undefined}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
