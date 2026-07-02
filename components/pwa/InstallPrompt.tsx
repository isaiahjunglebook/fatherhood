"use client";

import { useEffect, useState } from "react";

const DISMISS_KEY = "tif-install-dismissed-v1";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

/**
 * Slim install banner shown above the bottom nav on mobile browsers.
 * Chromium gets a one-tap install button; iOS Safari gets the share-sheet
 * instructions (there is no install API on iOS). Hidden once installed
 * (standalone) or dismissed.
 */
export function InstallPrompt() {
  const [visible, setVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      ("standalone" in window.navigator &&
        (window.navigator as { standalone?: boolean }).standalone === true);
    if (standalone || localStorage.getItem(DISMISS_KEY)) return;

    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setInstallEvent(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    // iOS never fires beforeinstallprompt — show the hint after a beat.
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (ios) {
      timer = setTimeout(() => {
        setIsIOS(true);
        setVisible(true);
      }, 2500);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      if (timer) clearTimeout(timer);
    };
  }, []);

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  }

  async function install() {
    if (!installEvent) return;
    await installEvent.prompt();
    const { outcome } = await installEvent.userChoice;
    if (outcome === "accepted") setVisible(false);
    else dismiss();
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-[calc(3.5rem+env(safe-area-inset-bottom))] z-40 px-4 pb-2 md:hidden">
      <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-2xl border border-line bg-ink p-4 text-bone shadow-lg animate-rise">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">Keep this with you</p>
          <p className="mt-0.5 text-xs leading-relaxed text-bone/70">
            {isIOS
              ? "Tap the share button, then “Add to Home Screen” to use this as an app."
              : "Add to your home screen and come back to your chapters anytime."}
          </p>
        </div>
        {!isIOS && installEvent && (
          <button
            onClick={install}
            className="shrink-0 rounded-full bg-terracotta px-4 py-2 text-xs font-semibold text-bone transition-colors hover:bg-terracotta-deep"
          >
            Install
          </button>
        )}
        <button
          onClick={dismiss}
          aria-label="Dismiss install prompt"
          className="shrink-0 p-1 text-bone/50 transition-colors hover:text-bone"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
