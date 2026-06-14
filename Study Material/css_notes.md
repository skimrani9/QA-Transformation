# Complete CSS Study Guide — Beginner to Professional

A progressive, hands-on reference covering every major CSS property, selector, and concept with syntax, explanations, and working examples.

---

## 1. Introduction to CSS

CSS (Cascading Style Sheets) is the language used to **style** HTML. While HTML defines structure and content, CSS controls colors, layout, typography, spacing, animations, and responsive behavior.

### What is CSS and How It Works with HTML

Browsers load HTML first, build the DOM, then apply CSS rules to matching elements. CSS does not change HTML structure — it changes how elements **look** and **behave** visually.

```
HTML (structure) + CSS (presentation) + JavaScript (behavior) = Web Page
```

### Three Ways to Apply CSS

#### 1. Inline CSS

**Syntax:** `style="property: value;"` on an HTML element.

```html
<!-- Inline: styles apply only to this one element -->
<p style="color: navy; font-size: 18px;">This paragraph is styled inline.</p>
```

**Visual result:** Navy blue text at 18px. Quick for demos, but hard to maintain at scale.

#### 2. Internal CSS (`<style>`)

**Syntax:** CSS inside a `<style>` block in the HTML `<head>`.

```html
<head>
  <style>
    /* Internal stylesheet: applies to this page only */
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }
    h1 {
      color: #2c3e50;
    }
  </style>
</head>
```

**Visual result:** Entire page uses Arial on a light gray background; headings are dark blue-gray.

#### 3. External CSS (`<link>`) — Recommended

**Syntax:**

```html
<link rel="stylesheet" href="styles.css">
```

```css
/* styles.css */
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #333;
}
```

**Visual result:** Same as internal CSS, but styles are reusable across many pages.

---

### CSS Syntax

**Syntax:** `selector { property: value; }`

```css
/* Selector targets all <p> elements */
p {
  color: #444;        /* Text color */
  margin-bottom: 1rem; /* Space below paragraph */
}
```

| Part | Role |
|------|------|
| **Selector** | Which elements to style |
| **Property** | What to change (color, margin, etc.) |
| **Value** | How to change it |
| **Declaration** | One `property: value` pair |
| **Rule** | Selector + block of declarations |

---

### CSS Comments

**Syntax:** `/* comment */`

```css
/* This is a single-line or multi-line comment */
h1 {
  color: red; /* Comments can sit on the same line */
}
```

---

### How the Browser Renders CSS (The Cascade)

When multiple rules target the same element, the browser resolves conflicts using:

1. **Origin** — Author (your CSS) vs User vs Browser defaults
2. **Importance** — `!important` overrides normal rules
3. **Specificity** — More specific selectors win
4. **Source order** — Later rules win if specificity is equal

```css
p { color: blue; }    /* Loses: less specific, earlier */
.text { color: green; } /* Wins if element has class="text" */
```

**Visual result:** Paragraph with `class="text"` shows green text, not blue.

---

## 2. Selectors (Complete Coverage)

Selectors tell CSS **which elements** to style. Mastering selectors is essential for precise, maintainable stylesheets.

### Basic Selectors

| Selector | Syntax | Targets |
|----------|--------|---------|
| Universal | `*` | Every element |
| Type | `div`, `p`, `h1` | All elements of that tag |
| Class | `.classname` | Elements with `class="classname"` |
| ID | `#idname` | Element with `id="idname"` (one per page) |

```css
/* Universal: reset all margins (use carefully) */
* {
  margin: 0;
  padding: 0;
}

/* Type: all paragraphs */
p {
  line-height: 1.6;
}

/* Class: reusable style */
.btn {
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
}

/* ID: unique element */
#header {
  background: #2c3e50;
  color: white;
  padding: 20px;
}
```

**Visual result:** Zeroed margins globally; blue rounded buttons; dark header bar at top.

---

### Grouping Selector

**Syntax:** `selector1, selector2, selector3 { }`

```css
/* Apply same styles to headings and paragraphs */
h1, h2, h3, p {
  font-family: Georgia, serif;
}
```

---

### Combinator Selectors

| Combinator | Syntax | Meaning |
|------------|--------|---------|
| Descendant | `A B` | B anywhere inside A |
| Child | `A > B` | B direct child of A |
| Adjacent Sibling | `A + B` | B immediately after A |
| General Sibling | `A ~ B` | All B siblings after A |

```css
/* Descendant: links inside nav, any depth */
nav a {
  color: white;
  text-decoration: none;
}

/* Child: only direct <li> children of <ul> */
ul > li {
  list-style: disc;
}

/* Adjacent: paragraph right after h2 */
h2 + p {
  font-size: 1.1rem;
  color: #555;
}

/* General sibling: all <p> after h2 in same parent */
h2 ~ p {
  margin-top: 0.5rem;
}
```

---

### Attribute Selectors

| Selector | Syntax | Matches |
|----------|--------|---------|
| Has attribute | `[attr]` | Element with attribute |
| Exact value | `[attr="value"]` | Exact match |
| Starts with | `[attr^="value"]` | Value starts with |
| Ends with | `[attr$="value"]` | Value ends with |
| Contains | `[attr*="value"]` | Value contains substring |

```css
/* All inputs with a type attribute */
input[type] {
  border: 1px solid #ccc;
}

/* Text inputs only */
input[type="text"] {
  padding: 8px;
}

/* Links to external HTTPS sites */
a[href^="https"] {
  color: green;
}

/* PDF download links */
a[href$=".pdf"] {
  color: red;
}

/* Links containing "docs" */
a[href*="docs"] {
  text-decoration: underline;
}
```

---

### Pseudo-Classes

Pseudo-classes style elements in a **specific state**.

| Pseudo-class | Syntax | When it applies |
|--------------|--------|-----------------|
| Hover | `:hover` | Mouse over element |
| Focus | `:focus` | Element has keyboard focus |
| Active | `:active` | Being clicked |
| Visited | `:visited` | Link already visited |
| nth-child | `:nth-child(n)` | nth child of parent |
| nth-of-type | `:nth-of-type(n)` | nth of its type |
| first-child | `:first-child` | First child |
| last-child | `:last-child` | Last child |
| only-child | `:only-child` | Only child |
| not | `:not(selector)` | Does NOT match |
| checked | `:checked` | Checked checkbox/radio |
| disabled | `:disabled` | Disabled form control |
| enabled | `:enabled` | Enabled form control |
| empty | `:empty` | No children/text |
| root | `:root` | Document root (`<html>`) |
| target | `:target` | URL fragment matches id |
| is | `:is(...)` | Matches any in list |
| where | `:where(...)` | Like :is, zero specificity |
| has | `:has(...)` | Parent containing match |

```css
/* Interactive link states */
a:hover { color: orange; }
a:focus { outline: 2px solid #3498db; }
a:active { color: red; }
a:visited { color: purple; }

/* Zebra striping table rows */
tr:nth-child(even) { background: #f9f9f9; }
tr:nth-child(odd) { background: white; }

/* Every 3rd list item */
li:nth-child(3n) { font-weight: bold; }

/* First and last items */
li:first-child { border-top: none; }
li:last-child { border-bottom: none; }

/* Exclude disabled buttons */
button:not(:disabled) { cursor: pointer; }

/* Checked checkbox label */
input:checked + label { font-weight: bold; color: green; }

/* Empty div hidden */
div:empty { display: none; }

/* :root for global variables */
:root {
  --primary: #3498db;
}

/* Highlight targeted section from anchor link */
section:target {
  background: #fffde7;
  border-left: 4px solid #f1c40f;
}

/* Modern grouping with lower specificity */
:is(h1, h2, h3):hover { color: var(--primary); }

/* Parent selector: card containing an image */
.card:has(img) { border: 2px solid #3498db; }
```

**Visual result:** Links change color on hover/visit; table rows alternate gray/white; targeted sections get yellow highlight.

---

### Pseudo-Elements

Pseudo-elements style **specific parts** of an element.

| Pseudo-element | Syntax | Targets |
|----------------|--------|---------|
| Before | `::before` | Inserts content before element |
| After | `::after` | Inserts content after element |
| First line | `::first-line` | First line of text |
| First letter | `::first-letter` | First letter (drop cap) |
| Placeholder | `::placeholder` | Input placeholder text |
| Selection | `::selection` | User-highlighted text |
| Marker | `::marker` | List bullet/number |

```css
/* Decorative quote before blockquote */
blockquote::before {
  content: "\201C"; /* Left double quote */
  font-size: 3rem;
  color: #3498db;
}

/* Required field asterisk */
label.required::after {
  content: " *";
  color: red;
}

/* Drop cap effect */
p::first-letter {
  font-size: 3em;
  float: left;
  line-height: 1;
  margin-right: 8px;
  color: #2c3e50;
}

/* Style placeholder text */
input::placeholder {
  color: #aaa;
  font-style: italic;
}

/* Custom text selection color */
::selection {
  background: #3498db;
  color: white;
}

/* Colored list bullets */
li::marker {
  color: #e74c3c;
  font-weight: bold;
}
```

**Visual result:** Large opening quote on blockquotes; red asterisks on required labels; blue highlighted selected text.

---

### Specificity Rules

Specificity determines which rule wins when conflicts occur.

**Calculation (a, b, c, d):**
- `a` — Inline styles (1000)
- `b` — ID selectors (#id)
- `c` — Classes, attributes, pseudo-classes (.class, [attr], :hover)
- `d` — Type and pseudo-elements (div, ::before)

| Selector | Specificity | Wins against |
|----------|-------------|--------------|
| `p` | (0,0,0,1) | Browser default |
| `.text` | (0,0,1,0) | `p` |
| `#main p` | (0,1,0,1) | `.text` on same element |
| `p.text` | (0,0,1,1) | `.text` alone |
| `style=""` inline | (1,0,0,0) | Almost everything |

```css
p { color: black; }           /* (0,0,0,1) — loses */
.text { color: blue; }       /* (0,0,1,0) — wins over p */
#main .text { color: green; } /* (0,1,1,0) — wins over .text */
```

> **Tip:** Avoid `!important` except as last resort. Prefer better selector structure.

---

## 3. The Box Model

Every HTML element is a rectangular box. The box model defines how size and spacing are calculated.

```
┌──────────── margin ────────────┐
│  ┌──────── border ────────┐   │
│  │  ┌──── padding ────┐   │   │
│  │  │   CONTENT       │   │   │
│  │  └─────────────────┘   │   │
│  └─────────────────────────┘   │
└────────────────────────────────┘
```

### Width and Height

**Syntax:** `width: value;` `height: value;`

```css
.box {
  width: 300px;       /* Content area width */
  height: 200px;      /* Content area height */
  min-width: 200px;   /* Never narrower than 200px */
  max-width: 100%;    /* Never wider than parent */
  min-height: 100px;
  max-height: 400px;
}
```

**Visual result:** A 300×200px box that shrinks on small screens but never exceeds 400px tall.

---

### Padding

**Syntax:** `padding: top right bottom left;` (shorthand)

```css
.card {
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 15px;

  /* Shorthand equivalents: */
  padding: 20px;              /* All sides */
  padding: 20px 15px;         /* top/bottom  left/right */
  padding: 10px 15px 20px;    /* top  left/right  bottom */
  padding: 10px 15px 20px 5px; /* top right bottom left (clockwise) */
}
```

**Visual result:** Content sits 20px from top/bottom edges, 15px from sides — breathing room inside the border.

---

### Margin

**Syntax:** `margin: top right bottom left;`

```css
.section {
  margin: 0 auto;    /* Horizontal centering (needs width) */
  width: 80%;
  max-width: 1200px;
  margin-bottom: 2rem;
}

/* Margin collapse: adjacent vertical margins merge into the larger value */
h1 { margin-bottom: 20px; }
p  { margin-top: 30px; } /* Gap is 30px, not 50px */
```

**Visual result:** Centered content column; collapsed margins between headings and paragraphs.

---

### Border

**Syntax:** `border: width style color;`

```css
.box {
  border-width: 2px;
  border-style: solid;   /* solid | dashed | dotted | double | none */
  border-color: #3498db;

  /* Shorthand */
  border: 2px solid #3498db;

  /* Individual sides */
  border-top: 1px solid red;
  border-radius: 8px;    /* Rounded corners */
  border-radius: 50%;    /* Circle (on square element) */
}
```

**Visual result:** Blue solid border with rounded corners; red line along top edge.

---

### Outline vs Border

| Property | Takes space? | Affects layout? | Use for |
|----------|-------------|-------------------|---------|
| `border` | Yes | Yes | Permanent edges |
| `outline` | No | No | Focus rings, highlights |

```css
button:focus {
  outline: 3px solid #f39c12; /* Does not shift layout */
  outline-offset: 2px;        /* Gap between element and outline */
}
```

---

### box-sizing

**Syntax:** `box-sizing: content-box | border-box;`

```css
*, *::before, *::after {
  box-sizing: border-box; /* width includes padding + border */
}

.box-content {
  box-sizing: content-box; /* Default: width is content only */
  width: 200px;
  padding: 20px; /* Total rendered width = 240px */
}

.box-border {
  box-sizing: border-box;
  width: 200px;
  padding: 20px; /* Total rendered width = 200px */
}
```

> **Best practice:** Set `border-box` globally. It makes sizing predictable.

---

### Overflow

**Syntax:** `overflow: visible | hidden | scroll | auto;`

```css
.clipped {
  width: 200px;
  height: 100px;
  overflow: hidden; /* Crops content beyond box */
}

.scrollable {
  max-height: 300px;
  overflow-y: auto;   /* Vertical scrollbar when needed */
  overflow-x: hidden; /* Hide horizontal overflow */
}
```

**Visual result:** Clipped box cuts off excess text; scrollable box shows scrollbar for long content.

---

## 4. Typography & Text

Typography controls how text looks and reads. Good typography improves usability and brand identity.

### Font Properties

**Syntax:**

```css
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;      /* Base size */
  font-weight: 400;     /* 100–900 or normal/bold */
  font-style: normal;   /* normal | italic | oblique */
  font-variant: normal; /* small-caps etc. */
}
```

### Font Size Units

| Unit | Relative to | Example use |
|------|-------------|-------------|
| `px` | Pixels (absolute) | Fixed UI elements |
| `em` | Parent font size | Component scaling |
| `rem` | Root (`html`) font size | **Preferred** for consistency |
| `%` | Parent font size | Legacy layouts |
| `vw` | Viewport width | Responsive headlines |

```css
html { font-size: 16px; }     /* 1rem = 16px */
h1 { font-size: 2.5rem; }    /* 40px */
.small { font-size: 0.875rem; } /* 14px */
.hero-title { font-size: 5vw; } /* Scales with viewport */
```

### Font Shorthand

**Syntax:** `font: style variant weight size/line-height family;`

```css
h1 {
  font: italic small-caps bold 2rem/1.2 Georgia, serif;
  /* italic | small-caps | bold | 2rem size / 1.2 line-height | Georgia */
}
```

---

### Text Spacing & Layout

```css
p {
  line-height: 1.6;        /* Space between lines (unitless = multiplier) */
  letter-spacing: 0.05em;  /* Space between characters */
  word-spacing: 2px;       /* Space between words */
  text-align: left;        /* left | center | right | justify */
  text-decoration: underline; /* none | underline | line-through */
  text-transform: capitalize; /* uppercase | lowercase | capitalize */
  text-indent: 2em;        /* First line indent */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
```

**Visual result:** Comfortable line spacing; subtle shadow behind headings; capitalized titles.

---

### White Space & Wrapping

```css
.code-block {
  white-space: pre;        /* Preserve spaces and line breaks */
  word-break: break-all;   /* Break long words anywhere */
  overflow-wrap: break-word; /* Break only when necessary */
}
```

---

### @font-face — Custom Fonts

**Syntax:**

```css
@font-face {
  font-family: "MyFont";
  src: url("fonts/MyFont.woff2") format("woff2"),
       url("fonts/MyFont.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Show fallback text while font loads */
}

body {
  font-family: "MyFont", Arial, sans-serif;
}
```

### Google Fonts Integration

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```

```css
body {
  font-family: "Inter", sans-serif;
}
```

### Web Safe Fonts

Always provide fallbacks: `font-family: "Custom Font", Georgia, "Times New Roman", serif;`

| Category | Examples |
|----------|----------|
| Sans-serif | Arial, Helvetica, Verdana, Tahoma |
| Serif | Georgia, Times New Roman |
| Monospace | Courier New, Consolas |

---

## 5. Colors & Backgrounds

CSS offers rich ways to define colors and layer backgrounds.

### Color Formats

| Format | Syntax | Example |
|--------|--------|---------|
| Named | `colorname` | `red`, `navy`, `tomato` |
| Hex | `#RRGGBB` | `#3498db` |
| RGB | `rgb(r, g, b)` | `rgb(52, 152, 219)` |
| RGBA | `rgba(r, g, b, a)` | `rgba(52, 152, 219, 0.5)` |
| HSL | `hsl(h, s%, l%)` | `hsl(204, 70%, 53%)` |
| HSLA | `hsla(h, s%, l%, a)` | `hsla(204, 70%, 53%, 0.8)` |
| OKLCH | `oklch(L C H)` | `oklch(0.65 0.15 240)` — perceptually uniform |

```css
.brand { color: #3498db; }
.overlay { background: rgba(0, 0, 0, 0.6); }
.accent { color: hsl(204, 70%, 53%); }
.modern { color: oklch(0.65 0.15 240); }
```

---

### Background Properties

```css
.hero {
  background-color: #2c3e50;
  background-image: url("hero.jpg");
  background-repeat: no-repeat;    /* repeat | repeat-x | repeat-y | no-repeat */
  background-position: center top;   /* center | top left | 50% 50% */
  background-size: cover;            /* cover | contain | 100% auto */
  background-attachment: fixed;      /* scroll | fixed (parallax effect) */
  background-clip: border-box;       /* border-box | padding-box | content-box */
  background-origin: padding-box;

  /* Shorthand: color image repeat position/size attachment */
  background: #2c3e50 url("hero.jpg") no-repeat center/cover fixed;
}
```

**Visual result:** Full-width hero image covering the section; fixed attachment creates parallax on scroll.

---

### Multiple Backgrounds

```css
.card {
  background:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("photo.jpg") center/cover no-repeat;
}
```

**Visual result:** Dark overlay on top of background image for readable white text.

---

### Opacity & Filter

```css
.faded { opacity: 0.5; } /* Entire element including children */

.filtered {
  filter: blur(2px);
  filter: brightness(1.2);
  filter: contrast(1.5);
  filter: grayscale(100%);
  filter: sepia(50%);
  filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.4));
  /* Combine: */
  filter: brightness(1.1) contrast(1.2) saturate(1.3);
}
```

---

### CSS Gradients

#### linear-gradient()

**Syntax:** `linear-gradient(direction, color-stop1, color-stop2, ...)`

```css
.gradient-bar {
  background: linear-gradient(to right, #3498db, #2ecc71);
}

.gradient-diagonal {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-multi {
  background: linear-gradient(90deg, red, orange, yellow, green, blue);
}
```

**Visual result:** Smooth color transitions — horizontal bar blue-to-green; diagonal purple gradient.

#### radial-gradient()

```css
.spotlight {
  background: radial-gradient(circle at center, #fff 0%, #3498db 100%);
}
```

**Visual result:** White center fading to blue at edges — spotlight effect.

#### conic-gradient()

```css
.color-wheel {
  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
}
```

**Visual result:** Circular rainbow color wheel.

#### Repeating Gradients

```css
.stripes {
  background: repeating-linear-gradient(
    45deg,
    #3498db,
    #3498db 10px,
    #2980b9 10px,
    #2980b9 20px
  );
}
```

**Visual result:** Diagonal blue stripes pattern.

---

## 6. Display & Visibility

Display and visibility control whether and how elements appear in the layout.

### display

**Syntax:** `display: value;`

| Value | Behavior | Visual result |
|-------|----------|---------------|
| `block` | Full width, new line | Stacked vertically |
| `inline` | Flows with text, no width/height | Sits in text line |
| `inline-block` | Inline flow but accepts width/height | Buttons in a row |
| `none` | Removed from layout entirely | Element invisible, no space |
| `contents` | Element box removed, children remain | Wrapper disappears visually |

```css
div { display: block; }        /* Full-width boxes stacked */
span { display: inline; }      /* Flows within text */
.btn { display: inline-block; width: 120px; text-align: center; }
.hidden { display: none; }      /* Completely hidden, no space taken */
.wrapper { display: contents; } /* Only children are rendered */
```

---

### visibility

**Syntax:** `visibility: visible | hidden;`

```css
.invisible {
  visibility: hidden; /* Hidden but still takes up space */
}
```

**Difference:** `display: none` removes from layout; `visibility: hidden` keeps the space.

---

### pointer-events

**Syntax:** `pointer-events: auto | none;`

```css
.overlay-disabled {
  pointer-events: none; /* Clicks pass through to elements below */
}
```

**Visual result:** Transparent overlay that doesn't block mouse clicks.

---

## 7. Flexbox (Complete)

Flexbox is a one-dimensional layout system — perfect for navbars, card rows, and centering content along a single axis.

### Flex Container Setup

**Syntax:** `display: flex;`

```css
.container {
  display: flex; /* Children become flex items in a row by default */
}
```

**Visual result:** Children sit in a horizontal row instead of stacking vertically.

---

### Container Properties

| Property | Values | Effect |
|----------|--------|--------|
| `flex-direction` | `row`, `row-reverse`, `column`, `column-reverse` | Main axis direction |
| `flex-wrap` | `nowrap`, `wrap`, `wrap-reverse` | Allow wrapping |
| `flex-flow` | `direction wrap` | Shorthand for above two |
| `justify-content` | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | Align along main axis |
| `align-items` | `stretch`, `flex-start`, `center`, `flex-end`, `baseline` | Align along cross axis |
| `align-content` | Same as justify-content | Multi-line cross-axis alignment |
| `gap` | `length` | Space between items |
| `row-gap` | `length` | Row gap |
| `column-gap` | `length` | Column gap |

```css
.navbar {
  display: flex;
  flex-direction: row;        /* Horizontal (default) */
  flex-wrap: wrap;            /* Wrap on small screens */
  justify-content: space-between; /* Logo left, links right */
  align-items: center;          /* Vertically center items */
  gap: 1rem;                    /* 1rem between flex items */
  padding: 1rem 2rem;
  background: #2c3e50;
}
```

---

### Item Properties

| Property | Values | Effect |
|----------|--------|--------|
| `flex-grow` | number | How much item grows |
| `flex-shrink` | number | How much item shrinks |
| `flex-basis` | length/% | Initial size before grow/shrink |
| `flex` | `grow shrink basis` | Shorthand |
| `align-self` | align-items values | Override align-items for one item |
| `order` | integer | Visual order (not DOM order) |

```css
.sidebar { flex: 0 0 250px; }    /* Fixed 250px, no grow/shrink */
.main { flex: 1; }                  /* Takes remaining space */
.footer-item { align-self: flex-end; }
.mobile-first { order: -1; }        /* Appears first visually */
```

---

### Real-World Flexbox Layouts

#### Navbar

```css
.nav { display: flex; justify-content: space-between; align-items: center; }
.nav-links { display: flex; gap: 1.5rem; list-style: none; }
```

**Visual result:** Logo on left, horizontal nav links on right, vertically centered.

#### Card Row

```css
.card-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.card {
  flex: 1 1 280px; /* Grow, shrink, min 280px basis */
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
```

**Visual result:** Responsive row of cards that wrap to new lines on narrow screens.

#### Centered Element

```css
.center-wrapper {
  display: flex;
  justify-content: center; /* Horizontal center */
  align-items: center;     /* Vertical center */
  min-height: 100vh;
}
```

**Visual result:** Child element perfectly centered in viewport.

#### Sidebar Layout

```css
.layout {
  display: flex;
  min-height: 100vh;
}
.sidebar { flex: 0 0 250px; background: #ecf0f1; }
.content { flex: 1; padding: 2rem; }
```

**Visual result:** Fixed 250px sidebar on left; main content fills remaining width.

---

## 8. CSS Grid (Complete)

CSS Grid is a two-dimensional layout system — ideal for full page layouts, card grids, and complex designs.

### Grid Container

**Syntax:** `display: grid;`

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three equal columns */
  grid-template-rows: auto 1fr auto;  /* Header, content, footer */
  gap: 20px;
}
```

---

### Container Properties

| Property | Syntax | Purpose |
|----------|--------|---------|
| `grid-template-columns` | track sizes | Define columns |
| `grid-template-rows` | track sizes | Define rows |
| `grid-template-areas` | named areas | Visual layout map |
| `grid-template` | rows / columns / areas | Shorthand |
| `gap` | row-gap column-gap | Space between cells |

```css
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
  gap: 0;
}

header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }
```

**Visual result:** Classic layout — header spans full width, sidebar left, main content right, footer full width.

---

### fr, repeat(), minmax(), auto-fill, auto-fit

```css
/* fr unit: fraction of available space */
.grid-3 { grid-template-columns: 1fr 1fr 1fr; }

/* repeat() shorthand */
.grid-12 { grid-template-columns: repeat(12, 1fr); }

/* minmax(): responsive tracks */
.cards {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* auto-fit: collapses empty tracks */
.gallery {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

**Visual result:** Card grid that automatically adds/removes columns based on screen width.

---

### Item Properties

```css
.item-wide {
  grid-column: 1 / 3;    /* Span columns 1 to 3 */
  grid-row: 2 / 4;       /* Span rows 2 to 4 */
  grid-area: sidebar;    /* Named area */
  justify-self: center;  /* Horizontal within cell */
  align-self: start;   /* Vertical within cell */
}
```

---

### Implicit vs Explicit Grid

```css
.grid {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);  /* Implicit row height */
  grid-auto-columns: 200px;
  grid-auto-flow: row dense; /* Fill gaps with smaller items */
}
```

---

### Real-World Grid Layouts

#### Full Page Layout

```css
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

#### Responsive Card Grid

```css
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}
```

#### Magazine Layout

```css
.magazine {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
}
.featured { grid-column: 1; grid-row: 1 / 3; }
```

**Visual result:** Large featured article on left spanning two rows; smaller articles on right.

---

## 9. Positioning

Positioning removes elements from normal document flow and places them precisely.

### position Values

| Value | Behavior |
|-------|----------|
| `static` | Default — normal flow |
| `relative` | Offset from normal position; space preserved |
| `absolute` | Removed from flow; positioned relative to nearest positioned ancestor |
| `fixed` | Removed from flow; positioned relative to viewport |
| `sticky` | Hybrid: relative until scroll threshold, then fixed |

### Offset Properties

**Syntax:** `top`, `right`, `bottom`, `left`

```css
.relative-box {
  position: relative;
  top: 10px;    /* Pushed 10px down from normal spot */
  left: 20px;   /* Pushed 20px right */
}

.absolute-box {
  position: absolute;
  top: 0;
  right: 0;     /* Anchored to top-right of positioned parent */
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.sticky-nav {
  position: sticky;
  top: 0;       /* Sticks when scrolling reaches top */
  z-index: 100;
}
```

---

### z-index and Stacking Contexts

**Syntax:** `z-index: integer;` (only works on positioned elements)

```css
.modal-overlay { position: fixed; z-index: 1000; }
.modal-content { position: fixed; z-index: 1001; }
.tooltip { position: absolute; z-index: 50; }
```

Higher `z-index` appears on top. New stacking contexts are created by `position` + `z-index`, `opacity < 1`, `transform`, `filter`, etc.

---

### Practical Positioning Examples

#### Sticky Navbar

```css
.navbar {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 100;
}
```

**Visual result:** Navbar scrolls with page, then sticks to top.

#### Modal Overlay

```css
.modal-overlay {
  position: fixed;
  inset: 0; /* top/right/bottom/left: 0 */
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
}
```

**Visual result:** Dark semi-transparent overlay with centered white dialog box.

#### Tooltip

```css
.tooltip-parent { position: relative; }
.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
}
```

**Visual result:** Small dark label appears above element on hover.

#### Floating Action Button

```css
.fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #3498db;
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
```

**Visual result:** Circular blue button fixed at bottom-right corner.

---

## 10. Transitions & Animations

Transitions and animations bring interfaces to life with smooth visual changes.

### CSS Transitions

**Syntax:** `transition: property duration timing-function delay;`

| Property | Values |
|----------|--------|
| `transition-property` | `all`, `none`, or specific property |
| `transition-duration` | `0.3s`, `500ms` |
| `transition-timing-function` | `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier()` |
| `transition-delay` | `0s`, `0.2s` |

```css
.button {
  background: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.button:hover {
  background: #2980b9;
  transform: translateY(-2px);
}
```

**Visual result:** Button smoothly darkens and lifts slightly on hover.

---

### @keyframes

**Syntax:**

```css
@keyframes animation-name {
  from { /* start state */ }
  to   { /* end state */ }
  /* OR percentage keyframes: */
  0%   { }
  50%  { }
  100% { }
}
```

---

### animation Property

**Syntax:** `animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

| Sub-property | Values |
|--------------|--------|
| `animation-name` | keyframes name |
| `animation-duration` | `1s`, `2s` |
| `animation-timing-function` | `ease`, `linear`, etc. |
| `animation-delay` | `0s` |
| `animation-iteration-count` | `1`, `infinite` |
| `animation-direction` | `normal`, `reverse`, `alternate` |
| `animation-fill-mode` | `none`, `forwards`, `backwards`, `both` |
| `animation-play-state` | `running`, `paused` |

```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-in { animation: fadeIn 0.6s ease forwards; }

/* Slide in from left */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
}
.slide-in { animation: slideIn 0.5s ease-out; }

/* Spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  width: 40px; height: 40px;
  border: 4px solid #eee;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* Pulse */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.05); }
}
.pulse { animation: pulse 2s ease-in-out infinite; }

/* Bounce */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-20px); }
}
.bounce { animation: bounce 1s ease infinite; }
```

**Visual result:** Elements fade/slide in on load; spinner rotates continuously; buttons pulse or bounce for attention.

---

## 11. Transforms

Transforms modify an element's appearance — move, rotate, scale, or skew — without affecting document flow.

### 2D Transforms

**Syntax:** `transform: function(values);`

| Function | Syntax | Effect |
|----------|--------|--------|
| `translate()` | `translate(x, y)` | Move element |
| `rotate()` | `rotate(angle)` | Rotate clockwise |
| `scale()` | `scale(x, y)` | Resize |
| `skew()` | `skew(x, y)` | Slant |
| `matrix()` | `matrix(a,b,c,d,e,f)` | Combined 2D transform |

```css
.moved   { transform: translate(50px, 20px); }
.rotated { transform: rotate(45deg); }
.scaled  { transform: scale(1.5); }
.skewed  { transform: skew(10deg, 5deg); }
.combined { transform: translateX(10px) rotate(15deg) scale(1.1); }
```

**Visual result:** Elements shift, spin, grow, or slant visually while keeping their original layout space.

---

### 3D Transforms

```css
.card-3d {
  perspective: 1000px; /* Depth on parent */
}

.cube-face {
  transform: translateZ(50px);
  transform: rotateX(45deg);
  transform: rotateY(45deg);
  transform: rotateZ(90deg);
}

.preserve {
  transform-style: preserve-3d; /* Children exist in 3D space */
}

.back-hidden {
  backface-visibility: hidden; /* Hide reverse side when flipped */
}
```

---

### transform-origin

**Syntax:** `transform-origin: x y z;`

```css
.door {
  transform-origin: left center; /* Hinge on left edge */
  transition: transform 0.6s;
}
.door:hover { transform: rotateY(-30deg); }
```

**Visual result:** Element rotates around left edge like a door opening.

---

### Practical Transform Examples

#### Flip Card

```css
.flip-card {
  perspective: 1000px;
  width: 300px;
  height: 200px;
}
.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-inner { transform: rotateY(180deg); }
.flip-front, .flip-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flip-back { transform: rotateY(180deg); background: #3498db; color: white; }
```

**Visual result:** Card flips to reveal blue back side on hover.

#### Hover Lift Effect

```css
.lift-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.lift-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}
```

**Visual result:** Card rises and casts deeper shadow on hover.

---

## 12. Responsive Design

Responsive design ensures websites look great on all screen sizes — from phones to large desktops.

### @media Queries

**Syntax:** `@media (condition) { /* CSS rules */ }`

```css
/* Mobile-first: base styles for small screens */
.container { padding: 1rem; }

/* Tablet and up */
@media (min-width: 768px) {
  .container { padding: 2rem; max-width: 960px; margin: 0 auto; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 1200px; }
}

/* Large desktop */
@media (min-width: 1280px) {
  .container { max-width: 1400px; }
}

/* Orientation */
@media (orientation: landscape) {
  .hero { min-height: 60vh; }
}

/* Dark mode preference */
@media (prefers-color-scheme: dark) {
  body { background: #1a1a2e; color: #eee; }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Mobile-First vs Desktop-First

| Approach | Strategy | Example |
|----------|----------|---------|
| **Mobile-first** | Base = mobile; `min-width` adds complexity | `@media (min-width: 768px)` |
| **Desktop-first** | Base = desktop; `max-width` simplifies | `@media (max-width: 767px)` |

> **Recommended:** Mobile-first — faster on phones, progressive enhancement.

### Common Breakpoints

| Breakpoint | Target |
|------------|--------|
| 320px | Small phones |
| 480px | Large phones |
| 768px | Tablets |
| 1024px | Laptops |
| 1280px | Desktops |

---

### Responsive Units

| Unit | Meaning |
|------|---------|
| `vw` | 1% of viewport width |
| `vh` | 1% of viewport height |
| `vmin` | 1% of smaller viewport dimension |
| `vmax` | 1% of larger viewport dimension |
| `svh` | Small viewport height (mobile browser UI) |
| `dvh` | Dynamic viewport height (adjusts as UI shows/hides) |

```css
.hero-title { font-size: 8vw; }
.full-screen { min-height: 100dvh; }
```

---

### clamp(), min(), max()

```css
/* Fluid typography: min 1rem, preferred 2.5vw, max 3rem */
h1 { font-size: clamp(1.5rem, 2.5vw, 3rem); }

/* Responsive padding */
.section { padding: clamp(1rem, 5vw, 4rem); }

/* Width constraints */
.card { width: min(100%, 400px); }
```

**Visual result:** Text scales smoothly between screen sizes without media queries.

---

### Container Queries

**Syntax:** `@container (min-width: 400px) { }`

```css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card { display: flex; flex-direction: row; }
}
```

**Visual result:** Card layout changes based on its **container** width, not viewport — ideal for components.

---

## 13. CSS Variables (Custom Properties)

CSS variables let you define reusable values and create dynamic themes.

### Declaring and Using

**Syntax:**

```css
/* Declare */
--variable-name: value;

/* Use */
property: var(--variable-name, fallback-value);
```

```css
:root {
  --color-primary: #3498db;
  --color-text: #333;
  --spacing-md: 1.5rem;
  --font-main: "Inter", sans-serif;
  --border-radius: 8px;
}

.button {
  background: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  font-family: var(--font-main);
  color: var(--color-on-primary, white); /* Fallback if not defined */
}
```

---

### Scope: Global vs Local

```css
:root {
  --accent: blue; /* Global — available everywhere */
}

.sidebar {
  --accent: green; /* Local — overrides inside .sidebar only */
}
.sidebar .link { color: var(--accent); } /* Green */
.main .link { color: var(--accent); }    /* Blue */
```

---

### Light/Dark Mode Theming

```css
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
  --card-bg: #f5f5f5;
}

[data-theme="dark"] {
  --bg: #1a1a2e;
  --text: #eeeeee;
  --card-bg: #16213e;
}

body {
  background: var(--bg);
  color: var(--text);
  transition: background 0.3s, color 0.3s;
}

.card { background: var(--card-bg); }
```

**Visual result:** Entire page switches between light and dark by toggling one attribute.

---

### Updating Variables with JavaScript

```javascript
// Set theme
document.documentElement.setAttribute('data-theme', 'dark');

// Change individual variable
document.documentElement.style.setProperty('--color-primary', '#e74c3c');

// Read variable
const primary = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-primary');
```

---

## 14. CSS Functions

CSS includes built-in functions for calculations, colors, and dynamic values.

### calc(), min(), max(), clamp()

```css
.sidebar-layout {
  width: calc(100% - 250px); /* Parent minus sidebar */
  padding: calc(1rem + 2vw);
}

.responsive-box {
  width: min(90vw, 600px);
  height: max(200px, 30vh);
  font-size: clamp(14px, 2vw, 20px);
}
```

---

### var() and env()

```css
.safe-area {
  padding-bottom: env(safe-area-inset-bottom); /* iPhone notch/home bar */
  padding-left: env(safe-area-inset-left);
}

.header {
  height: calc(60px + env(safe-area-inset-top));
}
```

---

### Color Functions

```css
.semi-transparent { color: rgb(52 152 219 / 0.5); }    /* Modern syntax */
.hsl-color { background: hsl(204 70% 53%); }
.modern-color { color: oklch(0.65 0.15 240); }
```

---

### url() and format()

```css
@font-face {
  font-family: "Custom";
  src: url("font.woff2") format("woff2");
}
.hero { background-image: url("images/hero.webp"); }
```

---

### counter() and counters()

```css
body { counter-reset: section; }

h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}

ol.nested {
  counter-reset: item;
}
ol.nested li::before {
  counter-increment: item;
  content: counters(item, ".") ". ";
}
```

**Visual result:** Headings auto-numbered "Section 1:", "Section 2:"; nested lists show "1.1.", "1.2."

---

### attr()

```css
[data-tooltip] {
  position: relative;
}
[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  background: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}
```

**Visual result:** Tooltip text pulled from HTML `data-tooltip` attribute.

---

## 15. Advanced Selectors & At-Rules

Advanced at-rules manage imports, feature detection, cascade layers, and print styles.

### @import

**Syntax:** `@import url("file.css");`

```css
/* Must be at top of stylesheet, before other rules */
@import url("reset.css");
@import url("typography.css");
@import url("components.css");
```

---

### @charset

**Syntax:** `@charset "UTF-8";`

```css
@charset "UTF-8"; /* Must be first line — defines character encoding */
```

---

### @supports — Feature Queries

**Syntax:** `@supports (property: value) { }`

```css
@supports (display: grid) {
  .layout { display: grid; }
}

@supports not (display: grid) {
  .layout { display: flex; flex-wrap: wrap; }
}

@supports (backdrop-filter: blur(10px)) {
  .glass { backdrop-filter: blur(10px); background: rgba(255,255,255,0.2); }
}
```

**Visual result:** Modern layouts only applied when browser supports them; fallbacks for older browsers.

---

### @layer — Cascade Layers

**Syntax:** `@layer layer-name;`

```css
@layer reset, base, components, utilities;

@layer reset {
  * { margin: 0; padding: 0; }
}

@layer base {
  body { font-family: sans-serif; }
}

@layer components {
  .btn { padding: 10px 20px; }
}

@layer utilities {
  .text-center { text-align: center; }
}
```

Layers control cascade order regardless of specificity — `utilities` always wins over `components`.

---

### @scope

**Syntax:** `@scope (scope-selector) to (limit-selector) { }`

```css
@scope (.card) to (.card-content) {
  a { color: blue; } /* Only links inside .card but not inside .card-content */
}
```

---

### @counter-style

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D" "\1F44E"; /* 👍 👎 */
  suffix: " ";
}

ul.rating { list-style: thumbs; }
```

---

### @page and Print Styles

```css
@media print {
  body { font-size: 12pt; color: black; background: white; }
  .no-print { display: none !important; }
  a[href]::after { content: " (" attr(href) ")"; }
}

@page {
  margin: 2cm;
  size: A4;
}
@page :first {
  margin-top: 4cm; /* Extra top margin on first page */
}
```

**Visual result:** Clean black-on-white printout; navigation hidden; link URLs shown in parentheses.

---

## 16. Shadows, Borders & Decorative Effects

These properties add depth, shape, and visual polish to elements.

### box-shadow

**Syntax:** `box-shadow: offset-x offset-y blur spread color inset;`

```css
/* Single shadow */
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Multiple shadows */
.elevated {
  box-shadow:
    0 2px 4px rgba(0,0,0,0.1),
    0 8px 16px rgba(0,0,0,0.1);
}

/* Inset shadow (inner) */
.inset-box {
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}

/* Glow effect */
.glow {
  box-shadow: 0 0 20px rgba(52, 152, 219, 0.6);
}
```

**Visual result:** Cards appear to float above the page with soft shadows; inset boxes look pressed inward.

---

### text-shadow

**Syntax:** `text-shadow: offset-x offset-y blur color;`

```css
h1 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.neon {
  color: #fff;
  text-shadow:
    0 0 5px #3498db,
    0 0 10px #3498db,
    0 0 20px #3498db;
}
```

**Visual result:** Headings have subtle depth; neon text glows blue.

---

### border-radius

```css
.rounded { border-radius: 8px; }
.pill { border-radius: 50px; }          /* Pill-shaped button */
.circle { border-radius: 50%; width: 100px; height: 100px; }
.custom {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; /* Organic blob shape */
}
```

**Visual result:** Rounded corners, pill buttons, perfect circles, organic blob shapes.

---

### border-image

**Syntax:** `border-image: source slice / width / outset repeat;`

```css
.fancy-border {
  border: 10px solid transparent;
  border-image: linear-gradient(45deg, #3498db, #e74c3c) 1;
}
```

**Visual result:** Gradient-colored border around element.

---

### clip-path

```css
.circle-clip { clip-path: circle(50%); }
.polygon-clip { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); } /* Diamond */
.ellipse-clip { clip-path: ellipse(40% 50% at 50% 50%); }

/* Animated clip-path */
.reveal {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.5s ease;
}
.reveal:hover { clip-path: inset(0 0 0 0); }
```

**Visual result:** Images clipped to circles, diamonds, or ellipses; content reveals on hover.

---

### shape-outside

```css
.float-image {
  float: left;
  shape-outside: circle(50%);
  width: 200px;
  margin-right: 1rem;
}
```

**Visual result:** Text wraps around circular image contour, not just rectangular box.

---

### mask and mask-image

```css
.faded-image {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}
```

**Visual result:** Image fades to transparent at bottom.

---

## 17. Lists, Tables & Forms Styling

Styling structured content makes data and forms readable and on-brand.

### List Styling

```css
ul {
  list-style-type: disc;       /* disc | circle | square | none */
  list-style-position: outside; /* outside | inside */
  list-style-image: url("bullet.svg");
  list-style: square inside;   /* Shorthand */
}

ol { list-style-type: decimal-leading-zero; } /* 01, 02, 03... */

/* Custom bullets with ::marker */
li::marker {
  color: #e74c3c;
  font-size: 1.2em;
}
```

---

### Table Styling

```css
table {
  border-collapse: collapse;  /* collapse | separate */
  border-spacing: 0;          /* Gap between cells (separate mode) */
  table-layout: fixed;        /* fixed | auto */
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

caption {
  caption-side: top; /* top | bottom */
  font-weight: bold;
  padding: 10px;
}

tr:nth-child(even) { background: #f9f9f9; }
tr:hover { background: #e8f4fc; }
```

**Visual result:** Clean bordered table with alternating row colors and hover highlight.

---

### Form Input Styling

```css
input, textarea, select {
  width: 100%;
  padding: 10px 14px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.25);
}

/* Modern focus ring — only keyboard focus */
input:focus-visible {
  outline: 2px solid #3498db;
  outline-offset: 2px;
}

input:placeholder-shown {
  border-color: #ccc;
}
```

---

### Custom Checkboxes and Radio Buttons

```css
/* Hide default appearance */
.custom-check input[type="checkbox"],
.custom-check input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #3498db;
  border-radius: 4px;
  cursor: pointer;
  vertical-align: middle;
}

.custom-check input[type="radio"] { border-radius: 50%; }

.custom-check input:checked {
  background: #3498db;
  border-color: #3498db;
}

.custom-check input[type="checkbox"]:checked::after {
  content: "\2713"; /* Checkmark */
  color: white;
  display: block;
  text-align: center;
  line-height: 16px;
  font-size: 14px;
}
```

**Visual result:** Branded blue checkboxes and radio buttons replacing browser defaults.

---

### Custom Select

```css
select {
  appearance: none;
  background: white url("chevron-down.svg") no-repeat right 12px center;
  background-size: 12px;
  padding-right: 36px;
}
```

**Visual result:** Dropdown with custom chevron icon, no native OS arrow.

---

## 18. Scroll & Overflow Effects

Modern scroll behavior creates smooth, app-like navigation experiences.

### scroll-behavior

```css
html {
  scroll-behavior: smooth; /* Smooth scrolling for anchor links */
}
```

**Visual result:** Clicking "#section" links animates scroll instead of jumping.

---

### Scroll Snap

```css
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory; /* x | y | both | mandatory | proximity */
  gap: 1rem;
}

.carousel-item {
  flex: 0 0 80%;
  scroll-snap-align: center; /* start | center | end */
  scroll-snap-stop: always;
}
```

**Visual result:** Horizontal carousel snaps each card into center view when scrolling.

---

### overscroll-behavior

```css
.modal-body {
  overflow-y: auto;
  overscroll-behavior: contain; /* Prevents scroll chaining to parent */
}
```

**Visual result:** Scrolling inside modal doesn't scroll the page behind it.

---

### Custom Scrollbar (WebKit)

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
::-webkit-scrollbar-thumb { background: #3498db; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #2980b9; }
```

**Visual result:** Thin blue scrollbar instead of browser default.

---

## 19. CSS Architecture & Best Practices

Professional CSS is organized, performant, and maintainable.

### BEM Naming Methodology

**Block__Element--Modifier**

```css
/* Block */
.card { }

/* Element */
.card__title { }
.card__body { }
.card__footer { }

/* Modifier */
.card--featured { border: 2px solid gold; }
.card__title--large { font-size: 2rem; }
```

```html
<div class="card card--featured">
  <h3 class="card__title card__title--large">Featured</h3>
  <p class="card__body">Content here.</p>
  <div class="card__footer">Read more</div>
</div>
```

---

### OOCSS and Utility-First Concepts

**OOCSS:** Separate structure from skin.

```css
/* Structure */
.media { display: flex; gap: 1rem; }
.media__img { flex-shrink: 0; }

/* Skin */
.skin-primary { background: #3498db; color: white; }
.skin-rounded { border-radius: 8px; }
```

**Utility-first (Tailwind-style):**

```css
.flex { display: flex; }
.gap-4 { gap: 1rem; }
.text-center { text-align: center; }
.p-4 { padding: 1rem; }
.bg-blue { background: #3498db; }
```

---

### CSS Reset vs Normalize

```css
/* Minimal reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
```

Use **Normalize.css** or **modern-css-reset** for production instead of building from scratch.

---

### Organizing Stylesheets

```
styles/
├── base/        /* Reset, typography, variables */
├── layout/      /* Grid, flexbox page structures */
├── components/  /* Buttons, cards, navbars */
├── utilities/   /* Helper classes */
└── main.css     /* Imports all layers */
```

---

### Performance Tips

```css
/* Avoid expensive properties during animation */
.animated {
  will-change: transform; /* Hint browser to optimize */
  transform: translateZ(0); /* Promote to own layer */
}

/* CSS containment — isolate layout/paint */
.card {
  contain: layout style paint;
}

/* Prefer transform/opacity over top/left/width for animations */
.slide { transform: translateX(100px); } /* GPU accelerated */
/* Avoid: .slide { left: 100px; } — triggers layout */
```

| Causes Reflow | GPU-Friendly |
|---------------|--------------|
| `width`, `height`, `top`, `left` | `transform`, `opacity` |
| `margin`, `padding`, `border` | `filter` (careful) |
| `display`, `position` | — |

---

### CSS Linting and Validation

- **Stylelint** — Lint CSS for errors and conventions
- **W3C CSS Validator** — https://jigsaw.w3.org/css-validator/
- **Browser DevTools** — Inspect computed styles, debug layout

---

## 20. Real-World Projects (Final Section)

These projects combine all CSS concepts into production-ready patterns.

### Responsive Navbar with Hamburger Menu

```html
<nav class="navbar">
  <a href="#" class="navbar__brand">Brand</a>
  <button class="navbar__toggle" aria-label="Toggle menu">&#9776;</button>
  <ul class="navbar__menu">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--nav-bg, #2c3e50);
  position: sticky;
  top: 0;
  z-index: 100;
}
.navbar__brand { color: white; font-size: 1.5rem; text-decoration: none; font-weight: bold; }
.navbar__menu { display: flex; gap: 1.5rem; list-style: none; }
.navbar__menu a { color: white; text-decoration: none; transition: color 0.2s; }
.navbar__menu a:hover { color: #3498db; }
.navbar__toggle { display: none; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }

@media (max-width: 768px) {
  .navbar__toggle { display: block; }
  .navbar__menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #2c3e50;
    padding: 1rem;
  }
  .navbar__menu.is-open { display: flex; }
}
```

**Visual result:** Horizontal nav on desktop; hamburger icon reveals vertical menu on mobile.

---

### Hero Section with Gradient and Animation

```css
.hero {
  min-height: 80dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 4rem);
  animation: fadeIn 0.8s ease forwards;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.hero__subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-top: 1rem;
  opacity: 0;
  animation: fadeIn 0.8s ease 0.3s forwards;
}

.hero__cta {
  margin-top: 2rem;
  padding: 14px 32px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: fadeIn 0.8s ease 0.6s forwards;
  opacity: 0;
}

.hero__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}
```

**Visual result:** Full-viewport purple gradient hero; title, subtitle, and button fade in sequentially.

---

### Responsive Card Grid

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: var(--card-bg, white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.12);
}

.card__image { width: 100%; height: 200px; object-fit: cover; }
.card__body { padding: 1.5rem; }
.card__title { font-size: 1.25rem; margin-bottom: 0.5rem; }
.card__text { color: #666; line-height: 1.6; }
```

**Visual result:** Auto-fitting grid of cards that lift on hover; 1 column on mobile, 3+ on desktop.

---

### Dark/Light Mode Toggle

```css
:root {
  --bg: #f8f9fa;
  --text: #212529;
  --card-bg: #ffffff;
  --nav-bg: #2c3e50;
}

[data-theme="dark"] {
  --bg: #0d1117;
  --text: #c9d1d9;
  --card-bg: #161b22;
  --nav-bg: #010409;
}

body {
  background: var(--bg);
  color: var(--text);
  transition: background 0.3s, color 0.3s;
}

.theme-toggle {
  background: none;
  border: 2px solid var(--text);
  color: var(--text);
  padding: 8px 16px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
}
```

```javascript
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
});
```

**Visual result:** One button click switches entire site between light and dark palettes.

---

## Complete Styled Webpage — All Concepts Combined

Save as `complete-example.html`. Open in any browser to see every major CSS concept working together.

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete CSS Example — QA Transformation</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    /* ===== CSS VARIABLES (Section 13) ===== */
    :root {
      --bg: #f8f9fa;
      --text: #212529;
      --card-bg: #ffffff;
      --nav-bg: #2c3e50;
      --primary: #3498db;
      --primary-dark: #2980b9;
      --accent: #e74c3c;
      --radius: 8px;
      --shadow: 0 4px 12px rgba(0,0,0,0.08);
      --font: "Inter", system-ui, sans-serif;
      --transition: 0.3s ease;
    }

    [data-theme="dark"] {
      --bg: #0d1117;
      --text: #c9d1d9;
      --card-bg: #161b22;
      --nav-bg: #010409;
      --shadow: 0 4px 12px rgba(0,0,0,0.4);
    }

    /* ===== RESET & BASE (Section 19) ===== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; font-size: 16px; }

    body {
      font-family: var(--font);
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      transition: background var(--transition), color var(--transition);
    }

    img { max-width: 100%; display: block; }

    /* ===== NAVBAR (Sections 7, 9, 12, 20) ===== */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: var(--nav-bg);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: var(--shadow);
    }

    .navbar__brand {
      color: white;
      font-size: 1.4rem;
      font-weight: 700;
      text-decoration: none;
    }

    .navbar__menu {
      display: flex;
      gap: 1.5rem;
      list-style: none;
    }

    .navbar__menu a {
      color: rgba(255,255,255,0.85);
      text-decoration: none;
      transition: color var(--transition);
    }

    .navbar__menu a:hover { color: var(--primary); }
    .navbar__menu a:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }

    .navbar__toggle {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }

    .theme-toggle {
      background: none;
      border: 2px solid rgba(255,255,255,0.5);
      color: white;
      padding: 6px 14px;
      border-radius: 50px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: all var(--transition);
      margin-left: 1rem;
    }

    .theme-toggle:hover { border-color: white; background: rgba(255,255,255,0.1); }

    /* ===== HERO (Sections 5, 10, 12) ===== */
    .hero {
      min-height: 70dvh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: clamp(2rem, 5vw, 4rem);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1), transparent 60%);
    }

    .hero__title {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 700;
      text-shadow: 0 2px 10px rgba(0,0,0,0.3);
      animation: fadeIn 0.8s ease forwards;
      position: relative;
    }

    .hero__title::first-letter {
      font-size: 1.3em;
      color: #f1c40f;
    }

    .hero__subtitle {
      font-size: clamp(1rem, 2vw, 1.3rem);
      margin-top: 1rem;
      opacity: 0;
      max-width: 600px;
      animation: fadeIn 0.8s ease 0.3s forwards;
      position: relative;
    }

    .hero__cta {
      margin-top: 2rem;
      padding: 14px 36px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 50px;
      font-size: 1.05rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform var(--transition), box-shadow var(--transition);
      animation: fadeIn 0.8s ease 0.6s forwards;
      opacity: 0;
      position: relative;
    }

    .hero__cta:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.25);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ===== MAIN LAYOUT (Sections 8, 12) ===== */
    .main-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    @media (min-width: 768px) {
      .main-grid { grid-template-columns: 2fr 1fr; }
    }

    /* ===== CARDS (Sections 3, 7, 11, 16) ===== */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--card-bg);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: transform var(--transition), box-shadow var(--transition);
      contain: layout style;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 28px rgba(0,0,0,0.12);
    }

    .card__image {
      width: 100%;
      height: 160px;
      object-fit: cover;
      background: linear-gradient(45deg, var(--primary), #2ecc71);
    }

    .card__body { padding: 1.25rem; }
    .card__title { font-size: 1.15rem; font-weight: 600; margin-bottom: 0.5rem; }
    .card__text { color: #888; font-size: 0.9rem; }

    .card--featured {
      border: 2px solid #f1c40f;
      grid-column: 1 / -1;
    }

    /* ===== SIDEBAR (Section 7) ===== */
    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .sidebar__box {
      background: var(--card-bg);
      padding: 1.5rem;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    .sidebar__box h3 {
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--primary);
    }

    /* ===== FORM (Section 17) ===== */
    .form-group { margin-bottom: 1rem; }

    .form-group label {
      display: block;
      margin-bottom: 0.4rem;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 10px 14px;
      border: 2px solid #ddd;
      border-radius: 6px;
      font-family: var(--font);
      font-size: 1rem;
      background: var(--card-bg);
      color: var(--text);
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.25);
    }

    .form-group input::placeholder { color: #aaa; font-style: italic; }

    .btn-submit {
      width: 100%;
      padding: 12px;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background var(--transition), transform 0.2s;
    }

    .btn-submit:hover { background: var(--primary-dark); transform: translateY(-1px); }
    .btn-submit:active { transform: translateY(0); }

    /* ===== TABLE (Section 17) ===== */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
    }

    th { background: var(--primary); color: white; }
    tr:nth-child(even) { background: rgba(0,0,0,0.03); }
    tr:hover { background: rgba(52, 152, 219, 0.08); }

    /* ===== DETAILS / PROGRESS (Sections 9, 10) ===== */
    details {
      background: var(--card-bg);
      padding: 1rem;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    details summary {
      cursor: pointer;
      font-weight: 600;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background: #eee;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 0.5rem;
    }

    .progress-bar__fill {
      height: 100%;
      width: 75%;
      background: linear-gradient(90deg, var(--primary), #2ecc71);
      border-radius: 4px;
      animation: progressFill 2s ease forwards;
    }

    @keyframes progressFill {
      from { width: 0; }
      to   { width: 75%; }
    }

    /* ===== FLOATING BUTTON (Section 9) ===== */
    .fab {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--accent);
      color: white;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(231, 76, 60, 0.4);
      transition: transform var(--transition);
      z-index: 50;
    }

    .fab:hover { transform: scale(1.1); }

    /* ===== FOOTER ===== */
    footer {
      text-align: center;
      padding: 2rem;
      background: var(--nav-bg);
      color: rgba(255,255,255,0.7);
      margin-top: 2rem;
    }

    footer a { color: var(--primary); }

    ::selection { background: var(--primary); color: white; }

    /* ===== RESPONSIVE (Section 12) ===== */
    @media (max-width: 768px) {
      .navbar__toggle { display: block; }
      .navbar__menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--nav-bg);
        padding: 1rem 2rem;
        gap: 1rem;
      }
      .navbar__menu.is-open { display: flex; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
  </style>
</head>
<body>

  <!-- NAVBAR -->
  <nav class="navbar">
    <a href="#" class="navbar__brand">CSS Guide</a>
    <ul class="navbar__menu" id="navMenu">
      <li><a href="#features">Features</a></li>
      <li><a href="#cards">Cards</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div style="display:flex; align-items:center;">
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">🌙 Dark</button>
      <button class="navbar__toggle" id="navToggle" aria-label="Toggle menu">&#9776;</button>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <h1 class="hero__title">Complete CSS Example</h1>
    <p class="hero__subtitle">A real-world page combining Flexbox, Grid, variables, animations, responsive design, and more.</p>
    <button class="hero__cta" onclick="document.getElementById('features').scrollIntoView({behavior:'smooth'})">
      Explore Features
    </button>
  </section>

  <!-- MAIN CONTENT -->
  <div class="main-grid">

    <div>
      <!-- CARD GRID -->
      <section id="cards">
        <h2 style="margin-bottom:1.5rem; font-size:1.75rem;">Feature Cards</h2>
        <div class="card-grid">
          <div class="card card--featured">
            <div class="card__image"></div>
            <div class="card__body">
              <h3 class="card__title">CSS Grid Layout</h3>
              <p class="card__text">Two-dimensional layouts with auto-fill responsive columns.</p>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style="background:linear-gradient(45deg,#e74c3c,#f39c12);"></div>
            <div class="card__body">
              <h3 class="card__title">Flexbox</h3>
              <p class="card__text">One-dimensional alignment for navbars and card rows.</p>
            </div>
          </div>
          <div class="card">
            <div class="card__image" style="background:linear-gradient(45deg,#9b59b6,#3498db);"></div>
            <div class="card__body">
              <h3 class="card__title">Animations</h3>
              <p class="card__text">Transitions and keyframes for engaging interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURES TABLE -->
      <section id="features" style="margin-top:2rem;">
        <h2 style="margin-bottom:1rem; font-size:1.75rem;">CSS Concepts Covered</h2>
        <table>
          <caption style="caption-side:top; text-align:left; font-weight:600; padding-bottom:8px;">Study Guide Topics</caption>
          <thead>
            <tr><th>Section</th><th>Topic</th><th>Level</th></tr>
          </thead>
          <tbody>
            <tr><td>1–2</td><td>Syntax &amp; Selectors</td><td>Beginner</td></tr>
            <tr><td>3–6</td><td>Box Model &amp; Display</td><td>Beginner</td></tr>
            <tr><td>7–9</td><td>Flexbox, Grid, Position</td><td>Intermediate</td></tr>
            <tr><td>10–12</td><td>Animation &amp; Responsive</td><td>Intermediate</td></tr>
            <tr><td>13–19</td><td>Variables, Architecture</td><td>Professional</td></tr>
          </tbody>
        </table>
      </section>
    </div>

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div class="sidebar__box" id="contact">
        <h3>Contact Form</h3>
        <form onsubmit="event.preventDefault(); alert('Form submitted!');">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" required>
          </div>
          <div class="form-group">
            <label for="msg">Message</label>
            <textarea id="msg" rows="3" placeholder="Your message..." maxlength="200"></textarea>
          </div>
          <button type="submit" class="btn-submit">Send Message</button>
        </form>
      </div>

      <details>
        <summary>Learning Progress</summary>
        <p style="margin-top:0.75rem; font-size:0.9rem;">CSS Mastery: 75%</p>
        <div class="progress-bar">
          <div class="progress-bar__fill"></div>
        </div>
      </details>
    </aside>
  </div>

  <!-- FLOATING ACTION BUTTON -->
  <button class="fab" aria-label="Scroll to top" onclick="window.scrollTo({top:0, behavior:'smooth'})">↑</button>

  <!-- FOOTER -->
  <footer>
    <p>&copy; 2026 QA Transformation. Built with semantic HTML &amp; modern CSS.</p>
    <p><small>Validate at <a href="https://jigsaw.w3.org/css-validator/">W3C CSS Validator</a></small></p>
  </footer>

  <script>
    // Theme toggle (Section 13)
    document.getElementById('themeToggle').addEventListener('click', () => {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
      document.getElementById('themeToggle').textContent = isDark ? '🌙 Dark' : '☀️ Light';
    });

    // Mobile nav toggle (Section 20)
    document.getElementById('navToggle').addEventListener('click', () => {
      document.getElementById('navMenu').classList.toggle('is-open');
    });
  </script>
</body>
</html>
```

**Visual result:** A polished landing page with sticky navbar, gradient hero with fade-in text, responsive card grid, data table, contact form, progress bar, floating scroll button, and dark/light mode toggle.

---

## Quick Reference — All Concepts Covered

| Section | Topics |
|---------|--------|
| 1 | CSS syntax, inline/internal/external, cascade |
| 2 | All selectors, pseudo-classes, pseudo-elements, specificity |
| 3 | Box model, padding, margin, border, box-sizing, overflow |
| 4 | Typography, fonts, text properties, @font-face |
| 5 | Colors, backgrounds, gradients, opacity, filter |
| 6 | display, visibility, pointer-events |
| 7 | Flexbox container & item properties, real layouts |
| 8 | CSS Grid, fr/repeat/minmax, areas, responsive grids |
| 9 | position, z-index, sticky nav, modals, tooltips |
| 10 | transitions, @keyframes, animations |
| 11 | 2D/3D transforms, flip card, hover lift |
| 12 | media queries, responsive units, clamp, container queries |
| 13 | CSS variables, theming, JavaScript integration |
| 14 | calc, clamp, var, env, color functions, counter, attr |
| 15 | @import, @supports, @layer, @scope, @page, print |
| 16 | box-shadow, text-shadow, border-radius, clip-path, mask |
| 17 | Lists, tables, form styling, custom inputs |
| 18 | scroll-behavior, scroll-snap, custom scrollbar |
| 19 | BEM, architecture, performance, linting |
| 20 | Navbar, hero, card grid, dark mode, complete page |

---

*End of CSS Study Guide. Practice by building projects, inspect with DevTools, and validate at the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Pair with the HTML Study Guide for full-stack frontend fundamentals.*

