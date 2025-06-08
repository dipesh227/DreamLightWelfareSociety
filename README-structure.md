# Dream Light Welfare Society - Website Structure

## 🏗️ Three-Part Architecture

This website is divided into three distinct sections using Next.js route groups, each with its own layout and authentication:

### 1. 🏠 **Main Public Site** (`/`)
- **Route**: Root directory (`src/app/page.tsx`)
- **Layout**: Main layout (`src/app/layout.tsx`)
- **Purpose**: Public-facing website for general visitors
- **Features**:
  - Organization overview with authentic registration details
  - Program showcase and objectives
  - Leadership team information
  - Portal access links for Admin and Volunteer sections
  - SEO optimization with structured data

### 2. ⚙️ **Admin Portal** (`/admin/*`)
- **Route Group**: `src/app/(admin)/`
- **Layout**: Custom admin layout (`src/app/(admin)/layout.tsx`) - Dark theme
- **Authentication**: Admin login required (`/admin/login`)
- **Dashboard**: `/admin/dashboard`
- **Purpose**: Administrative control for organization leaders
- **Features**:
  - Member management with real committee data
  - Dashboard with statistics and recent activities
  - Program management interface
  - Financial tracking capabilities
  - Quick action buttons for common tasks

### 3. 🤝 **Volunteer Portal** (`/volunteer/*`)
- **Route Group**: `src/app/(volunteer)/`
- **Layout**: Custom volunteer layout (`src/app/(volunteer)/layout.tsx`) - Light blue theme
- **Authentication**: Volunteer login required (`/volunteer/login`)
- **Portal**: `/volunteer/portal`
- **Purpose**: Community service platform for volunteers
- **Features**:
  - Personal volunteer dashboard
  - Available opportunities with detailed descriptions
  - Activity tracking and achievements
  - Training resources access
  - Profile management

## 🔐 Authentication System

### Admin Credentials
- **URL**: `/admin/login`
- **Email**: `admin@dreamlight.org`
- **Password**: `admin123`
- **Redirects to**: `/admin/dashboard`

### Volunteer Credentials
- **URL**: `/volunteer/login`
- **Email**: `volunteer@dreamlight.org`
- **Password**: `volunteer123`
- **Redirects to**: `/volunteer/portal`

## 🎨 Design Themes

### Main Site
- **Theme**: Light/Dark mode toggle
- **Colors**: Neutral with primary accents
- **Layout**: Clean and professional

### Admin Portal
- **Theme**: Dark mode (slate colors)
- **Colors**: Dark slate background with blue accents
- **Layout**: Dashboard-style with metrics and tables

### Volunteer Portal
- **Theme**: Light blue gradient
- **Colors**: Blue gradients with white cards
- **Layout**: Community-focused with engagement elements

## 📁 File Structure

```
src/app/
├── (admin)/                 # Admin route group
│   ├── layout.tsx          # Admin-specific layout
│   ├── page.tsx            # Redirects to /admin/login
│   ├── login/
│   │   └── page.tsx        # Admin login page
│   └── dashboard/
│       └── page.tsx        # Admin dashboard
├── (volunteer)/            # Volunteer route group
│   ├── layout.tsx          # Volunteer-specific layout
│   ├── page.tsx            # Redirects to /volunteer/login
│   ├── login/
│   │   └── page.tsx        # Volunteer login page
│   └── portal/
│       └── page.tsx        # Volunteer portal
├── layout.tsx              # Root layout
├── page.tsx                # Main public page
├── globals.css             # Global styles
├── sitemap.ts              # SEO sitemap
└── manifest.ts             # PWA manifest
```

## 🌟 Key Features

1. **Separate Layouts**: Each section has its own layout with different themes and navigation
2. **Authentication**: Login systems for admin and volunteer sections
3. **Role-Based Access**: Different interfaces for different user types
4. **Responsive Design**: Works on all devices
5. **SEO Optimized**: Structured data and proper meta tags
6. **Theme Support**: Dark/light mode toggle on main site
7. **Real Data**: Uses authentic information from government registration

## 🚀 Navigation

- **Main Site**: Public access at `/`
- **Admin Portal**: Login at `/admin/login` → Dashboard at `/admin/dashboard`
- **Volunteer Portal**: Login at `/volunteer/login` → Portal at `/volunteer/portal`

Each section is completely independent with its own styling, layout, and functionality while sharing common components where appropriate.