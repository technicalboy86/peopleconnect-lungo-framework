App.db = function() {
	return {
		// DB Stuff
		shortname: 'peopleConnect', 
		version: '1.1', 
		displayname: 'agg', 
		maxsize: 10*1024*1024,
		db: {},

		open: function() {
			this.db = openDatabase(this.shortname, "", this.displayname, this.maxsize);
		},

		executeQuery: function(q, p) {
			this.db.transaction(
				function(transaction) {
					transaction.executeSql(q, p, 
						function(transaction, results) {
							//console.log(results);
						}, 
						function(transaction, results) {
							//console.log(results);
						}
					);
				}
			);
		}
	}
}
