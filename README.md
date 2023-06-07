# front_challege

Prueba tecnica para puesto Front End.

Realizar el simulador que se encuentra en el portal de morgana.mx las reglas de dicho simulador son las siguientes.

-------------------------------------------- REGLAS ---------------------------------------------------------------

1. Precio del inmueble minimo de 500,000.
2. Enganche de 10% al 90% (este se debe de calcular y mostrar en el input, de igual manera si ingresamos una cantidad debe de calcular el porcentaje) 
3. El plazo seleccionado por default es de 15 años.
4. Tasa mostrada del 10.5% pero para calculos se usara el valor de 0.0098.


----------------------------------- FORMULA PARA PAGO MENSUAL -----------------------------------------------------

Pago mensual = (monto_credito * tasa_mensual) / 1 ((1 + tasa_mensual) ^ -plazo_meses)

monto_credito = monto del credito pedido;
tasa_mensual = valor proporcionado en las reglas;
plazo_meses = numero de meses del periodo del prestamo;


-------------------------------------- CRITERIOS DE ACEPTACION ----------------------------------------------------

- El diseño debera de ser igual al simulador que se muestra en el portal de morgana.
- Debera de tener las mismas validaciones y comportamiento.
- Responsivo solo para mobile.
- Los datos obtenidos se deberan de mostrar en una pagina nueva.
- La pagina es con diseño libre, tener en cuenta la linea de diseño de morgana
- Se tomara en cuenta el tiempo de desarrollo.


Por ultimo realizar una rama nueva y subir tus cambios a este repositorio.






