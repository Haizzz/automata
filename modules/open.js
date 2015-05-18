var shell = require('shell');
function openMod(string) {
	if (string.indexOf("usual") >= 0) {
		shell.openExternal('https://www.facebook.com/?_rdr');
		shell.openExternal('https://www.youtube.com/');
	}
}