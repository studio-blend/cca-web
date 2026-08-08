import PostEditorPage from "../[slug]/page";

export default function NewPostPage() {
  return <PostEditorPage params={Promise.resolve({ slug: "new" })} />;
}
