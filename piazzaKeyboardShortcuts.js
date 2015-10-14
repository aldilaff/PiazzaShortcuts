//from http://stackoverflow.com/questions/4634644/how-to-include-js-file-in-another-js-file

// var imported = document.createElement('script');
// imported.src = 'jquery-1.11.3.min.js';
// document.head.appendChild(imported);
// console.log("imported");
// jQuery
// $.getScript('keymaster.js', function()
// {
// });
var feedItem;

key('j', function(){ 
	// alert('you pressed j!'); //alert
	//got help from http://stackoverflow.com/questions/3591755/jquery-how-to-find-out-when-next-reaches-the-end-then-go-to-the-first-item
	var $next = $( "#question_feed_questions .feed_item.selected" ).next();
	if( $next.length==0){
		// alert("last element!"); //alert
		var $next_question_group = $('.selected').closest(".question_group").next();
		//help from http://stackoverflow.com/questions/20600083/jquery-how-to-find-if-element-has-inline-property-not-in-css
		while($next_question_group.find('.item-list-in-bucket').css('display')=='none'){
			// alert("next question_Group is hidden"); //alert
			$next_question_group = $next_question_group.next();
		}
			$next_question_group.find(".feed_item").first().click();
	}else{
		$next.click();
	} 
});
key('k', function(){ 
	// alert('you pressed k!'); //alert
	//got help from http://stackoverflow.com/questions/3591755/jquery-how-to-find-out-when-next-reaches-the-end-then-go-to-the-first-item
	var $prev = $( "#question_feed_questions .feed_item.selected" ).prev();
	if( $prev.length == 0){
		// alert("first element!"); //alert
		var $prev_question_group = $('.selected').closest(".question_group").prev();
		
		while($prev_question_group.find('.item-list-in-bucket').css('display')=='none'){
			// alert("prev question_Group is hidden"); //alert
			$prev_question_group = $prev_question_group.prev();
		}
			$prev_question_group.find(".feed_item").last().click();;
	}else{
		$( "#question_feed_questions .feed_item.selected" ).prev().click(); 

	}

});

