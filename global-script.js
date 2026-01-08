/** 规则名称映射 */
const customProxyGroupsNames = {
  ai: "✨国外模型",
  didi: "🚕滴滴直连",
  tiktok: "🎬TikTok",
  twitter: "📣Twitter",
};

/** 根据配置文件名称动态生成 rule 名称 */
function getRuleName(profileName) {
  const defaultRuleName = {
    direct: "DIRECT",
    proxy: "DIRECT",
    ai: customProxyGroupsNames.ai,
    didi: customProxyGroupsNames.didi,
    tiktok: customProxyGroupsNames.tiktok,
    twitter: customProxyGroupsNames.twitter,
  };

  const map = {
    管人痴: {
      ...defaultRuleName,
      direct: "🎯 Direct",
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
  "https://111169-03ie2axps6j4mo9r.alidns.com/dns-query", // 阿里云个人移动解析
  "https://111169.alidns.com/dns-query", // 阿里云个人移动解析
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
function getPrependRule({ directRuleName, proxyRuleName, aiRuleName, didiRuleName, tiktokRuleName, twitterRuleName }) {
  return [
    `RULE-SET,lihawhaw-didi,${didiRuleName}`,
    `RULE-SET,lihawhaw-direct,${directRuleName}`,
    `RULE-SET,lihawhaw-ai-service,${aiRuleName}`,
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
    `DOMAIN,static-2v.gitbook.com,${proxyRuleName}`,
    `DOMAIN-SUFFIX,gitbook.com,${proxyRuleName}`,
    `DOMAIN-SUFFIX,google-analytics.com,${proxyRuleName}`,
    `DOMAIN-SUFFIX,aliyun.com,${directRuleName}`,
    `DOMAIN-SUFFIX,console.aliyun.com,${directRuleName}`,
    `DOMAIN,docs.claude-mem.ai,${proxyRuleName}`,
    `DOMAIN-SUFFIX,claude-mem.ai,${proxyRuleName}`,
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
      name: customProxyGroupsNames.ai,
      type: "select",
      proxies: [proxyRuleName, directRuleName],
      //   'include-all': true,
      "include-all-proxies": true,
      //   'include-all-providers': true,
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
  const { direct: directRuleName, proxy: proxyRuleName, ai: aiRuleName, didi: didiRuleName, tiktok: tiktokRuleName, twitter: twitterRuleName } = ruleNames;

  let oldRules = config["rules"];
  config["rules"] = getPrependRule({ directRuleName, proxyRuleName, aiRuleName, didiRuleName, tiktokRuleName, twitterRuleName }).concat(oldRules);

  config["proxy-groups"] = config["proxy-groups"].slice(0, -1).concat(getProxyGroups({ directRuleName, proxyRuleName })).concat(config["proxy-groups"].slice(-1));
  return config;
}
