// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <h1 className="hero__title">Senior Software Engineer</h1>
            <p className="hero__lede">
              I build accessible, performant, human-centered web experiences
            </p>
            <div className="hero__actions">
              <Link href="/work" className="btn btn--primary">See my work</Link>
              <Link href="/contact" className="btn btn--ghost">Contact me</Link>
            </div>
          </div>
          <div className="hero__art" aria-hidden="true" />
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section section--work">
        <div className="container">
          <h2 className="section__title">Selected Work</h2>
          <div className="card-grid">
            <article className="card">
              <h3 className="card__title">Accessible Design System</h3>
              <p className="card__meta">Role: Lead • Stack: TypeScript, React</p>
              <p className="card__body">Scalable components with WCAG-compliant patterns and clear docs.</p>
              <Link href="/work/design-system" className="card__link">View case study →</Link>
            </article>

            <article className="card">
              <h3 className="card__title">Performance Initiative</h3>
              <p className="card__meta">Role: Senior Eng • Stack: Next.js</p>
              <p className="card__body">Shipped code-splitting & caching for a 40% decrease in load time.</p>
              <Link href="/work/performance" className="card__link">View case study →</Link>
            </article>
          </div>
          <p className="section__more"><Link href="/work">See all work →</Link></p>
        </div>
      </section>

      {/* LATEST WRITING */}
      <section className="section section--writing">
        <div className="container">
          <h2 className="section__title">Latest Writing</h2>
          <ul className="list list--posts">
            <li>
              <Link href="/writing/a11y-performance">Accessibility & Performance: Two sides of one craft</Link>
              <span className="list__date">Sep 2025</span>
            </li>
            <li>
              <Link href="/writing/sass-architecture">Sass architecture for calm CSS</Link>
              <span className="list__date">Aug 2025</span>
            </li>
          </ul>
          <p className="section__more"><Link href="/writing">See all posts →</Link></p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section section--cta">
        <div className="container">
          <h2 className="section__title">Let’s build something thoughtful</h2>
          <p className="section__lede">Open to collaboration, mentorship, and speaking.</p>
          <Link href="/contact" className="btn btn--primary">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
