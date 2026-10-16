import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#0d0d0d]/90 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-oat">
        <Image
          src={post.coverImage}
          alt={post.coverAlt || post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full bg-black/85 border border-white/20 px-3 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-md shadow-xs">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="flex items-center gap-3 text-xs text-wood">
            <time dateTime={post.publishedAtISO ?? post.publishedAt}>{post.publishedAt}</time>
            <span>•</span>
            <span className="font-mono text-[11px]">{post.readTime}</span>
          </div>

          <h3 className="mt-3.5 text-xl font-semibold leading-snug tracking-tight text-pine transition-colors group-hover:text-white">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-wood">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs font-semibold text-pine group-hover:text-white transition-colors">
            Read Article
          </span>

          <span className="text-xs font-mono text-wood group-hover:text-white transition-colors">
            View →
          </span>
        </div>
      </div>
    </article>
  );
}
