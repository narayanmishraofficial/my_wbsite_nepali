# Narayan Prasad Mishra — Personal Portfolio Website

A modern, fast, responsive personal portfolio website for **Narayan Prasad Mishra**, Graphics Designer from **Butwal-12, Nayagaun, Nepal**.

This website is a **100% static website** built with **HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5**, designed to be hosted directly on **GitHub Pages** or any static web hosting platform with zero backend, server, or database requirements.

---

## 🌟 Key Features

* **Bilingual Support (English & नेपाली)**: Seamless language switcher with persistent `localStorage` support across all pages.
* **Modern Design Aesthetics**: Clean dark canvas, subtle gradients, rounded cards, backdrop blurs, and smooth micro-interactions.
* **Responsive Multi-Page Structure**:
  1. `index.html` — Hero banner, statistics counters, selected portfolio highlights, core services sneak peek, and CTA.
  2. `about.html` — Designer biography, design philosophy, software proficiency bars, experience timeline, and CV actions.
  3. `services.html` — Detailed cards for all 6 design services, workflow process, and service inquiries.
  4. `gallery.html` — Interactive categorized portfolio grid with filter pills and dynamic project detail lightbox modal.
  5. `news.html` — Client-side RSS feed engine with CORS fallbacks and bilingual date formatting.
  6. `contact.html` — Direct contact cards, one-click copy buttons, email contact form, working hours, and embedded Google Maps for Nayagaun, Butwal.
* **CV PDF Management**: Direct "View CV" and "Download CV" buttons linking to `documents/narayan-prasad-mishra-cv.pdf`.
* **Zero Dependencies for Deployment**: Pure static files. No Node.js build step needed for GitHub Pages hosting.

---

## 📁 Project Structure

```text
narayan-portfolio/
│
├── index.html                           # Home Page
├── about.html                           # About Page
├── services.html                        # Services Page
├── gallery.html                         # Portfolio Gallery Page
├── news.html                            # Design News & Articles (RSS)
├── contact.html                         # Contact Page
│
├── css/
│   └── style.css                        # Main custom stylesheet
│
├── js/
│   ├── main.js                          # Navigation, modal lightbox, counters, and toasts
│   ├── language.js                      # Bilingual translation engine (EN & NE)
│   └── news.js                          # Client-side RSS feed loader & fallbacks
│
├── images/
│   ├── profile.jpg                      # Profile portrait photo
│   ├── hero.jpg                         # Hero visual banner
│   ├── icons/
│   │   └── logo.svg                     # Vector brand logo & favicon
│   └── gallery/
│       ├── work-01.jpg                  # Brand identity work
│       ├── work-02.jpg                  # Logo design work
│       ├── work-03.jpg                  # Social media graphics
│       ├── work-04.jpg                  # Print & brochure design
│       ├── work-05.jpg                  # Creative visual art
│       ├── work-06.jpg                  # Packaging box design
│       ├── work-07.jpg                  # Typography poster
│       └── work-08.jpg                  # Digital marketing kit
│
├── documents/
│   └── narayan-prasad-mishra-cv.pdf     # Official CV PDF document
│
└── README.md                            # Complete setup & deployment guide
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository
1. Log in to your account at [GitHub.com](https://github.com).
2. Click the **+** (plus) icon in the top-right corner and select **New repository**.
3. Name your repository (e.g., `narayan-portfolio` or `username.github.io`).
4. Set the repository to **Public**.
5. Click **Create repository**.

### Step 2: Upload Files to the Repository
You can upload the files either via Git command line or directly through GitHub's web interface:

**Option A: Using Git Command Line**
```bash
# Initialize git in your project directory
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit of Narayan Prasad Mishra portfolio website"

# Rename branch to main
git branch -M main

# Link remote repository (replace with your repository URL)
git remote add origin https://github.com/YOUR-USERNAME/narayan-portfolio.git

# Push to GitHub
git push -u origin main
```

**Option B: Upload via Web Browser**
1. On your GitHub repository page, click **Add file** -> **Upload files**.
2. Drag and drop all project folders and files (`index.html`, `css/`, `js/`, `images/`, `documents/`, etc.).
3. Click **Commit changes**.

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. In the left sidebar, click on **Pages** (under "Code and automation").
4. Under **Build and deployment**:
   * **Source**: Select `Deploy from a branch`.
   * **Branch**: Select `main` (or `master`) and folder `/ (root)`.
5. Click **Save**.
6. Wait 1-2 minutes. GitHub will display your live site URL:
   `https://YOUR-USERNAME.github.io/narayan-portfolio/`

---

## 🎨 How to Customize Your Website

### 1. Replacing Profile & Portfolio Images
* Replace `images/profile.jpg` with your personal portrait photo.
* Replace `images/hero.jpg` with your favorite 3D render or featured artwork.
* Replace `images/gallery/work-01.jpg` through `work-08.jpg` with your actual design work screenshots.
* To update project details (client name, software used, descriptions), open `js/main.js` and edit the `PROJECT_DATABASE` object.

### 2. Updating Your CV / Resume PDF
* Replace the file at `documents/narayan-prasad-mishra-cv.pdf` with your updated PDF resume. Keep the filename unchanged so all links continue working automatically.

### 3. Configuring RSS Feeds (Nepali & Other/International)
* Open `js/news.js`.
* Find the `RSS_CONFIG` object at the top of the file:
  ```javascript
  const RSS_CONFIG = {
    nepali: [
      { url: "https://techpana.com/feed/", name: "TechPana Nepal" },
      { url: "https://nepalitimes.com/feed", name: "Nepali Times" },
      { url: "https://ratopati.com/feed", name: "Ratopati Nepal" }
    ],
    other: [
      { url: "https://www.smashingmagazine.com/feed/", name: "Smashing Magazine" },
      { url: "https://design-milk.com/feed/", name: "Design Milk" },
      { url: "https://abduzeedo.com/feed", name: "Abduzeedo Design" }
    ]
  };
  ```
* You can add any valid public RSS/Atom feeds for Nepali news or International design portals.

### 4. Customizing the Contact Form (Formspree or Custom Endpoint)
By default, the contact form opens the client's default email client (`mailto:menpmishra@gmail.com`).

To connect a backend form service like [Formspree](https://formspree.io):
1. Sign up for free at [Formspree.io](https://formspree.io) and create a new form for `menpmishra@gmail.com`.
2. Copy your Formspree endpoint (e.g., `https://formspree.io/f/xyzxyz`).
3. In `contact.html`, add `action="https://formspree.io/f/YOUR_ENDPOINT"` and `method="POST"` to `<form id="portfolioContactForm">`.

---

## 📞 Personal Details Reference

* **Name**: Narayan Prasad Mishra
* **Profession**: Graphics Designer
* **Address**: Butwal-12, Nayagaun, Nepal
* **Phone**: 9867549675
* **Email**: [menpmishra@gmail.com](mailto:menpmishra@gmail.com)

---

## 📄 License & Copyright

© 2026 **Narayan Prasad Mishra**. All Rights Reserved.
Built for standard static hosting on GitHub Pages.
