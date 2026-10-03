---
type: process
title: Outreach
---
[StudioCoLab Knowledge Base](index.md)# StudioCoLab Email Outreach & Content Generation Guide.

This document defines the process, voice guidelines, block structures, and template models for generating email content from **NotebookLM / Gemini Notebook** synthesis into StudioCoLab's **GrapesJS CampaignModal** email builder.

---

## 1. Process & Workflow

```
[ NotebookLM / Gemini Notebook ]
               │
               ▼
[ 1. Paste raw synthesis into ## Active Staging Area ]
               │
               ▼
[ 2. Refine into HTML-comment tagged GrapesJS blocks ]
               │
               ▼
[ 3. Copy-Paste block content into CampaignModal (GrapesJS) ]
               │
               ▼
[ 4. Move sent campaign to ## Campaign History ]
```

### Step-by-Step Instructions:
1. **Develop Topic in NotebookLM:** Research, synthesize, and outline your topic, updates, or event details in NotebookLM / Gemini Notebook.
2. **Paste Raw Output:** Copy the key insights or summary from NotebookLM and paste it into the [Active Staging Area](#2-active-staging-area) below.
3. **Select Template Type:** Choose one of the 3 campaign types: **RSVP**, **Announcement**, or **Personalized**.
4. **Format into Content Blocks:** Use the pre-defined `<!-- block: <name> -->` comment tags matching GrapesJS drop zones.
5. **Transfer to GrapesJS:** Open **ProjectModal > CampaignModal** in StudioCoLab, select the matching campaign template, and copy-paste each formatted block into GrapesJS.
6. **Archive:** After sending, copy the final text block into [Campaign History](#5-campaign-history) for future tone reference.

---

## 2. Active Staging Area

> **Instructions:** Use this section as your active workspace for drafting current emails. Overwrite this section for each new campaign.

### Raw NotebookLM Synthesis Input
```markdown
<!-- PASTE RAW NOTEBOOK LM / GEMINI NOTEBOOK CONTENT HERE -->
```

### Active Draft (Tagged for GrapesJS Import)
```markdown
<!-- TARGET CAMPAIGN TYPE: [ RSVP | Announcement | Personalized ] -->

<!-- block: hero -->
[Draft Hero Content Here]

<!-- block: body -->
[Draft Body Content Here]

<!-- block: cta -->
[Draft CTA Button Text & Link Here]
```

---

## 3. StudioCoLab Voice & Tone Guidelines

* **Voice:** Collaborative, Builder-Oriented, Warm, and Community-Driven.
* **Tone:** Empathetic, inspiring, and clear. Avoid corporate jargon or aggressive marketing pitches.
* **Core Framing:** Frame updates around co-designing, shared project milestones, member contributions, and actionable invitations to build together.

---

## 4. Campaign Layout Intents & Block Mappings

### A. RSVP Campaign Template

**Layout Intent:** Designed for events, co-creation workshops, demo days, or community meetups where capturing attendance is the primary goal.

#### Required GrapesJS Content Blocks:
* `<!-- block: hero -->` – Engaging event headline & brief hook.
* `<!-- block: event-details -->` – Date, time, location / virtual link, and agenda highlights.
* `<!-- block: rsvp-cta -->` – Primary RSVP button and calendar link.
* `<!-- block: signoff -->` – Host signature and community contact info.

#### Sample Content Model:
```markdown
<!-- block: hero -->
# Co-Designing StudioCoLab: Join Our Hands-On Workshop

We're bringing together project builders to refine our shared knowledge workflows and explore open co-creation tools.

<!-- block: event-details -->
### 📅 Event Details
* **Date:** Thursday, August 6, 2026
* **Time:** 4:00 PM - 5:30 PM EST
* **Location:** StudioCoLab Virtual Hub (Zoom link upon RSVP)
* **What to bring:** Your project ideas and raw NotebookLM notes!

<!-- block: rsvp-cta -->
[ Reserve Your Seat Now ](https://studiocolab.org/events/rsvp-workshop)
*Can't make it? [Add to Google Calendar](https://studiocolab.org/events/cal)*

<!-- block: signoff -->
Warmly,  
**The StudioCoLab Team**  
*Building together in the open.*
```

---

### B. Announcement Campaign Template

**Layout Intent:** Designed for sharing major project milestones, new OKF feature releases, or community-wide updates.

#### Required GrapesJS Content Blocks:
* `<!-- block: header-badge -->` – Category tag (e.g., `PROJECT UPDATE`, `MILESTONE RELEASE`).
* `<!-- block: hero -->` – High-impact headline summarizing the announcement.
* `<!-- block: body-narrative -->` – Main story/context derived from NotebookLM synthesis.
* `<!-- block: key-highlights -->` – Bulleted list of key takeaways or features.
* `<!-- block: secondary-cta -->` – Button or link to full documentation / project modal.

#### Sample Content Model:
```markdown
<!-- block: header-badge -->
`STUDIOCOLAB MILESTONE`

<!-- block: hero -->
# Introducing OKF Knowledge Folders for StudioCoLab Projects

We've launched a structured way to manage project knowledge across all StudioCoLab initiatives.

<!-- block: body-narrative -->
Over the past month, we've synthesized our project documentation into a unified One Knowledge Framework (OKF). This allows team members to seamlessly bridge NotebookLM research into campaign templates, documentation, and task boards.

<!-- block: key-highlights -->
### What's New:
* **Centralized Knowledge:** OKF folders organized by project (`okf/studiocolab/`).
* **Streamlined Outreach:** Dedicated `outreach.md` guidelines for email campaigns.
* **GrapesJS Mappings:** Direct 1:1 content block tagging for rapid email publishing.

<!-- block: secondary-cta -->
[ Explore OKF Documentation ](https://studiocolab.org/okf/overview)
```

---

### C. Personalized Campaign Template

**Layout Intent:** Designed for 1-on-1 member outreach, personalized project invitations, or targeted check-ins.

#### Required GrapesJS Content Blocks:
* `<!-- block: personal-hook -->` – Personalized salutation and tailored introduction.
* `<!-- block: custom-update -->` – Contextual note tailored to the recipient's specific involvement.
* `<!-- block: direct-ask-cta -->` – Specific invitation or 1-on-1 call booking link.
* `<!-- block: signoff -->` – Personal signature.

#### Sample Content Model:
```markdown
<!-- block: personal-hook -->
Hi {{first_name}},

Hope your week is off to a great start! I saw your recent work on the community knowledge map and wanted to reach out directly.

<!-- block: custom-update -->
We're currently assembling the initial content guide for StudioCoLab outreach in `okf/studiocolab/outreach.md`. Given your experience with project documentation, I'd love to get your thoughts on how we structure our NotebookLM staging workflow.

<!-- block: direct-ask-cta -->
Would you be open to a 15-minute quick chat this Thursday to walk through the draft?

[ Pick a Time on My Calendar ](https://studiocolab.org/calendar/chat)

<!-- block: signoff -->
Best,  
Larry  
*StudioCoLab Co-Creator*
```

---

## 5. Campaign History

> Archive of past sent campaigns for reference and voice consistency.

### [2026-07-22] Initial Template System Launch
* **Type:** Announcement
* **Subject:** Streamlining StudioCoLab Email Outreach with OKF & NotebookLM
* **Summary:** Introduced the initial `outreach.md` framework for converting NotebookLM research into GrapesJS CampaignModal emails.