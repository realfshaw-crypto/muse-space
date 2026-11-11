---
name: muse-space
description: Muse Space (muse空间) — generate a ready-to-use Muse Space from 34 mini-app templates, like WeChat Mini Programs. Use when the user asks to open, create or use a small daily tool: expense tracker, Pomodoro / focus timer, habit tracker, budget planner, subscription tracker, flashcards, workout log, trip planner, prompt library, meeting notes, and more. Triggers include muse空间, Muse Space, mini program, 小程序, and each template name in English or Chinese.
---

# Muse Space — muse空间

A Muse Skill that turns one sentence into a working Muse Space, using the 34 templates in this repository. The WeChat Mini Program idea, for Muse: no install, no coding, open and use.

## When to trigger

Trigger when the user wants a small, ready-to-use daily tool as a Space, including (non-exhaustive):

- General: "muse空间", "Muse Space", "mini program", "小程序", "打开一个小工具"
- Prompt Studio / 提示词工坊: "open my prompt library", "打开提示词工坊"
- Meeting Notes / 会议纪要: "meeting notes", "会议纪要"
- Resume Coach / 简历教练: "resume coach", "简历教练", "帮我改简历"
- Content Calendar / 内容日历: "content calendar", "内容日历"
- Focus Timer / 专注时钟: "Pomodoro", "focus timer", "番茄钟", "专注时钟"
- Habit Tracker / 习惯打卡: "habit tracker", "习惯打卡"
- Task Board / 任务看板: "task board", "kanban", "任务看板"
- Budget Planner / 预算管家: "budget planner", "预算管家", "做预算"
- Expense Tracker / 记账本: "expense tracker", "打开记账", "记账本", "记一笔"
- Subscription Tracker / 订阅管家: "subscription tracker", "订阅管家", "我的订阅"
- Savings Goals / 存钱目标: "savings goals", "存钱目标"
- Bill Tracker / 账单管家: "bill tracker", "bills due", "账单管家", "打开账单管家"
- Workout Log / 健身记录: "workout log", "健身记录"
- Meal & Calorie / 饮食热量: "calorie tracker", "饮食热量", "记热量"
- Sleep & Mood / 睡眠心情: "sleep tracker", "睡眠记录", "心情日记"
- Study Planner / 学习计划: "study planner", "学习计划"
- Flashcards / 闪卡复习: "flashcards", "闪卡", "背单词卡片"
- Reading Tracker / 阅读追踪: "reading tracker", "阅读追踪", "书单"
- Trip Planner / 旅行计划: "trip planner", "旅行计划", "做行程"
- Travel Memory Map / 旅行足迹: "travel map", "travel memories", "旅行足迹", "打开旅行足迹"
- Event Countdown / 活动倒计时: "event countdown", "countdown", "活动倒计时", "打开活动倒计时"
- Grocery & Meals / 买菜食谱: "meal planner", "买菜清单", "一周食谱"
- Home Inventory / 家庭库存: "home inventory", "家庭库存"
- Gift Tracker / 礼物清单: "gift tracker", "gift list", "礼物清单", "打开礼物清单"
- Game Score Tracker / 桌游记分: "game score", "scoreboard", "桌游记分", "打开记分板"
- Recurring To-Dos / 循环待办: "recurring tasks", "循环待办", "打开循环待办"
- Idea Capture / 灵感收集箱: "idea capture", "capture idea", "灵感收集箱", "打开灵感收集箱"
- Pet Day Tracker / 宠物日程: "pet day", "pet tracker", "宠物日程", "打开宠物日程"
- Restaurant Wishlist / 餐厅心愿单: "restaurant wishlist", "餐厅心愿单", "打开餐厅心愿单"
- Retro Organizer / 复古掌上电脑: "retro organizer", "Palm Pilot", "复古掌上电脑", "打开复古掌上电脑"
- App Hub / 应用中心: "app hub", "应用中心", "打开应用中心"
- Trivia Quiz / 趣味问答: "trivia quiz", "quiz", "趣味问答", "打开趣味问答"
- Pantry Tracker / 食材库存: "pantry tracker", "食材库存", "打开食材库存"
- Sudoku / 数独: "sudoku", "数独", "打开数独"

If the request is ambiguous, match by keywords in `templates.json` (`keywords_en` / `keywords_zh`). If nothing matches, say so plainly and list the closest two templates. Do not invent a template that is not in `templates.json`.

## Flow — how to generate a Space

1. **Look up.** Read `templates.json` in this repository. Match the user request to exactly one template (`slug`). Confirm the category and `path`.
2. **Load.** Read `templates/<slug>/index.html` (the template body) and `templates/<slug>/README.md` (fields and usage).
3. **Fill.** Replace the template's sample data with the user's real data when they provided it (amounts, habits, books, subscriptions, etc.). Keep sample data only for parts the user did not specify, and label it as sample if kept.
4. **Generate.** Create the Muse Space from the filled single-file HTML. Keep the file self-contained: Astryx tokens inlined or linked from `assets/tokens.css` content, no external build step.
5. **Hand over.** Tell the user, in one or two short lines: what was created, where their data lives (localStorage in the Space), and one next action (e.g. "Tap Add expense to log your first one. / 点「记一笔」记第一笔。").

## Generation rules (must follow)

- **Change data, never the visual layer.** Do not alter token values, colors, radii, spacing, fonts or layout structure from `assets/tokens.css` and the template. Only swap data, text content and user-specific lists.
- **Astryx tokens only.** Any style you touch must use `var(--...)` semantic tokens. No raw hex, no raw px font sizes, no custom colors. Surface order: body → surface → card → popover.
- **Simple UI text.** One screen, one job. Buttons are short verbs (Save / 保存, Add expense / 记一笔). Empty states state the next step only. Numbers and units direct, no long accounting-style sentences.
- **Bilingual.** English is the default (`lang="en"`); keep the template's Chinese copy alongside. Do not drop either language.
- **SVG motion, token timing only.** Inline SVG icons (24×24, stroke style) and CSS/SVG animation using only `--duration-*` and `--ease-*` (micro-interactions 175ms, enter/exit 410ms). Always respect `prefers-reduced-motion`. No animation libraries, no external images.
- **Local data.** Persistence is `localStorage` inside the generated Space. Never send template data to an external service.
- **Responsive + dark mode.** Keep the template's responsive layout and automatic light/dark (`light-dark()`). Do not add a manual theme toggle unless the template already has one.

## Notes

- Template bodies are released in batches. If a matched template folder has no `index.html` yet (status "Coming soon" in its README), tell the user it is coming soon and offer the closest available template instead. Do not fabricate the missing template.
- The machine-readable index is `templates.json`. The human overview is `README.md`. `llms.txt` / `llms-full.txt` are plain-text summaries of the same facts — keep all consistent when editing.
