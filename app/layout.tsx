// app/layout.tsx
import "@/styles/globals.scss";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kat Perreira — Senior Software Engineer",
  description: "Accessible, performant, human-centered engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header" role="banner">
          <div className="container header-inner">
            <Link href="/" className="brand" aria-label="Go to home">Kat Perreira</Link>
            <nav aria-label="Primary">
              <ul className="nav">
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/writing">Writing</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                {/* Search stub for now */}
                <li className="nav-search">
                  <form role="search" aria-label="Site">
                    <label className="sr-only" htmlFor="q">Search</label>
                    <input id="q" name="q" type="search" placeholder="Search…" />
                  </form>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="main" className="site-main" role="main">
          {children}
        </main>

        <footer className="site-footer" role="contentinfo">
          <div className="container footer-inner">
            <nav aria-label="Footer">
              <ul className="footer-links">
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/writing">Writing</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/accessibility">Accessibility</Link></li>
              </ul>
            </nav>
            <p>© {new Date().getFullYear()} Kat Perreira • Built with Next.js & Sass</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
