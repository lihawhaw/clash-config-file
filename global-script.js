/**
 * 订阅配置 [订阅名称: 对应的代理组名称]
 */
const profileProxyNames = {
  管人痴: "🔰 手动选择",
  AntLink: "AntLink",
};

/**
 * 规则集合
 */
const ruleProviders = {
  "lihawhaw-didi": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/didi.yaml",
    path: "./ruleset/lihawhaw-didi.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-direct": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/direct.yaml",
    path: "./ruleset/lihawhaw-direct.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-anthropic": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/anthropic.yaml",
    path: "./ruleset/lihawhaw-anthropic.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-openai": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/openai.yaml",
    path: "./ruleset/lihawhaw-openai.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-gemini": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/gemini.yaml",
    path: "./ruleset/lihawhaw-gemini.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-grok": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/grok.yaml",
    path: "./ruleset/lihawhaw-grok.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-ai-aggregate": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/ai-aggregate.yaml",
    path: "./ruleset/lihawhaw-ai-aggregate.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-cursor": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/cursor.yaml",
    path: "./ruleset/lihawhaw-cursor.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-github": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/github.yaml",
    path: "./ruleset/lihawhaw-github.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-tiktok": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/tiktok.yaml",
    path: "./ruleset/lihawhaw-tiktok.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-twitter": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/twitter.yaml",
    path: "./ruleset/lihawhaw-twitter.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-proxy": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/proxy.yaml",
    path: "./ruleset/lihawhaw-proxy.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "lihawhaw-detection": {
    type: "http",
    url: "https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/detection.yaml",
    path: "./ruleset/lihawhaw-detection.yaml",
    interval: 600,
    behavior: "classical",
    format: "yaml",
  },
  "loyalsoldier-direct": {
    type: "http",
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    path: "./ruleset/loyalsoldier-direct.yaml",
    interval: 86400,
    behavior: "domain",
  },
  "loyalsoldier-private": {
    type: "http",
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    path: "./ruleset/loyalsoldier-private.yaml",
    interval: 86400,
    behavior: "domain",
  },
  "loyalsoldier-cncidr": {
    type: "http",
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    path: "./ruleset/loyalsoldier-cncidr.yaml",
    interval: 86400,
    behavior: "ipcidr",
  },
  "loyalsoldier-google": {
    type: "http",
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    path: "./ruleset/loyalsoldier-google.yaml",
    interval: 86400,
    behavior: "domain",
  },
  "loyalsoldier-proxy": {
    type: "http",
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    path: "./ruleset/loyalsoldier-proxy.yaml",
    interval: 86400,
    behavior: "domain",
  },
  "loyalsoldier-gfw": {
    type: "http",
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    path: "./ruleset/loyalsoldier-gfw.yaml",
    interval: 86400,
    behavior: "domain",
  },
};

/** 规则名称映射 */
const customProxyGroupsNames = {
  anthropic: "✨Anthropic",
  openai: "✨OpenAI",
  gemini: "✨Gemini",
  grok: "✨Grok",
  cursor: "✨Cursor",
  aiAggregate: "✨AI聚合",
  detection: "🔍检测服务",
  github: "🐙GitHub",
  didi: "🚕滴滴直连",
  tiktok: "🎬TikTok",
  twitter: "📣Twitter",
};

/** 占位符映射 */
const placeholderMapping = {
  PROXY: "{{PROXY}}",
  REGIONS: "{{REGIONS}}",
  DIRECT: "DIRECT",
};

/**
 * 📜 rules
 * 注意：使用 {{PROXY}} 占位符，会根据订阅自动替换为对应的代理组
 */
const rules = [
  `RULE-SET,lihawhaw-didi,${customProxyGroupsNames.didi}`,
  `RULE-SET,lihawhaw-direct,${placeholderMapping.DIRECT}`,
  `RULE-SET,lihawhaw-anthropic,${customProxyGroupsNames.anthropic}`,
  `RULE-SET,lihawhaw-openai,${customProxyGroupsNames.openai}`,
  `RULE-SET,lihawhaw-gemini,${customProxyGroupsNames.gemini}`,
  `RULE-SET,lihawhaw-grok,${customProxyGroupsNames.grok}`,
  `RULE-SET,lihawhaw-ai-aggregate,${customProxyGroupsNames.aiAggregate}`,
  `RULE-SET,lihawhaw-cursor,${customProxyGroupsNames.cursor}`,
  `RULE-SET,lihawhaw-github,${customProxyGroupsNames.github}`,
  `RULE-SET,lihawhaw-tiktok,${customProxyGroupsNames.tiktok}`,
  `RULE-SET,lihawhaw-twitter,${customProxyGroupsNames.twitter}`,
  `RULE-SET,lihawhaw-detection,${customProxyGroupsNames.detection}`,
  `RULE-SET,lihawhaw-proxy,${placeholderMapping.PROXY}`,
  `RULE-SET,loyalsoldier-direct,${placeholderMapping.DIRECT}`,
  `RULE-SET,loyalsoldier-private,${placeholderMapping.DIRECT}`,
  `RULE-SET,loyalsoldier-cncidr,${placeholderMapping.DIRECT}`,
  `RULE-SET,loyalsoldier-google,${placeholderMapping.PROXY}`,
  `RULE-SET,loyalsoldier-proxy,${placeholderMapping.PROXY}`,
  `RULE-SET,loyalsoldier-gfw,${placeholderMapping.PROXY}`,
  `DOMAIN,agent.minimaxi.io,${placeholderMapping.PROXY}`,
  `DOMAIN-SUFFIX,minimaxi.io,${placeholderMapping.PROXY}`,
];

/**
 * 🎮 proxy-groups
 * 特殊占位符：{{PROXY}} = 订阅的代理组，{{REGIONS}} = 动态检测的区域组
 */
const proxyGroups = [
  // -------- AI 服务 --------
  {
    name: customProxyGroupsNames.anthropic,
    type: "select",
    proxies: [`${customProxyGroupsNames.anthropic}自动选择`, placeholderMapping.REGIONS, placeholderMapping.PROXY, placeholderMapping.DIRECT],
  },
  {
    name: `${customProxyGroupsNames.anthropic}自动选择`,
    type: "url-test",
    url: "https://www.anthropic.com/favicon.ico",
    tolerance: 80,
    filter: "^(?!.*香港|.*HK|.*Hong Kong|.*Direct|.*手动选择).*$",
    hidden: true,
  },
  {
    name: customProxyGroupsNames.openai,
    type: "select",
    proxies: [`${customProxyGroupsNames.openai}自动选择`, placeholderMapping.REGIONS, placeholderMapping.PROXY, placeholderMapping.DIRECT],
  },
  {
    name: `${customProxyGroupsNames.openai}自动选择`,
    type: "url-test",
    url: "https://chat.openai.com",
    tolerance: 80,
    filter: "^(?!.*香港|.*HK|.*Hong Kong|.*Direct|.*手动选择).*$",
    hidden: true,
  },
  {
    name: customProxyGroupsNames.gemini,
    type: "select",
    proxies: [`${customProxyGroupsNames.gemini}自动选择`, placeholderMapping.REGIONS, placeholderMapping.PROXY, placeholderMapping.DIRECT],
  },
  {
    name: `${customProxyGroupsNames.gemini}自动选择`,
    type: "url-test",
    url: "https://ai.google.com",
    tolerance: 80,
    filter: "^(?!.*香港|.*HK|.*Hong Kong|.*Direct|.*手动选择).*$",
    hidden: true,
  },
  {
    name: customProxyGroupsNames.grok,
    type: "select",
    proxies: [`${customProxyGroupsNames.grok}自动选择`, placeholderMapping.REGIONS, placeholderMapping.PROXY, placeholderMapping.DIRECT],
  },
  {
    name: `${customProxyGroupsNames.grok}自动选择`,
    type: "url-test",
    url: "https://x.ai/favicon.ico",
    tolerance: 80,
    filter: "^(?!.*香港|.*HK|.*Hong Kong|.*Direct|.*手动选择).*$",
    hidden: true,
  },
  {
    name: customProxyGroupsNames.cursor,
    type: "select",
    proxies: [`${customProxyGroupsNames.cursor}自动选择`, placeholderMapping.REGIONS, placeholderMapping.PROXY, placeholderMapping.DIRECT],
  },
  {
    name: `${customProxyGroupsNames.cursor}自动选择`,
    type: "url-test",
    url: "https://api2.cursor.sh",
    tolerance: 80,
    filter: "^(?!.*香港|.*HK|.*Hong Kong|.*Direct|.*手动选择).*$",
    hidden: true,
  },
  {
    name: customProxyGroupsNames.aiAggregate,
    type: "select",
    proxies: [`${customProxyGroupsNames.aiAggregate}自动选择`, placeholderMapping.REGIONS, placeholderMapping.PROXY, placeholderMapping.DIRECT],
  },
  {
    name: `${customProxyGroupsNames.aiAggregate}自动选择`,
    type: "url-test",
    tolerance: 80,
    hidden: true,
  },
  {
    name: customProxyGroupsNames.detection,
    type: "select",
    proxies: [`${customProxyGroupsNames.detection}自动选择`, placeholderMapping.REGIONS, placeholderMapping.PROXY, placeholderMapping.DIRECT],
  },
  {
    name: `${customProxyGroupsNames.detection}自动选择`,
    type: "url-test",
    url: "https://www.whoer.net/favicon.ico",
    tolerance: 80,
    filter: "^(?!.*香港|.*HK|.*Hong Kong|.*Direct|.*手动选择).*$",
    hidden: true,
  },
  {
    name: customProxyGroupsNames.github,
    type: "select",
    proxies: [`${customProxyGroupsNames.github}自动选择`, placeholderMapping.REGIONS, placeholderMapping.PROXY, placeholderMapping.DIRECT],
  },
  {
    name: `${customProxyGroupsNames.github}自动选择`,
    type: "url-test",
    url: "https://github.com/favicon.ico",
    tolerance: 80,
    filter: "^(?!.*Direct|.*手动选择).*$",
    hidden: true,
  },
  {
    name: customProxyGroupsNames.tiktok,
    type: "select",
    proxies: [placeholderMapping.REGIONS, placeholderMapping.PROXY, placeholderMapping.DIRECT],
  },
  {
    name: customProxyGroupsNames.twitter,
    type: "select",
    proxies: [placeholderMapping.REGIONS, placeholderMapping.PROXY, placeholderMapping.DIRECT],
  },
  {
    name: customProxyGroupsNames.didi,
    type: "select",
    proxies: [placeholderMapping.DIRECT, placeholderMapping.PROXY],
  },
];

/**
 * DNS 服务器配置
 */
const domesticDns = ["https://dns.alidns.com/dns-query", "https://doh.pub/dns-query", "https://doh.360.cn/dns-query", "tls://223.5.5.5", "tls://223.6.6.6"];
const foreignDns = [
  "https://1.1.1.1/dns-query",
  "https://1.0.0.1/dns-query",
  "https://208.67.222.222/dns-query",
  "https://208.67.220.220/dns-query",
  "https://194.242.2.2/dns-query",
  "https://194.242.2.3/dns-query",
];
const didiDns = ["ns1.didiwuxian.com", "172.23.128.1", "172.23.128.2"];

/**
 * DNS 配置
 */
const dnsConfig = {
  enable: true,
  listen: ":53",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter-mode": "blacklist",
  "prefer-h3": false,
  "respect-rules": true,
  "use-hosts": false,
  "use-system-hosts": false,
  ipv6: true,
  "fake-ip-filter": [
    "*.lan",
    "*.local",
    "*.arpa",
    "time.*.com",
    "ntp.*.com",
    "+.ntp.org",
    "+.market.xiaomi.com",
    "connect.rom.miui.com",
    "+.miwifi.com",
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    "localhost.work.weixin.qq.com",
    "+.weixin.qq.com",
    "+.wechat.com",
    "+.msftncsi.com",
    "+.msftconnecttest.com",
    "+.lihaha.cn",
    "rule-set:lihawhaw-didi"
    // "+.xiaojukeji.com",
    // "+.didichuxing.com",
    // "+.didiglobal.com",
    // "+.didi.cn",
    // "+.didipay.com",
    // "+.diditaxi.com.cn",
  ],
  "default-nameserver": ["system", "223.6.6.6", "8.8.8.8", "2400:3200::1", "2001:4860:4860::8888"],
  nameserver: [...domesticDns, ...foreignDns],
  "proxy-server-nameserver": [...domesticDns, ...foreignDns],
  "direct-nameserver-follow-policy": true,
  "fallback-filter": {
    geoip: true,
    "geoip-code": "CN",
    ipcidr: ["240.0.0.0/4", "0.0.0.0/32"],
    domain: ["+.google.com", "+.facebook.com", "+.youtube.com"],
  },
  fallback: [],
  "direct-nameserver": [],
  "nameserver-policy": {
    "+.lihaha.cn": ["223.6.6.6", "223.5.5.5"],
    "+.didichuxing.com,+.didiglobal.com,+.xiaojukeji.com,+.didi.cn,+.didipay.com,+.diditaxi.com.cn,geosite:didi": didiDns,
    "geosite:private,cn,geolocation-cn": domesticDns,
    "geosite:google,youtube,telegram,gfw,github,geolocation-!cn": foreignDns,
  },
};

/**
 * 🌍 区域节点匹配规则（用于 TikTok 等需要区域分组的服务）
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
 * 🔧 groupBaseOption
 */
const groupBaseOption = {
  interval: 300,
  timeout: 3000,
  url: "https://www.google.com/generate_204",
  lazy: true,
  "max-failed-times": 3,
  "include-all-proxies": true,
  hidden: false,
};

/**
 * 检测订阅中实际存在哪些区域的节点
 */
function detectRegions(proxies) {
  const regionNodes = {};
  for (const proxy of proxies) {
    const name = proxy.name || "";
    for (const [regionName, pattern] of Object.entries(regionPatterns)) {
      if (pattern.test(name)) {
        if (!regionNodes[regionName]) regionNodes[regionName] = [];
        regionNodes[regionName].push(name);
        break;
      }
    }
  }
  return regionNodes;
}

/** 生成区域代理组 */
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
        "include-all-proxies": false,
        hidden: true,
      });
    }
  }
  return groups;
}

/** 替换占位符 */
function replacePlaceholders(value, proxyName, regionNames) {
  if (typeof value === "string") {
    return value.replace(placeholderMapping.PROXY, proxyName);
  }
  if (Array.isArray(value)) {
    const result = [];
    for (const item of value) {
      if (item === placeholderMapping.REGIONS) {
        result.push(...regionNames);
      } else if (typeof item === "string") {
        result.push(item.replace(placeholderMapping.PROXY, proxyName));
      } else {
        result.push(item);
      }
    }
    return result;
  }
  return value;
}

function main(config, profileName = "管人痴") {
  const proxyName = profileProxyNames[profileName] || "DIRECT";

  // 合并 DNS 配置
  config["dns"] = { ...dnsConfig, ...(config["dns"] || {}) };

  // 合并 rule-providers
  config["rule-providers"] = {
    ...ruleProviders,
    ...(config["rule-providers"] || {}),
  };

  // 合并规则（替换占位符）
  const processedRules = rules.map((rule) => rule.replace(placeholderMapping.PROXY, proxyName));
  config["rules"] = processedRules.concat(config["rules"] || []);

  // 检测区域节点
  const proxies = config["proxies"] || [];
  const regionNodes = detectRegions(proxies);
  const regionNames = Object.keys(regionNodes);

  // 生成区域代理组
  const regionGroups = generateRegionGroups(regionNodes);

  // 处理代理组（替换占位符）
  const processedProxyGroups = proxyGroups.map((group) => {
    const newGroup = { ...groupBaseOption, ...group };
    if (newGroup.proxies) {
      newGroup.proxies = replacePlaceholders(newGroup.proxies, proxyName, regionNames);
    }
    return newGroup;
  });

  // 构建代理组
  const existingGroups = config["proxy-groups"] || [];

  // 在出口代理组中添加区域分组
  const updatedExistingGroups = existingGroups.map((group) => {
    if (group.name === proxyName && regionNames.length > 0) {
      const currentProxies = group.proxies || [];
      // 提取"自动选择"项
      const autoSelectProxies = currentProxies.filter((p) => p.includes("自动选择"));
      const remainingProxies = currentProxies.filter((p) => !p.includes("自动选择"));
      // 顺序：自动选择 → 区域分组 → 剩余项
      return {
        ...group,
        proxies: [...autoSelectProxies, ...regionNames, ...remainingProxies],
      };
    }
    return group;
  });

  config["proxy-groups"] = updatedExistingGroups.slice(0, -1).concat(regionGroups).concat(processedProxyGroups).concat(updatedExistingGroups.slice(-1));

  return config;
}
