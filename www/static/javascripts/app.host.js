App.host = function() {
	return {
		details:{
			id:null,
			location:null,
			connection_title:null,
			connection_date:null,
			connect_now_check:null,
			name:null,
			pass_code:null,
		},
		getPreviousConnections:function(){
			console.log("userID : " + App.user_id);
			App.api().getPreviousConnections(App.user_id);
		},
		getFurtherConnections:function(){
			var now = new Date();
			console.log(now.getTime());
			App.api().getFurtherConnections(now.getTime());
		},
		joinIntoMetting:function(host_id){
			console.log(host_id);
			$("#join_barcode_img").show();
			var image = document.getElementById('join_barcode_img');
			image.src = "http://myrichtree.com/wkang/peopleconnect/public/barcode/image.php?id=" + host_id;
			$("#join_connection_id_text").val(host_id);
			Lungo.Router.section("join_connection");
		},
		handleFurtherConnections:function(data){
			console.log(data);
			$("#h_connection_list").empty();
			if (data.future) {
				for(var index in data.future.data)
				{
					var host = data.future.data[index];
					
					var html = '<li><a href="#" onclick="App.host().joinIntoMetting('+host.id+')">';
					html += '<div class="on-right">'+ host.create_date+'</div>';
					html += '<strong>'+host.id+'</strong>';
					html += '<small>'+host.title+'</small>';
					html += '</a></li>';
					
					$("#h_connection_list").append(html);
				}	
			}
			if (data.current) {
				for(var index in data.current.data)
				{
					var host = data.current.data[index];
					
					var html = '<li><a href="#" onclick="App.host().joinIntoMetting('+host.id+')">';
					html += '<div class="on-right">'+ host.create_date+'</div>';
					html += '<strong>'+host.id+'</strong>';
					html += '<small>'+host.title+'</small>';
					html += '</a></li>';
					
					$("#h_connection_list").append(html);
				}	
			}
			
		},
		handlePreviousConnections:function(data){
			$("#p_connection_list").empty();
			for(var index in data.connects)
			{
				var host = data.connects[index];
				
				var html = '<li class="thumb">';
				html += '<div class="detail">';
				html += '<strong>'+host.host_id+'</strong>';
				html += '<small>'+host.title+ "   " + host.create_date+'</small>';
				html += '</div>';
				html += '<div class="form">';
				html += '<fieldset>';
				html += '<input type="checkbox" class="inline right" id="'+host.id+'"/>';
				html += '</fieldset></div></li>';
				
				$("#p_connection_list").append(html);
			}
			
			$('.p_content ul li div.form fieldset').children('input').each(function () {
        		$(this).change(function() {
        			if($(this).is(":checked")) {
        				var mOption = $(this).attr("id");
        				App.host_id = mOption;
					$('.p_content ul li div.form fieldset').children('input').each(function () {
	
						if(mOption != $(this).attr("id"))
						{
							$(this).prop("checked", false);
						}
					});
        			}
    			});
			}); 
		},
		joinConnection:function(){
			var connectionID = $("#join_connection_id_text").val();
			if(connectionID == "")
			{
				Lungo.Notification.error("Please input Connection ID.","","",2);
				return;
			}
			
			var connectionPasscode = $("#join_connection_passcode_text").val();
			if(connectionPasscode == "")
			{
				//Lungo.Notification.error("Please input Connection Pass code.","","",2);
				//return;
			}
			
			if(App.my_profile.details.id == null || App.my_profile.details.id == "")
			{
				Lungo.Notification.error("Please select one profile.","","",2);
				return;
			}
			var mProfile = App.myProfileList[App.my_profile.details.id];
			
			App.selectedProfileName =mProfile.profilename;
			App.my_profile.details.id = mProfile.id;
			var now = new Date();
			var now1 = now.getTime();
				
			var param = {host_id:connectionID, user_id:App.user_id, profile_id:App.my_profile.details.id, password:connectionPasscode, now:now1};
		    
			App.api().join_connection(param);
		},
		createHost:function(){
       
			var connection_title = $("#c_connection_title_text").val();
			if(connection_title == "")
			{
				Lungo.Notification.error("Please input new connection title.","","",2);
				return;
			}
			var connection_location = $("#c_connection_location_text").val();
			if(connection_location == "")
			{
				//Lungo.Notification.error("Please input new connection location.","","",2);
				//return;
			}
			var connection_now_check = $("#f_connect_now_check").is(":checked");
			var connection_date_text = null;
			var connection_duration = null;
			if(connection_now_check)
			{
				var now = new Date();
				var now1 = now.getTime();
				connection_date_text = now1;
				connection_duration = 24;
				type = "instant";
			}else{
				connection_date_text = $("#c_connection_date_text").val() +" "+ $("#c_connection_time_text").val();
				var dateParts = $("#c_connection_date_text").val();
				dateParts = dateParts.split("-");
				var timeParts = $("#c_connection_time_text").val();
				timeParts = timeParts.split(":");
				var date = new Date(dateParts[0], parseInt(dateParts[1], 10) -1, dateParts[2], timeParts[0], timeParts[1]);
				connection_date_text = date.getTime();
				connection_duration = $("#c_duration_select").val();
				type = "further";
			}
			
			var host_name = $("#c_host_name_text").val();
			if(host_name == "")
			{
				//Lungo.Notification.error("Please input new Host name.","","",2);
				//return;
			}
			
			var host_passcode = ""
			host_passcode = $("#c_passcode_text").val();
			App.storedPasscode = host_passcode;
			if(host_passcode == "")
			{
				//Lungo.Notification.error("Please input pass code.","","",2);
				//return;
			}
			var agenda = $("#c_agenda_text").val();
			if(agenda == "")
			{
				//Lungo.Notification.error("Please input agenda.","","",2);
				//return;
			}
			var param = {user_id:App.user_id, title:connection_title, location:connection_location, date:connection_date_text, hostname:host_name, type:type, password:host_passcode, agenda:agenda, period:connection_duration};
	
			App.api().createHost(param);
		},

	};
};

