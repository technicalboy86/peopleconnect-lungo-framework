App.api = function() {
	
	var config = {
		url: "http://myrichtree.com/wkang/peopleconnect/public/api/",
		token: "1234567890",
		controller: "",
		action: "",
		method: "POST",
		callback: ""
	};

	return {
		download_agenda_data:function(hostId){
            console.log("Running download_agenda_data");
			
			navigator.notification.confirm("Are you going to open/save this file?", 
				function(buttonIndex){
					if(buttonIndex == 1)
					{
						window.open(config.url + "downloadpdf?host_id="+hostId, '_blank', 'location=yes');
					}
					if(buttonIndex == 2)
					{
						downloadFile(config.url + "downloadpdf?host_id="+hostId);
					}
				},
				"PeopleConnect",
				["Open", "Save", "Cancel"]);			
		},
		download_participants_data:function(hostId){
            console.log("Running download_participants_data");
			
			navigator.notification.confirm("Are you going to open/save this file?", 
				function(buttonIndex){
					if(buttonIndex == 1)
					{
						window.open(config.url + "downloadcsv?host_id="+hostId, '_blank', 'location=yes');
					}
					if(buttonIndex == 2)
					{
						downloadFile(config.url + "downloadcsv?host_id="+hostId);
					}
				},
				"PeopleConnect",
				["Open", "Save", "Cancel"]);			
		},
		download_notes_data:function(hostId){
            console.log("Running download_notes_data");
			
			navigator.notification.confirm("Are you going to open/save this file?", 
				function(buttonIndex){
					if(buttonIndex == 1)
					{
						window.open(config.url + "downloaddocx?host_id="+hostId, '_blank', 'location=yes');
					}
					if(buttonIndex == 2)
					{
						downloadFile(config.url + "downloaddocx?host_id="+hostId);
					}
				},
				"PeopleConnect",
				["Open", "Save", "Cancel"]);			
		},
		disconnectConnection:function(){
            console.log("Running disconnectConnection");
            var param = {user_id:App.user_id, host_id:App.host_id};
			console.log(param);
			$.post(config.url + "disconnect", param, function(data) {
                console.log(data);
			}, "json");
		},
		shareResponse:function(param){
            console.log("Running shareResponse");
			console.log(param);
			$.post(config.url + "sharerespond", param, function(data) {
                console.log(data);
			}, "json");
		},
		sendShareRequest:function(param){
            console.log("Running sendShareRequest");
			console.log(param);
			$.post(config.url + "sendsharerequest", param, function(data) {
                console.log(data);
			}, "json");
		},
		getShareRequest:function(){
			console.log("Running getShareRequest");
			var param = {userid:App.user_id};
			console.log(param);
			$.post(config.url + "getsharerequest", param, function(data) {
				//console.log(data);
				App.profile().addContactRequest(data);
			}, "json");
		},
		getPreviousConnections:function(userID){
			console.log("Running getPreviousConnections");

			$.post(config.url + "previousconnect", {user_id:userID}, function(data) {
				App.host().handlePreviousConnections(data);
			}, "json");
		},
		addNote:function(hostID,userId,profileId, mNote){
			console.log("Running addNote");

			$.post(config.url + "addnote", {host_id:hostID, user_id:userId, profile_id:profileId, note:mNote}, function(data) {
				console.log(data);
				Lungo.dom("#m_note_text").val('');
				App.note().getNoteList();
			}, "json");
		},
		getNotes:function(hostID){
			console.log("Running getNotes");

			$.post(config.url + "getnote", {host_id:hostID}, function(data) {
				console.log(data);
				App.note().handleNotes(data);
			}, "json");
		},
		getParticipants:function(hostID){
			console.log("Running getParticipants");

			$.post(config.url + "getparticipants", {host_id:hostID}, function(data) {
				//console.log(data);

				App.profile().handleAvailableParticipants(data);
			}, "json");
		},
		join_connection:function(param){
			console.log("Running join_connection");
			Lungo.Notification.show();
			console.log(param);
            $.post(config.url + "connect", param, function(data) {
 				console.log(data);
 								
 				if(data.result == "success"){
                
                App.my_profile.details.id = param.profile_id;
 				if(data.host != null && data.host != undefined)
 				{
 					if(data.host.id != null && data.host.id != undefined)
 					{
 						Lungo.Notification.hide();	
 						Lungo.Router.section("connected_to_hub");
 						menu_connected();
 						
 						$("#note_connection_id_text").html("Connected to Hub : " + data.host.id);
 						
 						$("#ch_connection_id_text").html("Connected to Hub : " + data.host.id);
 						$("#ch_host_name_text").html("Hosted by : " + data.host.hostname);
 						$("#ch_connection_location_text").html("Location : " + data.host.location);
                        App.agenda = data.host.agenda;
 						App.api().getParticipants(data.host.id);
 						App.host_id = data.host.id;
 						App.storedPasscode = data.host.password;
 					}else{
 						Lungo.Notification.error("join failed.", "", "warning-sign", 2);
 					}
 				}else{
 					Lungo.Notification.error("join failed.", "", "warning-sign", 2);
 				}
 				
 				}
 				if(data.result == "before"){	
 					Lungo.Notification.error("Host is not opended.", "", "warning-sign", 2);
 					Lungo.Router.section("main");
 				}
 				if(data.result == "after"){	
 					Lungo.Notification.error("Host has been ended.", "", "warning-sign", 2);
					Lungo.Router.section("main");
 				}
				if(data.result == "fail"){	
					Lungo.Notification.error("Join failed.", "", "warning-sign", 2);
					Lungo.Router.section("main");
 				}
			
			}, "json");
		},
		setHostOption:function(param){
			console.log("Running setHostOptionfunction");
			Lungo.Notification.show();
            $.post(config.url + "hostoption", param, function(data) {
 				console.log(data);
 				Lungo.Notification.hide();
 				Lungo.Router.section("main");
			}, "json");
		},		
		createHost:function (param){
			console.log("Running createHost");
			Lungo.Notification.show();
			console.log(param);
            $.post(config.url + "createhost", param, function(data) {
 				console.log(data);
 				Lungo.Notification.hide();
 				if(data.hostid != undefined && data.hostid != null)
 				{
 					App.host_id = data.hostid;
 					$("#created_host_id_text").html("Your Host ID Number is : "+ App.host_id);
 					Lungo.Router.section("congratulations_html");
                    menu_connected();
 				}
			}, "json");
		},
		registerDeviceID:function (uuid){
			console.log("Running registerDeviceID");
			
            $.post(config.url + "register", {deviceid:uuid}, function(data) {
                   console.log(data);
 				if(data.user_id == undefined || data.user_id == null || data.user_id == -1)
 				{
 					Lungo.Notification.error("Device Id register failed. please try again.", "", "error", 3);
 					Lungo.Router.section("main");
 				}else{
 					App.user_id = data.user_id;
 					localStorage.setItem("user_id", App.user_id);
 					App.profile().getProfiles();
 				}
			}, "json");
		},
		
		deleteProfile:function (){
			console.log("Running deleteProfile");
			Lungo.Notification.show();
            $.post(config.url + "removeprofile", {profileid:App.my_profile.details.id}, function(data) {
 					console.log(data);
					if(data.result == "success")
					{
						Lungo.Notification.show(
							"check",                //Icon
							"Success",              //Title
							3,                      //Seconds
							function() {
								Lungo.Notification.hide();
								Lungo.Router.section("main");
							}
						);
					}else{
						Lungo.Notification.error("Delete profile failed. please try it later.","","",2);
					}
			}, "json");
		},
		getProfiles:function (ref){
			console.log("Running getProfiles");
			
            $.post(config.url + "getprofile", {user_id:App.user_id}, function(data) {
                   console.log(data);
 				ref.handleProfiles(data);
			}, "json");
		},
		addProfile:function (ref){
			console.log("Running addProfile");
			Lungo.Notification.show();
            if (ref.profileValidate() === true) {
				console.log(ref.details);
				
				
				var imageURI = ref.details.icon;

				if(ref.details.icon.substring(0,4)=="file"){
				
					var options = new FileUploadOptions();
    				options.fileKey="icon";
    				options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    				options.mimeType="image/jpeg";

    				var params = {};
					params.user_id = ref.details.user_id;
    				params.email = ref.details.email;
    				params.profilename = ref.details.profilename;
					params.fullname = ref.details.fullname;
					params.broadcastname = ref.details.broadcastname;
					params.type = ref.details.type;
					params.phone = ref.details.phone;
					
    				options.params = params;
	
    				var ft = new FileTransfer();
    				ft.onprogress = function(progressEvent) {
    					if (progressEvent.lengthComputable) {
    						var value = parseInt((progressEvent.loaded / progressEvent.total)* 100 );
      						console.log(value);
    					} else {

    					}
					};
					
		   			ft.upload(imageURI, encodeURI(config.url + "addprofile"), function(r){ 
			   			
//		   				var mParam = JSON.parse(r.response); 
						var mParam = eval('(' +  r.response + ')');
		   				if(mParam.result == "success")
						{
							Lungo.Notification.show(
								"check",                //Icon
								"Success",              //Title
								3,                      //Seconds
								function() {
									Lungo.Notification.hide();
									Lungo.Router.section("profile_list");
								}
							);
						}else{
							Lungo.Notification.error("Already registered profile. please input other profile information","","",2);
						}
		   			}, onFileFail, options);
				}else{
					
					$.post(config.url + "addprofile", ref.details, function(data) {
						console.log(data);
						if(data.result == "success")
						{
							Lungo.Notification.show(
								"check",                //Icon
								"Success",              //Title
								3,                      //Seconds
								function() {
									Lungo.Notification.hide();
									Lungo.Router.section("profile_list");
								}
							);
						}else{
							Lungo.Notification.error("Already registered profile. please input other profile information","","",2);
						}
					}, "json");
				}
				
				
			} else {
				console.log("profile doesn't validate.");
			}
		},
		updateProfile:function (ref){
			console.log("Running updateProfile");
			Lungo.Notification.show();
            if (ref.updateProfileValidate() === true) {
				
				var imageURI = ref.details.icon;
				if(ref.details.icon.substring(0,4)=="file"){
				
					var options = new FileUploadOptions();
    				options.fileKey="icon";
    				options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    				options.mimeType="image/jpeg";

    				var params = {};
					params.id = ref.details.id;
    				params.email = ref.details.email;
					params.fullname = ref.details.fullname;
					params.broadcastname = ref.details.broadcastname;
					params.type = ref.details.type;
					params.phone = ref.details.phone;
					
    				options.params = params;
	
    				var ft = new FileTransfer();
    				ft.onprogress = function(progressEvent) {
    					if (progressEvent.lengthComputable) {
    						var value = parseInt((progressEvent.loaded / progressEvent.total)* 100 );
      						console.log(value);
    					} else {

    					}
					};
					
		   			ft.upload(imageURI, encodeURI(config.url + "updateprofile"), function(r){ 
			   			
		   				console.log(r.response);
						var mParam = eval('(' +  r.response + ')');
//		   				var mParam = JSON.parse(r.response); 
		   				if(mParam.result == "success")
						{
							Lungo.Notification.show(
								"check",                //Icon
								"Success",              //Title
								3,                      //Seconds
								function() {
									Lungo.Notification.hide();
									Lungo.Router.section("profile_list");
								}
							);
						}else{
							Lungo.Notification.error("Already registered profile. please input other profile information","","",2);
						}
		   			}, onCameraFail, options);
				}else{
					
					$.post(config.url + "updateprofile", ref.details, function(data) {
						console.log(data);
						if(data.result == "success")
						{
							Lungo.Notification.show(
								"check",                //Icon
								"Success",              //Title
								3,                      //Seconds
								function() {
									Lungo.Notification.hide();
									Lungo.Router.section("profile_list");
								}
							);
						}else{
							Lungo.Notification.error("Profile update failed.","","",2);
						}
					}, "json");
				}
			} else {
				console.log("profile doesn't validate.");
			}
		},
	};
};

function downloadFile(fileURL){
	var fileTransfer = new FileTransfer();
	Lungo.Notification.show();			
	fileTransfer.download(
   		encodeURI(fileURL),
   		"cdvfile://localhost/persistent/com.hwalong.peopleconnect/peopleconnect",
   		function(entry) {
	   		Lungo.Notification.success("Success","File download have been completed.", "check",2,function(){
    	    					Lungo.Notification.hide();
			});
   		},
   		function(error) {
    		Lungo.Notification.error("Success","File download have been failed.", "check",2,function(){
    	    					Lungo.Notification.hide();
			});
   		},
   		false,
   		{}
	);			
}
