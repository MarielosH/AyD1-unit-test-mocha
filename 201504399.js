module.exports = {
    
    Triangulos: function(tipoTriangulo){
        if(tipoTriangulo=="isósceles"){
            return "Dos lados iguales";
        }else if(tipoTriangulo=="equilátero"){
            return "Tres lados iguales";
        }else if(tipoTriangulo=="escaleno"){
            return "Tres lados desiguales";
        }
      return value1 + value2;
    },
    EnviarMisDatos: function(Envia){
        if(Envia){
            return "201504399, María de Los Angeles Herrera Sumalé";
        }else{
            return "No hay datos"
        }  
      }
    , Division:  function(num1, num2){
        if(num2!=0){
            return num1/num2;
        }else{
            return null;
        }  
      }
      , Multiplicacion:  function(num1, num2){
        return num1 * num2; 
      }
      , Modulo: function(num1, num2){
        return num1 % num2; 
      }
  
  }
  