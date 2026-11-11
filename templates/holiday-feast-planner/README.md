# Holiday Feast Planner — 节日大餐策划

A command center for a big holiday meal: one page to plan the event, the guest list, the menu, the prep timeline and the shopping list.

## What it does

- **Event header** — editable event name and date, with a live countdown ("N days to go", "today", or "N days ago") and the guest count.
- **Guests** — add guests with dietary notes or allergies (e.g. vegetarian, nut allergy), delete them, and see the total headcount.
- **Menu by course** — Appetizers, Mains, Sides, Desserts and Drinks. Each dish has a name, who cooks it, a status (Planned / Prepping / Done) and servings. Add or delete dishes per course; per-course dish counts are shown.
- **Prep timeline** — "Days before" tasks with a day offset (e.g. 3 days before: buy the turkey) and a "Day-of schedule" with times (e.g. 09:00 preheat the oven). Add, delete and check off tasks in both lists; a progress bar tracks completion.
- **Shopping list** — add items with a quantity and a bought checkbox. The "Suggest from menu" button adds one "Ingredients: <dish name>" item per dish, so the list can start from the menu.
- **Sample data** — opens with a Thanksgiving Dinner example (26 November 2026, 8 guests, full menu, timeline and shopping list). A reset button restores the sample at any time.
- **Language** — English by default, with a 中文 toggle. Everything is saved in the browser (localStorage); no account, no uploads.

## How to use

Open `index.html` in a browser. Edit the event name and date, add guests and dishes, check off prep tasks as you go, and use "Suggest from menu" to seed the shopping list. All changes are saved automatically on the device.

---

## 中文简介

节日大餐策划：一个页面管好整桌大餐——大餐名称与日期倒计时、宾客名单与饮食备注、按菜式分的菜单、提前准备与当天时间线、采购清单。打开即带一份感恩节晚餐示例（2026 年 11 月 26 日，8 位宾客），可随时一键恢复示例。支持中英文切换，数据只保存在浏览器本地。
