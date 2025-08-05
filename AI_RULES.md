# AI Development Rules for Dreamlight Welfare Society App

This document outlines the core technologies used in this application and provides guidelines for their usage to ensure consistency, maintainability, and adherence to best practices.

## Tech Stack Overview

*   **React:** The primary JavaScript library for building the user interface.
*   **TypeScript:** Used for type-safe JavaScript, enhancing code quality and developer experience.
*   **React Router:** Manages client-side routing, defining navigation paths and rendering components based on the URL.
*   **Tailwind CSS:** A utility-first CSS framework for rapid and consistent styling. All styling should be done using Tailwind classes.
*   **shadcn/ui:** A collection of re-usable UI components built on Radix UI and styled with Tailwind CSS.
*   **Framer Motion:** A powerful library for declarative animations and transitions, used to create smooth and engaging user experiences.
*   **Lucide React:** A library providing a set of beautiful, open-source icons for use across the application.
*   **Vite:** The build tool used for fast development and optimized production builds.
*   **Radix UI:** The low-level component library that powers shadcn/ui, providing accessible and unstyled primitives.

## Library Usage Guidelines

*   **UI Components:** Always prioritize using components from `src/components/ui` (shadcn/ui). If a required component is not available or needs significant customization beyond simple props, create a new, separate component in `src/components/` or a relevant subfolder. Do not modify existing `src/components/ui` files.
*   **Styling:** All visual styling must be implemented using **Tailwind CSS classes**. Avoid inline styles or separate CSS files unless absolutely necessary for very specific, isolated cases (e.g., complex custom animations not covered by Framer Motion).
*   **Icons:** Use icons exclusively from the **`lucide-react`** library.
*   **Animations:** For all animations and transitions, leverage **`framer-motion`**. This ensures a consistent and performant animation style throughout the application.
*   **Routing:** All client-side navigation and route definitions should use **`react-router-dom`**. Keep the main application routes defined within `src/App.jsx`.
*   **File Structure:** Adhere to the existing file structure:
    *   Pages: `src/pages/`
    *   Components: `src/components/` (further organized into `common/layout`, `root/sections`, etc., as appropriate)
    *   Utilities: `src/lib/utils.js`
    *   New components should always be created in their own dedicated files.
*   **Code Quality:**
    *   Write clean, readable, and maintainable code.
    *   Ensure all new components are responsive.
    *   Keep components focused and ideally under 100 lines of code.
    *   Do not implement error handling with `try/catch` blocks unless specifically requested, as errors need to bubble up for debugging.