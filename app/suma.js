
	var Suma = function (num1, num2){
		return num1 + num2;
	};

	var Resta = function (num1, num2){
		return Suma(num1,-num2);
	};

	var Multiplicacion = function(num1,num2){
		var resul;
		for (var i = 1; i< num2; i++){
			resul = num1;
			resul = Suma(resul, Suma(resul,num1));
		}	
		return resul;		
	};

	var Division = function(num1,num2){


	}
