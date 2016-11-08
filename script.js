
document.getElementById ("convertir").addEventListener("click",function (evenement) { 
	//alert ("bonjour");
	texte = document.getElementById("icsData").value;
	tab = texte.split("BEGIN:VEVENT");		
	for(var i =0;i<tab.length;i++)
	{
		tab[i] = tab[i].split(String.fromCharCode(10));
	}
	result="";
	for(var i =0;i<tab.length;i++)
	{
		result +="{\n";
		for(var j =0;j<tab[i].length;j++)
		{

			var tmp = tab[i][j].split(":");
			if(tmp.length>1)
			{
				tab[i][j]=tmp[0]+":'"+tmp[1]+"'";
				result+=tab[i][j]+"\n";
			}
		}
		result+="}\n";
	}
		texte = document.getElementById("jsonData").value=result;

 }
);



