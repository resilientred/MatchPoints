import ServerActions from '../actions/serverActions';

class ApiUtil {
	apiService = function(options){
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

export default ApiUtil;