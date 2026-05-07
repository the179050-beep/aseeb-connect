export default function DecorativePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-primary/5 to-transparent" />
      
      {/* Side pattern lines */}
      <div className="absolute top-32 right-0 w-px h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-32 left-0 w-px h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Geometric accents */}
      <svg className="absolute top-20 right-4 w-6 h-6 text-primary/15" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 22,22 2,22" />
      </svg>
      <svg className="absolute top-24 left-4 w-4 h-4 text-primary/10" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 22,22 2,22" />
      </svg>
    </div>
  );
}