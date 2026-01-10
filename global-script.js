/** 规则名称映射 */
const customProxyGroupsNames = {
  anthropic: "✨Anthropic",
  openai: "✨OpenAI",
  gemini: "✨Gemini",
  grok: "✨Grok",
  cursor: "✨Cursor",
  didi: "🚕滴滴直连",
  tiktok: "🎬TikTok",
  twitter: "📣Twitter",
};

/** 根据配置文件名称动态生成 rule 名称 */
function getRuleName(profileName) {
  const defaultRuleName = {
    direct: "DIRECT",
    proxy: "DIRECT",
    anthropic: customProxyGroupsNames.anthropic,
    openai: customProxyGroupsNames.openai,
    gemini: customProxyGroupsNames.gemini,
    grok: customProxyGroupsNames.grok,
    cursor: customProxyGroupsNames.cursor,
    didi: customProxyGroupsNames.didi,
    tiktok: customProxyGroupsNames.tiktok,
    twitter: customProxyGroupsNames.twitter,
  };

  const map = {
    管人痴: {
      ...defaultRuleName,
      proxy: "🔰 手动选择",
    },
    AntLink: {
      ...defaultRuleName,
      proxy: "AntLink",
    },
  };
  return map[profileName] || defaultRuleName;
}

/** 国内DNS服务器 */
const domesticNameservers = [
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
  "https://doh.360.cn/dns-query", // 360安全DNS
];

/** 国外DNS服务器 */
const foreignNameservers = [
  "https://1.1.1.1/dns-query", // Cloudflare(主)
  "https://1.0.0.1/dns-query", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query", // Mullvad(备)
];

/**
 * 配置中的规则"config.rules"是一个数组，通过新旧数组合并来添加
 * @param directRuleName 直接连接的规则名称
 * @param proxyRuleName 代理的规则名称
 * @returns 规则数组
 */
function getPrependRule({ directRuleName, proxyRuleName, anthropicRuleName, openaiRuleName, geminiRuleName, grokRuleName, cursorRuleName, didiRuleName, tiktokRuleName, twitterRuleName }) {
  return [
    `RULE-SET,lihawhaw-didi,${didiRuleName}`,
    `RULE-SET,lihawhaw-direct,${directRuleName}`,
    `RULE-SET,lihawhaw-anthropic,${anthropicRuleName}`,
    `RULE-SET,lihawhaw-openai,${openaiRuleName}`,
    `RULE-SET,lihawhaw-gemini,${geminiRuleName}`,
    `RULE-SET,lihawhaw-grok,${grokRuleName}`,
    `RULE-SET,lihawhaw-cursor,${cursorRuleName}`,
    `RULE-SET,lihawhaw-tiktok,${tiktokRuleName}`,
    `RULE-SET,lihawhaw-twitter,${twitterRuleName}`,
    `RULE-SET,lihawhaw-proxy,${proxyRuleName}`,
    `RULE-SET,loyalsoldier-direct,${directRuleName}`,
    `RULE-SET,loyalsoldier-private,${directRuleName}`,
    `RULE-SET,loyalsoldier-cncidr,${directRuleName}`,
    `RULE-SET,loyalsoldier-google,${proxyRuleName}`,
    `RULE-SET,loyalsoldier-proxy,${proxyRuleName}`,
    `RULE-SET,loyalsoldier-gfw,${proxyRuleName}`,
    `DOMAIN,ping0.cc,${proxyRuleName}`,
    `DOMAIN-SUFFIX,ping0.cc,${proxyRuleName}`,
  ];
}

/** 代理组通用配置 */
const groupBaseOption = {
  interval: 300,
  timeout: 3000,
  url: "https://www.google.com/generate_204",
  lazy: true,
  "max-failed-times": 3,
  hidden: false,
};

/**
 * 代理组
 * @param directRuleName 直接连接的规则名称
 * @param proxyRuleName 代理的规则名称
 * @returns 代理组数组
 */
function getProxyGroups({ directRuleName, proxyRuleName }) {
  return [
    {
      ...groupBaseOption,
      name: `${customProxyGroupsNames.anthropic}`,
      type: "select",
      proxies: [`${customProxyGroupsNames.anthropic}自动选择`, proxyRuleName, directRuleName],
      "include-all-proxies": true,
    },
    {
      ...groupBaseOption,
      name: `${customProxyGroupsNames.anthropic}自动选择`,
      type: "url-test",
      url: "https://www.anthropic.com/favicon.ico",
      tolerance: 50,
      proxies: [],
      "include-all-proxies": true,
      filter: "^(?!.*香港|.*Direct|.*手动选择).*$",
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: `${customProxyGroupsNames.openai}`,
      type: "select",
      proxies: [`${customProxyGroupsNames.openai}自动选择`, proxyRuleName, directRuleName],
      "include-all-proxies": true,
    },
    {
      ...groupBaseOption,
      name: `${customProxyGroupsNames.openai}自动选择`,
      type: "url-test",
      url: "https://chat.openai.com",
      tolerance: 50,
      proxies: [],
      "include-all-proxies": true,
      filter: "^(?!.*香港|.*Direct|.*手动选择).*$",
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: `${customProxyGroupsNames.gemini}`,
      type: "select",
      proxies: [`${customProxyGroupsNames.gemini}自动选择`, proxyRuleName, directRuleName],
      "include-all-proxies": true,
    },
    {
      ...groupBaseOption,
      name: `${customProxyGroupsNames.gemini}自动选择`,
      type: "url-test",
      url: "https://ai.google.com",
      tolerance: 50,
      proxies: [],
      "include-all-proxies": true,
      filter: "^(?!.*香港|.*Direct|.*手动选择).*$",
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: customProxyGroupsNames.grok,
      type: "select",
      proxies: [`${customProxyGroupsNames.grok}自动选择`, proxyRuleName, directRuleName],
      "include-all-proxies": true,
    },
    {
      ...groupBaseOption,
      name: `${customProxyGroupsNames.grok}自动选择`,
      type: "url-test",
      url: "https://x.ai/favicon.ico",
      tolerance: 50,
      proxies: [],
      "include-all-proxies": true,
      filter: "^(?!.*香港|.*Direct|.*手动选择).*$",
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: customProxyGroupsNames.cursor,
      type: "select",
      proxies: [`${customProxyGroupsNames.cursor}自动选择`, proxyRuleName, directRuleName],
      "include-all-proxies": true,
    },
    {
      ...groupBaseOption,
      name: `${customProxyGroupsNames.cursor}自动选择`,
      type: "url-test",
      url: "https://api2.cursor.sh",
      tolerance: 50,
      proxies: [],
      "include-all-proxies": true,
      filter: "^(?!.*香港|.*Direct|.*手动选择).*$",
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: customProxyGroupsNames.tiktok,
      type: "select",
      proxies: [proxyRuleName],
      "include-all-proxies": true,
    },
    {
      ...groupBaseOption,
      name: customProxyGroupsNames.twitter,
      type: "select",
      proxies: [proxyRuleName],
      "include-all-proxies": true,
    },
    {
      ...groupBaseOption,
      name: customProxyGroupsNames.didi,
      type: "select",
      proxies: [directRuleName],
      "include-all-proxies": true,
    },
  ];
}

function main(config, profileName = "管人痴") {
  const ruleNames = getRuleName(profileName);
  const {
    direct: directRuleName,
    proxy: proxyRuleName,
    anthropic: anthropicRuleName,
    openai: openaiRuleName,
    gemini: geminiRuleName,
    grok: grokRuleName,
    cursor: cursorRuleName,
    didi: didiRuleName,
    tiktok: tiktokRuleName,
    twitter: twitterRuleName,
  } = ruleNames;

  let oldRules = config["rules"];
  config["rules"] = getPrependRule({
    directRuleName,
    proxyRuleName,
    anthropicRuleName,
    openaiRuleName,
    geminiRuleName,
    grokRuleName,
    cursorRuleName,
    didiRuleName,
    tiktokRuleName,
    twitterRuleName,
  }).concat(oldRules);

  config["proxy-groups"] = config["proxy-groups"].slice(0, -1).concat(getProxyGroups({ directRuleName, proxyRuleName })).concat(config["proxy-groups"].slice(-1));
  return config;
}
