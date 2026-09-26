// Made for you: a console button for phones (Chrome on Android has no DevTools).
// It loads only while you develop (npm run dev), never on your published site.
if (import.meta.env.DEV) {
  const { default: eruda } = await import("eruda");
  eruda.init();
}
