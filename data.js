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
  },

  // ========== Day 2 · 感谢 appreciation ==========
  {
    id: 201,
    topic: `感谢`,
    zh: `我向你致敬！`,
    en: `<span class="pattern">My hat's off to you!</span>`,
    date: `2026-06-05`,
    note: `习语：My hat's off to sb. — 向某人脱帽致敬`
  },
  {
    id: 202,
    topic: `感谢`,
    zh: `你的努力使这成为可能。`,
    en: `Your <span class="phrase">efforts have made</span> this <span class="phrase">possible</span>.`,
    date: `2026-06-05`,
    note: `现在完成时 have made；make sth possible 固定搭配，不加 become`
  },
  {
    id: 203,
    topic: `感谢`,
    zh: `非常感谢您的支持。`,
    en: `Your support <span class="pattern">is greatly appreciated</span>.`,
    date: `2026-06-05`,
    note: `support 不可数 → is（不是 are）；地道用 greatly appreciated，不是 very appreciated`
  },
  {
    id: 204,
    topic: `感谢`,
    zh: `再次感谢你聪明而有用的建议。`,
    en: `<span class="pattern">Thanks again for</span> your clever and useful suggestion.`,
    date: `2026-06-05`,
    note: `Thanks again 比 Thank you again 更地道；动词+again 时用复数 Thanks`
  },
  {
    id: 205,
    topic: `感谢`,
    zh: `我真诚地感谢你的时间和关注。`,
    en: `<span class="pattern">I sincerely appreciate</span> your <span class="phrase">time and attention</span>.`,
    date: `2026-06-05`,
    note: `商务用 attention（中性的关注），不要用 concern（是个人关切/担忧）`
  },
  {
    id: 206,
    topic: `感谢`,
    zh: `如果没有你的帮助，我不知道该怎么办。`,
    en: `<span class="pattern">I don't know how I would have managed</span> <span class="phrase">without your help</span>.`,
    date: `2026-06-05`,
    note: `虚拟语气 would have + 过去分词；简化版：I couldn't have done it without you.`
  },
  {
    id: 207,
    topic: `感谢`,
    zh: `像你这样的客户是我们继续经营的原因。`,
    en: `Customers like you <span class="pattern">are the reason we</span> <span class="phrase">stay in business</span>.`,
    date: `2026-06-05`,
    note: `Customers 复数 → are；stay in business = 继续经营，固定搭配`
  },
  {
    id: 208,
    topic: `感谢`,
    zh: `你还能忍受多一句赞美吗？`,
    en: `<span class="pattern">Can you stand one more</span> <span class="phrase">compliment</span>?`,
    date: `2026-06-05`,
    note: `俏皮句式，夸人前的铺垫；核心词 compliment（赞美），不是 gratitude`
  },
  {
    id: 209,
    topic: `感谢`,
    zh: `如果我能报答你的好意，请告诉我。`,
    en: `<span class="pattern">If I can</span> <span class="phrase">repay your kindness</span>, <span class="pattern">let me know</span>.`,
    date: `2026-06-05`,
    note: `repay your kindness = 报答好意（pay back 是还钱）；If ..., let me know 模板`
  },
  {
    id: 210,
    topic: `感谢`,
    zh: `我印象深刻！`,
    en: `<span class="pattern">I'm impressed!</span>`,
    date: `2026-06-05`,
    note: `impress 及物动词，主语是感受方（我）；同类：I'm shocked / amazed / surprised / touched`
  },
  {
    id: 211,
    topic: `感谢`,
    zh: `你又一次成功了！`,
    en: `<span class="pattern">You've done it again!</span>`,
    date: `2026-06-05`,
    note: `4 个词的地道口语，整句背下来`
  },
  {
    id: 212,
    topic: `感谢`,
    zh: `过去的一年对公司来说是辉煌的一年，你为公司的成功做出了重大贡献。`,
    en: `This past year has been <span class="phrase">a banner year</span> for the company, and you <span class="pattern">have contributed significantly to</span> its success.`,
    date: `2026-06-05`,
    note: `a banner year = 辉煌的一年（习语）；contribute significantly to = 对...做出重大贡献`
  },
  {
    id: 213,
    topic: `感谢`,
    zh: `我想告诉你，我非常感谢你为我们公司的回收计划所做的一切。`,
    en: `<span class="pattern">I want to tell you how much I appreciate</span> what you are doing for the <span class="phrase">recycling program</span> in our company.`,
    date: `2026-06-05`,
    note: `recycling program 不是 recycle plan；what you are doing 现在进行时强调持续行动`
  },
  {
    id: 214,
    topic: `感谢`,
    zh: `作为杰罗姆小学的校长，你可能想知道，我们认为欧佳恩小姐是一个绝对的宝藏。`,
    en: `<span class="phrase">As principal of</span> Jerome Elementary School, <span class="pattern">you might like to know that</span> we think Miss Eurgain is <span class="phrase">an absolute treasure</span>.`,
    date: `2026-06-05`,
    note: `As principal of ... 不带冠词 the；an absolute treasure = 绝对的宝藏（一个词搞定"超棒"）`
  },
  {
    id: 215,
    topic: `感谢`,
    zh: `我想对你们所有人表示感谢，感谢你们上周为获得格里斯沃斯的合同付出了额外的时间和辛勤的工作。`,
    en: `<span class="pattern">I want to express my appreciation to all of you for</span> the extra hours and hard work you put in last week <span class="phrase">to secure the Gryseworth contract</span>.`,
    date: `2026-06-05`,
    note: `团队感谢最高级句式；secure the contract = 拿下合同；all of you 不是 all you guys（书面/正式）`
  },

  // ========== 临时插课 · 预约/询问空闲（来自 WhatsApp 实战） ==========
  {
    id: 301,
    topic: `预约询问`,
    zh: `今天下午还有空位吗？`,
    en: `Do you have <span class="phrase">any available slots</span> this afternoon?`,
    date: `2026-06-05`,
    note: `available slots = 可用的时间空位；afternoon 一个词无空格`
  },
  {
    id: 302,
    topic: `预约询问`,
    zh: `还有别的发型师有空吗？`,
    en: `<span class="pattern">Are any other stylists available</span>?`,
    date: `2026-06-05`,
    note: `stylist = 发型师；any other + 名词复数；商务对话不用 avail 缩写`
  },
  {
    id: 303,
    topic: `预约询问`,
    zh: `X 今天正好不在。（软化坏消息）`,
    en: `X is <span class="phrase">unfortunately away</span> today.`,
    date: `2026-06-05`,
    note: `unfortunately 用来软化负面信息；away today = 今天不在`
  },
  {
    id: 304,
    topic: `预约询问`,
    zh: `您想看看其他日期吗？（委婉提议改期）`,
    en: `<span class="pattern">Would you like to explore</span> <span class="phrase">other dates</span>?`,
    date: `2026-06-05`,
    note: `Would you like to explore ... = 委婉提议尝试其他选项`
  },
  {
    id: 305,
    topic: `预约询问`,
    zh: `知道了，谢谢告诉我。（接收坏消息）`,
    en: `<span class="pattern">Got it, thanks for letting me know.</span>`,
    date: `2026-06-05`,
    note: `Got it = 明白了；thanks for letting me know = 谢谢告诉我，标配回应`
  }
];

// ========== 必背金句 ID 列表（顶部 hero 区轮播） ==========
window.mustKnowIds = [
  // Day 1 · 请求帮忙（核心句子）
  2,   // I am writing to ask you a favor.
  3,   // I was wondering if you could write a recommendation letter...
  5,   // Would it be okay if I sent you my presentation draft for your review?
  6,   // I wonder if you could spare ten minutes...
  // Day 2 · 感谢（10 句金句）
  203, // Your support is greatly appreciated.
  204, // Thanks again for your clever and useful suggestion.
  205, // I sincerely appreciate your time and attention.
  206, // I don't know how I would have managed without your help.
  208, // Can you stand one more compliment?
  209, // If I can repay your kindness, let me know.
  210, // I'm impressed!
  211, // You've done it again!
  214, // an absolute treasure / you might like to know
  215, // I want to express my appreciation to all of you for ...
  // 预约询问（实战 5 句）
  301, // Do you have any available slots this afternoon?
  302, // Are any other stylists available?
  304, // Would you like to explore other dates?
  305  // Got it, thanks for letting me know.
];
