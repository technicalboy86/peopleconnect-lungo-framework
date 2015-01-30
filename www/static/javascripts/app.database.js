// Class for INSERT UPDATE DELETE to local database.
App.database = {
	// DB Stuff
	shortname: 'peopleConnect',
	version: '1.1', 
	displayname: 'peopleConnect', 
	maxsize: 10*1024*1024,
	db: {},

	open: function() {
		this.db = openDatabase(this.shortname, "", this.displayname, this.maxsize);
		this.createTables();
	},

	createTables: function() {
		console.log("Trying to create table.");

		var user_definition = "" + 
			"CREATE TABLE IF NOT EXISTS `profile`(" + 
				"`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " + 
				"`profile_id` INTEGER UNIQUE NULL , " +
				"`icon` TEXT NOT NULL, " +
				"`profile_name` TEXT NOT NULL, " +
				"`display_name` TEXT NOT NULL, " +
				"`full_name` TEXT NOT NULL, " + 
				"`profile_type` TEXT NOT NULL, " +
				"`phone_number` TEXT NOT NULL, " + 
				"`email_address` TEXT NOT NULL " + 
			");";

		this.db.transaction(
			function(transaction) {
				transaction.executeSql(user_definition, [], App.database.nullDataHandler, App.database.errorHandler);
			}
		);
	},

	update_profile : function (profile_id, icon, profile_name, display_name, full_name, profile_type, phone_number, email_address){
		var query = "UPDATE `profile` SET 'icon'='" + icon + "', `profile_name`='" + profile_name + "' ,`email_address`='" + email_address + "', `display_name`='" + display_name + "', `full_name`='" + full_name + "', `profile_type`='" + profile_type + "', `phone_number`='" + phone_number + "' WHERE `profile_id`="+profile_id;
		console.log(query);
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(query, [], App.database.nullDataHandler, App.database.errorHandler);
			}
		);
	},
	
	addProfile: function(d) {
		if (d.profile_id != undefined) {
			var data_array = [d.profile_id, d.icon, d.profile_name, d.display_name, d.full_name, d.profile_type, d.phone_number, d.email_address];
			var query = "INSERT OR IGNORE INTO `profile` (`profile_id`, `icon`, `profile_name`, 'display_name', 'full_name',`profile_type`, `phone_number`, `email_address`) \
					VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
		} else {
			var data_array = [d.profile_id, d.icon, d.profile_name, d.display_name, d.full_name, d.profile_type, d.phone_number, d.email_address];
			var query = "INSERT INTO `profile` (`profile_id`, `icon`, `profile_name`, 'display_name', 'full_name', `profile_type`, `phone_number`, `email_address`) \
					VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
		}		
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(query, data_array, App.database.handleInsertedProfile, App.database.errorHandler);
			}
		);
	},
	handleInsertedProfile:function(transaction, results){
		
	},
	handleGetProfiles:function(transaction, results){
		//console.log(results.rows.length);
		if (results.rows.length == 0) {
			Lungo.Router.section("profile_list");
		}else{
			
			//for (i=0; i<results.rows.length;i++)
			//{
				console.log(results.rows.item(0));
				App.selectedProfileName = results.rows.item(0).profile_name;
			//}
		}
	},
	getProfiles: function() {
		//Query DB for logged in user.
		var query = "SELECT * FROM `profile`";
		
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(query, [], App.database.handleGetProfiles, App.database.errorHandler);
			}
		);
	},
	destroyDB: function(reason) {
		var command;
		switch (reason) {
			case "version":
			case "logout":
				command = "DROP TABLE";
				break;
			//case "logout":
			default:
				command = "DELETE FROM";
				break;
		}
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(command + " `profile`", [], App.database.nullDataHandler, App.database.errorHandler);
			}
		);

	},
	errorHandler: function(transaction, error) {
		// error.message is a human-readable string.
		// error.code is a numeric error code
		console.log(''+error.message+' (Code '+error.code+')');

		return false;
	},

	nullDataHandler: function(transaction, results) {
		// Do nothing.
		console.log(results);
		Lungo.Notification.hide();
	},

	// When passed as the error handler, this silently causes a transaction to fail.
	killTransaction: function(transaction, error) {
		return true;
	}
}
