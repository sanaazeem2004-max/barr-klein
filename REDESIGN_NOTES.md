# Barr & Klein Homepage Redesign: Audit, Design Direction & QA

## 1. Audit of barrklein.com (verified with Playwright, Chrome, 1440 / 768 / 390px)

Screenshots: `audit/before-*.png`

| # | Finding | Evidence |
|---|---------|----------|
| 1 | **No real headline.** The hero message is a five-line all-caps paragraph in an `<h2>` at 23px (18px on mobile). The page has no `<h1>`. | DOM heading scan |
| 2 | **Practice areas are not clickable.** The four practice icons/titles on the homepage have no links. | `h4.closest('a')` is false for all four |
| 3 | **Practice titles are tiny:** 13px uppercase at desktop. | computed styles |
| 4 | **One CTA in the hero** ("Learn More"), and it goes only to Free Speech. There is no contact path above the fold. | link scan |
| 5 | **Justified body text** (6 paragraphs) leaves large word gaps on mobile ("nonprofit &nbsp;&nbsp; compliance"). | `text-align: justify` count + mobile screenshot |
| 6 | **Weak About section:** a wall of centered-width text on a busy marble texture, with the bar-licensing notice in italics inside the marketing copy. | screenshot |
| 7 | **No attorney presence on the homepage:** no photos, names only in the footer. | screenshot |
| 8 | **Contact CTA band** is a single line on a flat terracotta strip. | screenshot |
| 9 | **Mobile:** the four practice items stack with large empty gaps (≈3,600px page height), and the hero image is cropped to a thin strip. | 390px screenshot |
| 10 | **Small tap targets:** footer phone and email links are under 24px tall. | bounding-box scan |
| 11 | Small type in places: 7 text elements under 14px at desktop. | computed styles |

Not counted as bugs: practice icons and the footer logo lazy-load. They appear empty in a full-page capture but do render on scroll (verified).

## 2. Design direction (from the reference image)
- **Palette:** near-black charcoal (`#121110`–`#262320`), bronze/gold accent (`#c49a5c`), parchment text, and a warm copper glow at section edges (as in the reference's right-edge gradient).
- **Type:** Cormorant Garamond for display (bronze italic emphasis) and Manrope for UI/body.
- **Imagery:** a bronze Lady Justice hero (the same motif as the reference), the firm's own Supreme Court photo framed with **gold corner brackets** (from the reference's team photo), and a blurred statue backdrop behind numbered cards (from the reference's middle band).
- **Components:** numbered `01–05` cards, eyebrow labels with rule lines, square-edged bronze buttons.

## 3. Improvements made
1. A real `<h1>`, "Defending Your Rights. Protecting Your Freedom.", with two CTAs and a credential strip (30+ years · State & Federal · U.S. Supreme Court bar).
2. A sticky navbar that turns from transparent to blurred dark on scroll, with a bronze Contact CTA and a full-screen numbered mobile menu (Esc closes; scroll lock).
3. Practice areas are now **linked image cards** to each real practice page, with icon, description and hover reveal.
4. An editorial About section: a framed photo, a "30+" badge, the pull quote, and four expertise pillars.
5. **New attorney profiles** with real photos, bios, highlights, admissions, and click-to-call/email (all facts from barrklein.com/attorney-profiles).
6. A "Why Barr & Klein" section with five numbered cards over an atmospheric statue backdrop.
7. A contact section ("Your Rights Come First.") with both attorneys' direct phone, email and office.
8. The footer has the nav, practice links, both DC offices, phones and emails, the Disclaimer link, and the **Rule 49 licensing notice kept verbatim**.
9. Left-aligned text (no justified rivers), body text 15–18px, and footer links padded for tapping.
10. Accessibility: skip link, landmarks, `aria-expanded` menu, alt text, focus rings, and `prefers-reduced-motion` respected.

## 4. Playwright results (final run, `screenshots/playwright-report.json`)
| Check | 1440 | 768 | 390 |
|---|---|---|---|
| Horizontal overflow | none | none | none |
| Images loaded | 12/12 | 12/12 | 12/12 |
| Console errors | 0 | 0 | 0 |
| Failed requests | 0 | 0 | 0 |
| Nav links → sections | 4/4 OK | menu OK | menu OK |
| Hero CTAs | 2/2 OK | – | – |
| External links (7) | all HTTP 200 | | |
