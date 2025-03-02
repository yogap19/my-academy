export default function Footer() {
    return (
      <footer className="h-12 bg-white border-t shadow-inner flex items-center justify-between px-4 text-sm text-gray-600">
        <span>&copy; {new Date().getFullYear()} My Dashboard. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-sky-600">Privacy Policy</a>
          <a href="#" className="hover:text-sky-600">Documentation</a>
          <span>v1.0.0</span>
        </div>
      </footer>
    );
  }
  