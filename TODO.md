# TODO — Aurora Audio

Checklist de componentes para el proyecto Aurora Audio. La arquitectura
(Tailwind CDN, Font Awesome, estructura `public/`, Firebase Hosting) está
completa.

## Arquitectura (completo)

- [x] Estructura `public/` con `index.html`, `dashboard.html`, `assets/img`, `assets/css`, `scripts/js`
- [x] Tailwind CSS vía CDN
- [x] Font Awesome vía CDN
- [x] JavaScript modular (ES modules en `scripts/js/modules/`)
- [x] `firebase.json` apuntando a `public/`
- [x] Login de prueba con 3 usuarios predeterminados y 3 paletas de color
- [x] Sistema de autenticación con localStorage
- [x] Dashboard post-login con productos e información de empresa

## Landing page / Dashboard (completo)

- [x] **Hero**: nombre/logo del negocio, propuesta de valor, CTA principal
- [x] **Catálogo / Servicios**: grid de 3 productos (Aurora Pro, Lite, Studio)
- [ ] **Botón de contacto directo a WhatsApp** (`https://wa.me/<número>`) - pendiente
- [x] **Footer**: ubicación, horarios de atención, redes sociales
- [x] Contenido e imágenes reales del negocio (textos, SVG de productos)
- [x] Meta tags SEO básicos (title, description) en dashboard.html

## Mejoras futuras (pendientes)

- [ ] Botón de contacto directo a WhatsApp
- [ ] Verificar responsive en móvil en dispositivo real
- [ ] Agregar favicon
- [ ] Agregar Open Graph image para redes sociales
- [ ] Implementar autenticación real (Firebase Auth) en lugar de demo-only
- [ ] Landing pública separada para SEO (index.html actual es login privado)

## Antes de desplegar

- [x] Revisar `DEPLOY.md` y ejecutar los pasos de Firebase CLI
- [x] Probar el sitio localmente (`firebase emulators:start --only hosting` o servidor estático)
- [ ] Verificar responsive en móvil antes de `firebase deploy`
