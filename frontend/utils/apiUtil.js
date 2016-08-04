const ServerActions = require('../actions/serverActions');

const getCSRF = () => {
	const els = document.getElementsByTagName("meta");
	for (let i = 0; i < els.length; i++) {
		if (els[i].getAttribute("name") === "csrf-token") {
			return els[i].getAttribute("content");
		}
	}
}

export default {
	apiService(options){
		$.ajax({
			method: options["method"] || "GET",
			url: options["url"],
			data: options["data"] || {},
			success: function(data){
				ServerActions[options["success"]](data);
			},
			error: (error) => {
				console.log(error);
			}
		})
	},
	apiCSRFService(options){
		$.ajax({
			method: options["method"] || "GET",
			url: options["url"],
			data: options["data"] || {},
			headers: {
				'X-CSRF-TOKEN': getCSRF()
			},
			success: function(data){
				ServerActions[options["success"]](data);
			}
		})
	}

}

