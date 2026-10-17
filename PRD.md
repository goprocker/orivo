# OVIRO Agency Website — Product Requirements Document

**Status:** Draft for review  
**Version:** 0.1  
**Date:** 2026-10-17  
**Product:** OVIRO marketing website

## 1. Product summary

OVIRO is a social media agency. This project will create OVIRO's public marketing site. The site must explain the agency's services, establish credibility, showcase selected work, and convert suitable visitors into project inquiries.

The first release will be a fast, responsive, accessible marketing website. It will not require customer accounts, a database, or a full content management system unless later requirements make them necessary.

## 2. Confirmed business information

- Official brand name: **OVIRO**
- Business type: social media agency
- Confirmed focus: social media services only
- Other services shown in this PRD are proposed and must be confirmed before final copy is published.

## 3. Problem statement

Prospective clients need a clear way to understand what OVIRO offers, judge the quality of its work, and contact the agency. OVIRO needs a focused online presence that supports discovery, builds trust, and produces qualified inquiries.

## 4. Product goals

### Primary goal

Generate qualified project inquiries for OVIRO.

### Supporting goals

- Explain OVIRO's services in clear language.
- Position OVIRO as a capable creative and digital partner.
- Demonstrate credibility through real work, results, and testimonials when supplied.
- Make contacting OVIRO easy on mobile and desktop.
- Create a foundation that can grow with new case studies and services.

### Non-goals for first release

- Client dashboard or customer accounts
- Social network or publishing platform
- Online payments or service checkout
- Complex CRM
- Blog, unless approved content is supplied
- Full CMS before an editing workflow is confirmed
- Unsupported claims, fabricated clients, invented metrics, or placeholder testimonials presented as real

## 5. Target users

The exact market requires confirmation. Initial user groups are:

1. Business owners seeking help with social media and digital presence.
2. Marketing teams seeking a creative or production partner.
3. Prospective partners or talent researching OVIRO.

## 6. Primary user journey

1. Visitor lands on the home page.
2. Visitor understands what OVIRO does from the first screen.
3. Visitor reviews services and selected work.
4. Visitor sees evidence of process, expertise, or results.
5. Visitor selects **Start a project**.
6. Visitor submits a concise inquiry.
7. OVIRO receives the inquiry and can respond using the supplied contact details.

Secondary journey: visitor opens a case study, reviews the challenge, work, and outcome, then starts an inquiry.

## 7. Information architecture

### Required pages

- **Home** — positioning, services, selected work, process, proof, and main call to action
- **Services** — clear description of each confirmed service
- **Work** — selected projects and case studies
- **About** — OVIRO's story, approach, and team information when supplied
- **Contact** — project inquiry form and approved contact channels

### Proposed service categories

OVIRO is exclusively a social media agency. Confirm the exact delivery scope before final publication.

- Social strategy — proposed
- Content systems — proposed
- Campaign creative — proposed
- Community and growth — proposed

## 8. Page requirements

### 8.1 Home

The home page must include:

- Header with OVIRO wordmark, main navigation, and **Start a project** action
- Hero with a direct value proposition, short supporting statement, primary action, and work action
- Service overview using confirmed service names
- Selected work section using real projects supplied by OVIRO
- Simple working process
- Credibility section for real results, client logos, or testimonials when supplied
- Final project inquiry call to action
- Footer with navigation, approved contact details, social links, and legal links

### 8.2 Services

The services page must:

- Explain each confirmed service and its expected outcome.
- Help visitors identify which service fits their need.
- Avoid fixed packages or pricing until OVIRO approves them.
- Provide a clear route to the inquiry form.

### 8.3 Work

The work page must:

- Display projects using strong visual material.
- Allow each project to link to a dedicated case study when enough content exists.
- Use real client names, project facts, and results only with approval.
- Support a useful fallback format when measurable results are unavailable.

Each complete case study should contain:

- Client or project name
- Service scope
- Challenge
- OVIRO's approach
- Deliverables
- Outcome or approved result
- Images, video, or campaign link when available

### 8.4 About

The about page must include OVIRO's approved story, working approach, and team information. It must not invent founding dates, locations, awards, team members, or company claims.

### 8.5 Contact

The contact page must include:

- Name
- Work email
- Company or brand name
- Service of interest
- Approximate budget range, if OVIRO approves this field
- Project description
- Optional timeline
- Consent or privacy notice
- Clear submission success and failure states

The form must validate input on both client and server boundaries. It must include spam protection without creating unnecessary friction. Final recipient and sender addresses require configuration before launch.

## 9. Content requirements

OVIRO must supply or approve:

- Logo or preferred wordmark treatment
- Final positioning statement and brand voice
- Confirmed service list
- About copy and factual company information
- Project names, descriptions, deliverables, and results
- Project images or videos with permission to publish
- Testimonials and client logos with permission to publish
- Team information, if included
- Email address, phone number, location, and social profile links
- Privacy policy and legal business details where required

Until supplied, missing information must appear as an explicit internal placeholder and must not be published as fact.

## 10. Visual direction

The proposed direction is a bold editorial creative-agency site:

- Large, expressive typography with a refined supporting typeface
- Dark charcoal or warm off-white foundation
- One distinctive brand accent color
- Campaign work used as the main visual proof
- Asymmetric editorial composition with controlled spacing
- Purposeful motion for page entry, work reveals, and navigation feedback
- Restrained interaction effects that do not reduce readability or performance

Final colors, typography, logo use, and imagery depend on OVIRO's brand assets or explicit approval.

## 11. Responsive and accessibility requirements

- Mobile-first implementation
- Fully usable layouts from 320px wide through large desktop screens
- No horizontal overflow, clipped text, or overlapping controls
- Minimum 44px touch targets
- Keyboard-accessible navigation, menus, forms, and controls
- Visible focus states
- Semantic headings and landmarks
- Meaningful alternative text for content images
- Sufficient text and control contrast meeting WCAG 2.2 AA
- Reduced-motion support
- Form errors connected to their fields and announced to assistive technology

## 12. Functional requirements

- Responsive navigation with accessible mobile menu
- Working links and calls to action
- Filter-free work gallery for first release unless project volume requires filtering
- Reusable case-study structure
- Secure inquiry form with validation, spam protection, rate limiting, and email delivery
- Success and error feedback that preserves entered information when possible
- Search-friendly metadata for each page
- Open Graph metadata for sharing
- Sitemap, robots directives, canonical URLs, and favicon assets
- Custom 404 page
- Privacy-friendly analytics only after provider and consent requirements are approved

## 13. Proposed technical architecture

- **Astro** for pages, routing, static generation, and content-driven sections
- **TypeScript** for maintainable, checked code
- **Astro components and native browser code** for most interface behavior
- **React only if an interaction genuinely needs component state**
- **Custom CSS with design tokens** for brand styling and responsive layout
- **Astro Content Collections** for services and case studies
- **Resend or equivalent server-side email provider** for inquiry delivery
- **Vercel** for preview and production hosting, subject to deployment approval
- **Vitest** for behavior that benefits from unit tests
- **Playwright** for important navigation and form flows

### Architecture constraints

- Keep secrets server-side and document them in `.env.example` with safe placeholders.
- Do not add a database until durable stored data is required.
- Do not add a CMS until the editing owner and workflow are confirmed.
- Minimize client-side JavaScript.
- Optimize images and use modern formats with responsive sizes.

## 14. Performance requirements

Target outcomes on representative production pages:

- Largest Contentful Paint at or below 2.5 seconds at the 75th percentile
- Interaction to Next Paint at or below 200 milliseconds at the 75th percentile
- Cumulative Layout Shift at or below 0.1 at the 75th percentile
- Lighthouse accessibility, best practices, and SEO scores of 90 or higher during prelaunch checks

These targets must be assessed on the deployed site. Local scores alone are not final proof.

## 15. SEO requirements

- Unique page titles and descriptions
- One clear primary heading per page
- Human-readable URLs
- Structured internal navigation
- Organization and service structured data using confirmed facts only
- Descriptive image filenames and alternative text
- Social preview image using approved branding
- No fabricated location or market claims

## 16. Measurement plan

Subject to analytics approval, measure:

- Project inquiry submissions
- Inquiry conversion rate
- Clicks on **Start a project**
- Visits to case studies
- Service-page engagement
- Form errors and abandonment without collecting sensitive field contents

Primary success indicator: qualified inquiries received through the website.

## 17. Acceptance criteria

The first release is ready for review when:

- OVIRO spelling is correct across visible copy and metadata.
- All required pages exist and navigation works.
- Home page clearly identifies OVIRO as a social media agency.
- All published business claims and portfolio content are approved facts.
- Inquiry form handles valid, invalid, failed, spam-like, and successful submissions.
- Layout passes checks at 375px, 768px, 1024px, and 1440px widths.
- Keyboard and screen-reader critical flows are usable.
- Reduced-motion preference is respected.
- Production build, automated tests, and link checks pass.
- No secrets, local environment files, or generated output are committed.
- Deployed preview receives a visual review on desktop and mobile before production release.

## 18. Delivery stages

### Stage 1 — Brand and content confirmation

Confirm positioning, services, target market, brand assets, contact details, and available work.

### Stage 2 — Foundation and home page

Set up the approved toolchain, design system, shared layout, navigation, footer, and complete responsive home page.

### Stage 3 — Supporting pages

Build Services, Work, case-study, About, Contact, legal, and 404 pages.

### Stage 4 — Inquiry delivery and quality checks

Add secure form delivery, tests, accessibility review, responsive review, metadata, and performance optimization.

### Stage 5 — Review and release

Create a review deployment, incorporate approved corrections, verify the final production deployment, and record release evidence.

## 19. Open decisions

The following information is required before final content and production release:

1. What exact services does OVIRO sell?
2. Who is OVIRO's primary customer and target location or market?
3. What is OVIRO's preferred positioning statement or tagline?
4. Does OVIRO have an existing logo, color palette, type system, or brand guide?
5. Which projects can appear publicly, and what proof is approved for each?
6. Which team members and company facts should appear?
7. Which email address and other contact channels should receive inquiries?
8. Should inquiries ask for budget and timeline?
9. Does the team need a CMS, or will developers update content through the repository?
10. Which analytics and consent tools, if any, are approved?

## 20. Release boundaries

This PRD authorizes planning and review only. Website implementation begins after this draft and its open decisions receive sufficient approval. Publication requires real content, configured inquiry delivery, and successful production verification.
