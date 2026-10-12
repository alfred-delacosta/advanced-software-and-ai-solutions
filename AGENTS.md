# Agent instructions

Design this site the way premium technology companies design theirs: Apple, Tesla, Stripe, SpaceX, Anduril. Perceived quality comes from type, space, and imagery. Decoration is a failure.

These rules are strict. If a layout, component, color, motion, or asset does not serve clarity or the product, remove it.

## Stack you must keep

- Next.js App Router, TypeScript, CSS Modules, and `app/globals.css`. Do not add Tailwind, a component library, or a new font.
- Static export (`output: "export"`). The production artifact is `out/`. Do not edit `out/`. Do not add server-only features.
- Copy lives in `data/`. Pages compose that copy. Do not hard-code marketing strings into components when a data file already owns them.
- Body type is Inter (`--font-sans`). Display type is Space Grotesk (`--font-display`). Mono is JetBrains Mono, used only for short labels.
- One accent: `--accent` (`#0b6dff`) on a neutral canvas (`--paper` / `--void`). Do not add a second brand color.
- Company facts that must stay true: 100% U.S. based team, work is never offshored, contact is email only (`contact@advancedsoftwareandaisolutions.com`), no phone number, no street address.

## How to apply the references

Use these as layout modes, not costumes. Do not mimic logos, slogans, or product photography from those companies.

- **Apple.** Extreme whitespace, cinematic product or mission photography, one idea revealed as you scroll. Headlines are short. UI recedes.
- **Tesla.** A product or mission image owns the viewport. Almost no chrome. The headline and one action sit on the image.
- **Stripe.** Outcome-focused headlines, alternating section structures, and an occasional live product or code moment. A gradient or mesh is allowed only as a single restrained accent behind a real product surface.
- **SpaceX / Anduril.** Near-black canvas, large confident type, real operational imagery. Technical, quiet, and specific. No sci-fi decoration.

Pick the mode that fits the section. Adjacent sections must not use the same mode.

## Restraint

- Every element earns its place by clarifying the offer, the proof, or the next action.
- No decorative illustrations, icon grids, blob backgrounds, patterned section fills, fake dashboards, or generic stock photos.
- No badge rows, logo clouds, or stat strips unless each item is a real, sourced claim already in `data/`.
- No extra borders, shadows, gradients, or background textures “to make it feel designed.”
- Cards are a last resort. Prefer type, a full-bleed image, or a single product surface.
- One primary call to action per view. A text link may sit beside it. Do not stack competing buttons.

## Space

Empty space is a feature. Do not fill it.

- One primary idea per viewport. A section may scroll taller than the screen only when the idea needs a sequence (a story, a demo, a form).
- Desktop section padding is large: about `7rem` to `10rem` vertical. Mobile stays generous: about `4.5rem` to `6rem`. Do not tighten a section so the next one peeks in.
- Page gutters stay wide. Content width stays near `--max` (`72rem`) for reading. Media may go full-bleed.
- Headlines get room. Do not wrap a display line just to sit beside a card.
- Group related items tightly and separate groups with space. Do not use equal gaps for everything.

## Type

Typography is the interface.

- Display headings are large. Hero type targets roughly 48–96px on wide screens (`clamp`, so it scales down cleanly on small screens). Do not cap a hero under ~48px on desktop to fit more copy. Cut the copy.
- Display weight is light to medium: 500–600. Do not set big type in bold.
- Display sizes use negative letter-spacing (about `-0.03em` to `-0.045em`) and tight line-height (about `1.02`–`1.08`).
- Body stays Inter, about `17px`, line-height about `1.6`, measure under ~66 characters. Muted color is `--text-muted`. Do not gray out the headline.
- Hierarchy is obvious at a glance: one display line, one short supporting sentence, one action. Eyebrows are rare, mono, small, and uppercase. Do not put an eyebrow on every section.
- Do not add font families. Inter, Space Grotesk, and JetBrains Mono are the system.

Use the shared classes in `app/globals.css` (`.h1`, `.h2`, `.h3`, `.lead`, `.eyebrow`, `.btn`, `.container`, `.section`). Extend those tokens when the scale is short. Do not invent one-off font sizes inside a module unless the section treatment truly requires it.

## Color

- Canvas is neutral: white, warm off-white (`--paper`), or near-black (`--void`). Let the theme toggle keep working. Do not hard-code a light-only or dark-only page.
- One strong accent. Use it for the primary action, focus, and rare emphasis. Do not paint headings, cards, and icons in accent “for consistency.”
- Photography and product UI carry the color. If a section has no real image, it stays neutral.
- A Stripe-like gradient or mesh is allowed once, behind a real product or code surface, at low contrast. It is not a background pattern for marketing sections.
- Text contrast stays at least WCAG AA. Primary button labels stay `--primary-fg`. Do not lighten the accent fill in dark mode.

## Imagery

Product and mission visuals are the hero.

- Prefer full-bleed or dominant photography and video of real work: software, operations, the U.S. team, the product surface.
- Existing landing stills live in `public/landing/`. Brand marks live in `public/brand/`. Use them. Do not generate decorative stand-ins.
- No generic stock, no abstract 3D, no illustrated metaphors, no icon-only feature sections.
- Images have real `alt` text, explicit width and height, and `object-fit` that does not crop off the subject. The hero image uses high fetch priority.
- If a truthful image does not exist, use type and space. Do not fake the visual.

## Chrome

Navigation is secondary to the content.

- The bar stays thin, quiet, and out of the way: wordmark, few links, one action. Do not add a mega-menu, search, icon rail, or announcement banner.
- On Tesla-like heroes, the nav may sit over the image. It must remain readable and must not compete with the headline.
- The footer carries legal, contact, and wayfinding. It is not a second homepage.

## Motion

Motion is subtle and purposeful. Performance comes first.

- Allowed: short opacity or transform fades (about 150–250ms), a calm scroll change that reveals the next idea, a restrained hover on a real control.
- Not allowed: parallax theaters, looping background video with no product purpose, scroll-jacking, bouncing icons, shimmer skeletons as decoration, or animation on every element.
- Respect `prefers-reduced-motion`. Keep `scroll-behavior` and any new motion behind that media query, as `globals.css` already does for smooth scroll.
- Do not add a motion library for a fade.

## Section rhythm

Adjacent sections must not feel the same. Vary the treatment on purpose. A page might move through:

1. Full-viewport image with one headline and one action.
2. A quiet type-only statement on the neutral canvas.
3. An asymmetric split: copy on one side, product image or code on the other.
4. A dark technical band with operational imagery.
5. A single restrained product or code demo.
6. A closing line and one action.

Do not stack identical card grids. Do not alternate “heading plus three cards” down the page. If two sections share a layout, redesign one of them.

## Mobile

The same rules hold on a phone. They get stricter.

- One column. Display type scales down with `clamp` but stays the loudest thing on the screen.
- Full-bleed images stay full-bleed. Do not shrink the hero into a thumbnail above a wall of text.
- Tap targets stay at least 44px. The primary action is obvious without hovering.
- Gutters stay at least `1.25rem`. Section padding stays large. Do not collapse the vertical rhythm to “fit more on the first screen.”
- No horizontal scroll from fixed widths, negative margins, or unbroken strings.
- Check both a narrow viewport and a wide one before finishing any visual change.

## Implementation

- Style new UI in a CSS Module next to the component, using the global tokens (`var(--bg)`, `var(--text)`, `var(--accent)`, `var(--font-display)`, `var(--max)`).
- Change shared type, color, or controls in `app/globals.css` so every page inherits them.
- Keep pages in `app/` thin. Put reusable structure in `components/`.
- Write semantic HTML: one `h1`, landmarks, real buttons for actions, links for navigation. Decorative marks are `aria-hidden`.
- Forms stay email-only and keep the existing mail API / mailto fallback in `lib/mailApi.ts`. Do not add a phone field.
- After a visual change, verify the page in a browser: exercise the control, check every route that shares the component, and look at desktop and mobile. Confirm light and dark theme.

## Before you finish a visual change

- Something was removed, not only added.
- The section has one idea and one primary action.
- Display type is large, medium weight, and tightly tracked.
- The canvas is neutral and the accent appears only where it acts.
- The image is real, or the section is type and space.
- The next section uses a different layout.
- Motion is short, and reduced-motion still works.
- The layout holds at a narrow width and a wide one.
