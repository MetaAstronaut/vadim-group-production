'use client';

import * as React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MessengerWidgetProps {
  messengerLink: string;
  className?: string;
}

// Extend Window interface for vendor-specific properties
interface ExtendedWindow extends Window {
  opera?: string;
  MSStream?: unknown;
}

// Platform detection and smart link generation
const getMessengerLink = (username: string): string => {
  if (typeof window === 'undefined') return `https://m.me/${username}`;
  
  const extWindow = window as ExtendedWindow;
  const userAgent = navigator.userAgent || navigator.vendor || extWindow.opera || '';
  
  // iOS devices - m.me works perfectly
  if (/iPad|iPhone|iPod/.test(userAgent) && !extWindow.MSStream) {
    return `https://m.me/${username}`;
  }
  
  // Android devices - use intent URL with fallback
  if (/android/i.test(userAgent)) {
    // Try to open Messenger app, fallback to web version
    return `https://www.facebook.com/messages/t/${username}`;
  }
  
  // Desktop - open messenger.com
  return `https://www.messenger.com/t/${username}`;
};

export const MessengerWidget: React.FC<MessengerWidgetProps> = ({
  messengerLink,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [smartLink, setSmartLink] = useState(messengerLink);

  useEffect(() => {
    // Extract username from m.me link
    const username = messengerLink.replace('https://m.me/', '');
    setSmartLink(getMessengerLink(username));

    // Delay appearance by 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Check if footer is in viewport to hide widget
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide widget if footer is visible in viewport
        setIsFooterVisible(footerRect.top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [messengerLink]);

  // Handle click with smart fallback for Android
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const extWindow = window as ExtendedWindow;
    const userAgent = navigator.userAgent || navigator.vendor || extWindow.opera || '';
    
    // Special handling for Android
    if (/android/i.test(userAgent)) {
      e.preventDefault();
      
      const username = messengerLink.replace('https://m.me/', '');
      
      // Try to open Messenger app first
      const messengerAppUrl = `fb-messenger://user/${username}`;
      const fallbackUrl = `https://www.facebook.com/messages/t/${username}`;
      
      // Attempt to open Messenger app
      window.location.href = messengerAppUrl;
      
      // Fallback to web version after a short delay if app didn't open
      setTimeout(() => {
        window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
      }, 1000);
    }
    // For iOS and Desktop, use default behavior with smartLink
  };

  return (
    <div
      className={cn(
        "fixed z-50 transition-all duration-400 ease-out",
        "bottom-6 right-6 md:bottom-6 md:right-6",
        isVisible && !isFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        className
      )}
      style={{
        animation: isVisible ? "slideUpFadeIn 0.4s ease-out" : "none"
      }}
    >
      {/* Facebook Messenger Button */}
      <a
        href={smartLink}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center",
          "w-14 h-14 md:w-[60px] md:h-[60px]",
          "rounded-full",
          "bg-[#0084FF] hover:bg-[#006edb]",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-300",
          "hover:scale-110",
          "focus:outline-none focus:ring-2 focus:ring-[#0084FF] focus:ring-offset-2",
          "group"
        )}
        aria-label="Message on Facebook"
        title="Message on Facebook"
      >
        {/* Facebook Messenger Icon */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 md:w-8 md:h-8 text-white transition-transform duration-300 group-hover:scale-105" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
        </svg>

        {/* Notification Pulse */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0084FF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0084FF]"></span>
        </span>
      </a>

      {/* Keyframe animation */}
      <style jsx>{`
        @keyframes slideUpFadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

