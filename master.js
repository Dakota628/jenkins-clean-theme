// Window load event used just in case window height is dependant upon images
var $jq = jQuery.noConflict(true);

function stickyFoot() {
  var bodyHeight = $jq("body.yui-skin-sam").height();
  var vwptHeight = $jq(window).height();
  var footHeight = 45;
  var headerHeight = $jq("#header").height();
  $jq("#main-table").css("min-height",vwptHeight-footHeight-headerHeight);
}

function updateExecutors() {
  $jq('#executors th.pane a.model-link').css('max-width',$jq("#side-panel").width() - 15);
}

$jq(document).ready(function() {
  stickyFoot();
  updateExecutors();

  //hook into build executor update
  _refreshPart = window.refreshPart;
  window.refreshPart = function(id, url) {
    _refreshPart(id, url);
    if(id == 'executors') updateExecutors();
  }
});

$jq(window).resize(function() {
  stickyFoot();
  updateExecutors();
});

$jq(document).scroll(function() {
  stickyFoot();
});
