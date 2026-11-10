# Muse Space — muse空间

**20 ready-to-use mini-app templates for Muse Spaces. Like WeChat Mini Programs, for your daily AI life.**

[中文版 / Chinese version → README.zh-CN.md](README.zh-CN.md) · [Templates index → templates.json](templates.json) · [llms.txt](llms.txt)

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Templates: 20](https://img.shields.io/badge/Templates-20-blue.svg) ![Design: Astryx](https://img.shields.io/badge/Design-Astryx-black.svg)

## What is Muse Space?

Think of WeChat Mini Programs — small apps you open instantly, no install, no setup. Muse Space does the same for Muse Spaces.

You say one sentence to Muse — "Open my expense tracker" or "Give me a focus timer" — and Muse picks the matching template from this repo, fills it with your data, and generates a ready-to-use Space. No coding. No build step. Open and use.

This repository is three things in one: a **Muse Skill** (`SKILL.md`), a **template library** (20 single-file HTML templates), and a **preview site** (Astro, in `site/`).

Keywords: Muse Space templates, mini programs for Muse, AI daily tools, Muse skill, Astryx design system.

## Why

- **Zero setup.** Every template is a single HTML file. Copy it, open it, use it.
- **Your data stays local.** Templates use `localStorage`. Nothing leaves your browser.
- **One design language.** All templates use Meta Astryx design tokens — semantic colors, automatic light/dark, consistent spacing and motion.
- **Bilingual by default.** English first, Chinese alongside. Plain, short UI text. Verbs on buttons: Save, Add, Done.

## Templates — 6 categories, 20 templates

### AI Work
| Template | What it does |
|---|---|
| [Prompt Studio](templates/ai-prompt-studio/) | Save, organize and reuse prompts. One tap to copy. |
| [Meeting Notes](templates/ai-meeting-notes/) | Decisions, actions and owners, structured. |
| [Resume Coach](templates/ai-resume-coach/) | Polish bullets, check fit for a target role. |
| [Content Calendar](templates/ai-content-calendar/) | Topics, schedule and publish status in one view. |

### Productivity
| Template | What it does |
|---|---|
| [Focus Timer](templates/focus-pomodoro/) | Pomodoro timer plus today's focus stats. |
| [Habit Tracker](templates/habit-tracker/) | Streaks and a year heatmap. |
| [Task Board](templates/task-kanban/) | Three-column board with priority. |

### Money
| Template | What it does |
|---|---|
| [Budget Planner](templates/budget-planner/) | Monthly budget and category caps. |
| [Expense Tracker](templates/expense-tracker/) | Log an expense in seconds. |
| [Subscription Tracker](templates/subscription-tracker/) | Renewals and yearly cost, no surprises. |
| [Savings Goals](templates/savings-goals/) | Goal progress and milestones. |

### Health
| Template | What it does |
|---|---|
| [Workout Log](templates/workout-log/) | Sets, reps and weight. |
| [Meal & Calorie](templates/meal-calorie/) | Calories and protein per meal. |
| [Sleep & Mood](templates/sleep-mood-journal/) | Sleep hours and mood curve. |

### Learn
| Template | What it does |
|---|---|
| [Study Planner](templates/study-planner/) | Timetable to review blocks. |
| [Flashcards](templates/flashcard-review/) | Spaced repetition, mastery levels. |
| [Reading Tracker](templates/reading-tracker/) | Book list, progress, highlights. |

### Life & Home
| Template | What it does |
|---|---|
| [Trip Planner](templates/trip-planner/) | Day plans, checklists, trip budget. |
| [Grocery & Meals](templates/grocery-meal-planner/) | Weekly menu to grocery list, automatically. |
| [Home Inventory](templates/home-inventory/) | Stock, expiry dates, chores. |

> Status: scaffold release. Template bodies (`index.html`) land in batches — see each template folder for its status.

## Quick Start

1. Add this repo as a Muse Skill (point Muse at `SKILL.md`), or just link Muse to this repository.
2. Say what you need, in English or Chinese:
   - "Open my expense tracker" / 「打开记账」
   - "Give me a Pomodoro timer" / 「给我一个番茄钟」
   - "Start a habit tracker" / 「打开习惯打卡」
3. Muse reads `templates.json`, loads the matching template, fills in your data, and creates your Space.

You can also use any template directly: open `templates/<slug>/index.html` in a browser. No server needed.

## Design — Astryx

All templates share one token file: [`assets/tokens.css`](assets/tokens.css) (Meta Astryx core defaults).

- Semantic tokens only — components use `var(--...)`, never raw hex or px values.
- Surface layers: body → surface → card → popover.
- Light and dark follow your system automatically (`light-dark()`).
- Motion uses token durations only: fast 175ms for micro-interactions, medium 410ms for enter/exit. SVG animations respect `prefers-reduced-motion`.
- Control heights: 28 / 32 / 36px. Spacing: 4px steps.

## SEO + GEO

- **SEO:** the Astro preview site gives every template its own URL, title and description, with Open Graph, canonical, hreflang (en / zh-CN), sitemap and structured data (`SoftwareApplication`, `ItemList`, FAQ).
- **GEO:** [`llms.txt`](llms.txt) and [`llms-full.txt`](llms-full.txt) describe this project in Q&A and list form so AI engines (ChatGPT, Claude, Perplexity) can cite it accurately. [`templates.json`](templates.json) is the single structured source of truth.

## Repository layout

```
SKILL.md          Muse Skill definition (triggers + generation rules)
templates.json    Machine-readable index of all 20 templates
assets/tokens.css Astryx design tokens (verbatim)
templates/        One folder per template: index.html + README.md
site/             Astro 5 preview site (GitHub Pages)
llms.txt          GEO summary for AI engines
```

## License

MIT — see [LICENSE](LICENSE). © 2026 realfshaw-crypto.

---

## 中文说明

**Muse Space — muse空间：20 个开箱即用的 Muse Space 小程序模板。**

就像微信小程序之于微信：不用装、不用开发，对 Muse 说一句话就能生成一个能直接用的空间。

- 「打开记账」→ 记账本；「给我一个番茄钟」→ 专注时钟；「打开习惯打卡」→ 习惯打卡。
- Muse 按 `SKILL.md` 从模板库取模板，填入你的数据，生成 Space。数据只存在本地浏览器（localStorage）。
- 全部模板统一用 Meta Astryx 设计令牌（`assets/tokens.css`），深浅色自动适配，界面文字简洁，中英双语。
- 6 大分类 20 个模板：AI 工作（提示词工坊、会议纪要、简历教练、内容日历）、效率（专注时钟、习惯打卡、任务看板）、财务（预算管家、记账本、订阅管家、存钱目标）、健康（健身记录、饮食热量、睡眠心情）、学习（学习计划、闪卡复习、阅读追踪）、生活与家庭（旅行计划、买菜食谱、家庭库存）。
- 完整中文版见 [README.zh-CN.md](README.zh-CN.md)。许可证：MIT。
