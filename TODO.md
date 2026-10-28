# TODO — Landing page MIPYME

Checklist de componentes pendientes para la landing comercial. La arquitectura
(Tailwind CDN, Font Awesome, estructura `public/`, Firebase Hosting) ya está
lista; falta la lógica de negocio específica de la empresa.

## Arquitectura (listo)

- [x] Estructura `public/` con `index.html`, `assets/img`, `assets/css`, `scripts/js`
- [x] Tailwind CSS vía CDN
- [x] Font Awesome vía CDN
- [x] JavaScript modular (ES modules en `scripts/js/modules/`)
- [x] `firebase.json` apuntando a `public/`
- [x] Login de prueba con 3 usuarios predeterminados y 3 paletas de color

## Landing page (pendiente — se define en el siguiente paso)

- [ ] **Hero**: nombre/logo del negocio, propuesta de valor, CTA principal
- [ ] **Catálogo / Servicios**: grid de productos o servicios ofrecidos
- [ ] **Botón de contacto directo a WhatsApp** (`https://wa.me/<número>`)
- [ ] **Footer**: ubicación (mapa o dirección), horarios de atención, redes sociales
- [ ] Contenido e imágenes reales del negocio (textos, logo, fotos de producto)
- [ ] Meta tags SEO básicos (title, description, favicon, og:image)

## Antes de desplegar

- [ ] Revisar `DEPLOY.md` y ejecutar los pasos de Firebase CLI
- [ ] Probar el sitio localmente (`firebase emulators:start --only hosting` o servidor estático)
- [ ] Verificar responsive en móvil antes de `firebase deploy`
