'use client';

import * as React from "react";
import { useState } from "react";
import { 
  Mail,
  CheckCircle2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BlogArticle } from "@/utils/contentParsers";
import { ArticleCard } from "@/components/blog/ArticleCard";

interface BlogClientSectionProps {
  articles: BlogArticle[];
  contactEmail: string;
  contactInfo: string;
  subscribeTitle: string;
  subscribeInfo: string;
}

export default function BlogClientSection({ 
  articles, 
  contactEmail, 
  contactInfo, 
  subscribeTitle, 
  subscribeInfo 
}: BlogClientSectionProps) {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success'>('idle');

  // Handle email subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // In production, this would send to an API endpoint
    setSubscribeStatus('success');
    setEmail('');
    setTimeout(() => setSubscribeStatus('idle'), 5000);
  };

  return (
    <>
      {/* --- ARTICLES GRID --- */}
      <Section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>

          {/* No articles message */}
          {articles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">
                No articles available yet. Check back soon!
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* --- CONTACT SECTION --- */}
      <Section className="bg-surface-subtle py-12 md:py-16 border-y border-border-light">
        <Container className="max-w-3xl">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-primary">
              Have a Specific Question?
            </h2>
            <p className="text-text-secondary text-base md:text-lg">
              If you need immediate advice or have a repair question, contact us at{' '}
              <a 
                href={`mailto:${contactEmail}`}
                className="text-brand-accent hover:text-brand-accent-hover font-medium transition-colors"
              >
                {contactEmail}
              </a>
              {' '}or reach out via{' '}
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:text-brand-accent-hover font-medium transition-colors"
              >
                Facebook Messenger
              </a>
              .
            </p>
            <p className="text-sm text-text-muted">
              {contactInfo}
            </p>
          </div>
        </Container>
      </Section>

      {/* --- EMAIL SUBSCRIPTION --- */}
      <Section className="bg-brand-primary text-white py-16 md:py-20">
        <Container className="max-w-2xl">
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-brand-accent/20 flex items-center justify-center">
                <Mail className="h-7 w-7 text-brand-accent" />
              </div>
            </div>

            {/* Title */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              {subscribeTitle}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              {subscribeInfo}
            </p>

            {/* Subscription Form */}
            {subscribeStatus === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3 text-green-400">
                  <CheckCircle2 className="h-6 w-6" />
                  <p className="font-medium">
                    Thank you! We'll notify you when new articles are published.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="
                      flex-1 px-4 py-3 rounded-md
                      bg-white text-brand-primary
                      border border-border-light
                      focus:outline-none focus:ring-2 focus:ring-brand-accent
                      placeholder:text-text-muted
                    "
                  />
                  <Button
                    type="submit"
                    className="
                      bg-brand-accent hover:bg-brand-accent-hover
                      text-brand-primary font-semibold
                      h-12 px-6
                      transition-all duration-300
                      whitespace-nowrap
                    "
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}

