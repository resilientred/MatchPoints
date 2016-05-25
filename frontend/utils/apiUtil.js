import ServerActions from '../actions/serverActions';

export default {
	apiService(options){
		$.ajax({
			method: options["method"] || "GET",
			url: options["url"],
			data: options["data"] || {},
			success: function(data){
				debugger;
				ServerActions[options["success"]](data);
			}
		})
	}
}

