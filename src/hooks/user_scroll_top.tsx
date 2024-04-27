import React, { useEffect, useState } from 'react'

export const User_scroll_top_56 = (threshold = 56) => {
    const [scrolled , setScrolled] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else  {
                setScrolled(false);
            }
        }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolled ;
  }