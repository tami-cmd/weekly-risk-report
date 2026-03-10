# Project 3 — Weekly Risk Report

## Project Description
A demo screen presenting a weekly risk report for students. The report enables the educational team to identify at-risk students based on a scoring mechanism that weighs academic, behavioral, and attendance data.

## Folder Structure
```
project-3/
├── index.html    ← Main demo file
├── logo.png      ← SmartApp logo
└── README.md     ← This file
```

## What the Demo Includes

### Header
- SmartApp logo + "and משרד החינוך" (Ministry of Education) on the right side
- User name: Rotem Aloni | Educational Counselor on the left side

### Title Section
- Subtitle: "Student Management System"
- Main title: "Weekly Risk Report — Week 23/06/2025"
- "Export to Excel" button (non-functional — displays a demo message)

### Scoring Mechanism Panel (Collapsible — open by default)
| Category | Rule | Score |
|----------|------|-------|
| Academic | 15%+ drop in grade average over 30 days | +5 points |
| Academic | Final grade below 60 | +3 points per grade |
| Behavioral | Behavioral incident | +2 points per incident |
| Attendance | Unexcused absence | +1 point per absence |

### Risk Level Cards
- 🟢 Normal: 1–4 points
- 🟡 Review: 5–9 points
- 🔴 High Risk: 10+ points

### Filter Bar (Functional)
- Filter by class: All classes, ח-1, ח-2, ט-1, ט-2
- Filter by risk level: All, High Risk, Review, Normal

### Students Table
6 sample students, each displaying:
- Student name (link — navigates to Project 5 in the full version)
- Class
- Risk score
- Score breakdown
- Risk level (colored Badge)
- AI Summary

## What Was NOT Built in the Demo
- ❌ Real score calculation
- ❌ Google Sheets integration
- ❌ Automatic report sending

## Cross-Project Navigation
- Each student name is a link that navigates to the student profile in Project 5 (Student Profile Screen). In the demo, an explanatory message is shown instead of actual navigation.

## Design Guidelines
The project follows the unified System Design document, including:
- Color palette: Primary Dark #0D1B2A, defined status colors
- Font: Heebo (Google Fonts)
- Cards: border-radius 12px, box-shadow
- Status Badges with defined colors
- Full RTL support (dir="rtl", lang="he")
- AI Insights box with border-right

## How to Run
1. Open `index.html` in a browser
2. Make sure `logo.png` is in the same folder
