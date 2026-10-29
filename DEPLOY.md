# Guía de despliegue — Firebase Hosting

Arquitectura 100% estática (HTML5 + CSS3 + JS modular, sin backend de servidor).
Todo lo servible vive dentro de `public/`.

## Arquitectura de Páginas

El proyecto consta de dos páginas principales:

- **`index.html`**: Página de login con sistema de autenticación (demo-only) y selector de temas
- **`dashboard.html`**: Dashboard principal post-login con catálogo de productos e información de la empresa

### Flujo de Autenticación

1. Usuario ingresa credenciales en `index.html`
2. `auth.js` valida y guarda usuario en `localStorage.setItem('aurora-user', JSON.stringify(user))`
3. Redirige a `dashboard.html` con `window.location.href = 'dashboard.html'`
4. `dashboard.js` lee usuario de localStorage y muestra nombre personalizado
5. Logout limpia localStorage y redirige a `index.html`

**Nota**: La autenticación es demo-only usando localStorage. No hay backend real ni sesión persistente entre dispositivos.

## 0. Requisito previo

```bash
npm install -g firebase-tools   # si no está instalado
firebase login                  # autenticación con tu cuenta de Google
```

## 1. Inicializar Firebase en este directorio

```bash
firebase init hosting
```

Durante el wizard:

- **Project Setup** → selecciona o crea el proyecto de Firebase del concurso.
- **What do you want to use as your public directory?** → escribe `public`
- **Configure as a single-page app (rewrite all urls to /index.html)?** → `No`
  (landing estática, sin router de cliente)
- **Set up automatic builds and deploys with GitHub?** → `No` (despliegue manual, más rápido)
- **File public/index.html already exists. Overwrite?** → `No` (ya tenemos el nuestro)

Esto genera `.firebaserc` (vinculado a tu proyecto, no se versiona — ver `.gitignore`).
`firebase.json` ya está en el repo apuntando a `public`, así que el wizard solo debe confirmarlo.

## 2. Verificación local antes de publicar

```bash
firebase emulators:start --only hosting
```

Abre la URL que imprime el emulador (normalmente `http://localhost:5000`) y revisa:
- Que cargue `index.html` sin errores en consola.
- Que el selector de paleta y el login de prueba funcionen.
- Que el login exitoso redirija a `dashboard.html`.
- Que el dashboard muestre el nombre del usuario logueado.
- Que el selector de temas funcione en el dashboard.
- Que el logout redirija de vuelta al login.
- Que el dashboard sea responsive en móvil.

Alternativa rápida sin emulador:

```bash
cd public && python3 -m http.server 8080
```

## 3. Desplegar a producción

```bash
firebase deploy --only hosting
```

Al finalizar, la CLI imprime la **Hosting URL** pública del sitio.

## Despliegues posteriores

Para cualquier cambio futuro, basta repetir el paso 3:

```bash
firebase deploy --only hosting
```

## Notas Adicionales

### SEO
- `dashboard.html` incluye meta tags básicos (title, description) para SEO
- `index.html` es una página de login privada, no requiere optimización SEO
- Para producción con contenido público, considerar landing separada para SEO

### LocalStorage
- La sesión del usuario se guarda en `localStorage` con la clave `aurora-user`
- No persiste entre navegadores ni dispositivos
- El usuario debe loguearse en cada dispositivo individualmente

### Seguridad
- La autenticación actual es demo-only, sin backend real
- Cualquiera puede modificar localStorage para simular login
- Para producción, implementar autenticación real (Firebase Auth, etc.)
