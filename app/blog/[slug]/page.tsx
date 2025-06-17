import { notFound } from 'next/navigation';
import Image from 'next/image';

type Blog = {
  title: string;
  slug: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  image?: {
    url: string;
    alt?: string;
  };
};

// ✅ Required for SSG in [slug] routes
export async function generateStaticParams() {
  const { default: blogs }: { default: Blog[] } = await import('@/data/blogs.json');
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params object before accessing properties
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const { default: blogs }: { default: Blog[] } = await import('@/data/blogs.json');
  const post = blogs.find((b) => b.slug === slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-8">
      {post.image?.url ? (
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={post.image.url}
            alt={post.image.alt || post.title}
            fill
            className="rounded-lg object-contain"
          />
        </div>
      ) : null}

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          — {post.author}
        </p>
      </div>

      <article className="prose prose-neutral lg:prose-lg max-w-none">
        {post.content.split('\n\n').map((para, i) =>
          para.startsWith('### ') ? (
            <h3 key={i}>{para.replace('### ', '')}</h3>
          ) : (
            <p key={i}>{para}</p>
          )
        )}
      </article>
    </main>
  );
}