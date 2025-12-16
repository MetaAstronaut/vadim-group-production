'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';
import { getMarineRVTestimonials } from '@/data/testimonials';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export function TestimonialsCarousel() {
  const reviewsData = getMarineRVTestimonials();

  return (
    <>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">
          CLIENT REVIEWS
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
          What Boat & RV Owners Say About Our Work
        </h2>
        {/* Google Verification Badge */}
        <div className="flex items-center justify-center gap-2 text-text-secondary">
          <GoogleLogo />
          <span className="text-base">Reviews collected from verified clients</span>
        </div>
      </div>

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
            bulletClass: 'swiper-pagination-bullet reviews-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active reviews-bullet-active',
            el: '.reviews-pagination-marine-rv',
            dynamicBullets: false
          }}
          navigation={{
            prevEl: '.reviews-button-prev-marine-rv',
            nextEl: '.reviews-button-next-marine-rv'
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
          className="reviews-swiper-marine-rv"
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
          className="reviews-button-prev-marine-rv hidden md:flex"
          aria-label="View previous review"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          className="reviews-button-next-marine-rv hidden md:flex"
          aria-label="View next review"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="reviews-pagination-marine-rv"></div>

        {/* Custom Swiper Styles */}
        <style>{`
          .reviews-carousel-wrapper {
            padding-bottom: 64px;
            padding-top: 8px;
            position: relative;
            overflow: visible;
          }

          .reviews-swiper-marine-rv {
            overflow: hidden;
            padding: 0 !important;
            height: 340px !important;
          }

          .reviews-swiper-marine-rv .swiper-wrapper {
            display: flex;
            align-items: flex-start;
            height: 100%;
          }

          .reviews-swiper-marine-rv .swiper-slide {
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

          .reviews-button-prev-marine-rv,
          .reviews-button-next-marine-rv {
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
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
          }
          
          .reviews-button-prev-marine-rv {
            left: -8px;
          }
          
          .reviews-button-next-marine-rv {
            right: -8px;
          }
          
          .reviews-button-prev-marine-rv:hover,
          .reviews-button-next-marine-rv:hover {
            background: #C6A778;
            color: white;
            box-shadow: 0 4px 12px rgba(198, 167, 120, 0.3);
            transform: translateY(calc(-50% - 32px)) scale(1.05);
          }

          .reviews-button-prev-marine-rv:disabled,
          .reviews-button-next-marine-rv:disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
          
          .reviews-pagination-marine-rv {
            display: flex !important;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin-top: 32px;
            position: relative;
            height: 16px;
            min-height: 16px;
          }
          
          .reviews-bullet {
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

          .reviews-bullet:hover {
            opacity: 1;
          }
          
          .reviews-bullet-active {
            background: #C6A778 !important;
            opacity: 1 !important;
          }

          @media (max-width: 767px) {
            .reviews-carousel-wrapper {
              padding-bottom: 56px;
              padding-top: 8px;
              overflow: visible;
            }

            .reviews-swiper-marine-rv {
              overflow: hidden;
              height: 320px !important;
            }

            .reviews-pagination-marine-rv {
              margin-top: 24px;
            }

            .reviews-button-prev-marine-rv,
            .reviews-button-next-marine-rv {
              display: none !important;
            }
          }

          @media (min-width: 640px) and (max-width: 1023px) {
            .reviews-button-prev-marine-rv {
              left: -4px;
            }
            
            .reviews-button-next-marine-rv {
              right: -4px;
            }
          }

          @media (min-width: 1024px) {
            .reviews-button-prev-marine-rv {
              left: -8px;
            }
            
            .reviews-button-next-marine-rv {
              right: -8px;
            }
          }

          @media (min-width: 1280px) {
            .reviews-button-prev-marine-rv {
              left: -12px;
            }
            
            .reviews-button-next-marine-rv {
              right: -12px;
            }
          }
        `}</style>
      </div>
    </>
  );
}

