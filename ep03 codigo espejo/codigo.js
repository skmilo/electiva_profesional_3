window.onload=function () {
	
	document.getElementById("Elboton").addEventListener("click", function()
	{

		var captura = document.getElementById('caja1').value;
		captura = captura.toLowerCase();
		var guarda = [""];
		var Pfinal = [];
		

		for(var i = 0 ; i < captura.length; i++)
		{
			guarda[i] = captura.charCodeAt(i);
		}

		for(var j=0; j<guarda.length; j++)
		{
			Pfinal[j] = (122-guarda[j])+97;
			
			Pfinal[j] = String.fromCharCode(Pfinal[j]);
		}
		Pfinal = Pfinal.join("");	
		document.getElementById('caja2').value = Pfinal;

	});	
	document.getElementById("Elboton2").addEventListener("click", function()
	{
		var capturac3 = document.getElementById('caja2').value;
		var guarda1 =[""]
		var pdesci = [];

		for(var n = 0 ; n < capturac3.length; n++)
		{
			guarda1[n] = capturac3.charCodeAt(n);
		} //console.log(guarda1);
		for(var a=0; a<guarda1.length; a++)
		{
			pdesci[a] = (97-guarda1[a])+122;
			
			pdesci[a] = String.fromCharCode(pdesci[a]);
		}
		//console.log(pdesci);
		pdesci = pdesci.join("");
	document.getElementById('caja2').value = pdesci;
	});
}
