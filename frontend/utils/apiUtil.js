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
	},
	apiCSRFService(options, csrf){
		$.ajax({
			method: options["method"] || "GET",
			url: options["url"],
			data: options["data"] || {},
			headers: {
				'X-CSRF-TOKEN': csrf
			},
			success: function(data){
				ServerActions[options["success"]](data);
			}
		})
	}

}

