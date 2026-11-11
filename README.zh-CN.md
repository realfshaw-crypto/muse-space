# Muse Space — muse空间

**34 个开箱即用的 Muse Space 小程序模板，像微信小程序一样，为你的日常 AI 生活而备。**

[English → README.md](README.md) · [模板索引 → templates.json](templates.json) · [llms.txt](llms.txt)

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Templates: 34](https://img.shields.io/badge/Templates-34-blue.svg) ![Design: Astryx](https://img.shields.io/badge/Design-Astryx-black.svg)

## 截图

![Muse Space 预览站首页 — 6 大分类共 34 个小程序模板，带搜索框](docs/screenshots/preview-home.png)

*预览站首页：6 大分类、34 个模板，顶部带搜索框。*

| | |
|---|---|---|
| ![记账本模板 — 按分类记录支出，数据保存在本地](docs/screenshots/template-expense-tracker.png) | ![专注时钟模板 — 番茄钟倒计时圆环与今日专注次数](docs/screenshots/template-focus-pomodoro.png) |
| *记账本：记一笔支出，按分类看汇总。* | *专注时钟：25 分钟番茄倒计时与近 7 天专注记录。* |
| ![提示词工坊模板 — 按分类保存的提示词列表，一键复制](docs/screenshots/template-ai-prompt-studio.png) | ![习惯打卡模板 — 习惯列表、连续天数与近 7 天打卡点](docs/screenshots/template-habit-tracker.png) |
| *提示词工坊：按分类保存提示词，一键复制。* | *习惯打卡：今日打卡、连续天数、完成率与近 7 天记录。* |
| ![礼物清单模板 — 按人记礼物点子、尺码与预算](docs/screenshots/template-gift-tracker.png) | ![桌游记分模板 — 比赛记录、胜者与排行榜](docs/screenshots/template-game-score-tracker.png) |
| *礼物清单：按人记礼物点子、尺码与预算。* | *桌游记分：比赛记录、胜者与排行榜。* |
| ![循环待办模板 — 周期待办，到期提醒，做完自动顺延](docs/screenshots/template-recurring-todos.png) | ![宠物日程模板 — 遛弯、吃饭、午睡一条时间线](docs/screenshots/template-pet-day-tracker.png) |
| *循环待办：做完自动顺延的到期日。* | *宠物日程：遛弯、吃饭、午睡一条时间线。* |
| ![餐厅心愿单模板 — 收藏餐厅的价格与评分](docs/screenshots/template-restaurant-wishlist.png) | |
| *餐厅心愿单：收藏餐厅的价格与评分。* | |
| ![账单管家模板 — 账单、到期日与刷哪张卡](docs/screenshots/template-bill-tracker.png) | ![旅行足迹模板 — 每次旅行钉上地点与故事](docs/screenshots/template-travel-memory-map.png) |
| *账单管家：账单、到期日与刷哪张卡。* | *旅行足迹：每次旅行钉上地点与故事。* |
| ![食材库存模板 — 食材库存、数量与保质期提醒](docs/screenshots/template-pantry-tracker.png) | ![数独模板 — 能玩的数独，三档难度](docs/screenshots/template-sudoku-puzzle.png) |
| *食材库存：库存、数量与保质期提醒。* | *数独：三档难度、笔记、提示与计时。* |
| ![复古掌上电脑模板 — 掌上电脑风日程、待办、备忘与通讯录](docs/screenshots/template-retro-organizer.png) | ![应用中心模板 — 常用应用与链接收进一个中心](docs/screenshots/template-app-hub.png) |
| *复古掌上电脑：日程、待办、备忘与通讯录合一。* | *应用中心：常用应用与链接，搜、钉、点开一步到位。* |
| ![趣味问答模板 — 四分类限时问答，计分连胜](docs/screenshots/template-trivia-quiz.png) | |
| *趣味问答：40 道限时问答、计分连胜，答完复盘错题。* | |

## 这是什么？

微信小程序不用装、打开就用。Muse Space 对 Muse Space 做同样的事。

你对 Muse 说一句话——「打开记账」「给我一个番茄钟」——Muse 就从这个仓库取对应模板，填入你的数据，生成一个能直接用的空间。不用写代码，不用构建，打开就用。

这个仓库同时是三样东西：一个 **Muse 技能**（`SKILL.md`）、一个 **模板库**（34 个单文件 HTML 模板）、一个 **预览站**（Astro，在 `site/` 目录）。

### 常见问题

**Muse Space 是什么？**
Muse Space 是一个 Muse 技能加一个模板库，包含 34 个开箱即用的 Muse Space 小程序模板。它仿照微信小程序：单个用途的小应用，不用安装、不用写代码，打开就用。

**Muse Space 怎么工作？**
你用中文或英文说一句话，说出你需要的工具。Muse 读取 `templates.json`，从 `templates/<slug>/index.html` 加载对应模板，填入你的数据，生成一个能直接用的空间。

**Muse Space 包含哪些模板？**
共 34 个模板、6 大分类：AI 工作（4 个）、效率（7 个）、财务（5 个）、健康（3 个）、学习（4 个）、生活与家庭（11 个）。每个模板都是一个独立的 HTML 文件，数据保存在浏览器本地（localStorage）。

**Muse Space 免费且开源吗？**
是。本项目以 MIT 许可证发布，可以复制、修改和复用任何模板。

## 为什么用它

- **零配置。** 每个模板就是一个 HTML 文件，复制、打开、就能用。
- **数据在本地。** 模板用 localStorage 存数据，不上传任何服务器。
- **一套设计语言。** 全部模板用 Meta Astryx 设计令牌，语义颜色、深浅色自动适配、间距与动效统一。
- **双语默认。** 英文为主、中文并行；界面文字简洁，按钮用动词：保存、记一笔、完成。

## 模板清单 — 6 类 34 个

### AI 工作
| 模板 | 用途 | 这样说 |
|---|---|---|
| [提示词工坊](templates/ai-prompt-studio/) | 收藏、分类、复用提示词，一键复制 | 打开提示词工坊 |
| [会议纪要](templates/ai-meeting-notes/) | 决议、待办、负责人，结构化呈现 | 记会议纪要 |
| [简历教练](templates/ai-resume-coach/) | 打磨简历要点，核对岗位匹配 | 帮我改简历 |
| [内容日历](templates/ai-content-calendar/) | 选题、排期、发布状态一屏管 | 打开内容日历 |

### 效率
| 模板 | 用途 | 这样说 |
|---|---|---|
| [专注时钟](templates/focus-pomodoro/) | 番茄钟、近 7 天专注记录与长休 | 给我一个番茄钟 |
| [习惯打卡](templates/habit-tracker/) | 连续天数、近 7 天打卡与完成率 | 打开习惯打卡 |
| [任务看板](templates/task-kanban/) | 三列看板、优先级 | 打开任务看板 |
| [循环待办](templates/recurring-todos/) | 周期待办，到期提醒，做完自动顺延 | 打开循环待办 |
| [灵感收集箱](templates/idea-capture/) | 灵感随手记，稍后再归类 | 打开灵感收集箱 |
| [复古掌上电脑](templates/retro-organizer/) | 掌上电脑风日程、待办、备忘与通讯录 | 打开复古掌上电脑 |
| [应用中心](templates/app-hub/) | 常用应用与链接收进一个中心 | 打开应用中心 |

### 财务
| 模板 | 用途 | 这样说 |
|---|---|---|
| [预算管家](templates/budget-planner/) | 月预算与分类上限 | 打开预算管家 |
| [记账本](templates/expense-tracker/) | 几秒记一笔 | 打开记账 |
| [订阅管家](templates/subscription-tracker/) | 续费提醒、年支出与 30 天内续费 | 看看我的订阅 |
| [存钱目标](templates/savings-goals/) | 目标进度与里程碑 | 打开存钱目标 |
| [账单管家](templates/bill-tracker/) | 账单、到期日与刷哪张卡 | 打开账单管家 |

### 健康
| 模板 | 用途 | 这样说 |
|---|---|---|
| [健身记录](templates/workout-log/) | 组数、次数、重量、连续打卡与教练提示 | 打开健身记录 |
| [饮食热量](templates/meal-calorie/) | 每餐热量与蛋白质 | 打开饮食热量 |
| [睡眠心情](templates/sleep-mood-journal/) | 睡眠时长与心情曲线 | 打开睡眠记录 |

### 学习
| 模板 | 用途 | 这样说 |
|---|---|---|
| [学习计划](templates/study-planner/) | 课表转复习块 | 打开学习计划 |
| [闪卡复习](templates/flashcard-review/) | 间隔重复、掌握度，先练最弱卡片 | 打开闪卡 |
| [阅读追踪](templates/reading-tracker/) | 书单、进度、摘录 | 打开阅读追踪 |
| [趣味问答](templates/trivia-quiz/) | 40 道限时问答、计分连胜、答完复盘 | 打开趣味问答 |

### 生活与家庭
| 模板 | 用途 | 这样说 |
|---|---|---|
| [旅行计划](templates/trip-planner/) | 按天行程、清单、旅行预算 | 打开旅行计划 |
| [买菜食谱](templates/grocery-meal-planner/) | 一周食谱自动带出买菜清单 | 打开买菜清单 |
| [家庭库存](templates/home-inventory/) | 库存、保质期、家务分工 | 打开家庭库存 |
| [礼物清单](templates/gift-tracker/) | 按人记礼物点子、尺码与预算 | 打开礼物清单 |
| [桌游记分](templates/game-score-tracker/) | 每局胜负与对手战绩 | 打开记分板 |
| [宠物日程](templates/pet-day-tracker/) | 遛弯、吃饭、午睡一条时间线 | 打开宠物日程 |
| [餐厅心愿单](templates/restaurant-wishlist/) | 收藏餐厅的价格与评分 | 打开餐厅心愿单 |
| [旅行足迹](templates/travel-memory-map/) | 每次旅行钉上地点与故事 | 打开旅行足迹 |
| [活动倒计时](templates/event-countdown/) | 重要日子还剩几天，一眼看到 | 打开活动倒计时 |
| [食材库存](templates/pantry-tracker/) | 食材库存、数量与保质期提醒 | 打开食材库存 |
| [数独](templates/sudoku-puzzle/) | 能玩的数独，三档难度 | 打开数独 |

> 34 个模板本体已全部包含，可直接打开使用。

## 快速开始

1. 把本仓库作为 Muse 技能添加（让 Muse 读取 `SKILL.md`），或直接把仓库链接给 Muse。
2. 用中文或英文说出你的需求：「打开记账」「给我一个番茄钟」「打开习惯打卡」。
3. Muse 读取 `templates.json`，加载对应模板，填入你的数据，生成你的空间。

也可以直接用：浏览器打开 `templates/<slug>/index.html` 即可，不需要服务器。

## 设计 — Astryx

全部模板共用一个令牌文件：[`assets/tokens.css`](assets/tokens.css)（Meta Astryx core 默认值，逐字植入）。

- 只用语义令牌，组件只写 `var(--...)`，不写裸 hex 与裸 px。
- 表面层级：body → surface → card → popover。
- 深浅色跟随系统自动切换（`light-dark()`）。
- 动效只用令牌时长：微交互 175ms、进出场 410ms；SVG 动效尊重 `prefers-reduced-motion`。
- 控件高度 28 / 32 / 36px；间距 4px 步进。

## 许可证

MIT，见 [LICENSE](LICENSE)。© 2026 realfshaw-crypto。
