# Muse Space — muse空间

**20 个开箱即用的 Muse Space 小程序模板，像微信小程序一样，为你的日常 AI 生活而备。**

[English → README.md](README.md) · [模板索引 → templates.json](templates.json) · [llms.txt](llms.txt)

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Templates: 20](https://img.shields.io/badge/Templates-20-blue.svg) ![Design: Astryx](https://img.shields.io/badge/Design-Astryx-black.svg)

## 截图

![Muse Space 预览站首页 — 6 大分类共 20 个小程序模板，带搜索框](docs/screenshots/preview-home.png)

*预览站首页：6 大分类、20 个模板，顶部带搜索框。*

| | |
|---|---|
| ![记账本模板 — 按分类记录支出，数据保存在本地](docs/screenshots/template-expense-tracker.png) | ![专注时钟模板 — 番茄钟倒计时圆环与今日专注次数](docs/screenshots/template-focus-pomodoro.png) |
| *记账本：记一笔支出，按分类看汇总。* | *专注时钟：25 分钟番茄倒计时与今日专注次数。* |
| ![提示词工坊模板 — 按分类保存的提示词列表，一键复制](docs/screenshots/template-ai-prompt-studio.png) | ![习惯打卡模板 — 习惯列表、连续天数与近 7 天打卡点](docs/screenshots/template-habit-tracker.png) |
| *提示词工坊：按分类保存提示词，一键复制。* | *习惯打卡：今日打卡、连续天数与近 7 天记录。* |

## 这是什么？

微信小程序不用装、打开就用。Muse Space 对 Muse Space 做同样的事。

你对 Muse 说一句话——「打开记账」「给我一个番茄钟」——Muse 就从这个仓库取对应模板，填入你的数据，生成一个能直接用的空间。不用写代码，不用构建，打开就用。

这个仓库同时是三样东西：一个 **Muse 技能**（`SKILL.md`）、一个 **模板库**（20 个单文件 HTML 模板）、一个 **预览站**（Astro，在 `site/` 目录）。

### 常见问题

**Muse Space 是什么？**
Muse Space 是一个 Muse 技能加一个模板库，包含 20 个开箱即用的 Muse Space 小程序模板。它仿照微信小程序：单个用途的小应用，不用安装、不用写代码，打开就用。

**Muse Space 怎么工作？**
你用中文或英文说一句话，说出你需要的工具。Muse 读取 `templates.json`，从 `templates/<slug>/index.html` 加载对应模板，填入你的数据，生成一个能直接用的空间。

**Muse Space 包含哪些模板？**
共 20 个模板、6 大分类：AI 工作（4 个）、效率（3 个）、财务（4 个）、健康（3 个）、学习（3 个）、生活与家庭（3 个）。每个模板都是一个独立的 HTML 文件，数据保存在浏览器本地（localStorage）。

**Muse Space 免费且开源吗？**
是。本项目以 MIT 许可证发布，可以复制、修改和复用任何模板。

## 为什么用它

- **零配置。** 每个模板就是一个 HTML 文件，复制、打开、就能用。
- **数据在本地。** 模板用 localStorage 存数据，不上传任何服务器。
- **一套设计语言。** 全部模板用 Meta Astryx 设计令牌，语义颜色、深浅色自动适配、间距与动效统一。
- **双语默认。** 英文为主、中文并行；界面文字简洁，按钮用动词：保存、记一笔、完成。

## 模板清单 — 6 类 20 个

### AI 工作
| 模板 | 用途 |
|---|---|
| [提示词工坊](templates/ai-prompt-studio/) | 收藏、分类、复用提示词，一键复制 |
| [会议纪要](templates/ai-meeting-notes/) | 决议、待办、负责人，结构化呈现 |
| [简历教练](templates/ai-resume-coach/) | 打磨简历要点，核对岗位匹配 |
| [内容日历](templates/ai-content-calendar/) | 选题、排期、发布状态一屏管 |

### 效率
| 模板 | 用途 |
|---|---|
| [专注时钟](templates/focus-pomodoro/) | 番茄钟加今日专注统计 |
| [习惯打卡](templates/habit-tracker/) | 连续天数与全年热力图 |
| [任务看板](templates/task-kanban/) | 三列看板、优先级 |

### 财务
| 模板 | 用途 |
|---|---|
| [预算管家](templates/budget-planner/) | 月预算与分类上限 |
| [记账本](templates/expense-tracker/) | 几秒记一笔 |
| [订阅管家](templates/subscription-tracker/) | 续费提醒与年支出，不再被自动扣费吓一跳 |
| [存钱目标](templates/savings-goals/) | 目标进度与里程碑 |

### 健康
| 模板 | 用途 |
|---|---|
| [健身记录](templates/workout-log/) | 组数、次数、重量 |
| [饮食热量](templates/meal-calorie/) | 每餐热量与蛋白质 |
| [睡眠心情](templates/sleep-mood-journal/) | 睡眠时长与心情曲线 |

### 学习
| 模板 | 用途 |
|---|---|
| [学习计划](templates/study-planner/) | 课表转复习块 |
| [闪卡复习](templates/flashcard-review/) | 间隔重复与掌握度 |
| [阅读追踪](templates/reading-tracker/) | 书单、进度、摘录 |

### 生活与家庭
| 模板 | 用途 |
|---|---|
| [旅行计划](templates/trip-planner/) | 按天行程、清单、旅行预算 |
| [买菜食谱](templates/grocery-meal-planner/) | 一周食谱自动带出买菜清单 |
| [家庭库存](templates/home-inventory/) | 库存、保质期、家务分工 |

> 20 个模板本体已全部包含，可直接打开使用。

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
