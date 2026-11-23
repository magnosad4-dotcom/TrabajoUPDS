const btnTema = document.getElementById("btnTema");
const btnRegistrar = document.getElementById("btnRegistrar");
const estadoDemo = document.getElementById("estadoDemo");

let acciones = 0;

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const esOscuro = document.body.classList.contains("dark-theme");
  btnTema.textContent = esOscuro ? "Modo claro" : "Modo oscuro";
});

btnRegistrar.addEventListener("click", () => {
  acciones += 1;
  const etiqueta = acciones === 1 ? "acción registrada" : "acciones registradas";
  estadoDemo.textContent = `Estado actual: ${acciones} ${etiqueta}.`;
});