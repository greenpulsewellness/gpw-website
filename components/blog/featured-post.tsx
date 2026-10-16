import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog";
import { Button } from "@/components/ui/button";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d]/90 shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] lg:grid lg:grid-cols-12 lg:gap-8">
      {/* Cover Image Container */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-oat lg:col-span-7 lg:aspect-auto lg:min-h-[420px]"
      >
        <Image
          src={post.coverImage}
          alt={post.coverAlt || post.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-neutral-950 shadow-md backdrop-blur-md">
            Featured Perspective
          </span>
          <span className="hidden rounded-full bg-black/90 border border-white/10 px-3.5 py-1 text-xs font-medium text-neutral-300 shadow-sm backdrop-blur-md sm:inline-flex">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content Container */}
      <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-5 lg:py-10 lg:pl-0 lg:pr-10">
        <div>
          <div className="flex items-center gap-3 text-xs text-wood">
            <time dateTime={post.publishedAtISO ?? post.publishedAt}>{post.publishedAt}</time>
            <span>•</span>
            <span className="font-mono text-[11px]">{post.readTime}</span>
          </div>

          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-pine sm:text-3xl lg:text-[2rem] transition-colors group-hover:text-white">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-wood">
            {post.excerpt}
          </p>

          {/* Key takeaway highlight pill */}
          {post.keyTakeaways && post.keyTakeaways[0] && (
            <div className="mt-6 rounded-2xl bg-black/70 p-4 border border-white/15">
              <span className="label-mono text-[10px] font-semibold text-white block mb-1">
                Core Finding
              </span>
              <p className="text-xs text-pine/80 leading-relaxed font-normal">
                {post.keyTakeaways[0]}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-xs font-medium text-wood">
            Featured Perspective
          </span>

          <Button asChild variant="dark" size="md">
            <Link href={`/blog/${post.slug}`}>
              Read Article
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
