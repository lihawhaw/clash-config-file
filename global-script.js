/** 规则名称映射 */
const customProxyGroupsNames = {
  anthropic: "✨Anthropic",
  openai: "✨OpenAI",
  gemini: "✨Gemini",
  grok: "✨Grok",
  cursor: "✨Cursor",
  github: "🐙GitHub",
  didi: "🚕滴滴直连",
  tiktok: "🎬TikTok",
  twitter: "📣Twitter",
};

/**
 * 区域节点匹配规则
 * key: 区域显示名称
 * value: 匹配正则表达式（不区分大小写）
 */
const regionPatterns = {
  "🇭🇰中国香港": /香港|HK|Hong\s*Kong|🇭🇰/i,
  "🇨🇳中国台湾": /台湾|台北|TW|Taiwan|🇹🇼/i,
  "🇯🇵日本": /日本|东京|大阪|JP|Japan|🇯🇵/i,
  "🇰🇷韩国": /韩国|首尔|KR|Korea|🇰🇷/i,
  "🇸🇬新加坡": /新加坡|狮城|SG|Singapore|🇸🇬/i,
  "🇺🇸美国": /美国|美|洛杉矶|硅谷|达拉斯|西雅图|芝加哥|US|USA|United\s*States|America|🇺🇸/i,
  "🇬🇧英国": /英国|伦敦|UK|GB|Britain|England|🇬🇧/i,
  "🇩🇪德国": /德国|法兰克福|DE|Germany|🇩🇪/i,
  "🇫🇷法国": /法国|巴黎|FR|France|🇫🇷/i,
  "🇳🇱荷兰": /荷兰|阿姆斯特丹|NL|Netherlands|🇳🇱/i,
  "🇦🇺澳大利亚": /澳大利亚|澳洲|悉尼|墨尔本|AU|Australia|🇦🇺/i,
  "🇨🇦加拿大": /加拿大|温哥华|多伦多|CA|Canada|🇨🇦/i,
  "🇷🇺俄罗斯": /俄罗斯|俄|莫斯科|RU|Russia|🇷🇺/i,
  "🇮🇳印度": /印度|孟买|IN|India|🇮🇳/i,
  "🇧🇷巴西": /巴西|圣保罗|BR|Brazil|🇧🇷/i,
  "🇦🇷阿根廷": /阿根廷|布宜诺斯艾利斯|AR|Argentina|🇦🇷/i,
  "🇹🇷土耳其": /土耳其|伊斯坦布尔|TR|Turkey|Türkiye|🇹🇷/i,
  "🇻🇳越南": /越南|胡志明|VN|Vietnam|Vina|🇻🇳/i,
  "🇹🇭泰国": /泰国|曼谷|TH|Thailand|🇹🇭/i,
  "🇵🇭菲律宾": /菲律宾|马尼拉|PH|Philippines|🇵🇭/i,
  "🇲🇾马来西亚": /马来西亚|吉隆坡|MY|Malaysia|🇲🇾/i,
  "🇮🇩印尼": /印尼|印度尼西亚|雅加达|ID|Indonesia|🇮🇩/i,
  "🇦🇪阿联酋": /阿联酋|迪拜|UAE|Dubai|🇦🇪/i,
  "🇿🇦南非": /南非|约翰内斯堡|ZA|South\s*Africa|🇿🇦/i,
  "🇲🇽墨西哥": /墨西哥|MX|Mexico|🇲🇽/i,
  "🇨🇱智利": /智利|圣地亚哥|CL|Chile|🇨🇱/i,
  "🇵🇱波兰": /波兰|华沙|PL|Poland|🇵🇱/i,
  "🇮🇪爱尔兰": /爱尔兰|都柏林|IE|Ireland|🇮🇪/i,
  "🇨🇭瑞士": /瑞士|苏黎世|CH|Switzerland|🇨🇭/i,
  "🇸🇪瑞典": /瑞典|斯德哥尔摩|SE|Sweden|🇸🇪/i,
  "🇳🇴挪威": /挪威|奥斯陆|NO|Norway|🇳🇴/i,
  "🇫🇮芬兰": /芬兰|赫尔辛基|FI|Finland|🇫🇮/i,
  "🇩🇰丹麦": /丹麦|哥本哈根|DK|Denmark|🇩🇰/i,
  "🇦🇹奥地利": /奥地利|维也纳|AT|Austria|🇦🇹/i,
  "🇧🇪比利时": /比利时|布鲁塞尔|BE|Belgium|🇧🇪/i,
  "🇮🇹意大利": /意大利|米兰|罗马|IT|Italy|🇮🇹/i,
  "🇪🇸西班牙": /西班牙|马德里|ES|Spain|🇪🇸/i,
  "🇵🇹葡萄牙": /葡萄牙|里斯本|PT|Portugal|🇵🇹/i,
  "🇬🇷希腊": /希腊|雅典|GR|Greece|🇬🇷/i,
  "🇮🇱以色列": /以色列|特拉维夫|IL|Israel|🇮🇱/i,
  "🇳🇿新西兰": /新西兰|奥克兰|NZ|New\s*Zealand|🇳🇿/i,
  "🇧🇩孟加拉": /孟加拉|达卡|BD|Bangladesh|🇧🇩/i,
};

/**
 * 检测订阅中实际存在哪些区域的节点
 * @param {Array} proxies 代理节点列表
 * @returns {Object} { regionName: [proxyNames...] }
 */
function detectRegions(proxies) {
  const regionNodes = {};

  for (const proxy of proxies) {
    const name = proxy.name || "";
    for (const [regionName, pattern] of Object.entries(regionPatterns)) {
      if (pattern.test(name)) {
        if (!regionNodes[regionName]) {
          regionNodes[regionName] = [];
        }
        regionNodes[regionName].push(name);
        break; // 每个节点只归属一个区域
      }
    }
  }

  return regionNodes;
}

/**
 * 根据实际存在的区域生成代理组
 * @param {Object} regionNodes 区域节点映射
 * @returns {Array} 代理组数组
 */
function generateRegionGroups(regionNodes) {
  const groups = [];

  for (const [regionName, nodeNames] of Object.entries(regionNodes)) {
    if (nodeNames.length > 0) {
      groups.push({
        ...groupBaseOption,
        name: regionName,
        type: "url-test",
        tolerance: 50,
        proxies: nodeNames,
        hidden: true,
      });
    }
  }

  return groups;
}

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
    github: customProxyGroupsNames.github,
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

/**
 * 配置中的规则"config.rules"是一个数组，通过新旧数组合并来添加
 * @param directRuleName 直接连接的规则名称
 * @param proxyRuleName 代理的规则名称
 * @returns 规则数组
 */
function getPrependRule({ directRuleName, proxyRuleName, anthropicRuleName, openaiRuleName, geminiRuleName, grokRuleName, cursorRuleName, githubRuleName, didiRuleName, tiktokRuleName, twitterRuleName }) {
  return [
    `RULE-SET,lihawhaw-didi,${didiRuleName}`,
    `RULE-SET,lihawhaw-direct,${directRuleName}`,
    `RULE-SET,lihawhaw-anthropic,${anthropicRuleName}`,
    `RULE-SET,lihawhaw-openai,${openaiRuleName}`,
    `RULE-SET,lihawhaw-gemini,${geminiRuleName}`,
    `RULE-SET,lihawhaw-grok,${grokRuleName}`,
    `RULE-SET,lihawhaw-cursor,${cursorRuleName}`,
    `RULE-SET,lihawhaw-github,${githubRuleName}`,
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
 * @param availableRegions 可用的区域名称列表
 * @returns 代理组数组
 */
function getProxyGroups({ directRuleName, proxyRuleName, availableRegions = [] }) {
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
      name: customProxyGroupsNames.github,
      type: "select",
      proxies: [`${customProxyGroupsNames.github}自动选择`, proxyRuleName, directRuleName],
      "include-all-proxies": true,
    },
    {
      ...groupBaseOption,
      name: `${customProxyGroupsNames.github}自动选择`,
      type: "url-test",
      url: "https://github.com/favicon.ico",
      tolerance: 50,
      proxies: [],
      "include-all-proxies": true,
      filter: "^(?!.*Direct|.*手动选择).*$",
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: customProxyGroupsNames.tiktok,
      type: "select",
      // 动态添加可用的区域组，然后是代理选择和所有节点
      proxies: [...availableRegions, proxyRuleName],
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
    github: githubRuleName,
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
    githubRuleName,
    didiRuleName,
    tiktokRuleName,
    twitterRuleName,
  }).concat(oldRules);

  // 检测订阅中实际存在的区域节点
  const proxies = config["proxies"] || [];
  const regionNodes = detectRegions(proxies);
  const availableRegions = Object.keys(regionNodes);

  // 生成区域代理组（只包含实际存在的区域）
  const regionGroups = generateRegionGroups(regionNodes);

  // 构建代理组：原有组 + 区域组 + 自定义组
  const existingGroups = config["proxy-groups"] || [];
  config["proxy-groups"] = existingGroups
    .slice(0, -1)
    .concat(regionGroups) // 插入动态生成的区域组
    .concat(getProxyGroups({ directRuleName, proxyRuleName, availableRegions }))
    .concat(existingGroups.slice(-1));

  return config;
}
