import './LastUpdated.css';

const formatted = new Date(__BUILD_DATE__).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export default function LastUpdated() {
  return <div className="last-updated">Last updated: {formatted}</div>;
}
