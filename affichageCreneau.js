function afficher(tab){
	triT(tab);
	for (var i = 1; i <tab.length; i++) {
		//console.log(tab[i]["debut"]);
		//creerElement(tab[i]["debut"],tab[i]["resume"],tab[i]["lieu"]);
		placement(tab[i]);
	}
}

function creerElement(heure,description,lieu,div){
	divConteneur = document.createElement("div");
	divConteneur.className = "panel panel-default";
	//divConteneur.setAttribute("ondrop","drop(event)");
	//divConteneur.setAttribute("ondragover","allowDrop(event)");
	//divConteneur.setAttribute("draggable","true");
	//divConteneur.setAttribute("ondragstart","drag(event)");
	//divConteneur.setAttribute("id",description);

	divHeader = document.createElement("div");
	divHeader.className = "panel-heading";
	divHeader.innerHTML=heure;

	divBody = document.createElement("div");
	divBody.className = "panel-body";
	divBody.setAttribute("ondrop","drop(event)");
	divBody.setAttribute("ondragover","allowDrop(event)");
	divBody.setAttribute("draggable","true");
	divBody.setAttribute("ondragstart","drag(event)");
	divBody.setAttribute("id",description);
	divBody.setAttribute("ondragover","dragOver(event)");
	divBody.setAttribute("ondragleave","dragLeave(event)");
	divBody.innerHTML=description;

	divFooter = document.createElement("div");
	divFooter.className = "panel-footer";
	divFooter.innerHTML=lieu;

	divConteneur.appendChild(divHeader);
	divConteneur.appendChild(divBody);
	divConteneur.appendChild(divFooter);

	div.appendChild(divConteneur);

	document.body.appendChild(div);

}

function triT(tab){
	var ch=true;
	while(ch == true){
		ch=false;
		for(var i = 1; i <tab.length-1; i++) {
			//console.log(tab[i]);
			//console.log(tri(tab[i].debut,tab[i+1].debut));
			if(tri(tab[i].debut,tab[i+1].debut) >0)
			{
				ch = true;
				var tmp = tab[i];
				tab[i] = tab[i+1];
				tab[i+1] = tmp;
			}
		}
	}
}

function tri(d1,d2){
	//console.log(d1+"/"+d2)
	return new Date(d1).getTime() - new Date(d2).getTime()
}

function placement(objet){
	var date = objet.debut.substr(0,15);
	console.log(date);
	if(document.getElementById(date) == null)
	{
		divJour = document.createElement("div");
		divJour.id = date;
		divJour.className = "col-md-2";
		divJour.innerHTML = "<h3>"+date+"</h3>";
		creerElement(objet["debut"],objet["resume"],objet["lieu"],divJour);
	}
	else{
		creerElement(objet["debut"],objet["resume"],objet["lieu"],document.getElementById(date));
	}

}