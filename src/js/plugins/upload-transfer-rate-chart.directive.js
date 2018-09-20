angular.module('linuxDash').directive('uploadTransferRateChart', ['server', function(server) {
  return {
    restrict: 'E',
    scope: {},
    template: ' \
      <multi-line-chart-plugin \
          heading="上传传输速度" \
          module-name="upload_transfer_rate" \
          units="units"> \
      </multi-line-chart-plugin> \
    ',
    link: function(scope) {
      scope.delay = 2000
      scope.units = 'KB/s'
    }
  }
}])
