//JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigatior.notification.beep(1);
		});//tap beep
		
		$('#vibrar').tap(function(){
			navigatior.notification.vibrate(1000);
		});//tap vibrar
		
	},false); //deviceready
}); //ready
		