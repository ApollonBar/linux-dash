angular.module('linuxDash').directive('navBar', ['$location', function($location) {
  return {
    template: '\
      \
      <span class="title">Linux Dash</span>\
      \
      <ul> \
        <li ng-class="{active: isActive(navItem) }" ng-repeat="navItem in items"> \
          <a href="#/{{navItem}}" ng-bind="getNavItemName(navItem)"></a> \
        </li> \
      </ul> \
      <span class="right-content">\
        相关资源:\
        <a target="_blank" href="https://github.com/afaqurk/linux-dash">GitHub</a> | \
        <a target="_blank" href="https://gitter.im/afaqurk/linux-dash">Gitter聊天室</a> | \
        <a target="_blank" href="https://github.com/afaqurk/linux-dash/wiki">文档</a> \
      </span>\
    ',
    link: function(scope) {
      scope.items = [
        'system-status',
        'basic-info',
        'network',
        'accounts',
        'apps'
      ]

      scope.getNavItemName = function(url) {
        if(url=='system-status'){
          return '系统状态' 
        }
        if(url=='basic-info'){
          return  '基本信息' 
        }
        if(url=='network'){
          return  '网络' 
        }
        if(url=='accounts'){
          return  '用户' 
        }
        if(url=='apps'){
          return '程序' 
        }
        return url.replace('-', ' ')
      }

      scope.isActive = function(route) {
        return '/' + route === $location.path()
      }
    }
  }
}])
