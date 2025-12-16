'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';
import { getHomeRepairsTestimonials } from '@/data/testimonials';

export function TestimonialsCarousel() {
  const reviewsData = getHomeRepairsTestimonials();

  return (
    <>
      {/* Carousel */}
      <div className="relative reviews-carousel-wrapper md:px-8 lg:px-12 max-w-full py-2" style={{ minHeight: '480px' }}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
          }}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet reviews-bullet-home-repairs',
            bulletActiveClass: 'swiper-pagination-bullet-active reviews-bullet-active-home-repairs',
            el: '.reviews-pagination-home-repairs',
            dynamicBullets: false
          }}
          navigation={{
            prevEl: '.reviews-button-prev-home-repairs',
            nextEl: '.reviews-button-next-home-repairs'
          }}
          loop={true}
          watchSlidesProgress={true}
          simulateTouch={false}
          allowTouchMove={true}
          touchRatio={1}
          touchAngle={45}
          threshold={5}
          keyboard={{
            enabled: true,
            onlyInViewport: true
          }}
          a11y={{
            prevSlideMessage: 'Previous review',
            nextSlideMessage: 'Next review',
            paginationBulletMessage: 'Go to review {{index}}'
          }}
          className="reviews-swiper-home-repairs"
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id}>
              <div 
                className="
                  bg-white rounded-md p-5 md:p-7
                  border border-border-light 
                  shadow-sm 
                  hover:border-brand-accent hover:shadow-lg
                  transition-all duration-300 
                  flex flex-col
                  h-full
                  w-full
                "
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4 md:mb-5 shrink-0" role="img" aria-label="Rated 5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-[18px] h-[18px] fill-[#B8935A] text-[#B8935A] drop-shadow-sm" 
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote 
                  className="
                    text-text-primary 
                    italic 
                    text-[15px] md:text-base
                    leading-[1.6]
                    mb-4 md:mb-5 
                    flex-grow
                    review-text-clamp
                  "
                >
                  "{review.text}"
                </blockquote>

                {/* Divider */}
                <div className="border-t border-border-light mb-4 md:mb-5 pt-4 md:pt-5"></div>

                {/* Footer: Avatar + Name + Date */}
                <div className="mt-auto flex items-center gap-3 shrink-0">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: review.avatarColor }}
                  >
                    <span className="text-brand-primary font-semibold text-base">
                      {review.initials}
                    </span>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="font-semibold text-brand-primary">
                      {review.name}
                    </div>
                    <div className="text-sm text-text-muted">
                      {review.date}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button 
          className="reviews-button-prev-home-repairs"
          aria-label="View previous review"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          className="reviews-button-next-home-repairs"
          aria-label="View next review"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="reviews-pagination-home-repairs"></div>

        {/* Custom Swiper Styles */}
        <style>{`
          .reviews-carousel-wrapper {
            padding-bottom: 64px;
            padding-top: 8px;
            position: relative;
            overflow: visible;
          }

          .reviews-swiper-home-repairs {
            overflow: hidden;
            padding: 0 !important;
            height: 340px !important;
          }

          .reviews-swiper-home-repairs .swiper-wrapper {
            display: flex;
            align-items: flex-start;
            height: 100%;
          }

          .reviews-swiper-home-repairs .swiper-slide {
            height: 100%;
            padding: 8px 0;
            display: flex;
          }

          .review-text-clamp {
            display: -webkit-box !important;
            -webkit-line-clamp: 4 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            word-wrap: break-word;
            word-break: break-word;
            max-height: calc(1.6em * 4);
          }

          .reviews-button-prev-home-repairs,
          .reviews-button-next-home-repairs {
            position: absolute;
            top: 50%;
            transform: translateY(calc(-50% - 32px));
            width: 44px;
            height: 44px;
            background: rgba(198, 167, 120, 0.12);
            border-radius: 50%;
            color: #B8935A;
            border: none;
            cursor: pointer;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
          }
          
          .reviews-button-prev-home-repairs {
            left: -8px;
          }
          
          .reviews-button-next-home-repairs {
            right: -8px;
          }
          
          .reviews-button-prev-home-repairs:hover,
          .reviews-button-next-home-repairs:hover {
            background: #C6A778;
            color: white;
            box-shadow: 0 4px 12px rgba(198, 167, 120, 0.3);
            transform: translateY(calc(-50% - 32px)) scale(1.05);
          }

          .reviews-button-prev-home-repairs:disabled,
          .reviews-button-next-home-repairs:disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
          
          .reviews-pagination-home-repairs {
            display: flex !important;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin-top: 32px;
            position: relative;
            width: 100%;
            height: 16px;
            min-height: 16px;
          }
          
          .reviews-bullet-home-repairs {
            width: 12px !important;
            height: 12px !important;
            background: transparent;
            border: 2px solid #C6A778;
            opacity: 0.6;
            transition: opacity 0.3s ease, background 0.3s ease;
            cursor: pointer;
            display: inline-block;
            flex-shrink: 0;
          }

          .reviews-bullet-home-repairs:hover {
            opacity: 1;
          }
          
          .reviews-bullet-active-home-repairs {
            background: #C6A778 !important;
            opacity: 1 !important;
          }

          @media (max-width: 767px) {
            .reviews-carousel-wrapper {
              padding-bottom: 56px;
              padding-top: 8px;
              overflow: visible;
            }

            .reviews-swiper-home-repairs {
              overflow: hidden;
              height: 320px !important;
            }

            .reviews-pagination-home-repairs {
              margin-top: 24px;
            }

            .reviews-button-prev-home-repairs,
            .reviews-button-next-home-repairs {
              display: none !important;
            }
          }

          @media (min-width: 768px) {
            .reviews-button-prev-home-repairs,
            .reviews-button-next-home-repairs {
              display: flex !important;
            }
          }

          @media (min-width: 640px) and (max-width: 1023px) {
            .reviews-button-prev-home-repairs {
              left: -4px;
            }
            
            .reviews-button-next-home-repairs {
              right: -4px;
            }
          }

          @media (min-width: 1024px) {
            .reviews-button-prev-home-repairs {
              left: -8px;
            }
            
            .reviews-button-next-home-repairs {
              right: -8px;
            }
          }

          @media (min-width: 1280px) {
            .reviews-button-prev-home-repairs {
              left: -12px;
            }
            
            .reviews-button-next-home-repairs {
              right: -12px;
            }
          }
        `}</style>
      </div>
    </>
  );
}

