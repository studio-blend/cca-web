import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const RESOURCES_FILE = path.join(process.cwd(), "src/content/resources.json");
const FAQS_FILE = path.join(process.cwd(), "src/content/faqs.json");
const PROGRAMS_FILE = path.join(process.cwd(), "src/content/programs.json");
const TESTIMONIALS_FILE = path.join(process.cwd(), "src/content/testimonials.json");
const EVENTS_FILE = path.join(process.cwd(), "src/content/events.json");
const ANNOUNCEMENT_FILE = path.join(process.cwd(), "src/content/announcement.json");
const LEADS_FILE = path.join(process.cwd(), "src/content/leads.json");

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function ensureJsonFile(filePath, defaultData = []) {
  const dir = path.dirname(filePath);
  ensureDir(dir);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), "utf-8");
  }
}

function readJsonFile(filePath, defaultData = []) {
  ensureJsonFile(filePath, defaultData);
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    return defaultData;
  }
}

function writeJsonFile(filePath, data) {
  const dir = path.dirname(filePath);
  ensureDir(dir);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

/* ==================== BLOG POSTS ==================== */

export function getAllBlogPosts({ includeDrafts = true } = {}) {
  ensureDir(BLOG_DIR);
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR);

  const posts = files
    .filter((filename) => filename.endsWith(".md") || filename.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.(md|mdx)$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split("T")[0],
        author: data.author || "CCA Academic Team",
        category: data.category || "General",
        excerpt: data.excerpt || "",
        published: data.published !== undefined ? Boolean(data.published) : true,
        readTime: data.readTime || "5 min read",
        coverImage: data.coverImage || "",
        tags: data.tags || [],
        content,
      };
    });

  const filtered = includeDrafts ? posts : posts.filter((p) => p.published);
  return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogPostBySlug(slug) {
  ensureDir(BLOG_DIR);
  const possiblePaths = [
    path.join(BLOG_DIR, `${slug}.mdx`),
    path.join(BLOG_DIR, `${slug}.md`),
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
    title: data.title || slug,
    date: data.date || new Date().toISOString().split("T")[0],
    author: data.author || "CCA Academic Team",
    category: data.category || "General",
    excerpt: data.excerpt || "",
    published: data.published !== undefined ? Boolean(data.published) : true,
    readTime: data.readTime || "5 min read",
    coverImage: data.coverImage || "",
    tags: data.tags || [],
    content,
  };
}

export function saveBlogPost(postData) {
  ensureDir(BLOG_DIR);
  const {
    originalSlug,
    slug,
    title,
    content,
    excerpt,
    author,
    date,
    category,
    tags,
    readTime,
    published,
    coverImage,
  } = postData;

  const targetSlug =
    (slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")) || "untitled-post";

  if (originalSlug && originalSlug !== targetSlug) {
    const oldPaths = [
      path.join(BLOG_DIR, `${originalSlug}.mdx`),
      path.join(BLOG_DIR, `${originalSlug}.md`),
    ];
    for (const p of oldPaths) {
      if (fs.existsSync(p)) fs.unlinkSync(p);
    }
  }

  const frontmatter = {
    title: title || "Untitled Post",
    date: date || new Date().toISOString().split("T")[0],
    author: author || "CCA Academic Team",
    category: category || "General",
    excerpt: excerpt || "",
    published: published !== undefined ? Boolean(published) : true,
    readTime: readTime || "5 min read",
    coverImage: coverImage || "",
    tags: Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map((t) => t.trim()) : [],
  };

  const fileContent = matter.stringify(content || "", frontmatter);
  const targetFilePath = path.join(BLOG_DIR, `${targetSlug}.mdx`);

  fs.writeFileSync(targetFilePath, fileContent, "utf-8");
  return { slug: targetSlug, ...frontmatter, content };
}

export function deleteBlogPost(slug) {
  ensureDir(BLOG_DIR);
  const possiblePaths = [
    path.join(BLOG_DIR, `${slug}.mdx`),
    path.join(BLOG_DIR, `${slug}.md`),
  ];
  let deleted = false;
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      deleted = true;
    }
  }
  return deleted;
}

/* ==================== RESOURCES ==================== */
export function getAllResources() {
  return readJsonFile(RESOURCES_FILE);
}
export function saveResource(data) {
  const list = getAllResources();
  let updated;
  if (data.id) {
    updated = list.map((r) => (r.id === data.id ? { ...r, ...data } : r));
  } else {
    updated = [{ id: `res-${Date.now()}`, downloadsCount: 0, ...data }, ...list];
  }
  writeJsonFile(RESOURCES_FILE, updated);
  return updated;
}
export function deleteResource(id) {
  const list = getAllResources().filter((r) => r.id !== id);
  writeJsonFile(RESOURCES_FILE, list);
  return true;
}

/* ==================== FAQS ==================== */
export function getAllFAQs() {
  return readJsonFile(FAQS_FILE);
}
export function saveFAQ(data) {
  const list = getAllFAQs();
  let updated;
  if (data.id) {
    updated = list.map((f) => (f.id === data.id ? { ...f, ...data } : f));
  } else {
    updated = [...list, { id: `faq-${Date.now()}`, ...data }];
  }
  writeJsonFile(FAQS_FILE, updated);
  return updated;
}
export function deleteFAQ(id) {
  const list = getAllFAQs().filter((f) => f.id !== id);
  writeJsonFile(FAQS_FILE, list);
  return true;
}

/* ==================== PROGRAMS ==================== */
export function getAllPrograms() {
  return readJsonFile(PROGRAMS_FILE);
}
export function saveProgram(data) {
  const list = getAllPrograms();
  let updated;
  if (data.id) {
    updated = list.map((p) => (p.id === data.id ? { ...p, ...data } : p));
  } else {
    updated = [{ id: `prog-${Date.now()}`, ...data }, ...list];
  }
  writeJsonFile(PROGRAMS_FILE, updated);
  return updated;
}
export function deleteProgram(id) {
  const list = getAllPrograms().filter((p) => p.id !== id);
  writeJsonFile(PROGRAMS_FILE, list);
  return true;
}

/* ==================== TESTIMONIALS ==================== */
export function getAllTestimonials() {
  return readJsonFile(TESTIMONIALS_FILE);
}
export function saveTestimonial(data) {
  const list = getAllTestimonials();
  let updated;
  if (data.id) {
    updated = list.map((t) => (t.id === data.id ? { ...t, ...data } : t));
  } else {
    updated = [{ id: `test-${Date.now()}`, featured: true, rating: 5, ...data }, ...list];
  }
  writeJsonFile(TESTIMONIALS_FILE, updated);
  return updated;
}
export function deleteTestimonial(id) {
  const list = getAllTestimonials().filter((t) => t.id !== id);
  writeJsonFile(TESTIMONIALS_FILE, list);
  return true;
}

/* ==================== EVENTS ==================== */
export function getAllEvents() {
  return readJsonFile(EVENTS_FILE);
}
export function saveEvent(data) {
  const list = getAllEvents();
  let updated;
  if (data.id) {
    updated = list.map((e) => (e.id === data.id ? { ...e, ...data } : e));
  } else {
    updated = [{ id: `evt-${Date.now()}`, ...data }, ...list];
  }
  writeJsonFile(EVENTS_FILE, updated);
  return updated;
}
export function deleteEvent(id) {
  const list = getAllEvents().filter((e) => e.id !== id);
  writeJsonFile(EVENTS_FILE, list);
  return true;
}

/* ==================== ANNOUNCEMENT ==================== */
export function getAnnouncement() {
  return readJsonFile(ANNOUNCEMENT_FILE, {
    active: true,
    text: "🔥 Admissions Open for NEET 2026 Integrated Batches — Limited Seats!",
    ctaText: "Reserve Seat",
    ctaUrl: "/#lead-form",
  });
}
export function saveAnnouncement(data) {
  writeJsonFile(ANNOUNCEMENT_FILE, data);
  return data;
}

/* ==================== LEADS ==================== */
export function getAllLeads() {
  return readJsonFile(LEADS_FILE);
}
export function saveLead(leadData) {
  const leads = getAllLeads();
  const newLead = {
    id: `lead-${Date.now()}`,
    timestamp: new Date().toISOString(),
    status: "New",
    ...leadData,
  };
  const updated = [newLead, ...leads];
  writeJsonFile(LEADS_FILE, updated);
  return newLead;
}
export function deleteLead(id) {
  const list = getAllLeads().filter((l) => l.id !== id);
  writeJsonFile(LEADS_FILE, list);
  return true;
}
