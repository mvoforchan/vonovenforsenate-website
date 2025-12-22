# Mark von Oven for Minnesota Senate District 48 - Campaign Website

## Overview
This is a complete, modern campaign website for Mark von Oven's 2026 Minnesota State Senate District 48 campaign. The site features a Navy/Teal/Orange color scheme, responsive design, and comprehensive content covering all campaign priorities.

## What's Included

### Completed Pages
1. **index.html** - Homepage with hero section, issues preview, results, and email signup
2. **about.html** - Full biography including family, professional background, City Council accomplishments, and the ICE incident
3. **issues.html** - Overview of all 5 priority issues with detailed summaries
4. **rights.html** - Constitutional Rights & Transparency (signature issue with full ICE story)
5. **contact.html** - Contact form and campaign information

### Core Files
- **styles.css** - Complete stylesheet with Navy/Teal/Orange branding
- **script.js** - JavaScript for mobile menu, smooth scrolling, and animations

### Design Features
- ✅ Navy (#1a2f4b), Teal (#20b2aa), Orange (#ff6b35) color palette
- ✅ Manrope font (display/body) + Spectral (accent)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Modern, professional aesthetic
- ✅ Photo placeholders ready for your images

## Pages Still Needed

You'll want to create these additional pages using the same design system:

1. **affordability.html** - Affordability & Fiscal Responsibility issue page
2. **education.html** - Education issue page
3. **environment.html** - Environment & Water Quality issue page
4. **safety.html** - Public Safety issue page
5. **get-involved.html** - Volunteer signup and ways to help
6. **news.html** - Press releases and campaign updates
7. **events.html** - Campaign events calendar
8. **endorsements.html** - List of endorsements (populate as you receive them)

## Next Steps to Launch

### 1. Domain & Hosting
- Register **vonovenforsenate.com**
- Choose hosting provider:
  - Netlify (free, easy deployment)
  - Vercel (free, automatic deployments)
  - GitHub Pages (free, simple)
  - Traditional hosting (Bluehost, SiteGround, etc.)

### 2. Add Your Photos
Replace all image placeholders with real photos:
- Professional headshot (hero section)
- Family photo (about page)
- City Council action shots
- Community event photos
- Candid campaign photos

### 3. Connect Email Services
The email signup form needs backend integration:
- **Mailchimp** - Popular, user-friendly
- **MailerLite** - Great free tier
- **Action Network** - Built for campaigns
- Update form action URL in signup forms

### 4. Set Up Donation Processing
- Create **ActBlue** account (for Democratic candidates)
- Or use **WinRed** (for Republican candidates)
- Replace "#donate" links with your actual donation page URL
- Add donation page URL to nav-donate buttons

### 5. Contact Form Backend
The contact form needs processing. Options:
- **Formspree** - Easy form backend service
- **Netlify Forms** - Built into Netlify hosting
- **Custom backend** - PHP/Node.js script
- Update form action in contact.html

### 6. Google Analytics
Add tracking code to understand visitor behavior:
```html
<!-- Add before </head> tag on all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
```

### 7. Social Media
- Create campaign Facebook page
- Create campaign Instagram account
- Update placeholder links throughout site:
  - facebook.com/vonovenforsenate
  - instagram.com/vonovenforsenate

### 8. Legal Requirements
Add to footer (check Minnesota campaign finance law):
- "Paid for by Mark von Oven for Senate" ✅ (already included)
- Campaign finance registration info
- Disclaimer text as required by Minnesota law

## Deployment Instructions

### Option 1: Netlify (Recommended - Free & Easy)
1. Create free account at netlify.com
2. Drag and drop the website folder
3. Connect domain
4. Site goes live instantly!

### Option 2: GitHub Pages (Free)
1. Create GitHub account
2. Create repository named "vonovenforsenate"
3. Upload all files
4. Enable GitHub Pages in settings
5. Connect custom domain

### Option 3: Traditional Hosting
1. Purchase hosting plan
2. Upload files via FTP/cPanel
3. Point domain to hosting

## Customization Guide

### Changing Colors
Edit CSS variables in styles.css:
```css
:root {
    --navy: #1a2f4b;
    --teal: #20b2aa;
    --orange: #ff6b35;
}
```

### Adding Pages
1. Copy an existing page as template
2. Update navigation links
3. Match the design system
4. Test responsiveness

### Updating Content
- Text content is in HTML files
- Replace placeholder text with your specific messaging
- Keep formatting consistent

## Content Guidelines

### Key Messages to Maintain
- Common sense leadership
- Data-driven decision making
- Constitutional principles
- Bringing people together
- Results over politics

### Tone
- Professional but approachable
- Confident but humble
- Specific but accessible
- Principled but practical

## Technical Notes

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari and Chrome
- Graceful degradation for older browsers

### Performance
- Lightweight design (no heavy frameworks)
- Fast loading times
- Optimized for mobile

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text placeholders for images
- Keyboard navigation support

## Support & Questions

### Email Integration
Will need to set up:
- Campaign email (mark@vonovenforsenate.com)
- Press email (press@vonovenforsenate.com)
- Info email (info@vonovenforsenate.com)

### Domain Configuration
Point these records:
- A record to hosting IP
- CNAME for www
- MX records for email

### SEO Basics
Add to each page:
```html
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:image" content="...">
```

## Content Strategy

### Homepage
- Clear, immediate value proposition
- Strong call-to-action
- Issue previews to drive exploration
- Email capture

### Issue Pages
- Start with the problem
- Present Mark's solution
- Show proven results
- Connect to values

### About Page
- Tell your story authentically
- Connect personal to professional
- Highlight defining moments (ICE incident)
- Make it relatable

## Launch Checklist

- [ ] Domain registered and connected
- [ ] All photos uploaded and optimized
- [ ] Email service connected
- [ ] ActBlue/donation page set up
- [ ] Contact form backend working
- [ ] Social media pages created
- [ ] Google Analytics installed
- [ ] All links tested
- [ ] Mobile responsiveness checked
- [ ] Forms tested
- [ ] Legal disclaimers added
- [ ] SEO meta tags added
- [ ] Site speed optimized
- [ ] Backup created

## Campaign Timeline Integration

Use this website throughout your campaign:

**Now - Spring 2025 (Exploration Phase)**
- Launch with basic content
- Build email list
- Share issue content

**Spring - Fall 2025 (Pre-Announcement)**
- Add news/blog content
- Announce events
- Build volunteer database

**Fall 2025 - Campaign Launch**
- Major site promotion
- Press release distribution
- Social media amplification

**2026 (Campaign Season)**
- Regular updates
- Event listings
- News coverage
- Endorsement announcements
- Volunteer mobilization

---

**Questions?** This is your foundation. Build on it, test everything, and make it work for your campaign's unique needs.

**Ready to launch?** Start with domain registration and hosting, then work through the checklist systematically.

Good luck with your campaign! 🇺🇸