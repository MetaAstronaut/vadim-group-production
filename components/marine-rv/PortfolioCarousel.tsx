'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Badge } from '@/components/ui/badge';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getMarineRVPortfolio } from '@/data/portfolio';

export function PortfolioCarousel() {
  const portfolioItems = getMarineRVPortfolio();

  return (
    <div className="portfolio-carousel-wrapper w-full max-w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ 
          delay: 4000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet portfolio-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active portfolio-bullet-active',
          el: '.portfolio-pagination-marine-rv'
        }}
        navigation={{
          prevEl: '.portfolio-button-prev-marine',
          nextEl: '.portfolio-button-next-marine'
        }}
        loop={true}
        className="portfolio-swiper"
      >
        {portfolioItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-lg overflow-hidden h-full" style={{ isolation: 'isolate' }}>
              <div className="bg-white shadow-lg border border-border-light h-full rounded-lg overflow-hidden">
                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-2 p-2 bg-white">
                  <div className="relative aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-sm font-medium">Before</span>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-sm font-medium">After</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                    {item.title}
                  </h3>
                  <Badge variant="accent" className="mb-3 text-xs px-3 py-1 pointer-events-none">
                    {item.subtitle}
                  </Badge>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button 
        className="portfolio-button-prev-marine hidden md:flex"
        aria-label="View previous project"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button 
        className="portfolio-button-next-marine hidden md:flex"
        aria-label="View next project"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="portfolio-pagination-marine-rv"></div>

      {/* Carousel Styles */}
      <style>{`
        .portfolio-swiper .pointer-events-none {
          pointer-events: none;
          transition: none;
        }

        .portfolio-carousel-wrapper {
          position: relative;
          padding-bottom: 48px;
          padding-left: 52px;
          padding-right: 52px;
          width: 100%;
          max-width: 100%;
        }

        .portfolio-swiper {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          background: transparent !important;
        }

        .portfolio-swiper .swiper-wrapper {
          align-items: stretch;
          background: transparent !important;
        }

        .portfolio-swiper .swiper-slide {
          height: auto;
          display: flex;
          background: transparent !important;
        }

        .portfolio-swiper .swiper-slide > div {
          width: 100%;
          background: transparent !important;
        }

        .portfolio-swiper .swiper-slide > div > div {
          background: white !important;
        }

        .portfolio-button-prev-marine,
        .portfolio-button-next-marine {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: rgba(198, 167, 120, 0.12);
          border-radius: 50%;
          color: #B8935A;
          border: none;
          cursor: pointer;
          z-index: 10;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
        }
        
        .portfolio-button-prev-marine {
          left: 0;
        }
        
        .portfolio-button-next-marine {
          right: 0;
        }
        
        .portfolio-button-prev-marine:hover,
        .portfolio-button-next-marine:hover {
          background: #C6A778;
          color: white;
          box-shadow: 0 4px 12px rgba(198, 167, 120, 0.3);
          transform: translateY(-50%) scale(1.05);
        }

        .portfolio-button-prev-marine:disabled,
        .portfolio-button-next-marine:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .portfolio-pagination-marine-rv {
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          height: 16px;
        }
        
        .portfolio-bullet {
          width: 12px !important;
          height: 12px !important;
          background: transparent;
          border: 2px solid #C6A778;
          opacity: 0.6;
          transition: opacity 0.3s ease, background 0.3s ease;
          cursor: pointer;
        }

        .portfolio-bullet:hover {
          opacity: 1;
        }
        
        .portfolio-bullet-active {
          background: #C6A778 !important;
          opacity: 1 !important;
        }

        @media (max-width: 767px) {
          .portfolio-button-prev-marine,
          .portfolio-button-next-marine {
            display: none !important;
          }

          .portfolio-swiper {
            cursor: grab;
            width: 100%;
            max-width: 100%;
          }

          .portfolio-swiper:active {
            cursor: grabbing;
          }

          .portfolio-carousel-wrapper {
            width: 100%;
            max-width: 100%;
            padding-left: 0;
            padding-right: 0;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .portfolio-carousel-wrapper {
            padding-left: 48px;
            padding-right: 48px;
          }
        }
      `}</style>
    </div>
  );
}

