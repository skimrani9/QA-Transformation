# Complete HTML Study Guide — Beginner to Professional

A progressive, hands-on reference covering every major HTML tag with syntax, explanations, and working examples.

---

## 1. Introduction to HTML

HTML (HyperText Markup Language) is the standard language used to create web pages. It is **not** a programming language — it is a **markup language** that tells browsers how to structure and display content.

### What is HTML and How Browsers Render It

When you open an HTML file or visit a URL, the browser:

1. **Requests** the HTML document from a server (or reads a local file).
2. **Parses** the markup into a tree structure called the **DOM** (Document Object Model).
3. **Renders** the page by applying default styles and any linked CSS.
4. **Executes** any JavaScript found in `<script>` tags.

```
Browser Request → HTML File → DOM Tree → Rendered Page (+ CSS + JS)
```

### HTML Document Structure

Every valid HTML5 document follows this skeleton:

**Syntax:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Metadata: title, styles, scripts, SEO -->
  </head>
  <body>
    <!-- Visible page content -->
  </body>
</html>
```

| Tag | Purpose |
|-----|---------|
| `<!DOCTYPE html>` | Declares HTML5. Must be the very first line. |
| `<html>` | Root element wrapping the entire document. `lang` helps screen readers and SEO. |
| `<head>` | Contains metadata — not displayed on the page. |
| `<body>` | Contains all visible content. |

**Complete Example — Your First HTML File:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  <!-- Page title shown in browser tab -->
  <title>My First Web Page</title>
</head>
<body>
  <!-- Main heading -->
  <h1>Hello, World!</h1>
  <!-- Paragraph of text -->
  <p>This is my first HTML page.</p>
</body>
</html>
```

### How to Write and Run Your First HTML File

1. Open any text editor (VS Code, Notepad++, Sublime Text).
2. Save the file as `index.html` (the `.html` extension is required).
3. Double-click the file to open it in your default browser, **or**
4. Right-click → **Open With** → choose Chrome, Firefox, or Edge.
5. For live development, use the **Live Server** extension in VS Code.

> **Tip:** Always start files with `<!DOCTYPE html>` and include `<meta charset="UTF-8">` to avoid character encoding issues.

---

## 2. Head Section Tags

The `<head>` section holds information **about** the page — not content users see directly. It controls the title, encoding, SEO, styles, and scripts.

### `<title>` — Page Title

**Syntax:** `<title>Page Title Here</title>`

Shown in the browser tab, bookmarks, and search engine results.

```html
<head>
  <title>QA Transformation — HTML Study Guide</title>
</head>
```

---

### `<meta>` — Metadata

**Syntax:** `<meta attribute="value">` (self-closing, no end tag in HTML5)

#### Charset

```html
<!-- Tells browser to use UTF-8 encoding (supports all languages and symbols) -->
<meta charset="UTF-8">
```

#### Viewport (Responsive Design)

```html
<!-- Makes page scale correctly on mobile devices -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### SEO Meta Tags

```html
<!-- Short description shown in search results (150–160 chars ideal) -->
<meta name="description" content="Complete HTML study guide from beginner to professional level.">

<!-- Keywords (less important today, but still used) -->
<meta name="keywords" content="HTML, web development, study guide, tutorial">

<!-- Author of the page -->
<meta name="author" content="QA Transformation Team">

<!-- Prevent search engines from indexing (use sparingly) -->
<meta name="robots" content="noindex, nofollow">
```

**Complete Head Example:**

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML from scratch with examples.">
  <meta name="keywords" content="HTML, CSS, web development">
  <meta name="author" content="Jane Developer">
  <title>HTML Learning Hub</title>
</head>
```

---

### `<link>` — External Resources

**Syntax:** `<link rel="relationship" href="url">`

Most commonly used to link external CSS stylesheets and favicons.

```html
<head>
  <!-- Link external CSS stylesheet -->
  <link rel="stylesheet" href="styles.css">

  <!-- Favicon (icon in browser tab) -->
  <link rel="icon" href="favicon.ico" type="image/x-icon">

  <!-- Preload a font for faster rendering -->
  <link rel="preload" href="fonts/roboto.woff2" as="font" type="font/woff2" crossorigin>
</head>
```

| `rel` Value | Purpose |
|-------------|---------|
| `stylesheet` | Links a CSS file |
| `icon` | Favicon |
| `preload` | Loads resource early |
| `canonical` | Preferred URL for SEO |

---

### `<style>` — Internal CSS

**Syntax:** `<style> /* CSS rules */ </style>`

Embeds CSS directly inside the HTML document.

```html
<head>
  <style>
    /* Style all paragraphs */
    p {
      color: navy;
      font-size: 16px;
    }
    /* Style the main heading */
    h1 {
      color: darkgreen;
    }
  </style>
</head>
```

---

### `<script>` — JavaScript

**Syntax:** `<script src="file.js"></script>` or inline `<script>/* code */</script>`

```html
<head>
  <!-- External JavaScript file -->
  <script src="app.js" defer></script>

  <!-- Inline JavaScript -->
  <script>
    // Runs when parsed (unless deferred/async)
    console.log("Page is loading...");
  </script>
</head>
```

> See **Section 10** for full `defer` and `async` details.

---

### `<base>` — Base URL

**Syntax:** `<base href="base-url" target="target">`

Sets a default URL and target for all relative links on the page. Must appear before any URL-using elements.

```html
<head>
  <!-- All relative links resolve from this base URL -->
  <base href="https://example.com/docs/" target="_blank">
</head>
<body>
  <!-- This link opens https://example.com/docs/guide.html in a new tab -->
  <a href="guide.html">Guide</a>
</body>
```

> **Warning:** Only use one `<base>` tag per page. It affects every link and image.

---

## 3. Text & Typography Tags

HTML provides tags to structure text with meaning and visual emphasis. Prefer **semantic** tags (`<strong>`, `<em>`) over purely visual ones (`<b>`, `<i>`).

### Headings — `<h1>` to `<h6>`

**Syntax:** `<h1>Heading</h1>` through `<h6>Heading</h6>`

| Tag | Use |
|-----|-----|
| `<h1>` | Main page title (one per page) |
| `<h2>` | Major sections |
| `<h3>`–`<h6>` | Subsections, decreasing importance |

```html
<h1>HTML Study Guide</h1>
<h2>Chapter 1: Introduction</h2>
<h3>1.1 What is HTML?</h3>
<h4>1.1.1 History</h4>
<h5>Detail Level 5</h5>
<h6>Detail Level 6</h6>
```

---

### Paragraph — `<p>`

**Syntax:** `<p>Paragraph text</p>`

```html
<p>HTML is the foundation of every website on the internet.</p>
<p>This is a second paragraph. Browsers add space between paragraphs automatically.</p>
```

---

### Line Break — `<br>`

**Syntax:** `<br>` (void element, no closing tag)

Forces a line break within text without starting a new paragraph.

```html
<p>
  Line one<br>
  Line two<br>
  Line three
</p>
```

---

### Horizontal Rule — `<hr>`

**Syntax:** `<hr>` (void element)

Creates a thematic break — a horizontal line separating sections.

```html
<h2>Section One</h2>
<p>Content for section one.</p>
<hr>
<h2>Section Two</h2>
<p>Content for section two.</p>
```

---

### Inline Formatting Tags

| Tag | Syntax | Meaning |
|-----|--------|---------|
| Bold (visual) | `<b>text</b>` | Bold text, no semantic meaning |
| Strong | `<strong>text</strong>` | Important text (semantic) |
| Italic (visual) | `<i>text</i>` | Italic text, no semantic meaning |
| Emphasis | `<em>text</em>` | Stressed/emphasized text (semantic) |
| Underline | `<u>text</u>` | Underlined text |
| Strikethrough | `<s>text</s>` | Text no longer accurate/relevant |
| Highlight | `<mark>text</mark>` | Highlighted/marked text |
| Small | `<small>text</small>` | Fine print, side comments |
| Big (deprecated) | `<big>text</big>` | Larger text — use CSS instead |
| Subscript | `<sub>text</sub>` | Subscript (H₂O) |
| Superscript | `<sup>text</sup>` | Superscript (x²) |

```html
<p>
  <b>Bold</b> |
  <strong>Strong (important)</strong> |
  <i>Italic</i> |
  <em>Emphasized</em> |
  <u>Underlined</u> |
  <s>Strikethrough</s> |
  <mark>Highlighted</mark> |
  <small>Small text</small> |
  H<sub>2</sub>O |
  E=mc<sup>2</sup>
</p>
```

---

### Semantic Text Tags

| Tag | Syntax | Purpose |
|-----|--------|---------|
| Abbreviation | `<abbr title="full">short</abbr>` | Abbreviation with tooltip |
| Citation | `<cite>title</cite>` | Title of a creative work |
| Code | `<code>code</code>` | Inline code snippet |
| Preformatted | `<pre>text</pre>` | Preserves whitespace and line breaks |
| Keyboard | `<kbd>key</kbd>` | Keyboard input |
| Sample | `<samp>output</samp>` | Program output |
| Variable | `<var>name</var>` | Variable name in math/programming |
| Block quote | `<blockquote cite="url">text</blockquote>` | Extended quotation |
| Inline quote | `<q cite="url">text</q>` | Short inline quotation |
| Deleted | `<del>text</del>` | Deleted text (shows strikethrough) |
| Inserted | `<ins>text</ins>` | Inserted text (shows underline) |

```html
<p>
  <abbr title="HyperText Markup Language">HTML</abbr> is essential.
</p>

<p>As stated in <cite>The Pragmatic Programmer</cite>, always keep learning.</p>

<p>Use the <code>console.log()</code> function to debug.</p>

<pre>
function greet() {
  console.log("Hello!");
}
</pre>

<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>

<p>Output: <samp>Hello, World!</samp></p>

<p>Let <var>x</var> = 10 and <var>y</var> = 20.</p>

<blockquote cite="https://example.com/source">
  <p>The best way to learn HTML is by building real projects.</p>
</blockquote>

<p>Einstein said <q cite="https://example.com">Imagination is more important than knowledge.</q></p>

<p>Price changed from <del>$50</del> to <ins>$35</ins>.</p>
```

---

## 4. List Tags

Lists organize related items. HTML supports three list types: unordered, ordered, and description lists.

### Unordered List — `<ul>` and `<li>`

**Syntax:**

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

```html
<h3>Shopping List</h3>
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
</ul>
```

---

### Ordered List — `<ol>` and `<li>`

**Syntax:**

```html
<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>
```

**Attributes:** `type` (1, A, a, I, i), `start`, `reversed`

```html
<h3>Steps to Create an HTML File</h3>
<ol>
  <li>Open a text editor</li>
  <li>Write your HTML code</li>
  <li>Save as <code>index.html</code></li>
  <li>Open in a browser</li>
</ol>

<!-- Start counting from 5 -->
<ol start="5">
  <li>Step five</li>
  <li>Step six</li>
</ol>

<!-- Reverse order -->
<ol reversed>
  <li>Third place</li>
  <li>Second place</li>
  <li>First place</li>
</ol>
```

---

### Description List — `<dl>`, `<dt>`, `<dd>`

**Syntax:**

```html
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

| Tag | Role |
|-----|------|
| `<dl>` | Description list container |
| `<dt>` | Term being described |
| `<dd>` | Definition/description of the term |

```html
<h3>HTML Glossary</h3>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — structures web content.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — styles web content.</dd>

  <dt>JavaScript</dt>
  <dd>Programming language that adds interactivity to web pages.</dd>
</dl>
```

---

### Nested Lists

Lists can be nested inside list items for hierarchical content.

```html
<h3>Web Development Roadmap</h3>
<ol>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
      <li>Databases</li>
    </ul>
  </li>
  <li>DevOps
    <ol>
      <li>Git</li>
      <li>CI/CD</li>
      <li>Docker</li>
    </ol>
  </li>
</ol>
```

---

## 5. Link & Navigation Tags

The anchor tag `<a>` creates hyperlinks — the foundation of web navigation.

### `<a>` — Anchor / Hyperlink

**Syntax:** `<a href="url" attributes>Link Text</a>`

#### Core Attributes

| Attribute | Values | Purpose |
|-----------|--------|---------|
| `href` | URL or fragment | Destination |
| `target` | `_self`, `_blank`, `_parent`, `_top` | Where to open link |
| `rel` | `noopener`, `noreferrer`, `nofollow` | Relationship to linked page |
| `download` | filename (optional) | Download instead of navigate |
| `title` | text | Tooltip on hover |

---

### External Links

```html
<!-- Opens in same tab -->
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN HTML Docs</a>

<!-- Opens in new tab (always add rel="noopener" for security) -->
<a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
  W3Schools HTML Tutorial
</a>
```

---

### Anchor Links (Same-Page Navigation)

```html
<!-- Navigation links -->
<nav>
  <a href="#introduction">Introduction</a> |
  <a href="#lists">Lists</a> |
  <a href="#forms">Forms</a>
</nav>

<!-- Target sections with matching id attributes -->
<h2 id="introduction">Introduction</h2>
<p>Welcome to the guide...</p>

<h2 id="lists">Lists</h2>
<p>Lists organize content...</p>

<h2 id="forms">Forms</h2>
<p>Forms collect user input...</p>

<!-- Link to top of page -->
<a href="#">Back to Top</a>
```

---

### Email and Phone Links

```html
<!-- Opens default email client -->
<a href="mailto:support@example.com">Email Support</a>

<!-- With subject and body pre-filled -->
<a href="mailto:support@example.com?subject=Help%20Request&body=Hello,">
  Email with Subject
</a>

<!-- Opens phone dialer on mobile -->
<a href="tel:+1-555-123-4567">Call Us: (555) 123-4567</a>
```

---

### Download Links

```html
<!-- Downloads the file instead of navigating -->
<a href="study-guide.pdf" download>Download PDF Guide</a>

<!-- Custom download filename -->
<a href="report-2026.pdf" download="Annual-Report-2026.pdf">
  Download Annual Report
</a>
```

---

### Image Links

Wrap an `<img>` inside an `<a>` to make images clickable.

```html
<a href="https://example.com" target="_blank" rel="noopener">
  <img src="logo.png" alt="Company Logo — click to visit website" width="200">
</a>
```

---

### `rel` Attribute Values

```html
<!-- Tells search engines not to follow this link -->
<a href="https://untrusted-site.com" rel="nofollow">Sponsored Link</a>

<!-- Indicates the current page in navigation -->
<a href="/about" rel="bookmark">About Us</a>

<!-- Links to the next page in a series -->
<a href="chapter2.html" rel="next">Next Chapter</a>
```

---

## 6. Image & Media Tags

Modern web pages rely heavily on images, video, audio, and embedded content.

### `<img>` — Image

**Syntax:** `<img src="url" alt="description" width="W" height="H" loading="lazy">`

| Attribute | Purpose |
|-----------|---------|
| `src` | Image file path or URL (required) |
| `alt` | Alternative text for accessibility and when image fails to load (required) |
| `width` / `height` | Dimensions in pixels (prevents layout shift) |
| `loading` | `lazy` defers loading until image is near viewport |
| `title` | Tooltip text |

```html
<!-- Basic image -->
<img src="photo.jpg" alt="Sunset over the mountains">

<!-- Sized image with lazy loading -->
<img
  src="hero-banner.jpg"
  alt="Team collaborating on a web project"
  width="800"
  height="400"
  loading="lazy"
>
```

---

### `<picture>` and `<source>` — Responsive Images

**Syntax:**

```html
<picture>
  <source media="(condition)" srcset="image">
  <img src="fallback.jpg" alt="description">
</picture>
```

```html
<picture>
  <!-- Serve WebP to browsers that support it -->
  <source srcset="photo.webp" type="image/webp">
  <!-- Serve AVIF to browsers that support it -->
  <source srcset="photo.avif" type="image/avif">
  <!-- Fallback for older browsers -->
  <img src="photo.jpg" alt="Landscape photograph" width="600" height="400">
</picture>

<!-- Art direction: different crops for different screens -->
<picture>
  <source media="(max-width: 600px)" srcset="photo-mobile.jpg">
  <source media="(min-width: 601px)" srcset="photo-desktop.jpg">
  <img src="photo-desktop.jpg" alt="Responsive photo" width="800" height="500">
</picture>
```

---

### `<figure>` and `<figcaption>` — Image with Caption

**Syntax:**

```html
<figure>
  <img src="image.jpg" alt="description">
  <figcaption>Caption text</figcaption>
</figure>
```

```html
<figure>
  <img src="html-structure.png" alt="Diagram showing HTML document structure" width="500">
  <figcaption>Figure 1: Basic HTML5 document structure</figcaption>
</figure>
```

---

### `<video>` — Video

**Syntax:** `<video src="file.mp4" controls autoplay loop muted poster="image.jpg"></video>`

| Attribute | Purpose |
|-----------|---------|
| `controls` | Shows play/pause, volume, fullscreen controls |
| `autoplay` | Starts playing automatically (often requires `muted`) |
| `loop` | Replays when finished |
| `muted` | Starts muted |
| `poster` | Thumbnail image before play |
| `width` / `height` | Video dimensions |

```html
<!-- Video with multiple source formats for browser compatibility -->
<video controls width="640" height="360" poster="video-thumbnail.jpg">
  <source src="tutorial.mp4" type="video/mp4">
  <source src="tutorial.webm" type="video/webm">
  <!-- Fallback text for browsers without video support -->
  Your browser does not support the video tag.
  <a href="tutorial.mp4">Download the video</a>
</video>

<!-- Background-style autoplay (muted required in most browsers) -->
<video autoplay loop muted playsinline>
  <source src="background.mp4" type="video/mp4">
</video>
```

---

### `<audio>` — Audio

**Syntax:** `<audio src="file.mp3" controls autoplay loop></audio>`

```html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>

<!-- Autoplay audio (use sparingly — poor UX) -->
<audio src="notification.mp3" autoplay></audio>
```

---

### `<iframe>` — Inline Frame (Embedding)

**Syntax:** `<iframe src="url" width="W" height="H" title="description"></iframe>`

Embeds another HTML page inside the current page.

```html
<!-- Embed a YouTube video -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="HTML Tutorial Video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

<!-- Embed Google Maps -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Office Location Map"
></iframe>
```

> **Always** include a descriptive `title` on iframes for screen reader accessibility.

---

### `<embed>`, `<object>`, and `<param>` — Legacy Embeds

Used for embedding external content like PDFs, Flash (deprecated), or plugins.

#### `<embed>`

**Syntax:** `<embed src="file" type="mime-type" width="W" height="H">`

```html
<embed src="document.pdf" type="application/pdf" width="600" height="400">
```

#### `<object>` and `<param>`

**Syntax:**

```html
<object data="file" type="mime-type" width="W" height="H">
  <param name="key" value="value">
  Fallback content
</object>
```

```html
<object data="chart.svg" type="image/svg+xml" width="400" height="300">
  <param name="color" value="blue">
  <!-- Shown if object cannot be rendered -->
  <p>Your browser cannot display this chart. <a href="chart.svg">Download SVG</a></p>
</object>
```

---

## 7. Table Tags

Tables display data in rows and columns. Use them for **tabular data only** — not for page layout (use CSS Grid/Flexbox instead).

### Basic Table Structure

**Syntax:**

```html
<table>
  <caption>Table Title</caption>
  <thead>
    <tr><th>Header</th></tr>
  </thead>
  <tbody>
    <tr><td>Data</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Footer</td></tr>
  </tfoot>
</table>
```

| Tag | Purpose |
|-----|---------|
| `<table>` | Table container |
| `<caption>` | Table title/caption |
| `<thead>` | Header section |
| `<tbody>` | Body section |
| `<tfoot>` | Footer section |
| `<tr>` | Table row |
| `<th>` | Header cell (bold, centered by default) |
| `<td>` | Data cell |

---

### Styled Table with Caption

```html
<table border="1" cellpadding="10" cellspacing="0">
  <!-- Table title -->
  <caption>Employee Directory — Q1 2026</caption>

  <!-- Column headers -->
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>

  <!-- Data rows -->
  <tbody>
    <tr>
      <td>001</td>
      <td>Alice Johnson</td>
      <td>Engineering</td>
      <td>$85,000</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Bob Smith</td>
      <td>Marketing</td>
      <td>$72,000</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Carol Lee</td>
      <td>Design</td>
      <td>$78,000</td>
    </tr>
  </tbody>

  <!-- Summary row -->
  <tfoot>
    <tr>
      <td colspan="3"><strong>Total Employees</strong></td>
      <td>3</td>
    </tr>
  </tfoot>
</table>
```

---

### `colspan` and `rowspan`

| Attribute | Purpose |
|-----------|---------|
| `colspan` | Cell spans multiple columns |
| `rowspan` | Cell spans multiple rows |
| `scope` | Defines header scope: `col`, `row`, `colgroup`, `rowgroup` |

```html
<table border="1" cellpadding="8">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Q1</th>
      <th scope="col">Q2</th>
      <th scope="col">Q3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <!-- rowspan: this cell spans 2 rows -->
      <th scope="row" rowspan="2">Laptops</th>
      <td>120</td>
      <td>150</td>
      <td>180</td>
    </tr>
    <tr>
      <td>Pro Model</td>
      <td>80</td>
      <td>95</td>
    </tr>
    <tr>
      <th scope="row">Phones</th>
      <!-- colspan: this cell spans 2 columns -->
      <td colspan="2">Combined: 500 units</td>
      <td>200</td>
    </tr>
  </tbody>
</table>
```

---

## 8. Form & Input Tags

Forms collect user input and send it to a server for processing.

### `<form>` — Form Container

**Syntax:** `<form action="url" method="GET|POST" enctype="type">`

| Attribute | Purpose |
|-----------|---------|
| `action` | URL where form data is sent |
| `method` | `GET` (data in URL) or `POST` (data in body) |
| `enctype` | Encoding type — `multipart/form-data` required for file uploads |

```html
<form action="/submit" method="POST" enctype="multipart/form-data">
  <!-- Form fields go here -->
</form>
```

---

### All `<input>` Types

**Syntax:** `<input type="type" name="name" id="id" value="value">`

#### Text-Based Inputs

```html
<!-- Single-line text -->
<input type="text" name="username" id="username" placeholder="Enter username">

<!-- Password (characters hidden) -->
<input type="password" name="password" id="password" placeholder="Enter password">

<!-- Email with built-in format validation -->
<input type="email" name="email" id="email" placeholder="you@example.com">

<!-- Telephone number -->
<input type="tel" name="phone" id="phone" placeholder="+1-555-000-0000">

<!-- URL with format validation -->
<input type="url" name="website" id="website" placeholder="https://example.com">

<!-- Numeric input with spinner controls -->
<input type="number" name="age" id="age" min="1" max="120" step="1">

<!-- Hidden field (not visible, sent with form) -->
<input type="hidden" name="csrf_token" value="abc123xyz">
```

#### Date & Time Inputs

```html
<!-- Date picker -->
<input type="date" name="birthdate" id="birthdate">

<!-- Time picker -->
<input type="time" name="appointment" id="appointment">

<!-- Date and time (local timezone) -->
<input type="datetime-local" name="meeting" id="meeting">

<!-- Month and year picker -->
<input type="month" name="billing_month" id="billing_month">

<!-- Week picker -->
<input type="week" name="project_week" id="project_week">
```

#### Special Inputs

```html
<!-- Color picker -->
<input type="color" name="theme_color" id="theme_color" value="#3366cc">

<!-- Range slider -->
<input type="range" name="volume" id="volume" min="0" max="100" value="50">

<!-- File upload -->
<input type="file" name="resume" id="resume" accept=".pdf,.doc,.docx">

<!-- Multiple file upload -->
<input type="file" name="photos" id="photos" accept="image/*" multiple>
```

#### Selection Inputs

```html
<!-- Checkbox -->
<input type="checkbox" name="subscribe" id="subscribe" value="yes">
<label for="subscribe">Subscribe to newsletter</label>

<!-- Radio buttons (same name = one group) -->
<input type="radio" name="plan" id="plan_free" value="free">
<label for="plan_free">Free Plan</label>

<input type="radio" name="plan" id="plan_pro" value="pro">
<label for="plan_pro">Pro Plan</label>
```

#### Action Buttons

```html
<!-- Submit form -->
<input type="submit" value="Submit Form">

<!-- Reset all fields to defaults -->
<input type="reset" value="Clear Form">

<!-- Generic button (use <button> instead for better semantics) -->
<input type="button" value="Click Me" onclick="alert('Hello!')">

<!-- Image as submit button -->
<input type="image" src="submit-btn.png" alt="Submit" width="100" height="40">
```

---

### `<textarea>` — Multi-Line Text

**Syntax:** `<textarea name="name" rows="R" cols="C">default text</textarea>`

```html
<label for="message">Your Message:</label>
<textarea
  name="message"
  id="message"
  rows="5"
  cols="40"
  placeholder="Type your message here..."
  maxlength="500"
></textarea>
```

---

### `<select>`, `<option>`, and `<optgroup>`

**Syntax:**

```html
<select name="name" id="id">
  <optgroup label="Group">
    <option value="val">Label</option>
  </optgroup>
</select>
```

```html
<label for="country">Country:</label>
<select name="country" id="country">
  <option value="">-- Select a country --</option>
  <optgroup label="North America">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
  </optgroup>
  <optgroup label="Europe">
    <option value="uk">United Kingdom</option>
    <option value="de">Germany</option>
    <option value="fr">France</option>
  </optgroup>
</select>

<!-- Multi-select dropdown -->
<label for="skills">Skills:</label>
<select name="skills" id="skills" multiple size="4">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="python">Python</option>
</select>
```

---

### `<label>` — Input Label

**Syntax:** `<label for="input-id">Label Text</label>`

Associates clickable text with a form control. Critical for accessibility.

```html
<!-- Explicit association with for/id -->
<label for="email">Email Address:</label>
<input type="email" id="email" name="email">

<!-- Implicit association (label wraps input) -->
<label>
  <input type="checkbox" name="terms" value="accepted">
  I agree to the Terms of Service
</label>
```

---

### `<fieldset>` and `<legend>` — Grouped Fields

**Syntax:**

```html
<fieldset>
  <legend>Group Title</legend>
  <!-- fields -->
</fieldset>
```

```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="fname">First Name:</label>
  <input type="text" id="fname" name="fname"><br><br>

  <label for="lname">Last Name:</label>
  <input type="text" id="lname" name="lname">
</fieldset>

<fieldset>
  <legend>Shipping Address</legend>
  <label for="street">Street:</label>
  <input type="text" id="street" name="street"><br><br>

  <label for="zip">ZIP Code:</label>
  <input type="text" id="zip" name="zip">
</fieldset>
```

---

### `<datalist>` — Input Suggestions

**Syntax:** `<datalist id="id"><option value="suggestion"></datalist>`

Provides autocomplete suggestions for an input.

```html
<label for="browser">Choose a browser:</label>
<input type="text" id="browser" name="browser" list="browsers">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
  <option value="Opera">
</datalist>
```

---

### `<output>` — Calculation Result

**Syntax:** `<output name="name" for="input-ids">value</output>`

Displays the result of a calculation.

```html
<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" name="a" value="10"> +
  <input type="number" id="b" name="b" value="20"> =
  <output name="result" for="a b">30</output>
</form>
```

---

### `<meter>` — Scalar Measurement

**Syntax:** `<meter value="V" min="min" max="max" low="L" high="H" optimum="O">`

Shows a value within a known range (e.g., disk usage).

```html
<label for="disk">Disk Usage:</label>
<meter id="disk" value="72" min="0" max="100" low="30" high="75" optimum="50">
  72%
</meter>
```

---

### `<progress>` — Task Progress

**Syntax:** `<progress value="V" max="max">`

Shows completion progress of a task.

```html
<label for="upload">Upload Progress:</label>
<progress id="upload" value="65" max="100">65%</progress>
```

---

### Form Validation Attributes

| Attribute | Applies To | Purpose |
|-----------|-----------|---------|
| `required` | Most inputs | Field must be filled |
| `pattern` | text, tel, email, url, password | Regex validation |
| `min` / `max` | number, date, range | Minimum/maximum value |
| `minlength` / `maxlength` | text, textarea, password | Character length limits |
| `placeholder` | text inputs, textarea | Hint text inside field |
| `readonly` | Most inputs | Visible but not editable |
| `disabled` | Most inputs | Grayed out, not submitted |
| `autofocus` | Most inputs | Focus on page load |
| `autocomplete` | Most inputs | `on` or `off` for browser autofill |

**Complete Validated Form Example:**

```html
<form action="/register" method="POST" novalidate>
  <fieldset>
    <legend>Create Account</legend>

    <!-- Required email with pattern -->
    <label for="reg-email">Email *</label>
    <input
      type="email"
      id="reg-email"
      name="email"
      required
      placeholder="you@example.com"
      autocomplete="email"
      autofocus
    ><br><br>

    <!-- Password with minimum length -->
    <label for="reg-pass">Password *</label>
    <input
      type="password"
      id="reg-pass"
      name="password"
      required
      minlength="8"
      maxlength="64"
      placeholder="Min 8 characters"
      autocomplete="new-password"
    ><br><br>

    <!-- Phone with pattern -->
    <label for="reg-phone">Phone</label>
    <input
      type="tel"
      id="reg-phone"
      name="phone"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      placeholder="555-123-4567"
      title="Format: 555-123-4567"
    ><br><br>

    <!-- Age with min/max -->
    <label for="reg-age">Age *</label>
    <input
      type="number"
      id="reg-age"
      name="age"
      required
      min="18"
      max="100"
    ><br><br>

    <!-- URL field -->
    <label for="reg-website">Website</label>
    <input
      type="url"
      id="reg-website"
      name="website"
      placeholder="https://yoursite.com"
    ><br><br>

    <!-- Date of birth -->
    <label for="reg-dob">Date of Birth</label>
    <input type="date" id="reg-dob" name="dob" max="2010-01-01"><br><br>

    <!-- Readonly field -->
    <label for="reg-id">User ID</label>
    <input type="text" id="reg-id" name="user_id" value="USR-2026-001" readonly><br><br>

    <!-- Disabled field (not submitted) -->
    <label for="reg-beta">Beta Feature</label>
    <input type="text" id="reg-beta" name="beta" value="Coming soon" disabled><br><br>

    <!-- Required checkbox -->
    <label>
      <input type="checkbox" name="terms" required>
      I agree to the <a href="/terms">Terms of Service</a> *
    </label><br><br>

    <input type="submit" value="Register">
    <input type="reset" value="Clear">
  </fieldset>
</form>
```

---

## 9. Semantic & Layout Tags

Semantic HTML uses meaningful tags that describe content purpose. This improves SEO, accessibility, and code readability.

### Structural Semantic Tags

| Tag | Purpose |
|-----|---------|
| `<header>` | Introductory content or navigation bar |
| `<nav>` | Navigation links section |
| `<main>` | Primary unique content (one per page) |
| `<section>` | Thematic grouping of content |
| `<article>` | Self-contained, independently distributable content |
| `<aside>` | Sidebar or tangentially related content |
| `<footer>` | Footer for a page or section |

```html
<body>
  <!-- Site header with logo and navigation -->
  <header>
    <h1>Tech Blog</h1>
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/articles">Articles</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <!-- Primary page content -->
  <main>
    <!-- Blog article -->
    <article>
      <header>
        <h2>Getting Started with HTML</h2>
        <p>Published on <time datetime="2026-06-13">June 13, 2026</time></p>
      </header>
      <p>HTML is the backbone of the web...</p>
      <footer>
        <p>Written by <address>Jane Developer</address></p>
      </footer>
    </article>

    <!-- Thematic section -->
    <section>
      <h2>Related Topics</h2>
      <p>Explore CSS and JavaScript next.</p>
    </section>
  </main>

  <!-- Sidebar content -->
  <aside>
    <h3>Popular Posts</h3>
    <ul>
      <li><a href="#">CSS Flexbox Guide</a></li>
      <li><a href="#">JavaScript Basics</a></li>
    </ul>
  </aside>

  <!-- Site footer -->
  <footer>
    <p>&copy; 2026 Tech Blog. All rights reserved.</p>
  </footer>
</body>
```

---

### Generic Containers — `<div>` and `<span>`

| Tag | Display | Use |
|-----|---------|-----|
| `<div>` | Block | Generic container for layout/grouping |
| `<span>` | Inline | Generic inline wrapper |

Use semantic tags first; reach for `<div>`/`<span>` only when no semantic tag fits.

```html
<!-- div: block-level grouping -->
<div class="card">
  <h3>Product Name</h3>
  <p>Product description here.</p>
</div>

<!-- span: inline styling/highlighting -->
<p>Price: <span class="price">$29.99</span> <span class="badge">Sale</span></p>
```

---

### Interactive Disclosure — `<details>` and `<summary>`

**Syntax:**

```html
<details>
  <summary>Click to expand</summary>
  Hidden content here.
</details>
```

```html
<details>
  <summary>What is HTML?</summary>
  <p>HTML (HyperText Markup Language) is the standard markup language for web pages.</p>
</details>

<details open>
  <summary>FAQ: Do I need to install HTML?</summary>
  <p>No. HTML is written in plain text files and opened in any web browser.</p>
</details>
```

---

### `<dialog>` — Modal Dialog

**Syntax:** `<dialog open>content</dialog>`

```html
<button onclick="document.getElementById('myDialog').showModal()">
  Open Dialog
</button>

<dialog id="myDialog">
  <h2>Confirm Action</h2>
  <p>Are you sure you want to proceed?</p>
  <button onclick="document.getElementById('myDialog').close()">Cancel</button>
  <button onclick="document.getElementById('myDialog').close()">Confirm</button>
</dialog>
```

---

### `<template>` — Reusable HTML Template

**Syntax:** `<template>HTML content</template>`

Content inside `<template>` is inert — not rendered until cloned by JavaScript.

```html
<template id="card-template">
  <div class="card">
    <h3 class="card-title"></h3>
    <p class="card-body"></p>
  </div>
</template>

<script>
  // Clone and use the template
  const template = document.getElementById('card-template');
  const clone = template.content.cloneNode(true);
  clone.querySelector('.card-title').textContent = 'HTML Basics';
  clone.querySelector('.card-body').textContent = 'Learn the fundamentals.';
  document.body.appendChild(clone);
</script>
```

---

### `<slot>` — Web Component Content Placeholder

Used inside Web Components (Custom Elements) to define where external content is inserted.

```html
<!-- Defined inside a custom element's shadow DOM -->
<template id="user-card-template">
  <style>
    .card { border: 1px solid #ccc; padding: 16px; }
  </style>
  <div class="card">
    <h3><slot name="title">Default Title</slot></h3>
    <p><slot name="body">Default body text.</slot></p>
    <slot></slot> <!-- Default slot for unmarked content -->
  </div>
</template>
```

---

## 10. Script & Interactive Tags

### `<script>` — JavaScript

#### Inline Script

```html
<script>
  // Inline JavaScript runs when the browser reaches this tag
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready!');
  });
</script>
```

#### External Script

```html
<!-- Standard: downloads and executes immediately (blocks parsing) -->
<script src="app.js"></script>

<!-- defer: downloads in parallel, executes after HTML is parsed -->
<script src="analytics.js" defer></script>

<!-- async: downloads in parallel, executes as soon as ready (order not guaranteed) -->
<script src="ads.js" async></script>
```

| Attribute | Behavior |
|-----------|----------|
| (none) | Blocks HTML parsing while downloading and executing |
| `defer` | Executes after document is parsed; maintains order |
| `async` | Executes immediately when ready; order not guaranteed |
| `type="module"` | ES6 module — automatically deferred |

```html
<!-- ES6 Module -->
<script type="module" src="main.js"></script>

<!-- Inline module -->
<script type="module">
  import { greet } from './utils.js';
  greet('World');
</script>
```

**Best Practice:** Place scripts at the end of `<body>`, or use `defer` in `<head>`.

---

### `<noscript>` — Fallback for No JavaScript

**Syntax:** `<noscript>Fallback content</noscript>`

```html
<noscript>
  <p style="color: red; font-weight: bold;">
    JavaScript is disabled. Some features of this site will not work.
  </p>
</noscript>
```

---

### `<canvas>` — Drawing Graphics

**Syntax:** `<canvas id="id" width="W" height="H"></canvas>`

A bitmap drawing surface controlled by JavaScript.

```html
<canvas id="myCanvas" width="400" height="200" role="img" aria-label="Blue rectangle on canvas">
  Your browser does not support canvas.
</canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = '#3366cc';
  ctx.fillRect(50, 50, 300, 100);

  // Draw text
  ctx.fillStyle = '#ffffff';
  ctx.font = '20px Arial';
  ctx.fillText('Hello, Canvas!', 120, 110);
</script>
```

---

### `<svg>` — Scalable Vector Graphics (Basics)

**Syntax:** Inline SVG inside HTML

```html
<!-- Inline SVG: scales without losing quality -->
<svg width="200" height="200" viewBox="0 0 200 200" role="img" aria-label="Red circle">
  <!-- Circle: center (100,100), radius 80, red fill -->
  <circle cx="100" cy="100" r="80" fill="#e74c3c" />

  <!-- Rectangle -->
  <rect x="10" y="10" width="50" height="30" fill="#3498db" rx="5" />

  <!-- Text -->
  <text x="100" y="105" text-anchor="middle" fill="white" font-size="16">SVG</text>
</svg>
```

---

## 11. HTML5 Advanced & Pro Features

### Data Attributes — `data-*`

**Syntax:** `data-attribute-name="value"`

Store custom data on any HTML element. Access via JavaScript with `element.dataset`.

```html
<button
  id="add-to-cart"
  data-product-id="SKU-12345"
  data-product-name="Wireless Mouse"
  data-price="29.99"
  data-currency="USD"
>
  Add to Cart
</button>

<script>
  const btn = document.getElementById('add-to-cart');
  // dataset converts data-product-id → productId
  console.log(btn.dataset.productId);   // "SKU-12345"
  console.log(btn.dataset.productName); // "Wireless Mouse"
  console.log(btn.dataset.price);       // "29.99"
</script>
```

---

### ARIA — Accessibility Attributes

ARIA (Accessible Rich Internet Applications) improves accessibility for assistive technologies.

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `role` | Defines element's purpose | `role="navigation"` |
| `aria-label` | Accessible name when visible text isn't enough | `aria-label="Close menu"` |
| `aria-hidden` | Hides decorative elements from screen readers | `aria-hidden="true"` |
| `tabindex` | Controls keyboard tab order | `tabindex="0"` |

```html
<!-- Icon button with accessible label -->
<button aria-label="Close dialog" onclick="closeDialog()">
  <span aria-hidden="true">&times;</span>
</button>

<!-- Custom navigation with ARIA role -->
<nav role="navigation" aria-label="Main menu">
  <ul role="menubar">
    <li role="none"><a href="/" role="menuitem">Home</a></li>
    <li role="none"><a href="/about" role="menuitem">About</a></li>
  </ul>
</nav>

<!-- Live region: announces dynamic updates to screen readers -->
<div aria-live="polite" id="status-message"></div>

<!-- Skip navigation link for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

### Open Graph and Twitter Card Meta Tags

Control how your page appears when shared on social media.

```html
<head>
  <!-- Open Graph (Facebook, LinkedIn, etc.) -->
  <meta property="og:title" content="Complete HTML Study Guide">
  <meta property="og:description" content="Learn HTML from beginner to pro.">
  <meta property="og:image" content="https://example.com/images/og-image.jpg">
  <meta property="og:url" content="https://example.com/html-guide">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="QA Transformation">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Complete HTML Study Guide">
  <meta name="twitter:description" content="Learn HTML from beginner to pro.">
  <meta name="twitter:image" content="https://example.com/images/twitter-card.jpg">
  <meta name="twitter:site" content="@QATransform">
</head>
```

---

### HTML Entities

Special characters that cannot be typed directly or have special meaning in HTML.

| Entity | Character | Description |
|--------|-----------|-------------|
| `&amp;` | & | Ampersand |
| `&lt;` | < | Less than |
| `&gt;` | > | Greater than |
| `&quot;` | " | Double quote |
| `&apos;` | ' | Apostrophe |
| `&nbsp;` | (non-breaking space) | Prevents line break |
| `&copy;` | © | Copyright |
| `&reg;` | ® | Registered trademark |
| `&trade;` | ™ | Trademark |
| `&euro;` | € | Euro sign |
| `&pound;` | £ | Pound sign |
| `&yen;` | ¥ | Yen sign |
| `&deg;` | ° | Degree |
| `&times;` | × | Multiplication |
| `&divide;` | ÷ | Division |
| `&hearts;` | ♥ | Heart |
| `&rarr;` | → | Right arrow |
| `&larr;` | ← | Left arrow |

```html
<p>
  Copyright &copy; 2026 QA Transformation&reg;<br>
  Price: &euro;29.99 &nbsp;&nbsp; Rating: 4.5&deg;<br>
  5 &times; 3 = 15 &nbsp;|&nbsp; 10 &divide; 2 = 5<br>
  Use <code>&lt;div&gt;</code> for block containers.<br>
  Temperature: 25&deg;C &rarr; 77&deg;F
</p>
```

---

### Responsive HTML

#### Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### Responsive Images with `srcset` and `sizes`

**Syntax:** `<img srcset="url W, url 2x" sizes="(condition) size, default" src="fallback" alt="">`

```html
<!-- Resolution switching: browser picks best image -->
<img
  src="photo-small.jpg"
  srcset="photo-small.jpg 400w,
          photo-medium.jpg 800w,
          photo-large.jpg 1200w"
  sizes="(max-width: 600px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  alt="Responsive landscape photo"
  loading="lazy"
>

<!-- Pixel density switching -->
<img
  src="icon.png"
  srcset="icon.png 1x, icon-2x.png 2x, icon-3x.png 3x"
  alt="App icon"
  width="64"
  height="64"
>
```

---

## 12. Best Practices & Pro Tips

### SEO-Friendly HTML Structure

1. **One `<h1>` per page** — clear main topic.
2. **Logical heading hierarchy** — don't skip levels (h1 → h2 → h3).
3. **Descriptive `<title>` and `<meta description>`** — unique per page.
4. **Semantic HTML** — use `<article>`, `<nav>`, `<main>` instead of div soup.
5. **Meaningful `alt` text** on all images.
6. **Clean URLs in links** — descriptive anchor text, not "click here."
7. **Canonical URL** to prevent duplicate content issues.

```html
<head>
  <title>HTML Forms Tutorial — QA Transformation</title>
  <meta name="description" content="Master HTML forms with input types, validation, and accessibility.">
  <link rel="canonical" href="https://example.com/tutorials/html-forms">
</head>
```

---

### Accessibility Standards (WCAG Basics)

| Principle | Practice |
|-----------|----------|
| **Perceivable** | Alt text, sufficient contrast, captions for media |
| **Operable** | Keyboard navigation, focus indicators, skip links |
| **Understandable** | Clear labels, error messages, consistent navigation |
| **Robust** | Valid HTML, ARIA where needed, works with assistive tech |

**Checklist:**

- [ ] All images have descriptive `alt` attributes
- [ ] All form inputs have associated `<label>` elements
- [ ] Color is not the only means of conveying information
- [ ] Focus order is logical (`tabindex` only when necessary)
- [ ] Interactive elements are keyboard accessible
- [ ] Page has a `<main>` landmark and skip navigation link
- [ ] Language is set: `<html lang="en">`

---

### Page Performance Tips

1. **Lazy load images:** `loading="lazy"` on below-fold images.
2. **Defer non-critical scripts:** `<script src="app.js" defer>`.
3. **Preload critical resources:** `<link rel="preload">`.
4. **Use modern image formats:** WebP/AVIF with fallbacks via `<picture>`.
5. **Minimize DOM depth** — flatter DOM = faster rendering.
6. **Specify image dimensions** — prevents Cumulative Layout Shift (CLS).

```html
<head>
  <!-- Preload critical font -->
  <link rel="preload" href="fonts/main.woff2" as="font" type="font/woff2" crossorigin>
  <!-- Defer analytics (non-blocking) -->
  <script src="analytics.js" defer></script>
</head>
<body>
  <!-- Hero image: load immediately -->
  <img src="hero.webp" alt="Welcome banner" width="1200" height="600">
  <!-- Below-fold: lazy load -->
  <img src="gallery-1.webp" alt="Gallery photo 1" width="400" height="300" loading="lazy">
</body>
```

---

### HTML Validation and Common Mistakes

**Validate your HTML:** Use the [W3C Markup Validation Service](https://validator.w3.org/).

| Mistake | Fix |
|---------|-----|
| Missing `<!DOCTYPE html>` | Always declare DOCTYPE |
| Missing `alt` on images | Add descriptive alt text |
| Using `<b>` instead of `<strong>` for importance | Use semantic tags |
| Block elements inside `<p>` | `<p>` can only contain inline content |
| Multiple `<h1>` tags | One h1 per page |
| Empty `href="#"` with no purpose | Use `<button>` for actions, not links |
| Tables for layout | Use CSS Grid/Flexbox |
| Inline styles everywhere | Use external CSS |
| Missing `lang` attribute | Add `<html lang="en">` |
| Self-closing syntax errors | `<br>`, `<img>`, `<input>` don't need `/>` in HTML5 |

---

## Complete Real-World Webpage Template

This final example combines all major concepts into one working HTML page. Save as `complete-example.html` and open in your browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ===== HEAD SECTION ===== -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A complete HTML example combining all major tags and concepts.">
  <meta name="keywords" content="HTML, example, template, web development">
  <meta name="author" content="QA Transformation">

  <!-- Open Graph -->
  <meta property="og:title" content="Complete HTML Example Page">
  <meta property="og:description" content="Real-world HTML template with all major tags.">
  <meta property="og:type" content="website">

  <title>Complete HTML Example — QA Transformation</title>

  <!-- External stylesheet -->
  <link rel="stylesheet" href="styles.css">

  <!-- Internal styles for this demo -->
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: 0 auto; padding: 20px; }
    header { background: #2c3e50; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    nav a { color: #ecf0f1; margin-right: 15px; text-decoration: none; }
    nav a:hover { text-decoration: underline; }
    section { margin-bottom: 30px; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
    h2 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 8px; margin-bottom: 15px; }
    table { width: 100%; border-collapse: collapse; margin: 10px 0; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background: #3498db; color: white; }
    footer { text-align: center; padding: 20px; background: #2c3e50; color: white; border-radius: 8px; margin-top: 20px; }
    .skip-link { position: absolute; top: -40px; left: 0; background: #e74c3c; color: white; padding: 8px; }
    .skip-link:focus { top: 0; }
  </style>
</head>

<body>
  <!-- Skip link for keyboard users -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- ===== SEMANTIC HEADER ===== -->
  <header>
    <h1>Complete HTML Example Page</h1>
    <p><small>A real-world template combining all major HTML concepts</small></p>
    <nav aria-label="Main navigation">
      <a href="#text-section">Text</a>
      <a href="#lists-section">Lists</a>
      <a href="#media-section">Media</a>
      <a href="#table-section">Tables</a>
      <a href="#form-section">Forms</a>
    </nav>
  </header>

  <!-- ===== MAIN CONTENT ===== -->
  <main id="main-content">

    <!-- TEXT & TYPOGRAPHY -->
    <section id="text-section">
      <h2>Text &amp; Typography</h2>
      <p>
        HTML uses <strong>semantic tags</strong> like <em>emphasis</em>,
        <mark>highlights</mark>, and <code>inline code</code>.
        Water formula: H<sub>2</sub>O. Formula: E=mc<sup>2</sup>.
      </p>
      <blockquote cite="https://example.com">
        <p>The best way to learn HTML is by building real projects.</p>
      </blockquote>
      <p>
        <abbr title="HyperText Markup Language">HTML</abbr> was created by
        <cite>Tim Berners-Lee</cite>. Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save.
      </p>
      <p>Price: <del>$50</del> <ins>$35</ins> &copy; 2026</p>
      <hr>
    </section>

    <!-- LISTS -->
    <section id="lists-section">
      <h2>Lists</h2>
      <div>
        <h3>Unordered List</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div>
        <h3>Ordered List</h3>
        <ol>
          <li>Learn HTML structure</li>
          <li>Style with CSS</li>
          <li>Add interactivity with JS</li>
        </ol>
      </div>
      <div>
        <h3>Description List</h3>
        <dl>
          <dt>HTML</dt>
          <dd>Structures content</dd>
          <dt>CSS</dt>
          <dd>Styles content</dd>
        </dl>
      </div>
    </section>

    <!-- LINKS -->
    <section>
      <h2>Links &amp; Navigation</h2>
      <p>
        <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Docs</a> |
        <a href="mailto:info@example.com">Email Us</a> |
        <a href="tel:+15551234567">Call Us</a> |
        <a href="#main-content">Back to Top</a>
      </p>
    </section>

    <!-- MEDIA -->
    <section id="media-section">
      <h2>Images &amp; Media</h2>
      <figure>
        <img
          src="https://via.placeholder.com/600x300/3498db/ffffff?text=HTML+Example"
          alt="Placeholder image demonstrating img tag"
          width="600"
          height="300"
          loading="lazy"
        >
        <figcaption>Figure 1: Example image with figcaption</figcaption>
      </figure>

      <details>
        <summary>View Video Example Code</summary>
        <pre><code>&lt;video controls width="640"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;</code></pre>
      </details>
    </section>

    <!-- TABLE -->
    <section id="table-section">
      <h2>Tables</h2>
      <table>
        <caption>Course Schedule</caption>
        <thead>
          <tr>
            <th scope="col">Week</th>
            <th scope="col">Topic</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>HTML Basics</td>
            <td><mark>Complete</mark></td>
          </tr>
          <tr>
            <td>2</td>
            <td>CSS Styling</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <td colspan="2"><strong>Total Weeks</strong></td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- FORM -->
    <section id="form-section">
      <h2>Forms</h2>
      <form action="/submit" method="POST">
        <fieldset>
          <legend>Contact Form</legend>

          <label for="name">Name *</label><br>
          <input type="text" id="name" name="name" required placeholder="Your name" autofocus><br><br>

          <label for="email">Email *</label><br>
          <input type="email" id="email" name="email" required placeholder="you@example.com"><br><br>

          <label for="phone">Phone</label><br>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="555-123-4567"><br><br>

          <label for="topic">Topic</label><br>
          <select id="topic" name="topic">
            <option value="">-- Select --</option>
            <optgroup label="Technical">
              <option value="html">HTML Help</option>
              <option value="css">CSS Help</option>
            </optgroup>
            <optgroup label="General">
              <option value="feedback">Feedback</option>
            </optgroup>
          </select><br><br>

          <label for="msg">Message</label><br>
          <textarea id="msg" name="message" rows="4" cols="40" maxlength="500" placeholder="Your message..."></textarea><br><br>

          <label>
            <input type="checkbox" name="newsletter" value="yes">
            Subscribe to newsletter
          </label><br><br>

          <label>Priority:</label>
          <input type="radio" name="priority" value="low" id="low">
          <label for="low">Low</label>
          <input type="radio" name="priority" value="high" id="high">
          <label for="high">High</label><br><br>

          <label for="satisfaction">Satisfaction:</label>
          <meter id="satisfaction" value="0.8" min="0" max="1" low="0.3" high="0.7" optimum="1">80%</meter><br><br>

          <label for="progress">Form Progress:</label>
          <progress id="progress" value="75" max="100">75%</progress><br><br>

          <input type="submit" value="Send Message">
          <input type="reset" value="Clear">
        </fieldset>
      </form>
    </section>

    <!-- INTERACTIVE -->
    <section>
      <h2>Interactive Elements</h2>
      <button
        type="button"
        data-action="greet"
        aria-label="Click to see a greeting"
        onclick="document.getElementById('greeting').textContent = 'Hello from HTML!'"
      >
        Click Me
      </button>
      <p id="greeting" aria-live="polite"></p>

      <canvas id="demoCanvas" width="300" height="100" role="img" aria-label="Blue gradient bar" style="margin-top:10px; border:1px solid #ddd;"></canvas>
    </section>

  </main>

  <!-- ===== SIDEBAR ===== -->
  <aside style="margin-top:20px; padding:15px; background:#ecf0f1; border-radius:8px;">
    <h3>Quick Reference</h3>
    <ul>
      <li><a href="https://validator.w3.org/">W3C Validator</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN HTML Reference</a></li>
    </ul>
  </aside>

  <!-- ===== FOOTER ===== -->
  <footer>
    <p>&copy; 2026 QA Transformation. All rights reserved.</p>
    <p><small>Built with semantic HTML5 &amp; accessibility in mind.</small></p>
  </footer>

  <!-- ===== SCRIPTS ===== -->
  <noscript>
    <p style="color:red; font-weight:bold;">JavaScript is disabled. Interactive features are unavailable.</p>
  </noscript>

  <script defer>
    // Draw on canvas when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
      const canvas = document.getElementById('demoCanvas');
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 300, 0);
      gradient.addColorStop(0, '#3498db');
      gradient.addColorStop(1, '#2c3e50');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 300, 100);
      ctx.fillStyle = '#fff';
      ctx.font = '16px Arial';
      ctx.fillText('Canvas Demo', 100, 55);
    });
  </script>
</body>
</html>
```

---

## Quick Reference — All Tags Covered

| Category | Tags |
|----------|------|
| Document | `<!DOCTYPE>`, `<html>`, `<head>`, `<body>` |
| Head | `<title>`, `<meta>`, `<link>`, `<style>`, `<script>`, `<base>` |
| Text | `<h1>`–`<h6>`, `<p>`, `<br>`, `<hr>`, `<b>`, `<strong>`, `<i>`, `<em>`, `<u>`, `<s>`, `<mark>`, `<small>`, `<big>`, `<sub>`, `<sup>` |
| Semantic Text | `<abbr>`, `<cite>`, `<code>`, `<pre>`, `<kbd>`, `<samp>`, `<var>`, `<blockquote>`, `<q>`, `<del>`, `<ins>` |
| Lists | `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>` |
| Links | `<a>` |
| Media | `<img>`, `<picture>`, `<source>`, `<figure>`, `<figcaption>`, `<video>`, `<audio>`, `<iframe>`, `<embed>`, `<object>`, `<param>` |
| Tables | `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>` |
| Forms | `<form>`, `<input>`, `<textarea>`, `<select>`, `<option>`, `<optgroup>`, `<label>`, `<fieldset>`, `<legend>`, `<datalist>`, `<output>`, `<meter>`, `<progress>`, `<button>` |
| Semantic Layout | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<div>`, `<span>` |
| Interactive | `<details>`, `<summary>`, `<dialog>`, `<template>`, `<slot>` |
| Script/Media | `<script>`, `<noscript>`, `<canvas>`, `<svg>` |

---

*End of HTML Study Guide. Practice by building projects, validating with W3C, and reading the [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).*
