import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <footer
            className="bg-white border-t border-gray-200"
            role="contentinfo"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-green">LibraRead</h3>
                <p className="text-sm text-gray-600">
                  Discover your next great read — anytime, anywhere.
                </p>
              </div>

              <nav aria-label="Footer Social" className="">
                <ul className="flex items-center gap-4">
                  <li>
                    <a
                      href="https://www.instagram.com/mroyhaf?igsh=b3ozZG9sMHdsZGRh"
                      aria-label="Instagram"
                      className="text-gray-700 hover:text-green transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Instagram - simple glyph */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://github.com/SmollJesteR"
                      aria-label="GitHub"
                      target="_blank"
                      className="text-gray-700 hover:text-green transition-colors"
                    >
                      {/* GitHub (Octocat) */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="github-icon">
                        <path d="M12 .5C5.73.5.5 5.66.5 12.02c0 5.11 3.29 9.44 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.41-3.88-1.41-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.28.75-1.58-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.06 11.06 0 012.9-.39c.98 0 1.97.13 2.9.38 2.2-1.5 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56A10.53 10.53 0 0023.5 12.02C23.5 5.66 18.27.5 12 .5z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://smolljesterarchieve.vercel.app/"
                      aria-label="Profile"
                      target="_blank"
                      className="text-gray-700 hover:text-green transition-colors"
                    >
                      {/* User / Profile */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M4 21v-2a4 4 0 0 1 3-3.87"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="text-center md:text-right text-sm text-gray-500">
                <p>
                  © {new Date().getFullYear()} LibraRead. All rights reserved.
                </p>
                <p className="mt-1">Built with by the LibraRead team.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </footer>
  );
}
