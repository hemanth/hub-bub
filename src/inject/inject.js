chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    $('<input />')
    .attr({
      id: 'search',
      autocomplete: 'off',
      placeholder: 'Search your repo..',
      style: 'margin-bottom: 10px;width: 100%; font-weight: bolder;'
    })
    .prependTo('.filter-list.small')

    var issueList = $('.filter-list.small');
    
    issueList.children().detach().sort(function(a, b) {
      return $(a).find('a').attr('title')
      .localeCompare($(b).find('a').attr('title'));
    }).appendTo(issueList);

		$(function() {
      $('input#search').keyup(function() {
        var matches = $( 'ul.filter-list.small' ).find('li:contains('+ $( this ).val() +') ');
        $('li', 'ul.filter-list.small').not(matches).slideUp();
        matches.slideDown();
      });
		});
	}
	}, 10);
});