
var response = {};

response.error = function (res,error,msg){

	res.json({
		success:false,
		error:error,
		msg:msg
	});

};

response.success = function(res,result){
	res.json({
		success:true,
		data:result
	});
};

module.exports = response;