var App = (function(lng, undefined) {
	return {
	};
})(Lungo);

Lungo.ready(function() {

	App.user_id = localStorage.getItem("user_id");
	App.host_id = "";
	App.agenda = "";
	App.myProfileList = new Array();
    App.Participants = new Array();
    App.selectedParticipants = new Array();
	menu_disconnected();
    App.my_profile = new App.profile();
            
    App.storedPasscode = "";
    App.profileImageData = "";
    App.getShareRequestTimer = setInterval(function(){
		App.api().getShareRequest();
	}, 30000);
	App.getParticipantTimer = "";
});

Lungo.Events.init({
	'load section#invitations': function(event) {
		var options      = new ContactFindOptions();
        options.filter   = "";
        options.multiple = true;
        var fields       = ["displayName", "name", "photos", "emails"];
        navigator.contacts.find(fields, onContactSuccess, onContactError, options);

	},
	'unload section#participants': function(event) {
		clearInterval(App.getParticipantTimer);
	},
	'load section#participants': function(event) {
		App.getParticipantTimer =  setInterval(function(){
			App.api().getParticipants(App.host_id);
		}, 20000);
	},
	'load section#previous_connections': function(event) {
		App.host().getPreviousConnections();
	},
    'load section#connection_files': function(event) {
                  
         $("#connection_files_host_id_label").html("Files for Connection: "+App.host_id);
    },
	'load section#previous_connections': function(event) {
		App.host().getPreviousConnections();
	},
	'load section#participants_for_connection': function(event) {
		App.api().getParticipants(App.host_id);
	},
	'load section#join_connection': function(event) {
		App.profile().getProfiles();
		App.my_profile.details.id = null;
	},
	'load section#new_note': function(event) {
		Lungo.dom("#m_note_text").val('');
        App.note().getNoteList();
	},
	'unload section#connection_detail': function(event) {
		$("#d_options-icons").removeClass("show");
		App.IsMenuShown_d = false;
	}, 
	'load section#profile_list': function(event) {
		App.profile().getProfiles();
		App.my_profile.details.id = null;
	},
    'unload section#select_connection': function(event) {
		$("#s_options-icons").removeClass("show");
		App.IsMenuShown_s = false;
	},  
	'unload section#main': function(event) {
		$("#options-icons").removeClass("show");
		App.IsMenuShown = false;
	},
	'unload section#join_connection': function(event) {
		$("#j_options-icons").removeClass("show");
		App.IsMenuShown_j = false;
	},
	'unload section#connection_files': function(event) {
		$("#fc_options-icons").removeClass("show");
		App.IsMenuShown_fc = false;
	},   
	'unload section#previous_connections': function(event) {
		$("#p_options-icons").removeClass("show");
		App.IsMenuShown_p = false;
	},  
	'unload section#participants_for_connection': function(event) {
		$("#pc_options-icons").removeClass("show");
		App.IsMenuShown_pc = false;
	},   
	'unload section#profile_detail': function(event) {
		$("#pd_options-icons").removeClass("show");
		App.IsMenuShown_pd = false;
	},  
	'unload section#upcoming_connections': function(event) {
		$("#u_options-icons").removeClass("show");
		App.IsMenuShown_u = false;
	},  
	'unload section#invitations': function(event) {
		$("#pi_options-icons").removeClass("show");
		App.IsMenuShown_pi = false;
	}, 
	'unload section#edit_profile': function(event) {
		$("#ep_options-icons").removeClass("show");
		App.IsMenuShown_ep = false;
	},
	'unload section#future_connection': function(event) {
		$("#f_options-icons").removeClass("show");
		App.IsMenuShown_f = false;
		
		Lungo.dom("#c_connection_title_text").val('');
		Lungo.dom("#c_connection_location_text").val('');
        Lungo.dom("#c_host_name_text").val('');
        Lungo.dom("#c_passcode_text").val('');
        Lungo.dom("#c_agenda_text").val('');
	},
	'unload section#create_profile': function(event) {
		$("#cp_options-icons").removeClass("show");
		App.IsMenuShown_cp = false;
		
		$('.profile_images').children('img').each(function () {
        		$(this).removeClass("actived");
        });
        
        App.my_profile.details.icon = null;
        Lungo.dom("#cp_broadcast_name").val('');
		Lungo.dom("#cp_full_name").val('');
        Lungo.dom("#cp_profile_type").val('');
        Lungo.dom("#cp_phone_number").val('');
        Lungo.dom("#cp_email_address").val('');
	},  
	'tap #agenda_download_btn': function(event) {
		App.api().download_agenda_data(App.host_id);
	}, 
	'tap #participant_download_btn': function(event) {
		App.api().download_participants_data(App.host_id);
	}, 
	'tap #note_download_btn': function(event) {
		App.api().download_notes_data(App.host_id);
	}, 
	'tap #p_choose_connection_btn': function(event) {
		var mHostID = -1;
		$('.p_content ul li div.form fieldset').children('input').each(function () {
       			if($(this).is(":checked")) {
       				mHostID = $(this).attr("id");
        		}
		});
		
		if(mHostID == -1)
		{
			Lungo.Notification.error("Please select one connection.","","",2);
			return;
		}
		
		App.host_id = mHostID;
		Lungo.dom("#participants_host_id").html("Participants for Connection : " + mHostID);
		Lungo.dom("#connection_deatil_host_id").html("Connection : " + mHostID);
		Lungo.Router.section("connection_detail");
	},
	'tap #take_photo_btn': function(event) {
		event.preventDefault();
        navigator.camera.getPicture( onCameraSuccess, onCameraFail, { quality:50,destinationType:Camera.DestinationType.DATA_URL,targetWidth: 300,  targetHeight: 300, saveToPhotoAlbum: true ,encodingType: Camera.EncodingType.JPEG} );
   		$(".take_photo_btn_rect").fadeOut(100).animate({bottom:'0px'});
		$(".mask_div").fadeOut(1500);
	},
	'tap #take_photo_library_btn': function(event) {
	    event.preventDefault();
        navigator.camera.getPicture(onPhotoURISuccess, onCameraFail, { quality: 50,   destinationType: Camera.DestinationType.FILE_URI, targetWidth: 300,  targetHeight: 300, sourceType:  Camera.PictureSourceType.PHOTOLIBRARY });
   		$(".take_photo_btn_rect").fadeOut(100).animate({bottom:'0px'});   
		$(".mask_div").fadeOut(1500);  
    },
    'tap #take_photo_btn1': function(event) {
		event.preventDefault();
        navigator.camera.getPicture( onCameraSuccess1, onCameraFail, { quality:50,destinationType:Camera.DestinationType.DATA_URL,targetWidth: 300,  targetHeight: 300, saveToPhotoAlbum: true ,encodingType: Camera.EncodingType.JPEG} );
   		$(".take_photo_btn_rect1").fadeOut(100).animate({bottom:'0px'});
		$(".mask_div1").fadeOut(1500);
	},
	'tap #take_photo_library_btn1': function(event) {
	    event.preventDefault();
        navigator.camera.getPicture(onPhotoURISuccess1, onCameraFail, { quality: 50,   destinationType: Camera.DestinationType.FILE_URI, targetWidth: 300,  targetHeight: 300, sourceType:  Camera.PictureSourceType.PHOTOLIBRARY });
   		$(".take_photo_btn_rect1").fadeOut(100).animate({bottom:'0px'});   
		$(".mask_div1").fadeOut(1500);  
    },
	'tap #new_invite_email_btn': function(event) {
		navigator.notification.prompt(
        		'Please enter email address.',  // message
        		function(results){    
        			if(results.buttonIndex == 1)
	        			inviteFriend(results.input1);
        		},                  // callback to invoke
        		'PeopleConnect',            // title
        		['Ok', 'Cancel'],             // buttonLabels
        		''
    		);
	},
	'tap #n_save_note_btn': function(event) {
		App.note().addNote();
	},
	'tap .m_profile_image': function(event) {
		if ($('.take_photo_btn_rect').css('display') == 'none') {
    		$(".take_photo_btn_rect").show().animate({bottom:'80px'});
    		$(".mask_div").show();
		}else{
			$(".take_photo_btn_rect").fadeOut().animate({bottom:'0px'});
			$(".mask_div1").fadeOut(1500);
		}
	},
	'tap #edit_profile_image': function(event) { 
		if ($('.take_photo_btn_rect1').css('display') == 'none') {
    		$(".take_photo_btn_rect1").show().animate({bottom:'80px'});
    		$(".mask_div1").show();
		}else{
			$(".take_photo_btn_rect1").fadeOut().animate({bottom:'0px'});
			$(".mask_div1").fadeOut(1500);
		}
	},
	'tap #n_discard_btn': function(event) {
		Lungo.dom("#m_note_text").val('');
		Lungo.Router.back();
	},
	'tap #s_edit_btn': function(event) {
		if(App.my_profile.details.id == null)
		{
			Lungo.Notification.error("Please select one profile.","","",2);
			return;
		}
		var mProfile = App.myProfileList[App.my_profile.details.id];
		App.my_profile.details.id = mProfile.id;
		App.my_profile.details.icon = mProfile.icon;
		document.getElementById('edit_profile_image').src = mProfile.icon;
/*		$('.e_profile_images').children('img').each(function () {
			$(this).removeClass("actived");
        });
		$('.e_profile_images').children('img').each(function () {
			if($(this).attr("id") == mProfile.icon)
        	{
        		$(this).addClass("actived");
        		App.my_profile.details.icon = mProfile.icon;
        	}
        });
  */      	
		Lungo.dom("#ep_broadcast_name").val(mProfile.broadcastname);
		Lungo.dom("#ep_full_name").val(mProfile.fullname);
        Lungo.dom("#ep_profile_type").val(mProfile.type);
        Lungo.dom("#ep_phone_number").val(mProfile.phone);
        Lungo.dom("#ep_email_address").val(mProfile.email);
        
		Lungo.Router.section("edit_profile");
	},
	'tap #c_confirm_options_btn': function(event) {
/*		$(document.activeElement).blur();
		
		var flag_save_csv;
		var flag_enable_payment; 
		var flag_email;
		var flag_dropbox;
		
		if($("#o_save_profile_to_csv").hasClass("actived"))
			flag_save_csv = 1;
		else
			flag_save_csv = 0;
		
		if($("#o_enable_mobile_payments").hasClass("actived"))
			flag_enable_payment = 1;
		else
			flag_enable_payment = 0;
		
		if($("#o_auto_generate_email").hasClass("actived"))
			flag_email = 1;
		else
			flag_email = 0;
		
		if($("#o_enable_dropbox").hasClass("actived"))
			flag_dropbox = 1;
		else
			flag_dropbox = 0;
		
		var param = {hostid:App.host_id, savecsv:flag_save_csv, autopayment:flag_enable_payment, sendemail:flag_email, dropbox:flag_dropbox};
      	console.log(param);
      	App.api().setHostOption(param);
 */
        Lungo.Router.section("main");
	},
	'tap #j_join_btn': function(event) {
		$(document.activeElement).blur(); 
		App.host().joinConnection();
	},
	'tap #c_create_btn': function(event) {
		$(document.activeElement).blur(); 
		App.my_profile.addProfile();
	},
	'tap #f_create_host_btn': function(event) {
		$(document.activeElement).blur(); 
		App.host().createHost();
	},
	'tap #e_delete_btn': function(event) {
		$(document.activeElement).blur(); 
		App.my_profile.deleteProfile();
	},
	'tap #e_update_btn': function(event) {
		$(document.activeElement).blur(); 
		App.my_profile.updateProfile();
	},
    'tap #o_auto_generate_email': function(event) {
         $(document.activeElement).blur();
         Lungo.Router.section("invitations");
    },
	'tap #enter_profile_name_btn': function(event) { 
		$(document.activeElement).blur();
		var profileName = $("#e_profile_name_txt").val();
		if(profileName == "")
		{
			Lungo.Notification.error("Please input new profile name.", "", "warning-sign", 2);
			return;
		}
		else
		{
			App.my_profile.details.profile_name = profileName;
			Lungo.Router.section("create_profile");
		}
	},
	'tap #c_connect_btn': function(event) { 
			if(App.selectedParticipants.length <=0 )
			{
				Lungo.Notification.error("Please select participant more than one.", "","",2);
				return;
			}
	
			var selectedIndex = 0;
	        for(var index in App.myProfileList)
	        {
	        	if(App.my_profile.details.id == App.myProfileList[index].id)
	        	{
	        		selectedIndex = index;
	        	}
	        }
	        
	        App.my_profile.details.id = selectedIndex;

        	console.log("--------");
			console.log(App.myProfileList[selectedIndex]);
			console.log("--@@@@@@---");
        	console.log(App.selectedParticipants);
			console.log("--------");
        	
        	var selectedName = "\"";
            var selectedParticipantIds = new Array();
        	for(var index in App.selectedParticipants)
	        {
	        	if(index != 0 )
		        	selectedName += ", \"";
	        	selectedName += App.selectedParticipants[index].fullname;
                selectedParticipantIds.push(App.selectedParticipants[index].id);
	        }
	        selectedName += "\"";			
			$(".mask_div").show();
                 
			Lungo.Notification.confirm({
    			icon: 'warning-sign',
    			title: 'Are You Sure?',
    			description: 'You will be sharing your profile entitled \"'+App.myProfileList[selectedIndex].fullname+'\" with '+selectedName+' Confirm?',
    			accept: {
         			icon: 'checkmark',
        			label: 'ok',
        			callback: function(){
        				Lungo.Notification.hide();
        				$(".mask_div").fadeOut(1500);
        				setTimeout(function(){ 
	        				Lungo.Notification.success("Success","You've been connected", "check",3,function(){
    	    					Lungo.Notification.hide();
    	    					var param =  {profilefrom:App.myProfileList[selectedIndex].id, host_id:App.host_id, profileto:selectedParticipantIds};
                                App.api().sendShareRequest(param);
    	    					//Lungo.Router.section("main");
        					});
        				stopTimer();}, 500);
        			}
    			},
    			cancel: {
        			icon: 'close',
        			label: 'cancel',
        			callback: function(){         				 
						$(".mask_div").fadeOut(1500);
					}
    			}
			});
	},
});


function onContactSuccess(contacts) {
    //console.log(contacts.length);
    Lungo.dom(".phone_contact_list").empty();
    for (var i = 0; i < contacts.length; i++) {
        var contact_name = "";
        var contact_photo = "img/user_profile1.png";
        var plus_image = "img/plus.png";
        var contact_email = "";
        //console.log(contacts[i]);
        if(contacts[i].name != null)
        {
            //console.log("Display Name = " + contacts[i].name.formatted);
            contact_name = contacts[i].name.formatted;
        }
        if(contacts[i].photos != null)
        {
            //console.log(contacts[i].photos[0].value);
            contact_photo = contacts[i].photos[0].value;
        }
        if(contacts[i].emails != null)
        {
            //console.log("email = " + contacts[i].emails[0].value);
            contact_email = contacts[i].emails[0].value;
            if(contact_email !=""){
                
                var html = '<li class="thumb">';
                html += '<img src="'+contact_photo+'" style="border-radius:20%;"/>';
                html += '<div class="user_detail_item">';
                html += '<div class="invite_icon" id="'+contact_email+'" onclick="inviteFriend(\''+contact_email+'\');">';
                html += '<img src="'+plus_image+'" style="width:20px;height:20px;background:white;"/>';
                html += '</div>';
                html += '<div clases="l_user_name">'+contact_name+'</div>';
                html += '</div>';
                html += '</li>';
                
            	Lungo.dom(".phone_contact_list").append(html);
            }
        }   
    }
};

function onContactError(contactError) {
    console.log('onError!'+ contactError);
};
 
function inviteFriend(friendEmail){
    console.log(friendEmail);
    
    window.plugin.email.open({
    	to:      [friendEmail],
    	cc:      [],
    	bcc:     [],
    	subject: 'People Connect Invitation',
    	body:    'Please Connect with me via HOST ID: __'+ App.host_id +'__ , Pass Code : __'+ App.storedPasscode +'__ via the PeopleConnect app on "DATE / TIME: '+$("#c_connection_date_text").val() +' '+ $("#c_connection_time_text").val()+''
	});
}
function onPhotoURISuccess(imageURI) {
	document.getElementById('m_profile_image').src = imageURI;
    App.profileImageData = imageURI;
    //console.log(imageURI);
}
function onCameraSuccess(imageData) {
    var image = document.getElementById('m_profile_image');
    image.src = "data:image/jpeg;base64," + imageData;
	App.profileImageData = imageData;
}
function onPhotoURISuccess1(imageURI) {
	document.getElementById('edit_profile_image').src = imageURI;
    App.profileImageData = imageURI;
    //console.log(imageURI);
}
function onCameraSuccess1(imageData) {
    var image = document.getElementById('edit_profile_image');
    image.src = "data:image/jpeg;base64," + imageData;
	App.profileImageData = imageData;
}
function onCameraFail(message) {
    console.log('Failed because: ' + message);
}
function onFileFail(message){
    Lungo.Notification.error("File transfer have been failed. please try again.", "", "", 2);
}