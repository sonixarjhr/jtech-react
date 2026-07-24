export default function Nav() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <div className="logo">
          <svg className="logo-mark" viewBox="0 0 32 32" fill="none">
            <rect x="9" y="3" width="14" height="26" rx="3" stroke="#2ED876" strokeWidth="2" />
            <line x1="13" y1="26" x2="19" y2="26" stroke="#2ED876" strokeWidth="2" strokeLinecap="round" />
          </svg>
          J-Tech<span>.</span>
        </div>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#seguimiento">Mi reparación</a>
          <a href="#contacto" className="nav-cta">Escribime</a>
        </div>
      </div>
    </nav>
  )
}
