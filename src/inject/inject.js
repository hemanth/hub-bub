chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		$('<input />')
		.attr({
		  id: 'search',
		  autocomplete: 'off',
		  style: 'margin-bottom: 10px;width: 100%; font-weight: bolder;'
		})
		.prependTo('.filter-list.small')

		var items = $('.filter-list.small li').get();

		items.sort(function(a,b){
		  var keyA = $(a).text();
		  var keyB = $(b).text();

		  if (keyA < keyB) return -1;
		  if (keyA > keyB) return 1;
		  return 0;
		});

		var ul = $('.filter-list.small');

		$.each(items, function(i, li){
		  ul.append(li);
		});

		$( function() {
		    $('input#search').keyup( function() {
		        var matches = $( 'ul.filter-list.small' ).find('li:contains('+ $( this ).val() +') ');
		        $('li', 'ul.filter-list.small').not(matches).slideUp();
		        matches.slideDown();
		    });
		});
	}
	}, 10);
});
