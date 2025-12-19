/** 规则名称映射 */
const ruleNames = {
  ai: "✨国外模型",
  didi: "🚕滴滴直连",
};

/** 根据配置文件名称动态生成 rule 名称 */
function getRuleName(profileName) {
  const defaultRuleName = {
    direct: "DIRECT",
    proxy: "DIRECT",
    ai: "DIRECT",
    didi: ruleNames.didi,
  };

  const map = {
    管人痴: {
      ...defaultRuleName,
      direct: "🚀直接连接",
      proxy: "🔰国外流量",
      ai: "✨国外模型",
    },
    AntLink: {
      ...defaultRuleName,
      proxy: "AntLink",
      ai: "AntLink",
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

/** DNS配置 */
const dnsConfig = {
  enable: true,
  listen: "0.0.0.0:1053",
  ipv6: true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    "+.lan",
    "+.local",
    "time.*.com",
    "ntp.*.com",
    "time.*.com",
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    "localhost.work.weixin.qq.com",
    "+.market.xiaomi.com",
    "*.msftncsi.com",
    "www.msftconnecttest.com",
    "*.lihaha.cn",
    "*.xiaojukeji.com",
    "+.didichuxing.com",
    "+.didiglobal.com",
    "+.didipay.com",
    "+.diditaxi.com.cn",
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  nameserver: [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers,
  },
};

/**
 * 配置中的规则"config.rules"是一个数组，通过新旧数组合并来添加
 * @param directRuleName 直接连接的规则名称
 * @param proxyRuleName 代理的规则名称
 * @returns 规则数组
 */
function getPrependRule({ directRuleName, proxyRuleName, aiRuleName, didiRuleName }) {
  return [
    `RULE-SET,lihawhaw-didi,${didiRuleName}`,
    `RULE-SET,lihawhaw-direct,${directRuleName}`,
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
      name: ruleNames.ai,
      type: "select",
      proxies: [proxyRuleName, directRuleName],
      //   'include-all': true,
      "include-all-proxies": true,
      //   'include-all-providers': true,
    },
    {
      ...groupBaseOption,
      name: ruleNames.didi,
      type: "select",
      proxies: [directRuleName],
    },
  ];
}

function main(config, profileName) {
  const ruleNames = getRuleName(profileName);
  const { direct: directRuleName, proxy: proxyRuleName, ai: aiRuleName, didi: didiRuleName } = ruleNames;

  let oldRules = config["rules"];
  config["rules"] = getPrependRule({ directRuleName, proxyRuleName, aiRuleName, didiRuleName }).concat(oldRules);

  config["proxy-groups"] = config["proxy-groups"].slice(0, -1).concat(getProxyGroups({ directRuleName, proxyRuleName, aiRuleName })).concat(config["proxy-groups"].slice(-1));

  // config["dns"] = { ...config["dns"], ...dnsConfig };
  return config;
}
