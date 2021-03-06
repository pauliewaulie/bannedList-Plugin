function save_options()
{
	localStorage["extras.politics.andrew1"] = $('#extras_politics_andrew1').prop("checked");
	localStorage["extras.special.goodOrBad"] = $('#extras_special_goodOrBad').prop("checked");

	$("#status").show();
	setTimeout(function() {
		$("#status").hide();
	}, 750);

	// Contact all BannedList.js scripts...

	chrome.tabs.getAllInWindow(null, function(tabs) {
		tabs.forEach(function(tab){
			chrome.tabs.sendRequest( tab.id, {
				method: "getOptions", options: localStorage
			},
			function (response) {
				/* alert('Got response from: ' + tab.url); */
			});
		});
	});
}

function restore_options()
{
	$("#extras_politics_andrew1").prop( "checked", localStorage["extras.politics.andrew1"] == 'true');
	$("#extras_special_goodOrBad").prop( "checked", localStorage["extras.special.goodOrBad"] == 'true');
}
