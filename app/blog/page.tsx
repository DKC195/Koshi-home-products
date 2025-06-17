import blogs from '@/data/blogs.json';
import Link from 'next/link';

export default function BlogList() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Koshi Blog</h1>
      <ul className="space-y-8">
        {blogs.map(({ title, slug, date, summary }) => (
          <li key={slug} className="border-b pb-4">
            <Link href={`/blog/${slug}`}>
              <h2 className="text-2xl font-semibold text-blue-700 hover:underline">
                {title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">{new Date(date).toDateString()}</p>
            <p className="text-gray-700 mt-2">{summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}