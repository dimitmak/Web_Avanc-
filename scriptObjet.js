
Conversion = {

	_aAfficher : "",

	ihmConversion : function ()
	{
			var icsData = document.getElementById("icsData").value;
			this.conversion(icsData);
			document.getElementById("jsonData").value=this.aAfficher;
	},

	handleEvent : function (event)
	{
		this.ihmConversion();
	},

	conversion : function (icsData)
	{
		var tab =this.decoupe(icsData);
		this.constructionResult(tab);

	},

	decoupe : function (icsData)
	{
		tab = this.decoupBegin(icsData);
		for(var i =0;i<tab.length;i++)
		{
			tab[i] = tab[i].split(String.fromCharCode(10));
		}
		return tab;
	},

	decoupBegin : function(icsData)
	{
		return icsData.split("BEGIN:VEVENT");
	},

	constructionResult : function(tab)
	{
		for(var i =0;i<tab.length;i++)
		{
			this.aAfficher +="{\n";
			for(var j =0;j<tab[i].length;j++)
			{

				var tmp = tab[i][j].split(":");
				if(tmp.length>1)
				{
					tab[i][j]=tmp[0]+":'"+tmp[1]+"'";
					this.aAfficher+=tab[i][j]+"\n";
				}
			}
			this.aAfficher+="}\n";
		}
	},



}
document.getElementById ("convertir").addEventListener("click",Conversion);
