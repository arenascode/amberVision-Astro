import { useEffect, useRef } from "preact/hooks";
import type { ComponentChildren } from "preact";

// Define the props interface
interface FadeInProps {
  children: ComponentChildren;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  threshold?: number;
  className?: string;
}

// FadeIn component that wraps any element to add fade-in effect
const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  duration = 600,
  threshold = 0.1,
  className = "",
  ...props
}: FadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    // Skip if no element or if we're in a server environment
    if (!element || typeof IntersectionObserver === "undefined") return;

    // Apply initial inline styles
    element.style.opacity = "0";
    element.style.transform =
      direction === "up" ? "translateY(20px)" : "translateY(0)";
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    element.style.transitionDelay = `${delay}ms`;
    element.style.willChange = "opacity, transform";

    // Create observer
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Make visible
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

            // Stop observing once it's visible
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    // Start observing
    observer.observe(element);

    // Cleanup
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, direction, duration, threshold]);

  return (
    <div ref={elementRef} className={`fade-in ${className}`} {...props}>
      {children}
    </div>
  );
};

export default FadeIn;
