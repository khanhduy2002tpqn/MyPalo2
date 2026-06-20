import Image from "next/image";
import Link from "next/link";
import { withLocale } from "@/lib/content";
import type { Locale, NewsArticle } from "@/lib/types";

export function NewsCard({ locale, article }: { locale: Locale; article: NewsArticle }) {
  return (
    <article className="card">
      <Link href={withLocale(locale, `/news/${article.slug}`)}>
        <div className="card-media">
          <Image src={article.featuredImage} alt={article.title} width={520} height={325} />
        </div>
        <div className="card-body">
          <span className="tag">{article.category}</span>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
