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

              <nav className="" aria-label="Footer Navigation">
                <ul className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-700 hover:text-green font-medium"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-green font-medium"
                      href="#"
                    >
                      Browse
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-green font-medium"
                      href="#"
                    >
                      Reading List
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-green font-medium"
                      href="#"
                    >
                      About
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
