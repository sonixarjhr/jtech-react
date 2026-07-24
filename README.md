# J-Tech · versión React

## Qué es esto

Es la misma página de J-Tech, pero hecha en React (con Vite), y con dos funciones nuevas:

- **Consultar mi reparación**: el cliente ingresa un código y ve el estado (recibido, diagnóstico, reparando, listo, entregado).
- **Formulario de contacto**: le llega directo a tu email, sin que vos tengas que armar un servidor.

## Antes de arrancar

Necesitás tener **Node.js** instalado (versión 18 o superior). Se descarga gratis en https://nodejs.org (elegí la versión "LTS").

## Paso 1: instalar dependencias

Abrí una terminal dentro de esta carpeta y corré:

```
npm install
```

## Paso 2: crear tu proyecto de Firebase (gratis)

Esto es la "base de datos" donde vas a guardar el estado de cada reparación.

1. Andá a https://console.firebase.google.com y creá un proyecto nuevo (cualquier nombre, ej. "jtech").
2. Adentro del proyecto, andá a **Firestore Database** → **Crear base de datos** → modo de producción está bien, elegí una región cercana (ej. `southamerica-east1`).
3. Andá a **Configuración del proyecto** (ícono de tuerca, arriba a la izquierda) → **Tus apps** → **Agregar app** → ícono `</>` (web).
4. Le das un nombre, no hace falta "Firebase Hosting". Te va a mostrar un bloque de código con `apiKey`, `authDomain`, etc.
5. Copiá esos valores en `src/lib/firebase.js`, reemplazando los `'TU_...'`.

### Cómo cargar una reparación (por ahora, a mano)

1. En Firestore, hacé clic en **Iniciar colección** → nombre: `reparaciones`.
2. Como ID del primer documento, poné un código corto, ej. `JT-0001`.
3. Agregale estos campos:
   - `cliente` (string) → nombre del cliente
   - `equipo` (string) → ej. "Motorola One Action"
   - `estado` (string) → uno de: `recibido`, `diagnostico`, `reparando`, `listo`, `entregado`
   - `nota` (string, opcional) → cualquier aclaración que quieras mostrarle al cliente
4. Le pasás el código `JT-0001` al cliente para que lo consulte en el sitio.

Cuando avance la reparación, volvés a este documento y le cambiás el campo `estado`.

## Paso 3: crear tu cuenta de EmailJS (gratis)

Esto hace que el formulario de contacto te mande un email, sin servidor propio.

1. Creá una cuenta en https://www.emailjs.com
2. **Email Services** → conectá tu Gmail (u otro proveedor). Anotá el **Service ID**.
3. **Email Templates** → creá uno nuevo. Usá variables `{{nombre}}`, `{{contacto}}` y `{{mensaje}}` en el cuerpo del mail. Anotá el **Template ID**.
4. **Account** → copiá tu **Public Key**.
5. Pegá esos 3 valores en `src/components/ContactForm.jsx`, reemplazando los `'TU_...'`.

## Paso 4: probarlo en tu computadora

```
npm run dev
```

Te va a dar un link tipo `http://localhost:5173` — abrilo en el navegador para ver el sitio funcionando en tiempo real mientras lo editás.

## Paso 5: subirlo a internet (gratis, con Vercel)

1. Subí esta carpeta a un repositorio de GitHub (igual que hiciste con la versión anterior, pero ahora es una carpeta con varios archivos, no uno solo).
2. Andá a https://vercel.com, creá una cuenta con tu mismo GitHub.
3. **Add New** → **Project** → elegí tu repositorio.
4. Vercel detecta solo que es un proyecto Vite/React. No toques nada más, hacé clic en **Deploy**.
5. En un par de minutos te da un link real (`tu-proyecto.vercel.app`), y cada vez que subas cambios a GitHub, se actualiza solo.
