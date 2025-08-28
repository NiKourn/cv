# CV Website

This repository contains a dynamic CV website. The website loads all content from a `cv.json` file and uses semantic HTML for accessibility and structure. It's fully responsive and designed to be easily hosted on GitHub Pages.

## Features

- **Dynamic Content:** All CV data (header, summary, experience, skills, education, interests) is loaded from `cv.json`.
- **Semantic HTML:** Uses `<header>`, `<section>`, `<article>` for better structure.
- **Loader:** Displays a loading screen while the content is being fetched.
- **Professional Layout:** Clean layout with dividers, multi-column skills, and proper spacing.
- **Clickable Links:** Email and GitHub links are clickable.

## Folder Structure

<pre class="overflow-visible!" data-start="825" data-end="903"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>cv/
├─ assets/
│  └─ favicon.svg
├─ cv.json
├─ </span><span>index</span><span>.html
└─ README.md
</span></span></code></div></div></pre>

- `assets/` — Contains favicon and other static assets.
- `cv.json` — Stores all CV content.
- `index.html` — Main HTML file.
- `README.md` — This file.

## JSON Structure (`cv.json`)

<pre class="overflow-visible!" data-start="1096" data-end="1878"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"header"</span><span>:</span><span></span><span>{</span><span>
    </span><span>"name"</span><span>:</span><span></span><span>"Your Name"</span><span>,</span><span>
    </span><span>"title"</span><span>:</span><span></span><span>"Your Title"</span><span>,</span><span>
    </span><span>"location"</span><span>:</span><span></span><span>"Your Location"</span><span>,</span><span>
    </span><span>"phone"</span><span>:</span><span></span><span>"Your Phone"</span><span>,</span><span>
    </span><span>"email"</span><span>:</span><span></span><span>"Your Email"</span><span>,</span><span>
    </span><span>"github"</span><span>:</span><span></span><span>"Your GitHub URL"</span><span>
  </span><span>}</span><span>,</span><span>
  </span><span>"summary"</span><span>:</span><span></span><span>"Short professional summary..."</span><span>,</span><span>
  </span><span>"experience"</span><span>:</span><span></span><span>[</span><span>
    </span><span>{</span><span>
      </span><span>"company"</span><span>:</span><span></span><span>"Company Name"</span><span>,</span><span>
      </span><span>"role"</span><span>:</span><span></span><span>"Role"</span><span>,</span><span>
      </span><span>"period"</span><span>:</span><span></span><span>"Start – End"</span><span>,</span><span>
      </span><span>"location"</span><span>:</span><span></span><span>"City, Country"</span><span>,</span><span>
      </span><span>"items"</span><span>:</span><span></span><span>[</span><span>
        </span><span>"Responsibility 1"</span><span>,</span><span>
        </span><span>"Responsibility 2"</span><span>
      </span><span>]</span><span>
    </span><span>}</span><span>
  </span><span>]</span><span>,</span><span>
  </span><span>"skills"</span><span>:</span><span></span><span>[</span><span>
    </span><span>{</span><span>
      </span><span>"title"</span><span>:</span><span></span><span>"Frontend"</span><span>,</span><span>
      </span><span>"items"</span><span>:</span><span></span><span>[</span><span>"Skill 1"</span><span>,</span><span></span><span>"Skill 2"</span><span>]</span><span>
    </span><span>}</span><span>,</span><span>
    </span><span>{</span><span>
      </span><span>"title"</span><span>:</span><span></span><span>"Backend & APIs"</span><span>,</span><span>
      </span><span>"items"</span><span>:</span><span></span><span>[</span><span>"Skill 1"</span><span>,</span><span></span><span>"Skill 2"</span><span>]</span><span>
    </span><span>}</span><span>
  </span><span>]</span><span>,</span><span>
  </span><span>"education"</span><span>:</span><span></span><span>[</span><span>
    </span><span>"Education 1"</span><span>,</span><span>
    </span><span>"Education 2"</span><span>
  </span><span>]</span><span>,</span><span>
  </span><span>"interests"</span><span>:</span><span></span><span>[</span><span>
    </span><span>"Interest 1"</span><span>,</span><span>
    </span><span>"Interest 2"</span><span>
  </span><span>]</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

## Running Locally

**Option 1: Using Python (recommended)**

Python 3:

<pre class="overflow-visible!" data-start="1953" data-end="2006"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> path/to/cv
python3 -m http.server 8000
</span></span></code></div></div></pre>

Python 2:

<pre class="overflow-visible!" data-start="2019" data-end="2076"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> path/to/cv
python -m SimpleHTTPServer 8000
</span></span></code></div></div></pre>

Then open your browser at:

`http://localhost:8000`

**Option 2: Using VS Code Live Server Extension**

1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server** .
4. The opened URL will serve the site locally.

## Deploying to GitHub Pages

1. Push your repository to GitHub.
2. Go to **Settings → Pages** .
3. Select the branch (`main` or `master`) and folder (`/root`).
4. Save and wait a few minutes.
5. Your CV will be live at:

   `https://<username>.github.io/<repository-name>/`

## Notes

- Ensure `cv.json` is in the same directory as `index.html`.
- The project uses **fetch** , so running it with `file://` will fail due to browser CORS restrictions — always use a local server for development.
- You can easily update the CV content by editing `cv.json` without touching the HTML.
