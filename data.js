/**
 * 我的英语语料本 · 数据
 *
 * 字段说明：
 *   id     : 唯一编号
 *   topic  : 主题（用于 Tab 分类）
 *   zh     : 中文（正面）
 *   en     : 英文（背面），HTML 字符串
 *            - <span class="pattern">...</span>   橙色 = 句式骨架
 *            - <span class="phrase">...</span>    青色 = 高频搭配
 *   date   : 学习日期
 *   note   : 备注 / 易错点 (可选)
 *
 * 字符串规则：所有字段统一用反引号 ` `，可以放心嵌套中英文引号
 */

window.cardData = [
  // ========== Day 1 · 请求帮忙 ==========
  {
    id: 1,
    topic: `请求帮忙`,
    zh: `我需要您帮我一个大忙。您能帮我查一个订单吗？`,
    en: `I need a big favor. Can you <span class="phrase">track down</span> an order for me?`,
    date: `2026-06-04`,
    note: `track down = 追查、查出（已走丢的东西），比 check 精确`
  },
  {
    id: 2,
    topic: `请求帮忙`,
    zh: `我写这封邮件的目的是请您帮一个忙。`,
    en: `<span class="pattern">I am writing to ask you a favor.</span>`,
    date: `2026-06-04`,
    note: `邮件开头万能模板，背下来`
  },
  {
    id: 3,
    topic: `请求帮忙`,
    zh: `我想知道您能否为我申请读 MBA 写一封推荐信。`,
    en: `<span class="pattern">I was wondering if you could</span> write a recommendation letter <span class="phrase">as part of</span> my MBA application.`,
    date: `2026-06-04`,
    note: `I WAS wondering（过去时表委婉）；as part of 表精确介词`
  },
  {
    id: 4,
    topic: `请求帮忙`,
    zh: `我很抱歉麻烦您，您能在明天下午花几个小时，带这周正在访问美国办事处的查尔斯先生，简单地参观一下我们的亚拉巴马工厂吗？`,
    en: `<span class="pattern">I'm sorry to inconvenience you, but do you think you could</span> <span class="phrase">spend a few hours</span> tomorrow afternoon <span class="phrase">giving a short tour of</span> our Alabama factory <span class="phrase">to</span> Mr. Charles, who is visiting the U.S. office this week?`,
    date: `2026-06-04`,
    note: `spend hours (不是 take)；give sb. a tour of [place]；who 紧贴 Mr. Charles`
  },
  {
    id: 5,
    topic: `请求帮忙`,
    zh: `我能否请您审核一下我的发言稿？您的专业知识将会极有帮助。`,
    en: `<span class="pattern">Would it be okay if I sent you</span> my presentation draft <span class="phrase">for your review</span>? Your <span class="phrase">expertise</span> would be extremely helpful.`,
    date: `2026-06-04`,
    note: `Would it be okay if I + 过去式（主语是"我"做某事，不是"得到你的帮助"）；expertise 一词替代 professional knowledge`
  },
  {
    id: 6,
    topic: `请求帮忙`,
    zh: `我想知道下周二的某个时间您能否抽出十分钟来接个电话。`,
    en: `<span class="pattern">I wonder if you could</span> <span class="phrase">spare ten minutes</span> of your time <span class="phrase">on the phone</span> sometime next Tuesday.`,
    date: `2026-06-04`,
    note: `spare time = 匀出时间；on the phone 易漏；sometime next Tuesday = 下周二某时`
  },

  // ========== 句式骨架卡（按礼貌度递增） ==========
  {
    id: 101,
    topic: `句式骨架`,
    zh: `【委婉请求 ★★】<br>直接请求："你能不能…？"`,
    en: `<span class="pattern">Can / Could you</span> ...?<br><br>例：<span class="phrase">Could you</span> send me the report?`,
    date: `2026-06-04`,
    note: `礼貌度最低，朋友/平级常用`
  },
  {
    id: 102,
    topic: `句式骨架`,
    zh: `【委婉请求 ★★★】<br>给一层缓冲："你觉得你能…吗？"`,
    en: `<span class="pattern">Do you think you could</span> ...?<br><br>例：<span class="phrase">Do you think you could</span> spend a few hours tomorrow?`,
    date: `2026-06-04`
  },
  {
    id: 103,
    topic: `句式骨架`,
    zh: `【委婉请求 ★★★★】<br>过去时表委婉："不知道你能不能…"`,
    en: `<span class="pattern">I was wondering if you could</span> ...<br><br>例：<span class="phrase">I was wondering if you could</span> write a recommendation letter.`,
    date: `2026-06-04`,
    note: `最经典的英文求人办事句式 — 用过去时 was，是礼貌度的标志`
  },
  {
    id: 104,
    topic: `句式骨架`,
    zh: `【委婉请求 ★★★★★】<br>最礼貌版："我能不能…？"（主语是我）`,
    en: `<span class="pattern">Would it be okay if I</span> + 过去式动词 ...?<br><br>例：<span class="phrase">Would it be okay if I sent you</span> my draft for your review?`,
    date: `2026-06-04`,
    note: `关键陷阱：主语是"我"，描述"我做某事"；动词用过去式`
  },
  {
    id: 105,
    topic: `句式骨架`,
    zh: `【请求铺垫】<br>给请求加一层歉意缓冲`,
    en: `<span class="pattern">I'm sorry to inconvenience you, but</span> ...?<br><br>例：<span class="phrase">I'm sorry to inconvenience you, but</span> do you think you could ...?`,
    date: `2026-06-04`,
    note: `inconvenience 比 bother 更正式，适合对上级/客户`
  }
];
