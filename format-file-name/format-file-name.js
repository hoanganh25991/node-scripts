var formatFilename = function (s){
	//trim s, remove space begin&end
	s = s.trim();

	//turn into -
	s = s.replace(/(\s|_|\+)+/g, '-');

	//only one - form multiple ---
	s = s.replace(/-+/g, '-');

	//convert to lower
	s = s.toLowerCase();

	return s;
};

module.exports = formatFilename;