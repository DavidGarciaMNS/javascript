describe('prueba', function(){
		var x = 2;
		var y = 3;


	it("suma 2 + 3", function() {
        expect(Suma(x,y)).toEqual(6);
    });

    it("resta 2 - 3", function(){
    	expect(Resta(x,y)).toEqual(-1);
    });

    it("multiplica 2*3", function(){
    	expect(Multiplicacion(x,y)).toEqual(5);
    });
});