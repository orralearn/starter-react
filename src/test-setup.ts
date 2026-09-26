// Made for you: runs before your tests. It adds Testing Library's
// matchers (toBeInTheDocument, toHaveTextContent…) and clears the
// page after each test.
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
