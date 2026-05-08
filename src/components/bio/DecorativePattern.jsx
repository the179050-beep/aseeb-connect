export default function DecorativePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top radial gradient */}
      <div className="absolute top-0 left-0 right-0 h-80"
        style={{ background: "linear-gradient(to bottom, hsla(36,55%,52%,0.06), transparent)" }} />

      {/* Subtle sand texture overlay */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Side accent lines */}
      <div className="absolute top-28 right-0 w-px h-48"
        style={{ background: "linear-gradient(to bottom, transparent, hsla(36,55%,52%,0.18), transparent)" }} />
      <div className="absolute top-28 left-0 w-px h-48"
        style={{ background: "linear-gradient(to bottom, transparent, hsla(36,55%,52%,0.18), transparent)" }} />

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, hsla(36,55%,52%,0.07) 0%, transparent 70%)" }} />

      {/* Geometric accents — Najdi triangle motif */}
      <svg className="absolute top-16 right-5 w-5 h-5 opacity-15" viewBox="0 0 24 24" fill="hsl(36,55%,52%)">
        <polygon points="12,3 21,21 3,21" />
      </svg>
      <svg className="absolute top-20 left-5 w-3.5 h-3.5 opacity-10" viewBox="0 0 24 24" fill="hsl(36,55%,52%)">
        <polygon points="12,3 21,21 3,21" />
      </svg>
      <svg className="absolute bottom-32 right-8 w-3 h-3 opacity-10" viewBox="0 0 24 24" fill="hsl(36,55%,52%)">
        <polygon points="12,3 21,21 3,21" />
      </svg>
    </div>
  );
}