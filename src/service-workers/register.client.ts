declare global {
  const SERVICE_WORKERS: string[];
}

if (
  "serviceWorker" in navigator
  && window.location.hostname.endsWith(".github.io")
) {
  window.addEventListener("load", () => {
    SERVICE_WORKERS.forEach((swUrl) => {
      navigator.serviceWorker.register(swUrl).then(registration => {
        console.log("SW registered. Scope: ", registration.scope);
      }).catch(err => {
        console.error("SW Register failed: ", err);
      });
    });
  });
}

export {};
