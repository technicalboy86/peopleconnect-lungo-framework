App.note = function() {
	return {
        getNoteList:function(){
            App.api().getNotes(App.host_id);
        },
        addNote:function(){
            var note = $("#m_note_text").val();
            if(note == "")
            {
            	Lungo.Notification.error("Please input new note.", "", "", 2);
            	return;
            }
            
            App.api().addNote(App.host_id, App.user_id, App.my_profile.details.id, note);
            App.api().getNotes(App.host_id);
        },
        handleNotes:function(data){
        	$("#m_notes_list").empty();
        	for(var index in data.notes)
			{
				var mNote = data.notes[index];

				var html = '<li>';
                html += '<div class="on-right">'+mNote.profilename+'&nbsp;&nbsp;&nbsp;</div>';
				html += '<strong>'+mNote.note+'</strong>';
				html += '<small>'+mNote.create_date+'</small>';
				html += '</li>';
				
				$("#m_notes_list").append(html);
			}
			
        },
	};
};

