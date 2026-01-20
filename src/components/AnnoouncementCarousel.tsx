"use client";

import { useState, useEffect, useRef } from "preact/hooks";

type Announcement = {
  id: number;
  icon: any;
  message: string;
  link?: string;
};

const announcements: Announcement[] = [
  {
    id: 4,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-coins"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
        <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
        <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
        <path d="M3 6v10c0 .888 .772 1.45 2 2" />
        <path d="M3 11c0 .888 .772 1.45 2 2" />
      </svg>
    ),
    message: "Ebook de Sueño + Guía de Cuidado Visual Gratis",
    link: "#pricing",
  },
  {
    id: 1,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-tag"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
      </svg>
    ),
    message: "Envío Gratis A Todo 🇨🇴",
    link: "#pricing",
  },
  {
    id: 2,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-clock"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    message: "Pago Contra Entrega",
    link: "#pricing",
  },
  {
    id: 3,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-eye"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
      </svg>
    ),
    message: "Protege Tus Ojos y Duerme Mejor",
    link: "#benefits",
  },
];

export default function AnnouncementCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Auto-rotate announcements
  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setDirection("left");
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 300); // Wait for fade out animation to complete
    }, 5000); // Change announcement every 5 seconds

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const nextAnnouncement = () => {
    resetTimeout();
    setDirection("left");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const prevAnnouncement = () => {
    resetTimeout();
    setDirection("right");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + announcements.length) % announcements.length
      );
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const currentAnnouncement = announcements[currentIndex];

  return (
    <div className="fixed bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-500 hover:to-red-500 text-primary-foreground py-2 overflow-hidden z-10 top-15 xl:top-16 w-full ">
      <div className="container px-2 md:px-6 flex items-center justify-between ">
        <button
          onClick={prevAnnouncement}
          className="absolute left-2 md:left-4 p-1 rounded-full hover:bg-primary-foreground/10 transition-colors z-10"
          aria-label="Previous announcement"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ffffff"
            class="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" />
          </svg>
        </button>

        <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
          <div
            key={currentAnnouncement.id}
            className={`flex items-center justify-center gap-2 text-sm xl:text-lg font-medium px-8 transition-all duration-300 ease-in-out
              ${
                isAnimating
                  ? direction === "left"
                    ? "opacity-0 transform -translate-x-8"
                    : "opacity-0 transform translate-x-8"
                  : "opacity-100 transform translate-x-0"
              }`}
          >
            {currentAnnouncement.icon}

            {currentAnnouncement.link ? (
              <a
                href={currentAnnouncement.link}
                className="hover:underline transition-all whitespace-nowrap md:whitespace-normal text-white"
              >
                {currentAnnouncement.message}
              </a>
            ) : (
              <span className="whitespace-nowrap md:whitespace-normal">
                {currentAnnouncement.message}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={nextAnnouncement}
          className="absolute right-2 md:right-4 p-1 rounded-full hover:bg-primary-foreground/10 transition-colors z-10"
          aria-label="Next announcement"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ffffff"
            class="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
          </svg>
        </button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-0.5 xl:pb-1">
        {announcements.map((_, index) => (
          <div
            key={index}
            className={`h-0.5 w-5 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary-foreground"
                : "bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
