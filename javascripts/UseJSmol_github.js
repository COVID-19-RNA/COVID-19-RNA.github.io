var jmolApplet0;
var jmolApplet1;
jmol_isReady = function(applet) {
	Jmol._getElement(applet, "appletdiv").style.border="1px solid white"
}
var Info = {
	width: 400,
	height: 400,
	debug: true,
	color: "white",
	j2sPath: "/javascripts/j2s",
	readyFunction: jmol_isReady
}

function toggle( layerName ) {
	document.getElementById("layer_pdb").style.display = "none";
	document.getElementById("layer_dp").style.display = "none";
	document.getElementById(layerName).style.display = "block";
} 
