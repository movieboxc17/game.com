// Define a function to check if an IP address is within a range
function ipInRange(ip, start, end) {
  var parts = ip.split('.');
  var sParts = start.split('.');
  var eParts = end.split('.');
  for (var i = 0; i < 4; i++) {
    var part = parseInt(parts[i], 10);
    var sPart = parseInt(sParts[i], 10);
    var ePart = parseInt(eParts[i], 10);
    if (part < sPart || part > ePart) {
      return false;
    }
  }
  return true;
}

// Define the firewall rules
var firewallRules = [
  {type: 'allow', protocol: 'tcp', port: 80, ipRangeStart: '192.168.0.1', ipRangeEnd: '192.168.0.255'},
  {type: 'allow', protocol: 'tcp', port: 443, ipRangeStart: '192.168.0.1', ipRangeEnd: '192.168.0.255'},
  {type: 'deny', protocol: 'tcp', port: 3389, ipRangeStart: '0.0.0.0', ipRangeEnd: '255.255.255.255'},
  {type: 'deny', protocol: 'udp', port: 53, ipRangeStart: '0.0.0.0', ipRangeEnd: '255.255.255.255'},
];

// Define a function to check if a packet is allowed by the firewall
function isAllowed(protocol, port, ipAddress) {
  for (var i = 0; i < firewallRules.length; i++) {
    var rule = firewallRules[i];
    if (rule.protocol === protocol && rule.port === port && ipInRange(ipAddress, rule.ipRangeStart, rule.ipRangeEnd)) {
      return rule.type === 'allow';
    }
  }
  return false;
}
