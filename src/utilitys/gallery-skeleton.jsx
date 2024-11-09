import "./gallery-skeleton.css";

export function Animations() {
  return (
    <div className="skeleton-container">
      {Array.from({ length: 4 }, (_, index) => (
        <div className="skeleton-card-container" key={index}>
          <div className="skeleton-card">
            <div className="skeleton-food-img"></div>
            <div className="skeleton-card-footer">
              <div className="skeleton-text skeleton-title"></div>
              <div className="skeleton-text skeleton-parraf"></div>
              <div className="skeleton-text skeleton-price"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
