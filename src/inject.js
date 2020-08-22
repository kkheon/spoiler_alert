chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

			var findSpoilers = function (){
				var TargetString = '(테넷|TENET|tenet)';
				
				var infoSpan = Array.from(document.getElementsByClassName('title_area'));
				
				// notice 
				infoSpan = infoSpan.concat(Array.from(document.querySelectorAll('[class=notice] > [class="list_left list_title"]')));
				// popular list
				infoSpan = infoSpan.concat(Array.from(document.getElementsByClassName('list_main')));
				for (var i = 0; i < infoSpan.length; i++) {
					if(infoSpan[i].innerText.match(TargetString)){
						infoSpan[i].prepend('[테넷]');
						infoSpan[i].style.backgroundColor = '#333';
						infoSpan[i].style.color = 'red';

					}
				}
				// title 
				infoSpan = document.querySelectorAll('[class=list_body] > [class="list_title"]');
				for (var i = 0; i < infoSpan.length; i++) {
					if(infoSpan[i].innerText.match(TargetString)){
						infoSpan[i].style.backgroundColor = '#333';
					}
				}
			};
            findSpoilers();
        }
    }, 10);
});