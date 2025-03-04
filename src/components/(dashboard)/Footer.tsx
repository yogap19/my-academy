export default function Footer() {
  return (
    <footer
      className="h-12 flex items-center justify-between px-4 text-sm text-white"
      style={{ background: "linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)" }}
    >
      <span>
        &copy; {new Date().getFullYear()} My Dashboard. All rights reserved.
      </span>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Documentation
        </a>
        <span className="font-bold">v1.0.0</span>
      </div>
    </footer>
  );
}
