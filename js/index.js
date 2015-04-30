$("#imageArticle").mouseover(function(){
	$(this).attr("src", "icons/user_edit_article_active.png");
});

$("#imageArticle").mouseout(function(){
	$(this).attr("src", "icons/user_edit_article.png");
});

$("#imageVideo").mouseover(function(){
	$(this).attr("src", "icons/user_edit_video_active.png");
});

$("#imageVideo").mouseout(function(){
	$(this).attr("src", "icons/user_edit_video.png");
});

$("#imagePhoto").mouseover(function(){
	$(this).attr("src", "icons/user_edit_photo_active.png");
});

$("#imagePhoto").mouseout(function(){
	$(this).attr("src", "icons/user_edit_photo.png");
});

$(".pane:odd").css("background-color", "#fbfbfb");

