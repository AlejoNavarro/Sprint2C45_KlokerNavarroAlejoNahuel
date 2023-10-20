/* Este codigo permite hacer visible o ocultar el menu en dispositivos moviles o resoluciones menores a 768px */

const nav = document.querySelector("#nav"); /* Constante nav asignada a mi ID nav del archivo index */
const abrirm = document.querySelector("#abrirm"); /* Constante abrirm asignada a mi ID abrirm del archivo index (boton para abrir menu*/
const cerrarm =document.querySelector("#cerrarm"); /* Constante cerrarm asignada a mi ID cerrarm del archivo index (boton para cerrar menu*/

abrirm.addEventListener("click", () => {   /* La funcion addeventlistener registra un evento o accion a un objeto, en este caso un click. Cuando el usuario hace click se ejecuta la funcion
                                            acontinuacion de la flecha =>, la cual hace el menu visible en dispositivos moviles 
                                            o resoluciones menores a 768px */
    
    nav.classList.add("visible");
})

cerrarm.addEventListener("click", () => {  /* Igual que lo anteriormente mencionado, se agrega un addeventlistener a "cerrarm" 
                                            lo cual hace que el usuario al hacer click, elimina la clase "visible" a nav(menu) lo cual oculta el menu. */
    nav.classList.remove("visible");
})
