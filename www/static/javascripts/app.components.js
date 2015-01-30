document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    
    checkConnection() ;
    var mUUID = getUUID();
	
	App.api().registerDeviceID(mUUID);
}

function getUUID(){
	var uuid = device.uuid;
	return uuid;
}

function checkConnection() {
    var networkState = navigator.connection.type;
    
    if(networkState == Connection.NONE)
    {
        navigator.notification.alert('Network is not available.',function(){},'PeopleConnection','OK');
        Lungo.Router.section("main");
    }
}

function setDefaultDay(){
	var now = new Date();

    var month = (now.getMonth() + 1);               
    var day = now.getDate();
    if(month < 10) 
        month = "0" + month;
    if(day < 10) 
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;

    $('#c_connection_date_text').val(today);
    
    var hour = now.getHours();
    var minute = now.getMinutes();
    if(now.getHours() < 10)
    	hour = "0" + now.getHours();
    if(now.getMinutes() < 10)
    	minute = "0" + now.getMinutes();
    var time1 = hour +":"+minute;
    $('#c_connection_time_text').val(time1);
}

Lungo.ready(function() {
	setDefaultDay();
	$('#c_host_options_list li').each(function () {
        $(this).click(function() {
        	var id = $(this).attr("id");
        	console.log(id);
                      
        	if($(this).hasClass("actived"))
        	{
        		$(this).removeClass("actived");
        	}else{
        		$(this).addClass("actived");
        	}
    	});
	}); 
	
   $('#f_connect_now_check').change(function() {
        if($(this).is(":checked")) {
            $(".date_filed").hide(500);
        }else{
        	$(".date_filed").show(500);
        }
    });
/*   $('.profile_images').children('img').each(function () {
        $(this).click(function() {
        	var id = $(this).attr("id");
        	console.log(id);
        	App.my_profile.details.icon = id;
        	
        	$('.profile_images').children('img').each(function () {
        		$(this).removeClass("actived");
        	});
        	
        	$(this).addClass("actived");
    	});
	});   

    $('.e_profile_images').children('img').each(function () {
        $(this).click(function() {
        	var id = $(this).attr("id");
        	console.log(id);
        	App.my_profile.details.icon = id;
        	
        	$('.e_profile_images').children('img').each(function () {
        		$(this).removeClass("actived");
        	});
        	
        	$(this).addClass("actived");
    	});
	}); 
	*/
   $('.m_content ul li div.form fieldset').children('input').each(function () {
        $(this).change(function() {
        	if($(this).is(":checked")) {
        		var mOption = $(this).attr("id");
        		console.log(mOption);
            	$('.m_content ul li div.form fieldset').children('input').each(function () {

            		if(mOption != $(this).attr("id"))
            		{
            			$(this).prop("checked", false);
            		}
            	});
        	}
    	});
	});  
	
	$('ul#instant_connection_profile_list li div.form fieldset').children('input').each(function () {
        $(this).change(function() {
        	if($(this).is(":checked")) {
        		var mOption = $(this).attr("id");
        		console.log(mOption);
            	$('ul#instant_connection_profile_list li div.form fieldset').children('input').each(function () {

            		if(mOption != $(this).attr("id"))
            		{
            			$(this).prop("checked", false);
            		}
            	});
        	}
    	});
	}); 
	
	 
	
	$('ul#invitations_list li div.form fieldset').children('input').each(function () {
        $(this).change(function() {
        	if($(this).is(":checked")) {
        		var mOption = $(this).attr("id");
        		console.log(mOption);
            	$('ul#invitations_list li div.form fieldset').children('input').each(function () {

            		if(mOption != $(this).attr("id"))
            		{
            			$(this).prop("checked", false);
            		}
            	});
        	}
    	});
	}); 
	$('ul#join_connection_list li div.form fieldset').children('input').each(function () {
        $(this).change(function() {
        	if($(this).is(":checked")) {
        		var mOption = $(this).attr("id");
        		console.log(mOption);
            	$('ul#join_connection_list li div.form fieldset').children('input').each(function () {

            		if(mOption != $(this).attr("id"))
            		{
            			$(this).prop("checked", false);
            		}
            	});
        	}
    	});
	});
	
	
	
	$('ul#participants_for_connection_list li div.form fieldset').children('input').each(function () {
        $(this).change(function() {
        	if($(this).is(":checked")) {
        		var mOption = $(this).attr("id");
        		console.log(mOption);
            	$('ul#participants_for_connection_list li div.form fieldset').children('input').each(function () {

            		if(mOption != $(this).attr("id"))
            		{
            			$(this).prop("checked", false);
            		}
            	});
        	}
    	});
	});
        

});

Lungo.Events.init({

});

function looksLikeMail(str) {
    var lastAtPos = str.lastIndexOf('@');
    var lastDotPos = str.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
}