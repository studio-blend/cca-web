import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export const metadata = {
  title: "CCA Insights | Educational Blog & Mentor Advice",
  description: "Read articles and guides from lead educators at Crystal Clear Academy. Learn physics strategies, NEET biology retention keys, and digital design guides.",
  alternates: {
    canonical: "https://crystalclearacademy.in/blog",
  },
};

export default function BlogListingPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="hero-section" style={{ paddingTop: "120px", background: "var(--color-surface-container-low)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <ScrollReveal>
            <span className="hero-tagline font-label-lg">Insights &amp; Guides</span>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>
              CCA Educational <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>Insights Portal</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)" }}>
              Tips, strategies, and learning frameworks written by our teaching mentors to help you bypass memorization blocks and achieve exam mastery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-lowest)" }}>
        <div className="container">
          <div className="testimonials-grid" style={{ marginTop: "24px" }}>
            {posts.length > 0 ? (
              posts.map((post) => (
                <ScrollReveal
                  key={post.slug}
                  className="testimonial-card"
                  style={{
                    backgroundColor: "var(--color-surface-card)",
                    color: "var(--color-on-background)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "32px",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                      {post.frontmatter.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="event-tag"
                          style={{ margin: 0, padding: "2px 8px", fontSize: "10px" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: "inherit" }}>
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
                      {post.frontmatter.description}
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "13px", color: "var(--color-outline)" }}>
                      By <strong>{post.frontmatter.author}</strong>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="btn btn-secondary" style={{ padding: "6px 16px", fontSize: "11px" }}>
                      Read Post
                    </Link>
                  </div>
                </ScrollReveal>
              ))
            ) : (
              <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>No posts found yet. Check back soon!</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
