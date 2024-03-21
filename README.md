# clash-config-file

```
# Proxy
https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/proxy.yaml

# Direct
https://proxy.vercel.lihaha.cn/proxy/raw.githubusercontent.com/lihawhaw/clash-config-file/main/direct.yaml    
```

```yaml
##- PROCESS-NAME,curl,DIRECT #匹配路由自身进程(curl直连)
##- DOMAIN-SUFFIX,google.com,Proxy #匹配域名后缀(交由Proxy代理服务器组)
##- DOMAIN-KEYWORD,google,Proxy #匹配域名关键字(交由Proxy代理服务器组)
##- DOMAIN,google.com,Proxy #匹配域名(交由Proxy代理服务器组)
##- DOMAIN-SUFFIX,ad.com,REJECT #匹配域名后缀(拒绝)
##- IP-CIDR,127.0.0.0/8,DIRECT #匹配数据目标IP(直连)
##- SRC-IP-CIDR,192.168.1.201/32,DIRECT #匹配数据发起IP(直连)
##- DST-PORT,80,DIRECT #匹配数据目标端口(直连)
##- SRC-PORT,7777,DIRECT #匹配数据源端口(直连)
##- DST-PORT,22,DIRECT
##- SRC-PORT,22,DIRECT
```
