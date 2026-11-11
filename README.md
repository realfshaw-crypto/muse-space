# Muse Space — muse空间

**34 ready-to-use mini-app templates for Muse Spaces. Like WeChat Mini Programs, for your daily AI life.**

[中文版 / Chinese version → README.zh-CN.md](README.zh-CN.md) · [Templates index → templates.json](templates.json) · [llms.txt](llms.txt)

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Templates: 34](https://img.shields.io/badge/Templates-34-blue.svg) ![Design: Astryx](https://img.shields.io/badge/Design-Astryx-black.svg)

## Screenshots

![Muse Space preview site home page — 34 mini-app templates in 6 categories with search](docs/screenshots/preview-home.png)

*The preview site home page: the 34 templates in 6 categories, with a search box.*

| | |
|---|---|---|
| ![Expense Tracker template — log expenses by category, data stored locally](docs/screenshots/template-expense-tracker.png) | ![Focus Timer template — Pomodoro countdown ring with today's focus count](docs/screenshots/template-focus-pomodoro.png) |
| *Expense Tracker: log an expense and see totals by category.* | *Focus Timer: a 25-minute Pomodoro countdown with today's focus count.* |
| ![Prompt Studio template — prompt list with categories and one-tap copy](docs/screenshots/template-ai-prompt-studio.png) | ![Habit Tracker template — habit list with streaks and 7-day check-in dots](docs/screenshots/template-habit-tracker.png) |
| *Prompt Studio: saved prompts by category, one tap to copy.* | *Habit Tracker: today's check-ins, streaks, and the last 7 days.* |
| ![Gift Tracker template — gift ideas, sizes and budgets, sorted by person](docs/screenshots/template-gift-tracker.png) | ![Game Score Tracker template — match history, winners and the leaderboard](docs/screenshots/template-game-score-tracker.png) |
| *Gift Tracker: gift ideas, sizes and budgets, sorted by person.* | *Game Score Tracker: match history, winners and the leaderboard.* |
| ![Recurring To-Dos template — recurring tasks with due dates that reset when done](docs/screenshots/template-recurring-todos.png) | ![Pet Day Tracker template — walks, meals and naps on one timeline](docs/screenshots/template-pet-day-tracker.png) |
| *Recurring To-Dos: due dates that reset when a task is done.* | *Pet Day Tracker: walks, meals and naps on one timeline.* |
| ![Restaurant Wishlist template — saved restaurants with prices and ratings](docs/screenshots/template-restaurant-wishlist.png) | |
| *Restaurant Wishlist: saved restaurants with prices and ratings.* | |
| ![Bill Tracker template — every bill, its due date and the best card to pay with](docs/screenshots/template-bill-tracker.png) | ![Travel Memory Map template — every trip pinned with its place and story](docs/screenshots/template-travel-memory-map.png) |
| *Bill Tracker: every bill, its due date and the best card to pay with.* | *Travel Memory Map: every trip pinned with its story.* |
| ![Pantry Tracker template — food stock, quantities and expiry dates with alerts](docs/screenshots/template-pantry-tracker.png) | ![Sudoku template — playable Sudoku with three difficulties](docs/screenshots/template-sudoku-puzzle.png) |
| *Pantry Tracker: food stock, quantities and expiry alerts.* | *Sudoku: three difficulties, notes, hints and a timer.* |
| ![Retro Organizer template — Palm-style datebook, to-dos, memos and contacts](docs/screenshots/template-retro-organizer.png) | ![App Hub template — pinned apps and links in one hub](docs/screenshots/template-app-hub.png) |
| *Retro Organizer: datebook, to-dos, memos and contacts in one device.* | *App Hub: pinned apps and links, search and open in one tap.* |
| ![Trivia Quiz template — timed quiz across four categories with score and streaks](docs/screenshots/template-trivia-quiz.png) | |
| *Trivia Quiz: timed questions, score, streaks and a review.* | |

## What is Muse Space?

Think of WeChat Mini Programs — small apps you open instantly, no install, no setup. Muse Space does the same for Muse Spaces.

You say one sentence to Muse — "Open my expense tracker" or "Give me a focus timer" — and Muse picks the matching template from this repo, fills it with your data, and generates a ready-to-use Space. No coding. No build step. Open and use.

This repository is three things in one: a **Muse Skill** (`SKILL.md`), a **template library** (34 single-file HTML templates), and a **preview site** (Astro, in `site/`).

### Frequently asked questions

**What is Muse Space?**
Muse Space is a Muse Skill and a library of 34 ready-to-use mini-app templates for Muse Spaces. It is modeled on WeChat Mini Programs: small, single-purpose apps that open instantly, with no install and no coding.

**How does Muse Space work?**
You name the tool you need in one sentence, in English or Chinese. Muse reads `templates.json`, loads the matching template from `templates/<slug>/index.html`, fills it with your data, and generates a ready-to-use Space.

**What templates does Muse Space include?**
34 templates in 6 categories: AI Work (4), Productivity (7), Money (5), Health (3), Learn (4), and Life & Home (11). Every template is a single self-contained HTML file, and data is stored locally in the browser (`localStorage`).

**Is Muse Space free and open source?**
Yes. Muse Space is released under the MIT License. You can copy, adapt, and reuse any template.

## Why

- **Zero setup.** Every template is a single HTML file. Copy it, open it, use it.
- **Your data stays local.** Templates use `localStorage`. Nothing leaves your browser.
- **One design language.** All templates use Meta Astryx design tokens — semantic colors, automatic light/dark, consistent spacing and motion.
- **Bilingual by default.** English first, Chinese alongside. Plain, short UI text. Verbs on buttons: Save, Add, Done.

## Templates — 6 categories, 34 templates

### AI Work
| Template | What it does | Say it |
|---|---|---|
| [Prompt Studio](templates/ai-prompt-studio/) | Save, organize and reuse prompts. One tap to copy. | "Open my prompt library" |
| [Meeting Notes](templates/ai-meeting-notes/) | Decisions, actions and owners, structured. | "Take meeting notes" |
| [Resume Coach](templates/ai-resume-coach/) | Polish bullets, check fit for a target role. | "Help me polish my resume" |
| [Content Calendar](templates/ai-content-calendar/) | Topics, schedule and publish status in one view. | "Open my content calendar" |

### Productivity
| Template | What it does | Say it |
|---|---|---|
| [Focus Timer](templates/focus-pomodoro/) | Pomodoro timer plus today's focus stats. | "Give me a Pomodoro timer" |
| [Habit Tracker](templates/habit-tracker/) | Streaks and a year heatmap. | "Start a habit tracker" |
| [Task Board](templates/task-kanban/) | Three-column board with priority. | "Open my task board" |
| [Recurring To-Dos](templates/recurring-todos/) | Recurring tasks with due dates that reset when done. | "Open my recurring tasks" |
| [Idea Capture](templates/idea-capture/) | Catch an idea in seconds, sort it later. | "Open my idea box" |
| [Retro Organizer](templates/retro-organizer/) | Palm-style datebook, to-dos, memos and contacts. | "Open my retro organizer" |
| [App Hub](templates/app-hub/) | Pinned apps and links in one hub. | "Open my app hub" |

### Money
| Template | What it does | Say it |
|---|---|---|
| [Budget Planner](templates/budget-planner/) | Monthly budget and category caps. | "Open my budget planner" |
| [Expense Tracker](templates/expense-tracker/) | Log an expense in seconds. | "Open my expense tracker" |
| [Subscription Tracker](templates/subscription-tracker/) | Renewals and yearly cost, no surprises. | "Show my subscriptions" |
| [Savings Goals](templates/savings-goals/) | Goal progress and milestones. | "Open my savings goals" |
| [Bill Tracker](templates/bill-tracker/) | Every bill, its due date and the best card to pay with. | "Open my bill tracker" |

### Health
| Template | What it does | Say it |
|---|---|---|
| [Workout Log](templates/workout-log/) | Sets, reps, weight, streaks and a coach tip. | "Open my workout log" |
| [Meal & Calorie](templates/meal-calorie/) | Calories and protein per meal. | "Open my calorie tracker" |
| [Sleep & Mood](templates/sleep-mood-journal/) | Sleep hours and mood curve. | "Open my sleep tracker" |

### Learn
| Template | What it does | Say it |
|---|---|---|
| [Study Planner](templates/study-planner/) | Timetable to review blocks. | "Open my study planner" |
| [Flashcards](templates/flashcard-review/) | Spaced repetition, mastery levels. | "Open my flashcards" |
| [Reading Tracker](templates/reading-tracker/) | Book list, progress, highlights. | "Open my reading tracker" |
| [Trivia Quiz](templates/trivia-quiz/) | Timed quiz, score, streaks and a review. | "Start a quiz" |

### Life & Home
| Template | What it does | Say it |
|---|---|---|
| [Trip Planner](templates/trip-planner/) | Day plans, checklists, trip budget. | "Open my trip planner" |
| [Grocery & Meals](templates/grocery-meal-planner/) | Weekly menu to grocery list, automatically. | "Open my meal planner" |
| [Home Inventory](templates/home-inventory/) | Stock, expiry dates, chores. | "Open my home inventory" |
| [Gift Tracker](templates/gift-tracker/) | Gift ideas, sizes and budgets, sorted by person. | "Open my gift list" |
| [Game Score Tracker](templates/game-score-tracker/) | Every win, loss and rivalry across game nights. | "Open the scoreboard" |
| [Pet Day Tracker](templates/pet-day-tracker/) | Walks, meals and naps on one timeline. | "Open my pet's day" |
| [Restaurant Wishlist](templates/restaurant-wishlist/) | Saved restaurants with prices and ratings. | "Open my restaurant list" |
| [Travel Memory Map](templates/travel-memory-map/) | Every trip pinned with its story. | "Open my travel map" |
| [Event Countdown](templates/event-countdown/) | Days left to every event that matters. | "Open my event countdown" |
| [Pantry Tracker](templates/pantry-tracker/) | Food stock, quantities and expiry alerts. | "Open my pantry tracker" |
| [Sudoku](templates/sudoku-puzzle/) | Playable Sudoku, three difficulties. | "Play Sudoku" |

> All 34 template bodies are included and ready to open.

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
templates.json    Machine-readable index of all 34 templates
assets/tokens.css Astryx design tokens (verbatim)
templates/        One folder per template: index.html + README.md
site/             Astro 5 preview site (GitHub Pages)
llms.txt          Plain-text project summary
```

## License

MIT — see [LICENSE](LICENSE). © 2026 realfshaw-crypto.

---

## 中文说明

**Muse Space — muse空间：34 个开箱即用的 Muse Space 小程序模板。**

就像微信小程序之于微信：不用装、不用开发，对 Muse 说一句话就能生成一个能直接用的空间。

- 「打开记账」→ 记账本；「给我一个番茄钟」→ 专注时钟；「打开习惯打卡」→ 习惯打卡。
- Muse 按 `SKILL.md` 从模板库取模板，填入你的数据，生成 Space。数据只存在本地浏览器（localStorage）。
- 全部模板统一用 Meta Astryx 设计令牌（`assets/tokens.css`），深浅色自动适配，界面文字简洁，中英双语。
- 6 大分类 34 个模板：AI 工作（提示词工坊、会议纪要、简历教练、内容日历）、效率（专注时钟、习惯打卡、任务看板、循环待办、灵感收集箱、复古掌上电脑、应用中心）、财务（预算管家、记账本、订阅管家、存钱目标、账单管家）、健康（健身记录、饮食热量、睡眠心情）、学习（学习计划、闪卡复习、阅读追踪、趣味问答）、生活与家庭（旅行计划、买菜食谱、家庭库存、礼物清单、桌游记分、宠物日程、餐厅心愿单、旅行足迹、活动倒计时、食材库存、数独）。
- 完整中文版见 [README.zh-CN.md](README.zh-CN.md)。许可证：MIT。
