export default function TiltCard({ children, className = "" }) {
  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    card.style.setProperty("--rotate-x", `${(0.5 - y) * 10}deg`);
    card.style.setProperty("--rotate-y", `${(x - 0.5) * 12}deg`);
    card.style.setProperty("--glow-x", `${x * 100}%`);
    card.style.setProperty("--glow-y", `${y * 100}%`);
  };

  const resetTilt = (event) => {
    event.currentTarget.style.setProperty("--rotate-x", "0deg");
    event.currentTarget.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <div
      className={`tilt-card ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      {children}
    </div>
  );
}
