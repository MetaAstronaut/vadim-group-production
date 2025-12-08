import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogArticle } from "@/utils/contentParsers";

interface ArticleCardProps {
  article: BlogArticle;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const isComingSoon = article.status.toLowerCase().includes('coming soon');
  const isPublished = article.status.toLowerCase() === 'published';

  const CardContent = (
    <div
      className={`
        relative group
        bg-white rounded-lg overflow-hidden
        border-2 border-border-light
        shadow-sm
        transition-all duration-300 ease-out
        ${isComingSoon ? 'opacity-80 hover:border-brand-accent/40' : 'hover:border-brand-accent hover:shadow-lg'}
        flex flex-col h-full
      `}
    >
      {/* Cover Image */}
      {article.coverImage && isPublished && (
        <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-opacity duration-300"
            quality={85}
          />
        </div>
      )}

      {/* Coming Soon Overlay Badge */}
      {isComingSoon && (
        <div className="absolute top-4 right-4 z-10">
          <Badge 
            variant="accent" 
            className="text-xs font-semibold px-3 py-1 shadow-sm"
          >
            Coming Soon
          </Badge>
        </div>
      )}

      {/* Article Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="mb-3">
          <Badge variant="secondary" className="text-xs">
            {article.category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl md:text-[22px] font-bold text-brand-primary mb-4 leading-snug group-hover:text-brand-accent transition-colors duration-300 line-clamp-3 will-change-auto">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed mb-4 flex-grow line-clamp-3">
          {article.description}
        </p>

        {/* Footer: Reading Time + Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-border-light">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Clock className="h-4 w-4" />
            <span>{article.readingTime}</span>
          </div>
          
          {isPublished && (
            <div className="flex items-center gap-1.5 text-sm text-brand-accent font-medium">
              <span>Read More</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // If published, wrap in Link
  if (isPublished && article.slug) {
    return (
      <Link href={`/blog/${article.slug}`} className="block h-full transform-gpu">
        {CardContent}
      </Link>
    );
  }

  // Otherwise, return static card
  return CardContent;
};

