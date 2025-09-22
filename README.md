# 📑 Proyecto: Juego del Amigo Secreto

Este repositorio contiene una implementación sencilla del clásico juego **“Amigo Secreto”**, desarrollada en **JavaScript, HTML y CSS**.  
El objetivo es mostrar de forma práctica cómo trabajar con **arrays** y la **manipulación del DOM** para crear una aplicación interactiva.

---

## 🎯 Objetivo del proyecto

El propósito principal de este proyecto es:

- Practicar el uso de **funciones en JavaScript**.
- Comprender cómo **actualizar dinámicamente la interfaz** a través del DOM.
- Aplicar **Math.random()** y **Math.floor()** para generar selecciones aleatorias.
- Construir un flujo simple de validación de datos de usuario.

---

## 🛠️ Funcionalidades implementadas

1. **Agregar amigos a una lista**
   - El usuario introduce un nombre en un campo de texto.
   - Se valida que el campo no esté vacío.
   - El nombre se agrega a un array y se refleja inmediatamente en la interfaz como una lista `<ul>`.

2. **Limpieza del campo de entrada**
   - Tras cada inserción, el input se reinicia para facilitar la entrada de un nuevo nombre.

3. **Visualización dinámica**
   - Todos los nombres agregados se muestran en pantalla en tiempo real.

4. **Sorteo del amigo secreto**
   - Se selecciona un nombre de la lista de forma aleatoria.
   - El resultado se muestra en un elemento específico de la interfaz.

---

## 📂 Estructura de archivos

```
📦 amigo-secreto
 ┣ 📜 index.html   → Estructura principal de la interfaz
 ┣ 📜 style.css    → Estilos personalizados (opcional)
 ┣ 📜 app.js       → Lógica de la aplicación
 ┗ 📜 README.md    → Documentación del proyecto
```

---

## 🖥️ Uso del programa

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/amigo-secreto.git
   ```
2. Abrir `index.html` en un navegador web.
3. Ingresar los nombres en el campo de texto y presionar **Añadir**.
4. Cuando la lista esté completa, presionar **Sortear amigo** para obtener el resultado.

---

## 📌 Fragmento clave del código

```javascript
function sortearAmigo() {
    if (amigos.length == 0){
        alert("No se ha ingresado ningún nombre");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML =
        `El amigo secreto es: ${amigoSorteado}`;
}
```

Este fragmento combina:  
- Validación de entrada.  
- Selección aleatoria de un elemento del array.  
- Actualización dinámica del contenido en el DOM.

---

## 🔍 Posibles extensiones

- Evitar nombres duplicados.  
- Sortear todos los amigos sin repetición.  
- Añadir animaciones o efectos visuales durante el sorteo.  
- Guardar la lista en **localStorage** para mantenerla entre sesiones.

---

## 📖 Conclusión

El proyecto demuestra cómo conceptos básicos de **JavaScript y DOM** permiten construir una aplicación interactiva y funcional, que puede ser la base para proyectos más avanzados o personalizados.

