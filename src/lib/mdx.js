import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// Ensure the directory exists
function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

export function getAllPosts() {
  ensureBlogDir();
  const files = fs.readdirSync(BLOG_DIR);

  const posts = files
    .filter((filename) => filename.endsWith(".md") || filename.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.(md|mdx)$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        frontmatter: data,
      };
    });

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
}

export function getPostBySlug(slug) {
  ensureBlogDir();
  const possiblePaths = [
    path.join(BLOG_DIR, `${slug}.md`),
    path.join(BLOG_DIR, `${slug}.mdx`),
  ];

  let filePath = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      filePath = p;
      break;
    }
  }

  if (!filePath) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data,
    content,
  };
}
