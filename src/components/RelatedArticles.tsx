import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedArticle {
  title: string;
  description: string;
  href: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Conteúdos <span className="text-accent">Relacionados</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.href}
              to={article.href}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {article.description}
              </p>
              <span className="text-accent text-sm font-semibold inline-flex items-center gap-1">
                Ler mais <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
