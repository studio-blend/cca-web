import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Link from "next/link";

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.frontmatter.title} | CCA Insights`,
    description: post.frontmatter.description,
    alternates: {
      canonical: `https://crystalclearacademy.in/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.frontmatter.title,
    "description": post.frontmatter.description,
    "datePublished": post.frontmatter.date,
    "author": {
      "@type": "Person",
      "name": post.frontmatter.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Crystal Clear Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://crystalclearacademy.in/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article style={{ minHeight: "100vh", backgroundColor: "var(--color-surface-container-lowest)" }}>
        {/* Post Hero */}
        <section className="hero-section" style={{ paddingTop: "120px", paddingBottom: "40px", background: "var(--color-surface-container-low)" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <ScrollReveal>
              <Link href="/blog" style={{ color: "var(--color-secondary)", fontSize: "14px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
                &larr; Back to all Insights
              </Link>
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                {post.frontmatter.tags?.map((tag) => (
                  <span key={tag} className="event-tag" style={{ margin: 0 }}>
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)", fontSize: "42px", lineHeight: "1.2", marginBottom: "16px" }}>
                {post.frontmatter.title}
              </h1>
              <div style={{ fontSize: "15px", color: "var(--color-outline)", display: "flex", gap: "16px" }}>
                <span>By <strong>{post.frontmatter.author}</strong></span>
                <span>&bull;</span>
                <span>Published on <strong>{post.frontmatter.date}</strong></span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Post Content */}
        <section className="section-py">
          <div className="container" style={{ maxWidth: "800px" }}>
            <ScrollReveal className="lead-form-card" style={{ maxWidth: "100%", padding: "40px", backgroundColor: "var(--color-surface-card)", lineHeight: "1.8" }}>
              <div className="blog-markdown-content" style={{ color: "var(--color-on-background)" }}>
                <MDXRemote source={post.content} />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </article>
    </>
  );
}
