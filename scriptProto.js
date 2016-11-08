document.getElementById ("convertir").addEventListener("click",new Conversion("icsData","jsonData"));


function Conversion(source,cible) {
	this.source = document.getElementById(source);
	this.cible = document.getElementById(cible);
	this.creneaux=new Array;
};

Conversion.prototype.handleEvent = function (event) {
	this.demarrer();
};

Conversion.prototype.demarrer = function() {
	var icsData = this.source.value;
	this.conversion(icsData);
	this.cible.value = JSON.stringify(this.creneaux);
};

Conversion.prototype.conversion = function (icsData) {
	var icsData_inArray = icsData.split("BEGIN:VEVENT");
	icsData_inArray.shift();
	for(var index = 0;index  < icsData_inArray.length;index ++)
	{
		var creneau = new Creneau();
		var champs = icsData_inArray[index].split(String.fromCharCode(10));
		champs.shift();
		for(var indexChamps=0;indexChamps < champs.length;indexChamps++)
		{
			this.conversionChamp(creneau,champs[indexChamps]);
		}
		this.creneaux.push(creneau);
	}
};

Conversion.prototype.conversionChamp = function(creneau, champActuel) {
	if(champActuel.indexOf(":")!=-1){
		var couple = champActuel.split(":");
		if(couple[0].startsWith("DTSTART")){
			creneau.debut=couple[1];
		}else if(couple[0].startsWith("DTEND")){
			creneau.fin=couple[1];
		}else if(couple[0].startsWith("SUMMARY")){
			creneau.resume=couple[1];
		}else if(couple[0].startsWith("LOCATION")){
			creneau.lieu=couple[1];
		}
	}
};