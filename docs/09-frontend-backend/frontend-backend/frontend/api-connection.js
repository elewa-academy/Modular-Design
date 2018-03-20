var api_connection = {
	datAxios: {},
	get: function(path) {
		path = path.join("/");
		this.datAxios.get(path) 
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	},
	post: function(path, _note) {
		path = path.join("/");
		this.datAxios.post(path, {
				note: _note
			}) 
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	},
	initialize: function() {	
		this.datAxios = axios.create({
		  baseURL: 'https://polar-chamber-20771.herokuapp.com/notes'
		});
	}
};








