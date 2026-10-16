"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/data/blog";
import { BlogCard } from "./blog-card";
import { FeaturedPost } from "./featured-post";
import { NewsletterCard } from "./newsletter-card";

interface BlogGridProps {
  posts: BlogPost[];
  categories: string[];
}

export function BlogGrid({ posts, categories }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [posts, selectedCategory, searchQuery, selectedTag]);

  // Featured post logic: show dedicated featured card if in "All" view with no active search/tag
  const isDefaultView = selectedCategory === "All" && !searchQuery && !selectedTag;
  const featuredPost = useMemo(() => {
    return posts.find((p) => p.featured) || posts[0];
  }, [posts]);

  // Grid posts: if default view, exclude the featured post from the grid
  const gridPosts = useMemo(() => {
    if (isDefaultView && featuredPost) {
      return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, isDefaultView, featuredPost]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSelectedTag(null);
  };

  return (
    <div className="space-y-12">
      {/* ── Search & Filter Controls ── */}
      <div className="flex flex-col gap-6 rounded-[24px] border border-white/10 bg-[#0d0d0d]/90 p-5 sm:p-6 backdrop-blur-md shadow-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Bar (Clean Text Only) */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, modality, or keyword..."
              className="w-full rounded-full border border-white/10 bg-black py-2.5 px-5 text-sm text-white placeholder:text-neutral-500 transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-wood hover:text-pine"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Count & Reset */}
          <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-wood">
            <span>
              Showing <strong className="text-pine">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
            {(selectedCategory !== "All" || searchQuery || selectedTag) && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-full bg-black px-3.5 py-1 text-xs font-medium text-neutral-300 border border-white/10 hover:border-white/30 hover:text-white transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedTag(null);
                }}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white text-neutral-950 font-semibold shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                    : "bg-black text-neutral-400 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Popular Tags */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          <span className="text-[11px] font-semibold tracking-wider text-wood uppercase shrink-0">
            Topics:
          </span>
          {allTags.map((tag) => {
            const isTagActive = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(isTagActive ? null : tag)}
                className={`shrink-0 rounded-md px-2.5 py-1 text-[11px] font-mono transition-colors ${
                  isTagActive
                    ? "bg-white text-neutral-950 font-semibold"
                    : "bg-black/80 text-neutral-400 border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Featured Post (Default View) ── */}
      {isDefaultView && featuredPost && (
        <section aria-label="Featured Story">
          <FeaturedPost post={featuredPost} />
        </section>
      )}

      {/* ── Articles Grid ── */}
      {gridPosts.length > 0 ? (
        <section aria-label="Article List">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ) : (
        <div className="rounded-[24px] border border-dashed border-white/15 bg-[#0d0d0d]/60 p-12 text-center my-8">
          <h3 className="text-lg font-semibold text-pine">No articles matched your criteria</h3>
          <p className="mt-1.5 text-sm text-wood max-w-sm mx-auto">
            Try adjusting your search terms, choosing a different category, or resetting all filters.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-2 text-xs font-semibold text-neutral-950 hover:bg-neutral-200 transition-colors"
          >
            Reset all filters
          </button>
        </div>
      )}

      {/* ── Newsletter Callout ── */}
      <NewsletterCard />
    </div>
  );
}
