# Proyecto React-Redux Strava

Aquí dejo la actividad planteada para la candidatura en Vert.run 

Para que la página pueda funcionar en todo momento cree una función autenticadora que en cada request actualiza el token de acceso.


# Algunas Aclaraciones 

Por falta de tiempo no he podido llegar a dejarla funcionando como a mi me gustaría.

El las actividades por meses tuve que elegir en mi perfil tres meses consecutivos en los que hice actividad para poder mostrarlos sin problema (en el codigo de './src/components/Months.jsx' está especificado el cambio que debería hacerse para que muestre los estrictamente los meses anteriores). Adicional a esto debería crear un template vacio de las actividades mensuales para mostrarlo en caso de no tener información.

En el mismo archivo hay repetición de codigo en lo que se renderiza, me di cuenta como podría solucionarlo ya cuando empecé la parte de CSS y ya no hago tiempo de cambiarlo. Igualmente dejo mi idea aquí por si sirve de algo. Se me ocurre que podría guardar los meses anteriores dentro de un array y ya sí, con ese array hacer un mapeo de cada uno de los meses y mostrarlos, como está hecho con las 'actividades recientes'.


Hay cosas que pulir. El proyecto no está 100% terminado.



