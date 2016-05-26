const ServerActions = require('../actions/serverActions');

export default {
	apiService(options){
		$.ajax({
			method: options["method"] || "GET",
			url: options["url"],
			data: options["data"] || {},
			success: function(data){
				ServerActions[options["success"]](data);
			}
		})
	}
}

