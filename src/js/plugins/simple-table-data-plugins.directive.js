var simpleTableModules = [
  {
    name: 'machineInfo',
    template: '<key-value-list heading="系统信息." module-name="general_info" info="System Information"></key-value-list>'
  },
  {
    name: 'ipAddresses',
    template: '<table-data heading="IP地址" module-name="ip_addresses" info="IPs assigned to this server"></table-data>'
  },
  {
    name: 'ramIntensiveProcesses',
    template: '<table-data heading="使用内存较多的进程列表" module-name="ram_intensive_processes" info="Processes which are using most RAM."></table-data>'
  },
  {
    name: 'cpuIntensiveProcesses',
    template: '<table-data heading="CPU占用较多的进程列表" module-name="cpu_intensive_processes" info="Processes which are using most CPU."></table-data>'
  },
  {
    name: 'dockerProcesses',
    template: '<table-data heading="Docker中占用资源较多的进程" module-name="docker_processes" info="Processes in Docker Containers sorted by CPU."></table-data>'
  },
  {
    name: 'networkConnections',
    template: '<table-data heading="网络连接" module-name="network_connections"></table-data>'
  },
  {
    name: 'serverAccounts',
    template: '<table-data heading="用户" module-name="user_accounts" info="User accounts on this server."></table-data>'
  },
  {
    name: 'loggedInAccounts',
    template: '<table-data heading="当前已登录的用户" module-name="logged_in_users" info="Users currently logged in."></table-data>'
  },
  {
    name: 'recentLogins',
    template: '<table-data heading="最近登录记录" module-name="recent_account_logins" info="Recent user sessions."></table-data>'
  },
  {
    name: 'arpCacheTable',
    template: '<table-data heading="ARP缓存表" module-name="arp_cache"></table-data>'
  },
  {
    name: 'commonApplications',
    template: '<table-data heading="常见的程序" module-name="common_applications" info="List of commonly installed applications."></table-data>'
  },
  {
    name: 'pingSpeeds',
    template: '<table-data heading="Ping延时" module-name="ping" info="Ping speed in milliseconds."></table-data>'
  },
  {
    name: 'bandwidth',
    template: '<table-data heading="带宽" module-name="bandwidth"></table-data>'
  },
  {
    name: 'swapUsage',
    template: '<table-data heading="交换区使用" module-name="swap"></table-data>'
  },
  {
    name: 'internetSpeed',
    template: '<key-value-list heading="当前网络速度" module-name="internet_speed" info="Internet connection speed of server."></key-value-list>'
  },
  {
    name: 'memcached',
    template: '<key-value-list heading="Memcached" module-name="memcached"></key-value-list>'
  },
  {
    name: 'redis',
    template: '<key-value-list heading="Redis" module-name="redis"></key-value-list>'
  },
  {
    name: 'pm2',
    template: '<table-data heading="PM2" module-name="pm2_stats" info="Process Manager 2 (PM2) Node Module stats"></table-data>'
  },
  {
    name: 'memoryInfo',
    template: '<key-value-list heading="内存信息" module-name="memory_info" info="/proc/meminfo read-out."></key-value-list>'
  },
  {
    name: 'cpuInfo',
    template: '<key-value-list heading="CPU信息" module-name="cpu_info" info="/usr/bin/lscpu read-out."></key-value-list>'
  },
  {
    name: 'ioStats',
    template: '<table-data heading="I/O信息" module-name="io_stats" info="/proc/diskstats read-out."></table-data>'
  },
  {
    name: 'scheduledCrons',
    template: '<table-data heading="已计划的定时任务" module-name="scheduled_crons" info="Crons for all users on the server."></table-data>'
  },
  {
    name: 'cronHistory',
    template: '<table-data heading="定时任务执行历史" module-name="cron_history" info="Crons which have run recently."></table-data>'
  }
]

simpleTableModules.forEach(function(module, key) {

  angular.module('linuxDash').directive(module.name, ['server', function(server) {

    var moduleDirective = {
      restrict: 'E',
      scope: {}
    }

    moduleDirective['template'] = module.template

    return moduleDirective
  }])

})
