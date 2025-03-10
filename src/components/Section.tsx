import React from 'react';
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
  bgColor?: string;
}

const Section = ({ children, className, bgImage, bgColor = "bg-white" }: SectionProps) => {
  return (
    <section 
      className={cn(
        "relative py-20 px-4 overflow-hidden",
        bgColor,
        className
      )}
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      } : undefined}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;