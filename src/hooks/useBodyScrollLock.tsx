import { useEffect } from "preact/hooks";

export const useBodyScrollLock = (isLockedSignal: any) => {
  useEffect(() => {
    const isLocked = isLockedSignal.value;

    if (isLocked) {
      // 1. Get the width of the scrollbar before hiding it
      // (This prevents the "jumping" effect to the right)
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // 2. Block the scroll
      document.body.style.overflow = "hidden";

      // 3. Add padding to replace the missing scrollbar
      // so the content doesn't shift/wiggle
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        // 4. Clean up: Restore everything exactly as it was
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      };
    }
  }, [isLockedSignal.value]);
};
