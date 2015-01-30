Lungo.ready(function() {

      
    jQuery(".content").hide();
    jQuery(".e_policy_holder").click(function(){
                                     
        	jQuery(this).next(".content").slideToggle("slow");
            jQuery(this).children("a:first").toggle();
            
            if(jQuery(this).children("a.arrow_down_icon").css("display")=="none")
            	jQuery(this).children("a.arrow_down_icon").show();
            else
            	jQuery(this).children("a.arrow_down_icon").hide();
                                             
    });
    App.IsMenuShown = false;
    App.IsMenuShown_s = false;
    App.IsMenuShown_i = false;
    App.IsMenuShown_f = false;
    App.IsMenuShown_c = false;    
    App.IsMenuShown_j = false;    
    App.IsMenuShown_h = false;    
    App.IsMenuShown_n = false; 
    App.IsMenuShown_p = false;  
    App.IsMenuShown_d = false; 
    App.IsMenuShown_fc = false; 
    App.IsMenuShown_pc = false; 
    App.IsMenuShown_pd = false; 
    App.IsMenuShown_u = false; 
    App.IsMenuShown_pi = false;
    App.IsMenuShown_pl = false;
    App.IsMenuShown_cp = false;
    App.IsMenuShown_ep = false;
    
    
});

Lungo.Events.init({
    // ******* main page        
	'tap #menu_btn': function(event) {
		if(App.IsMenuShown == true)
		{
			$("#options-icons").removeClass("show");
			App.IsMenuShown = false;
		}else{
			App.IsMenuShown = true;
		}
	},
	'tap #new_note_menu': function(event) {
		App.IsMenuShown = false;
		$("#menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #agenda_menu': function(event) {
		App.IsMenuShown = false;
		$("#menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #connects_menu': function(event) {
		App.IsMenuShown = false;
		$("#menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #edit_profile_menu': function(event) {
		App.IsMenuShown = false;
		$("#menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #previous_menu': function(event) {
		App.IsMenuShown = false;
		$("#menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #upcoming_menu': function(event) {
		App.IsMenuShown = false;
		$("#menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #invitations_menu': function(event) {
		App.IsMenuShown = false;
		$("#menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #home_menu': function(event) {
		App.IsMenuShown = false;
		$("#menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #disconnect_menu': function(event) {
		App.IsMenuShown = false;
		$("#menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// select connection page
	'tap #s_menu_btn': function(event) {
		if(App.IsMenuShown_s == true)
		{
			$("#s_options-icons").removeClass("show");
			App.IsMenuShown_s = false;
		}else{
			App.IsMenuShown_s = true;
		}
	},
	'tap #s_new_note_menu': function(event) {
		App.IsMenuShown_s = false;
		$("#s_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #s_agenda_menu': function(event) {
		App.IsMenuShown_s = false;
		$("#s_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #s_connects_menu': function(event) {
		App.IsMenuShown_s = false;
		$("#s_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #s_edit_profile_menu': function(event) {
		App.IsMenuShown_s = false;
		$("#s_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #s_previous_menu': function(event) {
		App.IsMenuShown_s = false;
		$("#s_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #s_upcoming_menu': function(event) {
		App.IsMenuShown_s = false;
		$("#s_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #s_invitations_menu': function(event) {
		App.IsMenuShown_s = false;
		$("#s_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #s_home_menu': function(event) {
		App.IsMenuShown_s = false;
		$("#s_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #s_disconnect_menu': function(event) {
		App.IsMenuShown_s = false;
		$("#s_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// instant_connection page
	'tap #i_menu_btn': function(event) {
		if(App.IsMenuShown_i == true)
		{
			$("#i_options-icons").removeClass("show");
			App.IsMenuShown_i = false;
		}else{
			App.IsMenuShown_i = true;
		}
	},
	'tap #i_new_note_menu': function(event) {
		App.IsMenuShown_i = false;
		$("#i_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #i_agenda_menu': function(event) {
		App.IsMenuShown_i = false;
		$("#i_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #i_connects_menu': function(event) {
		App.IsMenuShown_i = false;
		$("#i_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #i_edit_profile_menu': function(event) {
		App.IsMenuShown_i = false;
		$("#i_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #i_previous_menu': function(event) {
		App.IsMenuShown_i = false;
		$("#i_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #i_upcoming_menu': function(event) {
		App.IsMenuShown_i = false;
		$("#i_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #i_invitations_menu': function(event) {
		App.IsMenuShown_i = false;
		$("#i_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #i_home_menu': function(event) {
		App.IsMenuShown_i = false;
		$("#i_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #i_disconnect_menu': function(event) {
		App.IsMenuShown_i = false;
		$("#i_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// future_connection page
	'tap #f_menu_btn': function(event) {
		if(App.IsMenuShown_f == true)
		{
			$("#f_options-icons").removeClass("show");
			App.IsMenuShown_f = false;
		}else{
			App.IsMenuShown_f = true;
		}
	},
	'tap #f_new_note_menu': function(event) {
		App.IsMenuShown_f = false;
		$("#f_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #f_agenda_menu': function(event) {
		App.IsMenuShown_f = false;
		$("#f_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #f_connects_menu': function(event) {
		App.IsMenuShown_f = false;
		$("#f_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #f_edit_profile_menu': function(event) {
		App.IsMenuShown_f = false;
		$("#f_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #f_previous_menu': function(event) {
		App.IsMenuShown_f = false;
		$("#f_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #f_upcoming_menu': function(event) {
		App.IsMenuShown_f = false;
		$("#f_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #f_invitations_menu': function(event) {
		App.IsMenuShown_f = false;
		$("#f_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #f_home_menu': function(event) {
		App.IsMenuShown_f = false;
		$("#f_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #f_disconnect_menu': function(event) {
		App.IsMenuShown_f = false;
		$("#f_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// congratulations_html page
	'tap #c_menu_btn': function(event) {
		if(App.IsMenuShown_c == true)
		{
			$("#c_options-icons").removeClass("show");
			App.IsMenuShown_c = false;
		}else{
			App.IsMenuShown_c = true;
		}
	},
	'tap #c_new_note_menu': function(event) {
		App.IsMenuShown_c = false;
		$("#c_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #c_agenda_menu': function(event) {
		App.IsMenuShown_c = false;
		$("#c_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #c_connects_menu': function(event) {
		App.IsMenuShown_c = false;
		$("#c_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #c_edit_profile_menu': function(event) {
		App.IsMenuShown_c = false;
		$("#c_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #c_previous_menu': function(event) {
		App.IsMenuShown_c = false;
		$("#c_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #c_upcoming_menu': function(event) {
		App.IsMenuShown_c = false;
		$("#c_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #c_invitations_menu': function(event) {
		App.IsMenuShown_c = false;
		$("#c_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #c_home_menu': function(event) {
		App.IsMenuShown_c = false;
		$("#c_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #c_disconnect_menu': function(event) {
		App.IsMenuShown_c = false;
		$("#c_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// join_connection page
	'tap #j_menu_btn': function(event) {
		if(App.IsMenuShown_j == true)
		{
			$("#j_options-icons").removeClass("show");
			App.IsMenuShown_j = false;
		}else{
			App.IsMenuShown_j = true;
		}
	},
	'tap #j_new_note_menu': function(event) {
		App.IsMenuShown_j = false;
		$("#j_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #j_agenda_menu': function(event) {
		App.IsMenuShown_j = false;
		$("#j_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #j_connects_menu': function(event) {
		App.IsMenuShown_j = false;
		$("#j_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #j_edit_profile_menu': function(event) {
		App.IsMenuShown_j = false;
		$("#j_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #j_previous_menu': function(event) {
		App.IsMenuShown_j = false;
		$("#j_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #j_upcoming_menu': function(event) {
		App.IsMenuShown_j = false;
		$("#j_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #j_invitations_menu': function(event) {
		App.IsMenuShown_j = false;
		$("#j_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #j_home_menu': function(event) {
		App.IsMenuShown_j = false;
		$("#j_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #j_disconnect_menu': function(event) {
		App.IsMenuShown_j = false;
		$("#j_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// connected_to_hub page
	'tap #h_menu_btn': function(event) {
		if(App.IsMenuShown_h == true)
		{
			$("#h_options-icons").removeClass("show");
			App.IsMenuShown_h = false;
		}else{
			App.IsMenuShown_h = true;
		}
	},
	'tap #h_new_note_menu': function(event) {
		App.IsMenuShown_h = false;
		$("#h_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #h_agenda_menu': function(event) {
		App.IsMenuShown_h = false;
		$("#h_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #h_connects_menu': function(event) {
		App.IsMenuShown_h = false;
		$("#h_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #h_edit_profile_menu': function(event) {
		App.IsMenuShown_h = false;
		$("#h_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #h_previous_menu': function(event) {
		App.IsMenuShown_h = false;
		$("#h_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #h_upcoming_menu': function(event) {
		App.IsMenuShown_h = false;
		$("#h_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #h_invitations_menu': function(event) {
		App.IsMenuShown_h = false;
		$("#h_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #h_home_menu': function(event) {
		App.IsMenuShown_h = false;
		$("#h_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #h_disconnect_menu': function(event) {
		App.IsMenuShown_h = false;
		$("#h_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// new_note page
	'tap #n_menu_btn': function(event) {
		if(App.IsMenuShown_n == true)
		{
			$("#n_options-icons").removeClass("show");
			App.IsMenuShown_n = false;
		}else{
			App.IsMenuShown_n = true;
		}
	},
	'tap #n_new_note_menu': function(event) {
		App.IsMenuShown_n = false;
		$("#n_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #n_agenda_menu': function(event) {
		App.IsMenuShown_n = false;
		$("#n_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #n_connects_menu': function(event) {
		App.IsMenuShown_n = false;
		$("#n_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #n_edit_profile_menu': function(event) {
		App.IsMenuShown_n = false;
		$("#n_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #n_previous_menu': function(event) {
		App.IsMenuShown_n = false;
		$("#n_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #n_upcoming_menu': function(event) {
		App.IsMenuShown_n = false;
		$("#n_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #n_invitations_menu': function(event) {
		App.IsMenuShown_n = false;
		$("#n_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #n_home_menu': function(event) {
		App.IsMenuShown_n = false;
		$("#n_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #n_disconnect_menu': function(event) {
		App.IsMenuShown_n = false;
		$("#n_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// previous_connections page
	'tap #p_menu_btn': function(event) {
		if(App.IsMenuShown_p == true)
		{
			$("#p_options-icons").removeClass("show");
			App.IsMenuShown_p = false;
		}else{
			App.IsMenuShown_p = true;
		}
	},
	'tap #p_new_note_menu': function(event) {
		App.IsMenuShown_p = false;
		$("#p_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #p_agenda_menu': function(event) {
		App.IsMenuShown_p = false;
		$("#p_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #p_connects_menu': function(event) {
		App.IsMenuShown_p = false;
		$("#p_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #p_edit_profile_menu': function(event) {
		App.IsMenuShown_p = false;
		$("#p_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #p_previous_menu': function(event) {
		App.IsMenuShown_p = false;
		$("#p_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #p_upcoming_menu': function(event) {
		App.IsMenuShown_p = false;
		$("#p_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #p_invitations_menu': function(event) {
		App.IsMenuShown_p = false;
		$("#p_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #p_home_menu': function(event) {
		App.IsMenuShown_p = false;
		$("#p_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #p_disconnect_menu': function(event) {
		App.IsMenuShown_p = false;
		$("#p_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// connection_detail page
	'tap #d_menu_btn': function(event) {
		if(App.IsMenuShown_d == true)
		{
			$("#d_options-icons").removeClass("show");
			App.IsMenuShown_d = false;
		}else{
			App.IsMenuShown_d = true;
		}
	},
	'tap #d_new_note_menu': function(event) {
		App.IsMenuShown_d = false;
		$("#d_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #d_agenda_menu': function(event) {
		App.IsMenuShown_d = false;
		$("#d_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #d_connects_menu': function(event) {
		App.IsMenuShown_d = false;
		$("#d_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #d_edit_profile_menu': function(event) {
		App.IsMenuShown_d = false;
		$("#d_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #d_previous_menu': function(event) {
		App.IsMenuShown_d = false;
		$("#d_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #d_upcoming_menu': function(event) {
		App.IsMenuShown_d = false;
		$("#d_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #d_invitations_menu': function(event) {
		App.IsMenuShown_d = false;
		$("#d_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #d_home_menu': function(event) {
		App.IsMenuShown_d = false;
		$("#d_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #d_disconnect_menu': function(event) {
		App.IsMenuShown_d = false;
		$("#d_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// connection_files page
	'tap #fc_menu_btn': function(event) {
		if(App.IsMenuShown_fc == true)
		{
			$("#fc_options-icons").removeClass("show");
			App.IsMenuShown_fc = false;
		}else{
			App.IsMenuShown_fc = true;
		}
	},
	'tap #fc_new_note_menu': function(event) {
		App.IsMenuShown_fc = false;
		$("#fc_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #fc_agenda_menu': function(event) {
		App.IsMenuShown_fc = false;
		$("#fc_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #fc_connects_menu': function(event) {
		App.IsMenuShown_fc = false;
		$("#fc_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #fc_edit_profile_menu': function(event) {
		App.IsMenuShown_fc = false;
		$("#fc_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #fc_previous_menu': function(event) {
		App.IsMenuShown_fc = false;
		$("#fc_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #fc_upcoming_menu': function(event) {
		App.IsMenuShown_fc = false;
		$("#fc_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #fc_invitations_menu': function(event) {
		App.IsMenuShown_fc = false;
		$("#fc_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #fc_home_menu': function(event) {
		App.IsMenuShown_fc = false;
		$("#fc_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #fc_disconnect_menu': function(event) {
		App.IsMenuShown_fc = false;
		$("#fc_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// participants_for_connection page
	'tap #pc_menu_btn': function(event) {
		if(App.IsMenuShown_pc == true)
		{
			$("#pc_options-icons").removeClass("show");
			App.IsMenuShown_pc = false;
		}else{
			App.IsMenuShown_pc = true;
		}
	},
	'tap #pc_new_note_menu': function(event) {
		App.IsMenuShown_pc = false;
		$("#pc_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #pc_agenda_menu': function(event) {
		App.IsMenuShown_pc = false;
		$("#pc_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #pc_connects_menu': function(event) {
		App.IsMenuShown_pc = false;
		$("#pc_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #pc_edit_profile_menu': function(event) {
		App.IsMenuShown_pc = false;
		$("#pc_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #pc_previous_menu': function(event) {
		App.IsMenuShown_pc = false;
		$("#pc_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #pc_upcoming_menu': function(event) {
		App.IsMenuShown_pc = false;
		$("#pc_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #pc_invitations_menu': function(event) {
		App.IsMenuShown_pc = false;
		$("#pc_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #pc_home_menu': function(event) {
		App.IsMenuShown_pc = false;
		$("#pc_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #pc_disconnect_menu': function(event) {
		App.IsMenuShown_pc = false;
		$("#pc_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// profile_detail page
	'tap #pd_menu_btn': function(event) {
		if(App.IsMenuShown_pd == true)
		{
			$("#pd_options-icons").removeClass("show");
			App.IsMenuShown_pd = false;
		}else{
			App.IsMenuShown_pd = true;
		}
	},
	'tap #pd_new_note_menu': function(event) {
		App.IsMenuShown_pd = false;
		$("#pd_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #pd_agenda_menu': function(event) {
		App.IsMenuShown_pd = false;
		$("#pd_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #pd_connects_menu': function(event) {
		App.IsMenuShown_pd = false;
		$("#pd_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #pd_edit_profile_menu': function(event) {
		App.IsMenuShown_pd = false;
		$("#pd_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #pd_previous_menu': function(event) {
		App.IsMenuShown_pd = false;
		$("#pd_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #pd_upcoming_menu': function(event) {
		App.IsMenuShown_pd = false;
		$("#pd_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #pd_invitations_menu': function(event) {
		App.IsMenuShown_pd = false;
		$("#pd_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #pd_home_menu': function(event) {
		App.IsMenuShown_pd = false;
		$("#pd_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #pd_disconnect_menu': function(event) {
		App.IsMenuShown_pd = false;
		$("#pd_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// upcoming_connections page
	'tap #u_menu_btn': function(event) {
		if(App.IsMenuShown_u == true)
		{
			$("#u_options-icons").removeClass("show");
			App.IsMenuShown_u = false;
		}else{
			App.IsMenuShown_u = true;
		}
	},
	'tap #u_new_note_menu': function(event) {
		App.IsMenuShown_u = false;
		$("#u_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #u_agenda_menu': function(event) {
		App.IsMenuShown_u = false;
		$("#u_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #u_connects_menu': function(event) {
		App.IsMenuShown_u = false;
		$("#u_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #u_edit_profile_menu': function(event) {
		App.IsMenuShown_u = false;
		$("#u_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #u_previous_menu': function(event) {
		App.IsMenuShown_u = false;
		$("#u_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #u_upcoming_menu': function(event) {
		App.IsMenuShown_u = false;
		$("#u_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #u_invitations_menu': function(event) {
		App.IsMenuShown_u = false;
		$("#u_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #u_home_menu': function(event) {
		App.IsMenuShown_u = false;
		$("#u_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #u_disconnect_menu': function(event) {
		App.IsMenuShown_u = false;
		$("#u_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// invitations page
	'tap #pi_menu_btn': function(event) {
		if(App.IsMenuShown_pi == true)
		{
			$("#pi_options-icons").removeClass("show");
			App.IsMenuShown_pi = false;
		}else{
			App.IsMenuShown_pi = true;
		}
	},
	'tap #pi_new_note_menu': function(event) {
		App.IsMenuShown_pi = false;
		$("#pi_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #pi_agenda_menu': function(event) {
		App.IsMenuShown_pi = false;
		$("#pi_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #pi_connects_menu': function(event) {
		App.IsMenuShown_pi = false;
		$("#pi_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #pi_edit_profile_menu': function(event) {
		App.IsMenuShown_pi = false;
		$("#pi_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #pi_previous_menu': function(event) {
		App.IsMenuShown_pi = false;
		$("#pi_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #pi_upcoming_menu': function(event) {
		App.IsMenuShown_pi = false;
		$("#pi_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #pi_invitations_menu': function(event) {
		App.IsMenuShown_pi = false;
		$("#pi_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #pi_home_menu': function(event) {
		App.IsMenuShown_pi = false;
		$("#pi_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #pi_disconnect_menu': function(event) {
		App.IsMenuShown_pi = false;
		$("#pi_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// profile_list page
	'tap #pl_menu_btn': function(event) {
		if(App.IsMenuShown_pl == true)
		{
			$("#pl_options-icons").removeClass("show");
			App.IsMenuShown_pl = false;
		}else{
			App.IsMenuShown_pl = true;
		}
	},
	'tap #pl_new_note_menu': function(event) {
		App.IsMenuShown_pl = false;
		$("#pl_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #pl_agenda_menu': function(event) {
		App.IsMenuShown_pl = false;
		$("#pl_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #pl_connects_menu': function(event) {
		App.IsMenuShown_pl = false;
		$("#pl_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #pl_edit_profile_menu': function(event) {
		App.IsMenuShown_pl = false;
		$("#pl_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #pl_previous_menu': function(event) {
		App.IsMenuShown_pl = false;
		$("#pl_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #pl_upcoming_menu': function(event) {
		App.IsMenuShown_pl = false;
		$("#pl_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #pl_invitations_menu': function(event) {
		App.IsMenuShown_pl = false;
		$("#pl_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #pl_home_menu': function(event) {
		App.IsMenuShown_pl = false;
		$("#pl_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #pl_disconnect_menu': function(event) {
		App.IsMenuShown_pl = false;
		$("#pl_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// create_profile page
	'tap #cp_menu_btn': function(event) {
		if(App.IsMenuShown_cp == true)
		{
			$("#cp_options-icons").removeClass("show");
			App.IsMenuShown_cp = false;
		}else{
			App.IsMenuShown_cp = true;
		}
	},
	'tap #cp_new_note_menu': function(event) {
		App.IsMenuShown_cp = false;
		$("#cp_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #cp_agenda_menu': function(event) {
		App.IsMenuShown_cp = false;
		$("#cp_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #cp_connects_menu': function(event) {
		App.IsMenuShown_cp = false;
		$("#cp_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #cp_edit_profile_menu': function(event) {
		App.IsMenuShown_cp = false;
		$("#cp_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #cp_previous_menu': function(event) {
		App.IsMenuShown_cp = false;
		$("#cp_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #cp_upcoming_menu': function(event) {
		App.IsMenuShown_cp = false;
		$("#cp_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #cp_invitations_menu': function(event) {
		App.IsMenuShown_cp = false;
		$("#cp_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #cp_home_menu': function(event) {
		App.IsMenuShown_cp = false;
		$("#cp_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #cp_disconnect_menu': function(event) {
		App.IsMenuShown_cp = false;
		$("#cp_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
	// edit_profile page
	'tap #ep_menu_btn': function(event) {
		if(App.IsMenuShown_ep == true)
		{
			$("#ep_options-icons").removeClass("show");
			App.IsMenuShown_ep = false;
		}else{
			App.IsMenuShown_ep = true;
		}
	},
	'tap #ep_new_note_menu': function(event) {
		App.IsMenuShown_ep = false;
		$("#ep_menu_btn span").removeClass("edit").addClass("grid");
		onNewNoteClick();
	},
	'tap #ep_agenda_menu': function(event) {
		App.IsMenuShown_ep = false;
		$("#ep_menu_btn span").removeClass("globe").addClass("grid");
		onAgendaClick();
	},
	'tap #ep_connects_menu': function(event) {
		App.IsMenuShown_ep = false;
		$("#ep_menu_btn span").removeClass("comments").addClass("grid");
		onConnectsClick();
	},
	'tap #ep_edit_profile_menu': function(event) {
		App.IsMenuShown_ep = false;
		$("#ep_menu_btn span").removeClass("user").addClass("grid");
		onEditProfileClick();
	},
	'tap #ep_previous_menu': function(event) {
		App.IsMenuShown_ep = false;
		$("#ep_menu_btn span").removeClass("undo").addClass("grid");
		onPreviousClick();
	},
	'tap #ep_upcoming_menu': function(event) {
		App.IsMenuShown_ep = false;
		$("#ep_menu_btn span").removeClass("remove").addClass("grid");
		onUpcomingClick();
	},
	'tap #ep_invitations_menu': function(event) {
		App.IsMenuShown_ep = false;
		$("#ep_menu_btn span").removeClass("book").addClass("grid");
		onInvitationsClick();
	},
	'tap #ep_home_menu': function(event) {
		App.IsMenuShown_ep = false;
		$("#ep_menu_btn span").removeClass("home").addClass("grid");
		Lungo.Router.section("main");
	},
	'tap #ep_disconnect_menu': function(event) {
		App.IsMenuShown_ep = false;
		$("#ep_menu_btn span").removeClass("remove").addClass("grid");
		onDisconnectClick();
	},
});

function menu_disconnected()
{
	if($(window).height() < 500){
            $("#options-icons").css("margin-top", 300 + "px");
            $("#s_options-icons").css("margin-top", 300 + "px");
            $("#i_options-icons").css("margin-top", 300 + "px");
            $("#f_options-icons").css("margin-top", 300 + "px");
            $("#c_options-icons").css("margin-top", 300 + "px");
            $("#j_options-icons").css("margin-top", 300 + "px");
            $("#h_options-icons").css("margin-top", 300 + "px");
            $("#n_options-icons").css("margin-top", 300 + "px");
            $("#p_options-icons").css("margin-top", 300 + "px");
            $("#d_options-icons").css("margin-top", 300 + "px");
            $("#fc_options-icons").css("margin-top", 300 + "px");
            $("#pc_options-icons").css("margin-top", 300 + "px");
            $("#u_options-icons").css("margin-top", 300 + "px");
            $("#pi_options-icons").css("margin-top", 300 + "px");
            $("#pl_options-icons").css("margin-top", 300 + "px");
            $("#cp_options-icons").css("margin-top", 300 + "px");
            $("#ep_options-icons").css("margin-top", 300 + "px");
	}else{
			$("#options-icons").css("margin-top", 370 + "px");
            $("#s_options-icons").css("margin-top", 370 + "px");
            $("#i_options-icons").css("margin-top", 370 + "px");
            $("#f_options-icons").css("margin-top", 370 + "px");
            $("#c_options-icons").css("margin-top", 370 + "px");
            $("#j_options-icons").css("margin-top", 370 + "px");
            $("#h_options-icons").css("margin-top", 370 + "px");
            $("#n_options-icons").css("margin-top", 370 + "px");
            $("#p_options-icons").css("margin-top", 370 + "px");
            $("#d_options-icons").css("margin-top", 370 + "px");
            $("#fc_options-icons").css("margin-top", 370 + "px");
            $("#pc_options-icons").css("margin-top", 370 + "px");
            $("#u_options-icons").css("margin-top", 370 + "px");
            $("#pi_options-icons").css("margin-top", 370 + "px");
            $("#pl_options-icons").css("margin-top", 370 + "px");
            $("#cp_options-icons").css("margin-top", 370 + "px");
            $("#ep_options-icons").css("margin-top", 370 + "px");
	}
	// ******* main page
	$("#new_note_menu").css("display", "none");
	$("#agenda_menu").css("display", "none");
	$("#connects_menu").css("display", "none");
	$("#invitations_menu").css("display", "none");
	$("#disconnect_menu").css("display", "none");
	
	$("#previous_menu").css("display", "inline");
	$("#home_menu").css("display", "inline");
	$("#upcoming_menu").css("display", "inline");
	// select connection page
	$("#s_new_note_menu").css("display", "none");
	$("#s_agenda_menu").css("display", "none");
	$("#s_connects_menu").css("display", "none");
	$("#s_invitations_menu").css("display", "none");
	$("#s_disconnect_menu").css("display", "none");
	
	$("#s_previous_menu").css("display", "inline");
	$("#s_home_menu").css("display", "inline");
	$("#s_upcoming_menu").css("display", "inline");
	// instant_connection page
	$("#i_new_note_menu").css("display", "none");
	$("#i_agenda_menu").css("display", "none");
	$("#i_connects_menu").css("display", "none");
	$("#i_invitations_menu").css("display", "none");
	$("#i_disconnect_menu").css("display", "none");
	
	$("#i_previous_menu").css("display", "inline");
	$("#i_home_menu").css("display", "inline");
	$("#i_upcoming_menu").css("display", "inline");
	// future_connection page
	$("#f_new_note_menu").css("display", "none");
	$("#f_agenda_menu").css("display", "none");
	$("#f_connects_menu").css("display", "none");
	$("#f_invitations_menu").css("display", "none");
	$("#f_disconnect_menu").css("display", "none");
	
	$("#f_previous_menu").css("display", "inline");
	$("#f_home_menu").css("display", "inline");
	$("#f_upcoming_menu").css("display", "inline");
	// congratulations_html page
	$("#c_new_note_menu").css("display", "none");
	$("#c_agenda_menu").css("display", "none");
	$("#c_connects_menu").css("display", "none");
	$("#c_invitations_menu").css("display", "none");
	$("#c_disconnect_menu").css("display", "none");
	
	$("#c_previous_menu").css("display", "inline");
	$("#c_home_menu").css("display", "inline");
	$("#c_upcoming_menu").css("display", "inline");
	// join_connection page
	$("#j_new_note_menu").css("display", "none");
	$("#j_agenda_menu").css("display", "none");
	$("#j_connects_menu").css("display", "none");
	$("#j_invitations_menu").css("display", "none");
	$("#j_disconnect_menu").css("display", "none");
	
	$("#j_previous_menu").css("display", "inline");
	$("#j_home_menu").css("display", "inline");
	$("#j_upcoming_menu").css("display", "inline");
	// connected_to_hub page
	$("#h_new_note_menu").css("display", "none");
	$("#h_agenda_menu").css("display", "none");
	$("#h_connects_menu").css("display", "none");
	$("#h_invitations_menu").css("display", "none");
	$("#h_disconnect_menu").css("display", "none");
	
	$("#h_previous_menu").css("display", "inline");
	$("#h_home_menu").css("display", "inline");
	$("#h_upcoming_menu").css("display", "inline");
	// new_note page
	$("#n_new_note_menu").css("display", "none");
	$("#n_agenda_menu").css("display", "none");
	$("#n_connects_menu").css("display", "none");
	$("#n_invitations_menu").css("display", "none");
	$("#n_disconnect_menu").css("display", "none");
	
	$("#n_previous_menu").css("display", "inline");
	$("#n_home_menu").css("display", "inline");
	$("#n_upcoming_menu").css("display", "inline");
	// previous_connections page
	$("#p_new_note_menu").css("display", "none");
	$("#p_agenda_menu").css("display", "none");
	$("#p_connects_menu").css("display", "none");
	$("#p_invitations_menu").css("display", "none");
	$("#p_disconnect_menu").css("display", "none");
	
	$("#p_previous_menu").css("display", "inline");
	$("#p_home_menu").css("display", "inline");
	$("#p_upcoming_menu").css("display", "inline");
	// previous_connections page
	$("#d_new_note_menu").css("display", "none");
	$("#d_agenda_menu").css("display", "none");
	$("#d_connects_menu").css("display", "none");
	$("#d_invitations_menu").css("display", "none");
	$("#d_disconnect_menu").css("display", "none");
	
	$("#d_previous_menu").css("display", "inline");
	$("#d_home_menu").css("display", "inline");
	$("#d_upcoming_menu").css("display", "inline");
	// connection_files page
	$("#fc_new_note_menu").css("display", "none");
	$("#fc_agenda_menu").css("display", "none");
	$("#fc_connects_menu").css("display", "none");
	$("#fc_invitations_menu").css("display", "none");
	$("#fc_disconnect_menu").css("display", "none");
	
	$("#fc_previous_menu").css("display", "inline");
	$("#fc_home_menu").css("display", "inline");
	$("#fc_upcoming_menu").css("display", "inline");
	// participants_for_connection page
	$("#pc_new_note_menu").css("display", "none");
	$("#pc_agenda_menu").css("display", "none");
	$("#pc_connects_menu").css("display", "none");
	$("#pc_invitations_menu").css("display", "none");
	$("#pc_disconnect_menu").css("display", "none");
	
	$("#pc_previous_menu").css("display", "inline");
	$("#pc_home_menu").css("display", "inline");
	$("#pc_upcoming_menu").css("display", "inline");
	// profile_detail page
	$("#pd_new_note_menu").css("display", "none");
	$("#pd_agenda_menu").css("display", "none");
	$("#pd_connects_menu").css("display", "none");
	$("#pd_invitations_menu").css("display", "none");
	$("#pd_disconnect_menu").css("display", "none");
	
	$("#pd_previous_menu").css("display", "inline");
	$("#pd_home_menu").css("display", "inline");
	$("#pd_upcoming_menu").css("display", "inline");
	// upcoming_connections page
	$("#u_new_note_menu").css("display", "none");
	$("#u_agenda_menu").css("display", "none");
	$("#u_connects_menu").css("display", "none");
	$("#u_invitations_menu").css("display", "none");
	$("#u_disconnect_menu").css("display", "none");
	
	$("#u_previous_menu").css("display", "inline");
	$("#u_home_menu").css("display", "inline");
	$("#u_upcoming_menu").css("display", "inline");
	// invitations page
	$("#pi_new_note_menu").css("display", "none");
	$("#pi_agenda_menu").css("display", "none");
	$("#pi_connects_menu").css("display", "none");
	$("#pi_invitations_menu").css("display", "none");
	$("#pi_disconnect_menu").css("display", "none");
	
	$("#pi_previous_menu").css("display", "inline");
	$("#pi_home_menu").css("display", "inline");
	$("#pi_upcoming_menu").css("display", "inline");
	// profile_list page
	$("#pl_new_note_menu").css("display", "none");
	$("#pl_agenda_menu").css("display", "none");
	$("#pl_connects_menu").css("display", "none");
	$("#pl_invitations_menu").css("display", "none");
	$("#pl_disconnect_menu").css("display", "none");
	
	$("#pl_previous_menu").css("display", "inline");
	$("#pl_home_menu").css("display", "inline");
	$("#pl_upcoming_menu").css("display", "inline");
	// create_profile page
	$("#cp_new_note_menu").css("display", "none");
	$("#cp_agenda_menu").css("display", "none");
	$("#cp_connects_menu").css("display", "none");
	$("#cp_invitations_menu").css("display", "none");
	$("#cp_disconnect_menu").css("display", "none");
	
	$("#cp_previous_menu").css("display", "inline");
	$("#cp_home_menu").css("display", "inline");
	$("#cp_upcoming_menu").css("display", "inline");
	// edit_profile page
	$("#ep_new_note_menu").css("display", "none");
	$("#ep_agenda_menu").css("display", "none");
	$("#ep_connects_menu").css("display", "none");
	$("#ep_invitations_menu").css("display", "none");
	$("#ep_disconnect_menu").css("display", "none");
	
	$("#ep_previous_menu").css("display", "inline");
	$("#ep_home_menu").css("display", "inline");
	$("#ep_upcoming_menu").css("display", "inline");
}
function menu_connected()
{
	if($(window).height() < 500){
            $("#options-icons").css("margin-top", 250 + "px");
            $("#s_options-icons").css("margin-top", 250 + "px");
            $("#i_options-icons").css("margin-top", 250 + "px");
            $("#f_options-icons").css("margin-top", 250 + "px");
            $("#c_options-icons").css("margin-top", 250 + "px");
            $("#j_options-icons").css("margin-top", 250 + "px");
            $("#h_options-icons").css("margin-top", 250 + "px");
            $("#n_options-icons").css("margin-top", 250 + "px");
            $("#p_options-icons").css("margin-top", 250 + "px");
            $("#d_options-icons").css("margin-top", 250 + "px");
            $("#fc_options-icons").css("margin-top", 250 + "px");
            $("#pc_options-icons").css("margin-top", 250 + "px");
            $("#u_options-icons").css("margin-top", 250 + "px");
            $("#pi_options-icons").css("margin-top", 250 + "px");
            $("#pl_options-icons").css("margin-top", 250 + "px");
            $("#cp_options-icons").css("margin-top", 250 + "px");
            $("#ep_options-icons").css("margin-top", 250 + "px");
	}else{
			$("#options-icons").css("margin-top", 320 + "px");
            $("#s_options-icons").css("margin-top", 320 + "px");
            $("#i_options-icons").css("margin-top", 320 + "px");
            $("#f_options-icons").css("margin-top", 320 + "px");
            $("#c_options-icons").css("margin-top", 320 + "px");
            $("#j_options-icons").css("margin-top", 320 + "px");
            $("#h_options-icons").css("margin-top", 320 + "px");
            $("#n_options-icons").css("margin-top", 320 + "px");
            $("#p_options-icons").css("margin-top", 320 + "px");
            $("#d_options-icons").css("margin-top", 320 + "px");
            $("#fc_options-icons").css("margin-top", 320 + "px");
            $("#pc_options-icons").css("margin-top", 320 + "px");
            $("#u_options-icons").css("margin-top", 320 + "px");
            $("#pi_options-icons").css("margin-top", 320 + "px");
            $("#pl_options-icons").css("margin-top", 320 + "px");
            $("#cp_options-icons").css("margin-top", 320 + "px");
            $("#ep_options-icons").css("margin-top", 320 + "px");
	}
	
	// ******* main page
	$("#new_note_menu").css("display", "inline");
	$("#agenda_menu").css("display", "inline");
	$("#connects_menu").css("display", "inline");
	$("#invitations_menu").css("display", "inline");
	$("#disconnect_menu").css("display", "inline");
	
	$("#previous_menu").css("display", "none");
	$("#home_menu").css("display", "none");
	$("#upcoming_menu").css("display", "none");
	
	// select connection page
	$("#s_new_note_menu").css("display", "inline");
	$("#s_agenda_menu").css("display", "inline");
	$("#s_connects_menu").css("display", "inline");
	$("#s_invitations_menu").css("display", "inline");
	$("#s_disconnect_menu").css("display", "inline");
	
	$("#s_previous_menu").css("display", "none");
	$("#s_home_menu").css("display", "none");
	$("#s_upcoming_menu").css("display", "none");
	
	// instant_connection page
	$("#i_new_note_menu").css("display", "inline");
	$("#i_agenda_menu").css("display", "inline");
	$("#i_connects_menu").css("display", "inline");
	$("#i_invitations_menu").css("display", "inline");
	$("#i_disconnect_menu").css("display", "inline");
	
	$("#i_previous_menu").css("display", "none");
	$("#i_home_menu").css("display", "none");
	$("#i_upcoming_menu").css("display", "none");
	
	// future_connection page
	$("#f_new_note_menu").css("display", "inline");
	$("#f_agenda_menu").css("display", "inline");
	$("#f_connects_menu").css("display", "inline");
	$("#f_invitations_menu").css("display", "inline");
	$("#f_disconnect_menu").css("display", "inline");
	
	$("#f_previous_menu").css("display", "none");
	$("#f_home_menu").css("display", "none");
	$("#f_upcoming_menu").css("display", "none");
	
	// congratulations_html page
	$("#c_new_note_menu").css("display", "inline");
	$("#c_agenda_menu").css("display", "inline");
	$("#c_connects_menu").css("display", "inline");
	$("#c_invitations_menu").css("display", "inline");
	$("#c_disconnect_menu").css("display", "inline");
	
	$("#c_previous_menu").css("display", "none");
	$("#c_home_menu").css("display", "none");
	$("#c_upcoming_menu").css("display", "none");
	
	// join_connection page
	$("#j_new_note_menu").css("display", "inline");
	$("#j_agenda_menu").css("display", "inline");
	$("#j_connects_menu").css("display", "inline");
	$("#j_invitations_menu").css("display", "inline");
	$("#j_disconnect_menu").css("display", "inline");
	
	$("#j_previous_menu").css("display", "none");
	$("#j_home_menu").css("display", "none");
	$("#j_upcoming_menu").css("display", "none");
	
	// connected_to_hub page
	$("#h_new_note_menu").css("display", "inline");
	$("#h_agenda_menu").css("display", "inline");
	$("#h_connects_menu").css("display", "inline");
	$("#h_invitations_menu").css("display", "inline");
	$("#h_disconnect_menu").css("display", "inline");
	
	$("#h_previous_menu").css("display", "none");
	$("#h_home_menu").css("display", "none");
	$("#h_upcoming_menu").css("display", "none");
	
	// new_note page
	$("#n_new_note_menu").css("display", "inline");
	$("#n_agenda_menu").css("display", "inline");
	$("#n_connects_menu").css("display", "inline");
	$("#n_invitations_menu").css("display", "inline");
	$("#n_disconnect_menu").css("display", "inline");
	
	$("#n_previous_menu").css("display", "none");
	$("#n_home_menu").css("display", "none");
	$("#n_upcoming_menu").css("display", "none");
	
	// previous_connections page
	$("#p_new_note_menu").css("display", "inline");
	$("#p_agenda_menu").css("display", "inline");
	$("#p_connects_menu").css("display", "inline");
	$("#p_invitations_menu").css("display", "inline");
	$("#p_disconnect_menu").css("display", "inline");
	
	$("#p_previous_menu").css("display", "none");
	$("#p_home_menu").css("display", "none");
	$("#p_upcoming_menu").css("display", "none");
	
	// previous_connections page
	$("#d_new_note_menu").css("display", "inline");
	$("#d_agenda_menu").css("display", "inline");
	$("#d_connects_menu").css("display", "inline");
	$("#d_invitations_menu").css("display", "inline");
	$("#d_disconnect_menu").css("display", "inline");
	
	$("#d_previous_menu").css("display", "none");
	$("#d_home_menu").css("display", "none");
	$("#d_upcoming_menu").css("display", "none");
	
	// connection_files page
	$("#fc_new_note_menu").css("display", "inline");
	$("#fc_agenda_menu").css("display", "inline");
	$("#fc_connects_menu").css("display", "inline");
	$("#fc_invitations_menu").css("display", "inline");
	$("#fc_disconnect_menu").css("display", "inline");
	
	$("#fc_previous_menu").css("display", "none");
	$("#fc_home_menu").css("display", "none");
	$("#fc_upcoming_menu").css("display", "none");
	
	// participants_for_connection page
	$("#pc_new_note_menu").css("display", "inline");
	$("#pc_agenda_menu").css("display", "inline");
	$("#pc_connects_menu").css("display", "inline");
	$("#pc_invitations_menu").css("display", "inline");
	$("#pc_disconnect_menu").css("display", "inline");
	
	$("#pc_previous_menu").css("display", "none");
	$("#pc_home_menu").css("display", "none");
	$("#pc_upcoming_menu").css("display", "none");
	
	// profile_detail page
	$("#pd_new_note_menu").css("display", "inline");
	$("#pd_agenda_menu").css("display", "inline");
	$("#pd_connects_menu").css("display", "inline");
	$("#pd_invitations_menu").css("display", "inline");
	$("#pd_disconnect_menu").css("display", "inline");
	
	$("#pd_previous_menu").css("display", "none");
	$("#pd_home_menu").css("display", "none");
	$("#pd_upcoming_menu").css("display", "none");
	
	// upcoming_connections page
	$("#u_new_note_menu").css("display", "inline");
	$("#u_agenda_menu").css("display", "inline");
	$("#u_connects_menu").css("display", "inline");
	$("#u_invitations_menu").css("display", "inline");
	$("#u_disconnect_menu").css("display", "inline");
	
	$("#u_previous_menu").css("display", "none");
	$("#u_home_menu").css("display", "none");
	$("#u_upcoming_menu").css("display", "none");
	
	// invitations page
	$("#pi_new_note_menu").css("display", "inline");
	$("#pi_agenda_menu").css("display", "inline");
	$("#pi_connects_menu").css("display", "inline");
	$("#pi_invitations_menu").css("display", "inline");
	$("#pi_disconnect_menu").css("display", "inline");
	
	$("#pi_previous_menu").css("display", "none");
	$("#pi_home_menu").css("display", "none");
	$("#pi_upcoming_menu").css("display", "none");
	
	// profile_list page
	$("#pl_new_note_menu").css("display", "inline");
	$("#pl_agenda_menu").css("display", "inline");
	$("#pl_connects_menu").css("display", "inline");
	$("#pl_invitations_menu").css("display", "inline");
	$("#pl_disconnect_menu").css("display", "inline");
	
	$("#pl_previous_menu").css("display", "none");
	$("#pl_home_menu").css("display", "none");
	$("#pl_upcoming_menu").css("display", "none");
	
	// create_profile page
	$("#cp_new_note_menu").css("display", "inline");
	$("#cp_agenda_menu").css("display", "inline");
	$("#cp_connects_menu").css("display", "inline");
	$("#cp_invitations_menu").css("display", "inline");
	$("#cp_disconnect_menu").css("display", "inline");
	
	$("#cp_previous_menu").css("display", "none");
	$("#cp_home_menu").css("display", "none");
	$("#cp_upcoming_menu").css("display", "none");
	
	// edit_profile page
	$("#ep_new_note_menu").css("display", "inline");
	$("#ep_agenda_menu").css("display", "inline");
	$("#ep_connects_menu").css("display", "inline");
	$("#ep_invitations_menu").css("display", "inline");
	$("#ep_disconnect_menu").css("display", "inline");
	
	$("#ep_previous_menu").css("display", "none");
	$("#ep_home_menu").css("display", "none");
	$("#ep_upcoming_menu").css("display", "none");
}
function onNewNoteClick(){
    Lungo.Router.section("new_note");
}

function onConnectsClick(){
    Lungo.Router.section("participants");
}

function onAgendaClick(){
    Lungo.Notification.html('<br><h1 style="width:100%;border-bottom:1px solid #999;">Agenda</h1><br><h2 style="min-height:150px; color:#333; padding:10px;width:100%; text-align:left;">'+App.agenda+'</h2><br>', "Close");
}
function onPreviousClick(){
    Lungo.Router.section("previous_connections");
}
function onUpcomingClick(){
	//Lungo.Router.section("upcoming_connections");
}
function onInvitationsClick(){
	Lungo.Router.section("invitations");
}
function onEditProfileClick(){
	Lungo.Router.section("profile_list");
}
function onDisconnectClick(){
	Lungo.Router.section("main");
	menu_disconnected();
    App.storedPasscode = "";
    App.api().disconnectConnection();
}