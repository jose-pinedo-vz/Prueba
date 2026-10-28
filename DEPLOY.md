# Guía de despliegue — Firebase Hosting

Arquitectura 100% estática (HTML5 + CSS3 + JS modular, sin backend de servidor).
Todo lo servible vive dentro de `public/`.

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
