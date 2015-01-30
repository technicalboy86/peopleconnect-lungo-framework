App.profile = function() {
	return {
		details:{
			id:null,
			profile_name:null,
			broadcast_name:null,
			full_name:null,
			type:null,
			phone:null,
			email:null,
			icon:null,
		},
		addContactRequest:function(data){
			for(var index in data.result)
			{
				var user = data.result[index];
				console.log(user);
				navigator.notification.alert('You have been received add contact request from \"'+user.fullname+'\"'+'.',function(){}, "Add contact", "OK");
				
				var contact = navigator.contacts.create();
				contact.displayName = user.broadcastname;
				contact.nickname = user.broadcastname;
				contact.name = user.fullname;
				
				var emails = [];
				emails[0] = new ContactField('work', user.email, true);
				contact.emails = emails;
				
				var photos = [];
				photos[0] = new ContactField('work', user.icon, true);
				contact.photos = photos;
				
				contact.save(function(contact){
					//console.log("SUCCESS ********************");
					var param = {shareid:user.shareid, status:"accept"};
					App.api().shareResponse(param);
				}, function(contactError){
					//console.log("Failed ********************");
					var param = {shareid:user.shareid, status:"deny"};
					App.api().shareResponse(param);
				});
				
				
			}
			
		},
        getProfiles:function(){
            App.api().getProfiles(this);
        },
        deleteProfile:function(){
            App.api().deleteProfile();
        },
        handleAvailableParticipants:function(data){
                App.Participants = new Array();
        		App.selectedParticipants = new Array();
        		$("#available_participants_list").empty();
        		$("#m_participants_list").empty();
        		$("#ph_participants_list").empty();
				for(var index in data.participants)
				{
					var participant = data.participants[index];
					App.Participants.push(participant);
					console.log(participant);
					var html = '<li class="thumb">';
					html += '<img src="'+participant.icon+'" />';
					html += '<div class="detail">';
					html += '<strong>'+participant.fullname+'</strong>';
					html += '<small>'+participant.phone+'</small>';
        			html += '</div>';
        			html += '<div class="form">';
        			html += '<fieldset>';
        			html += '<input type="checkbox" class="inline right" id="'+index+'"/>';
        			html += '</fieldset>';
        			html += '</div>';
        			html += '</li>';
					$("#available_participants_list").append(html);
					
					var mHtml = '<li class="thumb">';
					mHtml += '<img src="'+participant.icon+'" />';
					mHtml += '<div class="detail">';
					mHtml += '<strong>'+participant.fullname+'</strong>';
					mHtml += '<small>'+participant.phone+'</small>';
        			mHtml += '</div>';
        			mHtml += '</li>';
					$("#m_participants_list").append(mHtml);
					$("#ph_participants_list").append(mHtml);
				}
				
				$('ul#available_participants_list li div.form fieldset').children('input').each(function () {
        			$(this).change(function() {
        				var mIndex = $(this).attr("id");
        				if($(this).is(":checked")) {
        					App.profile().addParticipant(mIndex);
        				}else{
        					App.profile().removeParticipant(mIndex);
        				}

    				});
				}); 
        },
        addParticipant:function(index){
        	App.selectedParticipants.push(App.Participants[index]);
        },
        removeParticipant:function(index){
        	var mParticipant = App.Participants[index];
        
        	var i = App.selectedParticipants.indexOf(mParticipant);

   			if ( i !== -1 ) {
        		App.selectedParticipants.splice(i, 1);
    		}
        },
        handleProfiles:function(data)
        {
        	$("#s_profile_list").empty();
        	$("#join_connection_list").empty();
        	App.myProfileList = new Array();
        	if(data.count > 0)
        	{
        		for(var index in data.profiles)
        		{
        			var mProfile = data.profiles[index];
        			App.myProfileList.push(mProfile);
        			
        			var html = '<li class="thumb">';
        			html += '<img src="'+mProfile.icon+'" />';
        			html += '<div class="detail">';
        			html += '<strong>'+mProfile.fullname+'</strong>';
        			html += '<small>'+mProfile.phone+'</small>';
        			html += '</div>';
        			html += '<div class="form">';
        			html += '<fieldset>';
        			html += '<input type="checkbox" class="inline right" id="'+index+'"/>';
        			html += '</fieldset>';
        			html += '</div>';
        			html += '</li>';
        			
        			$("#s_profile_list").append(html);
        			$("#join_connection_list").append(html);
        		}
        		
        		$('ul#s_profile_list li div.form fieldset').children('input').each(function () {
        			$(this).change(function() {
        				if($(this).is(":checked")) {
        					var mOption = $(this).attr("id");
        					
        					App.my_profile.details.id = mOption;
            				$('ul#s_profile_list li div.form fieldset').children('input').each(function () {

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
                                   
        					App.my_profile.details.id = mOption;
            				$('ul#s_profile_list li div.form fieldset').children('input').each(function () {

            					if(mOption != $(this).attr("id"))
            					{
            						$(this).prop("checked", false);
            					}
            				});
        				}
    				});
				});
        	}
        },
        updateProfile:function(){
            this.gatherUpdateDetails();
			var api = new App.api();
			api.updateProfile(this);
        },
        addProfile:function(){
        	this.gatherDetails();
			var api = new App.api();
			api.addProfile(this);
        },
        gatherDetails: function() {
			this.details = {
				broadcastname: $("#cp_broadcast_name").val(),
				fullname: $("#cp_full_name").val(),
                type: $("#cp_profile_type").val(),
                phone:$("#cp_phone_number").val(),
                email:$("#cp_email_address").val(),
                icon:App.profileImageData,
                profilename:App.my_profile.details.profile_name,
                user_id:App.user_id,
			};
		},
		gatherUpdateDetails: function() {
			this.details = {
				broadcastname: $("#ep_broadcast_name").val(),
				fullname: $("#ep_full_name").val(),
                type: $("#ep_profile_type").val(),
                phone:$("#ep_phone_number").val(),
                email:$("#ep_email_address").val(),
                icon:App.profileImageData,
                id:App.my_profile.details.id,
			};
		},
		
		updateProfileValidate: function() {
			this.errors = [];
            
            if (this.details.icon == null || this.details.icon == "") {
				this.errors.push("Please choose profile icon.");
			}
            
            if (looksLikeMail(this.details.email) == false) {
				this.errors.push("Invalidate email address.");
			}
            
            if (this.details.email == null || this.details.email == "") {
				this.errors.push("Please input email address.");
			}	
			
			if (this.details.phone == null || this.details.phone == "") {
				this.errors.push("Please input phone number.");
			}
			
			if (this.details.type == null || this.details.type == "") {
				this.errors.push("Please input profile type.");
			}
			
			if (this.details.fullname == null || this.details.fullname == "") {
				this.errors.push("Please input full name.");
			}
			
			if (this.details.broadcastname == null || this.details.broadcastname == "") {
				this.errors.push("Please input broadcast name.");
			}
			
			if (this.errors.length) {
				console.log("Problem(s) encountered validating user data.");
				for (var i = 0; i < this.errors.length; i++) {
					Lungo.Notification.error(this.errors[i], "", "", 2);
				}
				return false;
			} else {
				return true;
			}
		},
		profileValidate: function() {
			this.errors = [];
            
            if (this.details.icon == null || this.details.icon == "") {
				this.errors.push("Please choose profile icon.");
			}
            
            if (looksLikeMail(this.details.email) == false) {
				this.errors.push("Invalidate email address.");
			}
            
            if (this.details.email == null || this.details.email == "") {
				this.errors.push("Please input email address.");
			}	
			
			if (this.details.phone == null || this.details.phone == "") {
				this.errors.push("Please input phone number.");
			}
			
			if (this.details.type == null || this.details.type == "") {
				this.errors.push("Please input profile type.");
			}
			
			if (this.details.fullname == null || this.details.fullname == "") {
				this.errors.push("Please input full name.");
			}
			
			if (this.details.broadcastname == null || this.details.broadcastname == "") {
				this.errors.push("Please input broadcast name.");
			}
			
			if (this.errors.length) {
				console.log("Problem(s) encountered validating user data.");
				for (var i = 0; i < this.errors.length; i++) {
					Lungo.Notification.error(this.errors[i], "", "", 2);
				}
				return false;
			} else {
				return true;
			}
		},
	};
};

