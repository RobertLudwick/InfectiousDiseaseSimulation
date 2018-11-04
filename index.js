function Autorun() {
    var imunity = document.getElementById("initialImmunity").value;
    var virulence = document.getElementById("Virulence").value;
    var duration = document.getElementById("infectionDuration").value;
    var transmission = document.getElementById("TransRate").value;
   	var data = new model(imunity, virulence, duration, transmission)
   	//document.getElementById("demo").innerHTML = transmission;
   	Table(data)
	//document.getElementById("demo").innerHTML = transmission;
	}
	
function Table(data) {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.getElementById("tableOut").appendChild(x);
	for (i = 0; i < 30; i++) {
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
    }
}

function Clear(data) {
	document.getElementById("initialImmunity").value = "";
	document.getElementById("Virulence").value = "";
	document.getElementById("infectionDuration").value = "";
	document.getElementById("TransRate").value = "";
}

function gatherData() {
	var imunity = document.getElementById("initialImmunity").value;
    var virulence = document.getElementById("Virulence").value;
	var duration = document.getElementById("infectionDuration").value;
    var transmission = document.getElementById("TransRate").value;
	if (imunity > 100 || imunity < 0 || imunity == "") {
		document.getElementById("demo").innerHTML = "Error: incorrect imunity value entered";
		return true
	}
	if (virulence > 0.75 || virulence < 0 || virulence == "") {
		document.getElementById("demo").innerHTML = "Error: incorrect virulence value entered";
		return true
	}
	if (duration > 20 || duration < 1 || duration == "") {
		document.getElementById("demo").innerHTML = "Error: incorrect Duration of infection value entered";
		return true
	}
	if (transmission > 10.0 || transmission < 0.1 || transmission == "") {
		document.getElementById("demo").innerHTML = "Error: incorrect Rate of Transmission value entered";
		return true
	}
	return false
	
}

 function generateData() {
                var running = gatherData()
                if (running == true){
                	return "something"; //stop here
                }
                var imunity = document.getElementById("initialImmunity").value;
    			var virulence = document.getElementById("Virulence").value;
    			var duration = document.getElementById("infectionDuration").value;
    			var transmission = document.getElementById("TransRate").value;
                var data = new model(imunity, virulence, duration, transmission)
                var table  = document.getElementById("myTable")
                for (day in data.days) {
                    var row = table.insertRow(-1);

                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(1)
                    var cell3 = row.insertCell(2)
                    var cell4 = row.insertCell(3)

                    cell1.innerHTML = data.days[day]
                    cell2.innerHTML = data.sick[day]
                    cell3.innerHTML = data.immune[day]
                    cell4.innerHTML = data.population[day]
                }
            }

function generateDatadaybyday() {
                var running = gatherData()
                if (running == true){
                	return "something"; //stop here
                }
                var imunity = document.getElementById("initialImmunity").value;
    			var virulence = document.getElementById("Virulence").value;
    			var duration = document.getElementById("infectionDuration").value;
    			var transmission = document.getElementById("TransRate").value;
                var data = new model(imunity, virulence, duration, transmission)
                var table  = document.getElementById("myTable")
                for (day in data.days) {
                    var row = table.insertRow(-1);

                    var cell1 = row.insertCell(0)
                    var cell2 = row.insertCell(1)
                    var cell3 = row.insertCell(2)
                    var cell4 = row.insertCell(3)

                    cell1.innerHTML = data.days[day]
                    cell2.innerHTML = data.sick[day]
                    cell3.innerHTML = data.immune[day]
                    cell4.innerHTML = data.population[day]
                }
            }
