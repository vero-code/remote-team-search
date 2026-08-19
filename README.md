# Remote Team Search

<p align="left">
  <img src="https://img.shields.io/badge/Angular-19+-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/SCSS-BEM-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS" />
  <img src="https://img.shields.io/badge/Design-Pixel--Perfect-1074CC?style=for-the-badge&logo=figma&logoColor=white" alt="Pixel Perfect" />
</p>

An animated and responsive web application header featuring an expanding search bar and an interactive search filters dropdown, built with **Angular 19+** and **SCSS (BEM)**.

## ✨ Features

- **Pixel-Perfect Responsive Layout:**
  - **Mobile (414px):** Optimized view with a full-screen search input, back button navigation, and a vertical filter checklist.
  - **Desktop (1440px):** Brand navigation bar with smooth expansion animations and a multi-column filter popup.
  - Full adherence to Figma design specifications (typography, exact pixel dimensions, color palette, shadows, and vector icons).

- **Hardware-Accelerated Expand Animation:**
  - Desktop search expands smoothly to 704px using CSS cubic-bezier transitions (`cubic-bezier(0.4, 0, 0.2, 1)`) while gracefully collapsing navigation links without layout shifting.
  - Mobile search smoothly transitions into a focused header with an instant clear button.

- **Interactive Search Filters Dropdown:**
  - Automatically reveals the filters panel upon search input focus.
  - **Search History Column (Desktop):** Recent search queries with smooth hover effects and a bottom gradient fade-out mask.
  - **Author Filter Field:** Text input with an instant "Я" (Me) preset selector.
  - **Filter Checkboxes:** Structured option groups with customized checkboxes, maintaining dedicated layout orders for mobile and desktop views.

- **Seamless User Experience:**
  - Close on backdrop click (outside click detection).
  - Close on `Escape` keypress.
  - Fast rendering and reactive state management powered by **Angular Signals**.

## 🏗 Component Architecture

The application is structured into decoupled, reusable Standalone Components:

- **`App` (`<app-root>`)** — Orchestrates top-level application state using Angular Signals (`isSearchOpen`, `isFiltersOpen`), manages the global `.backdrop` overlay, and handles document-level keydown events (`Escape`).
- **`Header` (`<app-header>`)** — Main navigation bar containing the logo, navigation links, notification badge, action buttons, and animated search trigger.
- **`Search` (`<app-search>`)** — Dedicated search input component supporting desktop animated expansion and mobile full-screen views.
- **`Filters` (`<app-filters>`)** — Dropdown panel presenting search history, author filtering, and categorized checkbox options.

## 🛠 Tech Stack

- **Framework:** Angular 19+ (Standalone Components, Signals, new Control Flow `@if` / `@for`, Output API).
- **Styling:** SCSS, BEM Methodology, CSS Variables, Flexbox, Hardware-accelerated Transitions.
- **Typography:** Google Fonts (Roboto 400, 500, 700).

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vero-code/remote-team-search.git
   cd remote-team-search
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   ng serve
   ```

4. Open [http://localhost:4200/](http://localhost:4200/) in your browser.
