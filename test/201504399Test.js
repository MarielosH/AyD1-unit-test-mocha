const assert = require('chai').assert;
const app = require('../201504399');

EnviaDatosResult = app.EnviarMisDatos(true);
TriangulosResult = app.Triangulos("isósceles");
DivResult = app.Division(20,2);
MulResult = app.Multiplicacion(10,3);
ModuloResult = app.Modulo(20,2);

describe('201504399', function(){

  //------------------------------------------------------------
  describe('EnviarMisDatos()', function(){
    it('El resultado debe ser string', function(){
      assert.typeOf(EnviaDatosResult, 'string');
    });
  });
  //------------------------------------------------------------
  describe('Triangulos()', function(){
    it('El resultado debe ser string', function(){
      assert.typeOf(TriangulosResult, 'string');
    });
  });
  //------------------------------------------------------------
  describe('Division()', function(){
    it('addNumbers should be above 35', function(){
      assert.isAbove(DivResult, 35);
    });
  });
   //------------------------------------------------------------
   describe('Multiplicacion()', function(){
    it('addNumbers should be above 25', function(){
      assert.isAbove(DivResult, 25);
    });
  });
   //------------------------------------------------------------
   describe('Modulo()', function(){
    it('addNumbers should be above -1', function(){
      assert.isAbove(DivResult, -1);
    });
  });
   //------------------------------------------------------------
});