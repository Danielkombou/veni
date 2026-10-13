# 0015. Design system, icons, and visual polish

**Date**: 2026-10-07
**Status**: In Progress

## Summary

This spec defines the Veni design system built on top of shadcn/ui. It establishes the visual language: customized component variants, icon usage (lucide-react), illustration/empty-state strategy, loading skeletons, toast patterns, and responsive breakpoints. A component style guide page at `/style-guide` will document everything so every pilot screen feels cohesive and production-grade.

## Requirements

**User stories**:
- As a developer, I want a documented component library so I can build consistent UIs quickly
- As a designer, I want defined color tokens, spacing, and typography so the brand feels cohesive
- As a user, I want polished empty states, loading states, and error states so the app feels professional

**Acceptance criteria**:
- **AC-1**: Component variants documented (Button, Card, Input, Select, Dialog, Toast, Table, Badge, Avatar, Tooltip, Dropdown)
- **AC-2**: Icon library decisions made (lucide-react for all icons, consistent sizing)
- **AC-3**: Empty state components for all pilot flows (no templates, no certificates, no batches, no members)
- **AC-4**: Loading skeleton components for async data (templates, batches, certificates, members)
- **AC-5**: Toast patterns standardized (success, error, warning, info with consistent positioning)
- **AC-6**: Responsive breakpoints defined and used consistently (mobile, tablet, desktop)
- **AC-7**: Style guide page at `/style-guide` renders all components with variants
- **AC-8**: No raw colors or ad-hoc spacing in pilot components (only design tokens)

## Decision

**Chosen option**: shadcn/ui with lucide-react icons, Veni green theme tokens, custom component variants

**Implementation skills**: `shadcn` (shadcn/ui, .agents/skills/shadcn/) · `tailwindcss` (tailwindcss, .agents/skills/tailwindcss/)

## Rationale

Reasoning and options: see rationale.md

## Feature design

**Component variants to customize**:
- Button: primary, secondary, outline, ghost, destructive, link (with Veni green)
- Card: default, bordered, elevated (with subtle shadows)
- Input: default, error, success states
- Select: default, multi-select, searchable
- Dialog: default, alert, confirmation, form
- Toast: success, error, warning, info (top-right, auto-dismiss)
- Table: default, striped, hover, with pagination
- Badge: default, success, warning, error, info
- Avatar: default, with fallback initials, status indicator
- Tooltip: default, with arrow, custom content
- Dropdown: default, with checkboxes, radio groups

**Icon system**:
- Library: lucide-react (already in deps)
- Sizing: 16px (inline), 20px (buttons), 24px (headers), 32px (empty states)
- Consistent stroke width: 2
- No other icon libraries

**Empty state components**:
- EmptyState: icon, title, description, action button
- Variants: no-templates, no-certificates, no-batches, no-members, no-results, no-data

**Loading skeletons**:
- Skeleton: animated pulse, matches component shape
- Variants: card, table-row, list-item, avatar, text-block

**Toast patterns**:
- Position: top-right (default), top-center (critical)
- Auto-dismiss: 5s (success/info), 8s (warning), persistent (error)
- Actions: dismiss, retry, undo

**Responsive breakpoints**:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Container max-width: 1280px

**Style guide page** (`/style-guide`):
- Sections: Colors, Typography, Spacing, Icons, Buttons, Forms, Cards, Tables, Toasts, Empty States, Skeletons
- Each component shows all variants with code snippets

## Critical test scenarios

- Visual regression: all component variants render correctly
- Responsive: style guide works on mobile, tablet, desktop
- Dark mode: all variants work in both themes
- Accessibility: color contrast, focus states, keyboard navigation
- Token usage: grep for raw colors in pilot components returns zero

## Build plan

1. Add design tokens to `app/globals.css` (colors, spacing, typography, shadows), satisfies AC-8
2. Customize shadcn components in `components/ui/` with Veni variants, satisfies AC-1
3. Create icon utility and standardize lucide-react usage, satisfies AC-2
4. Build EmptyState component and variants, satisfies AC-3
5. Build Skeleton component and variants, satisfies AC-4
6. Customize Toast provider and patterns, satisfies AC-5
7. Define responsive utilities and container, satisfies AC-6
8. Build `/style-guide` page with all sections, satisfies AC-7
9. Audit pilot components for raw colors/ad-hoc spacing, satisfies AC-8
10. Integration test: style guide renders, all variants work in both themes

## Consequences

**Positive**:
- Consistent visual language across all pilot screens
- Faster development with pre-built variants
- Professional polish builds trust with pilot users
- Style guide serves as living documentation

**Negative / tradeoffs**:
- Upfront investment in component customization
- Need to maintain style guide as components evolve
- shadcn updates may require variant rework

**Neutral**:
- lucide-react already in deps, no new deps needed
- Veni green theme already in globals.css

## Follow-up

- [ ] Add `shadcn` community skill conventions to AGENTS.md (project-wide)
- [ ] Add `tailwindcss` community skill conventions to AGENTS.md (project-wide)
- [ ] Create design.md with full design system documentation
- [ ] Add visual regression testing (Chromatic or similar)
- [ ] Consider adding Figma design file sync