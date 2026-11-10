# Muse Space — muse空间

**20 ready-to-use mini-app templates for Muse Spaces. Like WeChat Mini Programs, for your daily AI life.**

[中文版 / Chinese version → README.zh-CN.md](README.zh-CN.md) · [Templates index → templates.json](templates.json) · [llms.txt](llms.txt)

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Templates: 20](https://img.shields.io/badge/Templates-20-blue.svg) ![Design: Astryx](https://img.shields.io/badge/Design-Astryx-black.svg)

## Screenshots

![Muse Space preview site home page — 20 mini-app templates in 6 categories with search](docs/screenshots/preview-home.png)

*The preview site home page: the 20 templates in 6 categories, with a search box.*

| | |
|---|---|
| ![Expense Tracker template — log expenses by category, data stored locally](docs/screenshots/template-expense-tracker.png) | ![Focus Timer template — Pomodoro countdown ring with today's focus count](docs/screenshots/template-focus-pomodoro.png) |
| *Expense Tracker: log an expense and see totals by category.* | *Focus Timer: a 25-minute Pomodoro countdown with today's focus count.* |
| ![Prompt Studio template — prompt list with categories and one-tap copy](docs/screenshots/template-ai-prompt-studio.png) | ![Habit Tracker template — habit list with streaks and 7-day check-in dots](docs/screenshots/template-habit-tracker.png) |
| *Prompt Studio: saved prompts by category, one tap to copy.* | *Habit Tracker: today's check-ins, streaks, and the last 7 days.* |

## What is Muse Space?

Think of WeChat Mini Programs — small apps you open instantly, no install, no setup. Muse Space does the same for Muse Spaces.

You say one sentence to Muse — "Open my expense tracker" or "Give me a focus timer" — and Muse picks the matching template from this repo, fills it with your data, and generates a ready-to-use Space. No coding. No build step. Open and use.

This repository is three things in one: a **Muse Skill** (`SKILL.md`), a **template library** (20 single-file HTML templates), and a **preview site** (Astro, in `site/`).

### Frequently asked questions

**What is Muse Space?**
Muse Space is a Muse Skill and a library of 20 ready-to-use mini-app templates for Muse Spaces. It is modeled on WeChat Mini Programs: small, single-purpose apps that open instantly, with no install and no coding.

**How does Muse Space work?**
You name the tool you need in one sentence, in English or Chinese. Muse reads `templates.json`, loads the matching template from `templates/<slug>/index.html`, fills it with your data, and generates a ready-to-use Space.

**What templates does Muse Space include?**
20 templates in 6 categories: AI Work (4), Productivity (3), Money (4), Health (3), Learn (3), and Life & Home (3). Every template is a single self-contained HTML file, and data is stored locally in the browser (`localStorage`).

**Is Muse Space free and open source?**
Yes. Muse Space is released under the MIT License. You can copy, adapt, and reuse any template.

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

> All 20 template bodies are included and ready to open.

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

## Repository layout

```
SKILL.md          Muse Skill definition (triggers + generation rules)
templates.json    Machine-readable index of all 20 templates
assets/tokens.css Astryx design tokens (verbatim)
templates/        One folder per template: index.html + README.md
site/             Astro 5 preview site (GitHub Pages)
llms.txt          Plain-text project summary
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
