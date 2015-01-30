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
			"CREATE TABLE IF NOT EXISTS `user`(" + 
				"`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " + 
				"`user_id` INTEGER NOT NULL DEFAULT 0 , " +
				"`user_name` TEXT NOT NULL, " +
				"`email` TEXT NOT NULL, " + 
				"`password` TEXT NOT NULL, " + 
				"`current_user` INTEGER NOT NULL DEFAULT 0 " + 
			");";

		this.db.transaction(
			function(transaction) {
				transaction.executeSql(user_definition, [], App.database.nullDataHandler, App.database.errorHandler);
			}
		);
	},
	update_password : function (userId, userpassword){
		var query = "UPDATE `user` SET 'password'='" + userpassword + "' WHERE `user_id`="+userId;
		//console.log(query);
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(query, [], App.database.nullDataHandler, App.database.errorHandler);
			}
		);
	},
	update_account : function (userId, username, useremail){
		var query = "UPDATE `user` SET 'email'='" + useremail + "', `user_name`='" + username + "' WHERE `user_id`="+userId;
		//console.log(query);
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(query, [], App.database.nullDataHandler, App.database.errorHandler);
			}
		);
	},
	
	addUser: function(d) {
		if(d.current_user == undefined || d.current_user == null)
			d.current_user = 0;

		if (d.user_id != undefined) {
			var data_array = [d.user_id, d.email, d.name, d.password, d.current_user];
			var query = "INSERT OR IGNORE INTO `user` (`user_id`, `email`, `user_name`, 'password', `current_user`) \
					VALUES (?, ?, ?, ?, ?);";
		} else {
			var data_array = [d.user_id, d.email, d.name, d.password,d.current_user];
			var query = "INSERT INTO `user` (`user_id`, `email`, `user_name`, 'password',`current_user`) \
					VALUES (?, ?, ?, ?, ?);";
		}		
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(query, data_array, App.database.handleInsertedUser, App.database.errorHandler);
			}
		);
	},
	handleInsertedUser:function(){
        
	},
	getCurrentUser: function(ref) {
		//Query DB for logged in user.
		var query = "SELECT * FROM `user`";
		
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(query, [], ref.handleGetUserDB, App.database.errorHandler);
			}
		);
	},
	destroyDB: function(reason, ref) {
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
				transaction.executeSql(command + " `user`", [], App.database.nullDataHandler, App.database.errorHandler);
			}
		);
		if (reason != undefined && reason == 'logout') {
			window.setTimeout(function() {
				Lungo.Notification.show(
					"check",                //Icon
					"Success",              //Title
					3,                      //Seconds
					function() {
						window.location.reload();
					}
				);
			}, 1000);
		}
	},
	errorHandler: function(transaction, error) {
		// error.message is a human-readable string.
		// error.code is a numeric error code
		console.log('Oops.  Error was '+error.message+' (Code '+error.code+')');

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
