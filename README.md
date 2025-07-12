
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

window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(message)}`, '_blank');
✏️ Reemplazá el número por el tuyo y editá el mensaje si querés.


🎨 Personalización
Cambiá los colores de fondo con clases de Tailwind:
bg-green-500 hover:bg-green-600 → podés usar los que vos quieras.

Cambiá el tamaño o ícono (FaWhatsapp) si preferís otro estilo.

Si querés que se muestre con delay o con otro tipo de animación, modificá las props de motion.button.

´´´
📲 ¿Querés verlo en acción?
¡Grabé un mini demo mostrando cómo integrarlo!
(Podés ver el video en mi perfil de GitHub o en LinkedIn.)


🌟 Apoyá este proyecto
Si te sirvió:

⭐ Dejá una estrella en este repo

🍰 Compartilo con alguien que esté armando su web

🧠 Guardalo para tenerlo a mano



🧵 ¿Ideas o mejoras?
Abrí un issue o mandame PR si tenés ideas para extenderlo (por ejemplo, elegir íconos, texto personalizado, etc.).
