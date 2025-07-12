
# 💬 Botón flotante de WhatsApp (React + Tailwind + Framer Motion)

Este es un componente reutilizable que permite agregar un botón flotante de WhatsApp en cualquier sitio hecho con React.

👉 Perfecto para sitios de venta, portfolios, páginas de servicios o cualquier proyecto que necesite contacto rápido por WhatsApp.

---

## 🚀 ¿Qué incluye?

- ✅ Ícono oficial de WhatsApp (`react-icons`)
- ✅ Animaciones suaves con `framer-motion`
- ✅ Estilos listos con `Tailwind CSS`
- ✅ Totalmente responsive y reutilizable

---

## 📦 Instalación

1. Cloná este repositorio o copiá el archivo `WhatsAppButton.tsx` en tu proyecto.

2. Instalá las dependencias necesarias:

```bash
npm install react-icons framer-motion
Usá el componente en tu app:

tsx
Copiar
Editar
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      {/* Tu contenido */}
      <WhatsAppButton />
    </>
  );
}
🧠 Cómo funciona
Al hacer clic, abre una conversación en WhatsApp con un mensaje predefinido:

tsx
Copiar
Editar
window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(message)}`, '_blank');
✏️ Reemplazá el número por el tuyo y editá el mensaje si querés.

🎨 Personalización
Cambiá los colores de fondo con clases de Tailwind:
bg-green-500 hover:bg-green-600 → podés usar los que vos quieras.

Cambiá el tamaño o ícono (FaWhatsapp) si preferís otro estilo.

Si querés que se muestre con delay o con otro tipo de animación, modificá las props de motion.button.

📲 ¿Querés verlo en acción?
¡Grabé un mini demo mostrando cómo integrarlo!
(Podés ver el video en mi perfil de GitHub o en TikTok/Instagram si lo compartí por ahí.)

🌟 Apoyá este proyecto
Si te sirvió:

⭐ Dejá una estrella en este repo

🍰 Compartilo con alguien que esté armando su web

🧠 Guardalo para tenerlo a mano

🐱‍💻 Autor
Hecho con cariño por Nachito Maldonado
Siempre aprendiendo, compartiendo y construyendo.

🧵 ¿Ideas o mejoras?
Abrí un issue o mandame PR si tenés ideas para extenderlo (por ejemplo, elegir íconos, texto personalizado, etc.).

yaml
Copiar
Editar

---

### 🔧 ¿Qué te falta para dejarlo redondo?

- Cambiar `tu_usuario` por tu nombre real de GitHub
- Subir el código a un repo llamado por ejemplo `whatsapp-button`
- Grabar un videíto de 30 segundos mostrando cómo instalarlo
- Postear en LinkedIn o TikTok con un caption tipo:

> ¿Querés agregar un botón de WhatsApp flotante en tu web en menos de 2 minutos?  
> Subí este componente listo para usar en React con ícono oficial, animación y Tailwind.  
> Lo subí GRATIS a mi GitHub. Guardalo, compartilo y usalo.

¿Querés que te escriba el caption exacto para LinkedIn o TikTok con hashtags incluidos?







Tú dijiste:
dame el readme para copiar y pegar igual yo despues le cambio cosas siempre para q se vea mi estilo


ChatGPT Plus
¡De una, Nachito! Acá tenés el README.md listo para que lo copies y pegues tal cual, y después le metas tu toque personal cuando quieras:

markdown
Copiar
Editar
# 💬 Botón flotante de WhatsApp (React + Tailwind + Framer Motion)

Componente reutilizable para agregar un botón de contacto vía WhatsApp a cualquier página hecha con React. Ideal para portfolios, negocios, tiendas, emprendimientos y más.

---

## 🚀 Demo

![demo del botón](https://user-images.githubusercontent.com/tu_usuario/demo.gif)  
*Botón flotante animado, listo para usar.*

---

## ⚙️ Instalación

1. Instalá las dependencias necesarias:

```bash
npm install react-icons framer-motion
Copiá el archivo WhatsAppButton.tsx en tu proyecto dentro de la carpeta components.

Usalo en tu App.tsx o donde quieras que se muestre:

tsx
Copiar
Editar
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      {/* Tu contenido */}
      <WhatsAppButton />
    </>
  );
}
💡 Cómo funciona
Cuando el usuario hace clic, se abre WhatsApp Web o la app (según el dispositivo) con un mensaje predefinido:

tsx
Copiar
Editar
window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(message)}`, '_blank');
✏️ Recordá cambiar el número por el tuyo real y personalizar el texto.

🎨 Estilo y animación
Está hecho con Tailwind para que lo puedas adaptar rápido.

Tiene animación con framer-motion (entrada suave + hover).

Ícono oficial de WhatsApp con react-icons.

🌟 Si te sirvió
Guardalo para tenerlo a mano 🔖

Compartilo con quien esté armando su web 📤

Y si te pinta, seguime en GitHub ⭐

🧑‍💻 Autor
Creado por Nachito Maldonado
Contacto rápido, simple y moderno.
¡Seguimos haciendo cosas útiles!

🧵 Ideas futuras
Versión para Next.js

Personalización desde props

Modo oscuro automático

Más plataformas (Telegram, Instagram, etc.)

Abrí un issue si querés sumar algo o tenés alguna mejora 🚀

yaml
Copiar
Editar

