# ORVIO Design System

## Direction

ORVIO uses a bold editorial system built for a social-first creative agency. Oversized type creates the opening impact. A black and warm-ivory base keeps the work direct; signal orange and acid lime create moments of interruption.

Reference principles adapted from leading social agencies:

- Full-screen campaign energy and a direct accent call to action
- Reel-led, work-first composition
- Compact navigation that leaves visual work dominant

The system does not copy third-party layouts, artwork, logos, or language.

## Source

Design tokens and responsive rules live in `src/styles/global.css`. Shared navigation and footer components live in `src/components/`.

## Tokens

- Paper: `#f4efe6`
- Deep paper: `#e8e0d4`
- Ink: `#11100f`
- Signal orange: `#ff4d00`
- Acid lime: `#d8ff39`
- Display type: Manrope
- Body type: DM Sans
- Body copy minimum: `1rem`
- Primary breakpoints: `768px` and `1024px`
- Focus outline: 3px signal orange

## Components

- Header links route to separate pages. Mobile navigation uses native `details` and `summary` behavior.
- Primary actions use signal orange and direct verb-led labels.
- Editorial links use a bottom rule and diagonal arrow.
- Oversized statements use Manrope; expressive words may use Georgia italic.
- Portfolio placeholders state that approved work is pending. They never imitate real client projects.

## Motion

Entry motion uses short upward reveals. Marquees and transitions stop when reduced motion is requested. Motion supports hierarchy and never blocks reading or navigation.

## Responsive behavior

Layouts start as one column. At 768px, service rows, editorial grids, and contact content expand. At 1024px, large compositions gain extra horizontal separation. Touch targets remain at least 44px.

## Avoid

- Website development or generic digital-agency positioning
- Fabricated clients, metrics, testimonials, or campaign results
- Purple gradients, glass panels, generic card grids, and decorative dashboard styling
- Excess animation, tiny controls, or effects that reduce contrast
