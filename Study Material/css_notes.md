# CSS Quick Reference — Properties & Their Uses

A concise guide: **what each CSS property does** and **when to use it**, with a short example.

---

## 1. How to Apply CSS


| Method       | Use                                          | Example                                        |
| ------------ | -------------------------------------------- | ---------------------------------------------- |
| **Inline**   | One-off style on a single element            | `<p style="color: red;">`                      |
| **Internal** | Styles for one page only                     | `<style>p { color: red; }</style>` in `<head>` |
| **External** | Reusable styles for whole site (recommended) | `<link rel="stylesheet" href="style.css">`     |


**CSS Rule Syntax:**

```css
selector {
  property: value;
}
```

**Cascade order (which style wins):** `!important` → specificity → source order (last wins)

---

## 2. Selectors


| Selector        | Use                                 | Example                                  |
| --------------- | ----------------------------------- | ---------------------------------------- |
| `*`             | Target every element (resets)       | `* { margin: 0; }`                       |
| `div`           | Target all elements of that type    | `p { color: blue; }`                     |
| `.class`        | Reusable style (most common)        | `.btn { padding: 10px; }`                |
| `#id`           | One unique element                  | `#header { background: #333; }`          |
| `A, B`          | Same style for multiple selectors   | `h1, h2 { color: navy; }`                |
| `A B`           | Descendant — B inside A (any depth) | `nav a { color: white; }`                |
| `A > B`         | Direct child only                   | `ul > li { list-style: none; }`          |
| `A + B`         | B immediately after A               | `h2 + p { margin-top: 0; }`              |
| `A ~ B`         | All B siblings after A              | `h2 ~ p { color: gray; }`                |
| `[attr]`        | Element with attribute              | `input[required] { border-color: red; }` |
| `[attr="val"]`  | Exact attribute value               | `input[type="email"] { }`                |
| `[attr^="val"]` | Starts with                         | `a[href^="https"] { }`                   |
| `[attr$="val"]` | Ends with                           | `a[href$=".pdf"] { }`                    |
| `[attr*="val"]` | Contains                            | `a[href*="docs"] { }`                    |


### Pseudo-Classes (element state)


| Selector          | Use                                              |
| ----------------- | ------------------------------------------------ |
| `:hover`          | Mouse over element                               |
| `:focus`          | Element has keyboard focus                       |
| `:active`         | Being clicked                                    |
| `:visited`        | Already visited link                             |
| `:first-child`    | First child of parent                            |
| `:last-child`     | Last child of parent                             |
| `:nth-child(n)`   | nth child (e.g. `even`, `3n`, `2`)               |
| `:nth-of-type(n)` | nth of its element type                          |
| `:not(selector)`  | Exclude matching elements                        |
| `:checked`        | Checked checkbox/radio                           |
| `:disabled`       | Disabled form control                            |
| `:empty`          | Element with no children                         |
| `:root`           | Document root (`<html>`) — use for CSS variables |
| `:is(a, b)`       | Match any in list                                |
| `:has(selector)`  | Parent containing a match                        |


### Pseudo-Elements (part of element)


| Selector         | Use                           |
| ---------------- | ----------------------------- |
| `::before`       | Insert content before element |
| `::after`        | Insert content after element  |
| `::first-line`   | Style first line of text      |
| `::first-letter` | Style first letter (drop cap) |
| `::placeholder`  | Input placeholder text        |
| `::selection`    | User-highlighted text         |
| `::marker`       | List bullet/number            |


**Specificity:** inline > `#id` > `.class` > `element`

---

## 3. Box Model


| Property                        | Use                                     | Example                                 |
| ------------------------------- | --------------------------------------- | --------------------------------------- |
| `width`                         | Set element width                       | `width: 300px;`                         |
| `height`                        | Set element height                      | `height: 200px;`                        |
| `min-width`                     | Minimum width                           | `min-width: 200px;`                     |
| `max-width`                     | Maximum width (responsive)              | `max-width: 100%;`                      |
| `min-height`                    | Minimum height                          | `min-height: 100vh;`                    |
| `max-height`                    | Maximum height                          | `max-height: 400px;`                    |
| `padding`                       | Space inside border (around content)    | `padding: 20px;` or `10px 20px`         |
| `padding-top/right/bottom/left` | Padding per side                        | `padding-top: 10px;`                    |
| `margin`                        | Space outside border (between elements) | `margin: 0 auto;` (center)              |
| `margin-top/right/bottom/left`  | Margin per side                         | `margin-bottom: 1rem;`                  |
| `border`                        | Visible edge line                       | `border: 2px solid #333;`               |
| `border-width`                  | Border thickness                        | `border-width: 1px;`                    |
| `border-style`                  | Border type                             | `solid`, `dashed`, `dotted`, `none`     |
| `border-color`                  | Border color                            | `border-color: red;`                    |
| `border-radius`                 | Rounded corners                         | `border-radius: 8px;` or `50%` (circle) |
| `outline`                       | Focus ring (doesn't affect layout)      | `outline: 2px solid blue;`              |
| `box-sizing`                    | How width/height is calculated          | `border-box` (includes padding+border)  |
| `overflow`                      | Content beyond box                      | `hidden`, `scroll`, `auto`              |
| `overflow-x` / `overflow-y`     | Overflow per axis                       | `overflow-y: auto;`                     |


```css
*, *::before, *::after { box-sizing: border-box; } /* Always use this */
```

---

## 4. Typography & Text


| Property          | Use                         | Example                                |
| ----------------- | --------------------------- | -------------------------------------- |
| `font-family`     | Font typeface               | `font-family: Arial, sans-serif;`      |
| `font-size`       | Text size                   | `16px`, `1rem`, `2vw`                  |
| `font-weight`     | Boldness                    | `400` (normal), `700` (bold)           |
| `font-style`      | Italic                      | `normal`, `italic`                     |
| `font`            | Shorthand for above         | `font: bold 16px/1.5 Arial;`           |
| `line-height`     | Space between lines         | `line-height: 1.6;`                    |
| `letter-spacing`  | Space between characters    | `letter-spacing: 1px;`                 |
| `word-spacing`    | Space between words         | `word-spacing: 2px;`                   |
| `text-align`      | Horizontal alignment        | `left`, `center`, `right`, `justify`   |
| `text-decoration` | Underline, line-through     | `none`, `underline`, `line-through`    |
| `text-transform`  | Change case                 | `uppercase`, `lowercase`, `capitalize` |
| `text-indent`     | First line indent           | `text-indent: 2em;`                    |
| `text-shadow`     | Shadow behind text          | `text-shadow: 2px 2px 4px gray;`       |
| `white-space`     | Preserve spaces/line breaks | `nowrap`, `pre`                        |
| `word-break`      | Break long words            | `break-all`                            |
| `overflow-wrap`   | Wrap overflow text          | `break-word`                           |


**Units:** `px` (fixed), `rem` (relative to root — preferred), `em` (relative to parent), `%`, `vw`/`vh` (viewport)

```css
@font-face {
  font-family: "MyFont";
  src: url("font.woff2") format("woff2");
}
```

---

## 5. Colors & Backgrounds


| Property                | Use                          | Example                                                        |
| ----------------------- | ---------------------------- | -------------------------------------------------------------- |
| `color`                 | Text color                   | `color: #333;` `color: rgb(0,0,0);` `color: hsl(200,50%,50%);` |
| `background-color`      | Fill color behind content    | `background-color: #f5f5f5;`                                   |
| `background-image`      | Image or gradient            | `background-image: url("bg.jpg");`                             |
| `background-repeat`     | Repeat image                 | `no-repeat`, `repeat-x`                                        |
| `background-position`   | Image position               | `center`, `top left`, `50% 50%`                                |
| `background-size`       | Image size                   | `cover`, `contain`, `100%`                                     |
| `background-attachment` | Scroll behavior              | `fixed` (parallax effect)                                      |
| `background`            | Shorthand for all above      | `background: #fff url("bg.jpg") no-repeat center/cover;`       |
| `opacity`               | Transparency (whole element) | `opacity: 0.5;`                                                |
| `filter`                | Visual effects               | `blur(5px)`, `brightness(1.2)`, `grayscale(100%)`              |


**Color formats:** `#hex`, `rgb()`, `rgba()`, `hsl()`, `hsla()`, `oklch()`

**Gradients:**

```css
background: linear-gradient(to right, #3498db, #2ecc71);
background: radial-gradient(circle, white, blue);
background: conic-gradient(red, yellow, green, blue);
```

---

## 6. Display & Visibility


| Property         | Use                           | Values                                                    |
| ---------------- | ----------------------------- | --------------------------------------------------------- |
| `display`        | How element behaves in layout | `block`, `inline`, `inline-block`, `flex`, `grid`, `none` |
| `visibility`     | Hide but keep space           | `visible`, `hidden`                                       |
| `pointer-events` | Block mouse clicks            | `none` (clicks pass through)                              |



| `display` value | Use                                  |
| --------------- | ------------------------------------ |
| `block`         | Full width, new line (div, p)        |
| `inline`        | Flows with text (span, a)            |
| `inline-block`  | Inline flow but accepts width/height |
| `flex`          | Flexbox layout (1D)                  |
| `grid`          | Grid layout (2D)                     |
| `none`          | Remove from page entirely            |


---

## 7. Flexbox

**Use for:** navbars, card rows, centering, sidebars (1-dimensional layout)

### Container Properties


| Property          | Use                      | Values                                                                              |
| ----------------- | ------------------------ | ----------------------------------------------------------------------------------- |
| `display: flex`   | Enable flexbox on parent | —                                                                                   |
| `flex-direction`  | Main axis direction      | `row`, `column`, `row-reverse`, `column-reverse`                                    |
| `flex-wrap`       | Wrap to new line         | `nowrap`, `wrap`                                                                    |
| `justify-content` | Align along main axis    | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items`     | Align along cross axis   | `stretch`, `flex-start`, `center`, `flex-end`                                       |
| `align-content`   | Align wrapped lines      | Same as justify-content                                                             |
| `gap`             | Space between items      | `gap: 1rem;`                                                                        |


### Item Properties


| Property      | Use                               | Example                                                 |
| ------------- | --------------------------------- | ------------------------------------------------------- |
| `flex-grow`   | How much item grows               | `flex-grow: 1;`                                         |
| `flex-shrink` | How much item shrinks             | `flex-shrink: 0;`                                       |
| `flex-basis`  | Initial size                      | `flex-basis: 250px;`                                    |
| `flex`        | Shorthand                         | `flex: 1;` (grow to fill) or `flex: 0 0 250px;` (fixed) |
| `align-self`  | Override align-items for one item | `align-self: center;`                                   |
| `order`       | Visual order                      | `order: -1;` (appear first)                             |


```css
/* Center anything */
.center { display: flex; justify-content: center; align-items: center; min-height: 100vh; }

/* Navbar */
.nav { display: flex; justify-content: space-between; align-items: center; }

/* Sidebar layout */
.layout { display: flex; }
.sidebar { flex: 0 0 250px; }
.main { flex: 1; }
```

---

## 8. CSS Grid

**Use for:** full page layouts, card grids, magazine layouts (2-dimensional layout)

### Container Properties


| Property                | Use                     | Example                           |
| ----------------------- | ----------------------- | --------------------------------- |
| `display: grid`         | Enable grid             | —                                 |
| `grid-template-columns` | Define columns          | `1fr 1fr 1fr` or `repeat(3, 1fr)` |
| `grid-template-rows`    | Define rows             | `auto 1fr auto`                   |
| `grid-template-areas`   | Named layout areas      | `"header header" "sidebar main"`  |
| `gap`                   | Space between cells     | `gap: 20px;`                      |
| `grid-auto-rows`        | Height of implicit rows | `minmax(100px, auto)`             |
| `grid-auto-flow`        | How auto items flow     | `row dense`                       |


**Units:** `fr` (fraction of space), `repeat(3, 1fr)`, `minmax(200px, 1fr)`, `auto-fill`, `auto-fit`

### Item Properties


| Property       | Use                 | Example               |
| -------------- | ------------------- | --------------------- |
| `grid-column`  | Span columns        | `grid-column: 1 / 3;` |
| `grid-row`     | Span rows           | `grid-row: 1 / 3;`    |
| `grid-area`    | Place in named area | `grid-area: sidebar;` |
| `justify-self` | Horizontal in cell  | `center`              |
| `align-self`   | Vertical in cell    | `start`              |


```css
/* Responsive card grid */
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }

/* Page layout */
.page {
  display: grid;
  grid-template-areas: "header header" "sidebar main" "footer footer";
  grid-template-columns: 250px 1fr;
}
header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }
```

---

## 9. Positioning


| Property                            | Use                           | Values                                              |
| ----------------------------------- | ----------------------------- | --------------------------------------------------- |
| `position`                          | Positioning mode              | `static`, `relative`, `absolute`, `fixed`, `sticky` |
| `top` / `right` / `bottom` / `left` | Offset from edges             | `top: 0;` `right: 20px;`                            |
| `z-index`                           | Stack order (higher = on top) | `z-index: 100;`                                     |



| `position` | Use                                            |
| ---------- | ---------------------------------------------- |
| `static`   | Default — normal flow                          |
| `relative` | Offset from normal position                    |
| `absolute` | Position relative to nearest positioned parent |
| `fixed`    | Fixed to viewport (stays on scroll)            |
| `sticky`   | Sticks when scrolling reaches threshold        |


```css
/* Sticky navbar */
.navbar { position: sticky; top: 0; z-index: 100; }

/* Modal overlay */
.overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); }

/* Floating button */
.fab { position: fixed; bottom: 24px; right: 24px; }
```

---

## 10. Transitions & Animations

### Transitions (smooth change between states)


| Property                     | Use               | Example                          |
| ---------------------------- | ----------------- | -------------------------------- |
| `transition-property`        | What to animate   | `background`, `transform`, `all` |
| `transition-duration`        | How long          | `0.3s`, `300ms`                  |
| `transition-timing-function` | Speed curve       | `ease`, `linear`, `ease-in-out`  |
| `transition-delay`           | Wait before start | `0.1s`                           |
| `transition`                 | Shorthand         | `transition: all 0.3s ease;`     |


```css
.btn { transition: background 0.3s, transform 0.2s; }
.btn:hover { background: darkblue; transform: translateY(-2px); }
```

### Animations (keyframes)


| Property                    | Use                    | Example                        |
| --------------------------- | ---------------------- | ------------------------------ |
| `@keyframes name`           | Define animation steps | See below                      |
| `animation-name`            | Which keyframes        | `animation-name: fadeIn;`      |
| `animation-duration`        | How long               | `1s`                           |
| `animation-iteration-count` | Repeat count           | `infinite`                     |
| `animation-direction`       | Play direction         | `alternate`                    |
| `animation`                 | Shorthand              | `animation: fadeIn 0.5s ease;` |


```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-in { animation: fadeIn 0.6s ease forwards; }

@keyframes spin { to { transform: rotate(360deg); } }
.spinner { animation: spin 0.8s linear infinite; }
```

---

## 11. Transforms


| Property              | Use                          | Example                |
| --------------------- | ---------------------------- | ---------------------- |
| `transform`           | Move, rotate, scale, skew    | See below              |
| `transform-origin`    | Pivot point for transform    | `center`, `left top`   |
| `perspective`         | 3D depth (on parent)         | `perspective: 1000px;` |
| `transform-style`     | 3D children                  | `preserve-3d`          |
| `backface-visibility` | Hide back of flipped element | `hidden`               |


```css
transform: translate(50px, 20px);   /* Move */
transform: rotate(45deg);           /* Rotate */
transform: scale(1.5);              /* Resize */
transform: skew(10deg);             /* Slant */
transform: translateY(-8px);        /* Lift on hover */
```

---

## 12. Responsive Design


| Property / Rule                           | Use                            | Example                                |
| ----------------------------------------- | ------------------------------ | -------------------------------------- |
| `@media (min-width: 768px)`               | Apply styles above breakpoint  | Mobile-first                           |
| `@media (max-width: 767px)`               | Apply styles below breakpoint  | Desktop-first                          |
| `@media (orientation: landscape)`         | Landscape mode                 | —                                      |
| `@media (prefers-color-scheme: dark)`     | Dark mode preference           | —                                      |
| `@media (prefers-reduced-motion: reduce)` | Accessibility — reduce motion  | —                                      |
| `clamp(min, preferred, max)`              | Fluid sizing                   | `font-size: clamp(1rem, 2.5vw, 3rem);` |
| `min()` / `max()`                         | Constrain values               | `width: min(100%, 600px);`             |
| `@container`                              | Style based on container width | Component-level responsive             |


**Breakpoints:** 480px (phone), 768px (tablet), 1024px (laptop), 1280px (desktop)

**Units:** `vw` (viewport width), `vh` (viewport height), `dvh` (dynamic viewport height)

```css
/* Mobile-first */
.container { padding: 1rem; }
@media (min-width: 768px) { .container { padding: 2rem; max-width: 960px; margin: 0 auto; } }
```

---

## 13. CSS Variables


| Syntax                  | Use              | Example                        |
| ----------------------- | ---------------- | ------------------------------ |
| `--name: value`         | Declare variable | `--primary: #3498db;`          |
| `var(--name)`           | Use variable     | `color: var(--primary);`       |
| `var(--name, fallback)` | With fallback    | `color: var(--primary, blue);` |


```css
:root {
  --primary: #3498db;
  --text: #333;
  --bg: #fff;
}
[data-theme="dark"] {
  --text: #eee;
  --bg: #1a1a2e;
}
body { color: var(--text); background: var(--bg); }
```

**Scope:** `:root` = global. Any selector = local to that element and children.

---

## 14. CSS Functions


| Function          | Use                 | Example                              |
| ----------------- | ------------------- | ------------------------------------ |
| `calc()`          | Math in CSS         | `width: calc(100% - 250px);`         |
| `min()`           | Smaller of values   | `width: min(90vw, 600px);`           |
| `max()`           | Larger of values    | `height: max(200px, 30vh);`          |
| `clamp()`         | Min, preferred, max | `font-size: clamp(14px, 2vw, 20px);` |
| `var()`           | CSS variable        | `color: var(--primary);`             |
| `url()`           | File path           | `background: url("img.jpg");`        |
| `rgb()` / `hsl()` | Colors              | `rgb(52 152 219 / 0.5)`              |
| `attr()`          | Read HTML attribute | `content: attr(data-label);`         |


---

## 15. At-Rules


| At-Rule                     | Use                                     |
| --------------------------- | --------------------------------------- |
| `@import url("file.css")`   | Import another stylesheet (top of file) |
| `@charset "UTF-8"`          | Character encoding                      |
| `@media (condition) { }`    | Responsive / conditional styles         |
| `@keyframes name { }`       | Define animation                        |
| `@font-face { }`            | Custom web font                         |
| `@supports (prop: val) { }` | Apply only if browser supports feature  |
| `@layer name { }`           | Control cascade layer order             |
| `@page { }`                 | Print page settings                     |


```css
@media print {
  .no-print { display: none; }
  body { color: black; background: white; }
}
```

---

## 16. Shadows & Decorative Effects


| Property        | Use                        | Example                                          |
| --------------- | -------------------------- | ------------------------------------------------ |
| `box-shadow`    | Shadow around element      | `0 4px 8px rgba(0,0,0,0.1)`                      |
| `text-shadow`   | Shadow behind text         | `2px 2px 4px gray`                               |
| `border-radius` | Rounded corners            | `8px`, `50%` (circle), `50px` (pill)             |
| `border-image`  | Gradient/pattern border    | `border-image: linear-gradient(...) 1;`          |
| `clip-path`     | Clip to shape              | `circle(50%)`, `polygon(...)`                    |
| `mask-image`    | Fade/hide parts of element | `linear-gradient(to bottom, black, transparent)` |


```css
/* Card shadow */
.card { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.15); }

/* Glow */
.glow { box-shadow: 0 0 20px rgba(52, 152, 219, 0.6); }
```

---

## 17. Lists, Tables & Forms


| Property              | Use                            | Values                     |
| --------------------- | ------------------------------ | -------------------------- |
| `list-style-type`     | Bullet style                   | `disc`, `circle`, `none`   |
| `list-style-position` | Bullet position                | `inside`, `outside`        |
| `border-collapse`     | Table border merging           | `collapse`                 |
| `border-spacing`      | Gap between table cells        | `0`                        |
| `table-layout`        | Table column sizing            | `fixed`, `auto`            |
| `caption-side`        | Caption position               | `top`, `bottom`            |
| `appearance`          | Remove default input style     | `none` (custom checkboxes) |
| `:focus-visible`      | Keyboard-only focus ring       | —                          |
| `:placeholder-shown`  | Input with placeholder visible | —                          |


```css
/* Custom checkbox */
input[type="checkbox"] { appearance: none; width: 20px; height: 20px; border: 2px solid blue; }
input:checked { background: blue; }

/* Form focus */
input:focus { outline: none; border-color: blue; box-shadow: 0 0 0 3px rgba(0,0,255,0.2); }
```

---

## 18. Scroll Effects


| Property              | Use                       | Example                              |
| --------------------- | ------------------------- | ------------------------------------ |
| `scroll-behavior`     | Smooth scrolling          | `scroll-behavior: smooth;` on `html` |
| `scroll-snap-type`    | Snap scrolling            | `x mandatory`                        |
| `scroll-snap-align`   | Snap alignment            | `center`, `start`                    |
| `overscroll-behavior` | Prevent scroll chaining   | `contain`                            |
| `::-webkit-scrollbar` | Custom scrollbar (Chrome) | See below                            |


```css
html { scroll-behavior: smooth; }

.carousel { scroll-snap-type: x mandatory; overflow-x: auto; display: flex; }
.carousel-item { scroll-snap-align: center; flex: 0 0 80%; }

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-thumb { background: #3498db; border-radius: 4px; }
```

---

## 19. Best Practices


| Concept            | Use                                                                         |
| ------------------ | --------------------------------------------------------------------------- |
| **BEM naming**     | `.block__element--modifier` — organized class names                         |
| **CSS reset**      | `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }` |
| **File structure** | `base.css` → `layout.css` → `components.css` → `utilities.css`              |
| `will-change`      | Hint browser to optimize animation                                          |
| `contain`          | Isolate layout/paint for performance                                        |


**Animate with:** `transform` and `opacity` (GPU-friendly) — not `width`, `height`, `top`, `left`

---

## 20. Quick Copy-Paste Patterns

### Centered Page Content

```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
```

### Responsive Navbar

```css
.nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; }
.nav-links { display: flex; gap: 1.5rem; list-style: none; }
@media (max-width: 768px) { .nav-links { display: none; } }
```

### Card with Hover

```css
.card { border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; }
.card:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,0,0,0.12); }
```

### Dark Mode with Variables

```css
:root { --bg: #fff; --text: #333; }
[data-theme="dark"] { --bg: #1a1a2e; --text: #eee; }
body { background: var(--bg); color: var(--text); }
```

### Hero Section

```css
.hero {
  min-height: 80vh;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white; text-align: center;
}
```

---

*End of CSS Quick Reference. For HTML tags, see `html_notes.md`.*