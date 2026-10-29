# Aurora Audio

Landing page premium para Aurora Audio, marca de audífonos inalámbricos con cancelación activa de ruido. El proyecto incluye una página de login y un dashboard post-login con catálogo de productos e información de la empresa.

## Características

- **Login con autenticación demo-only**: Sistema de login con 3 usuarios de prueba
- **Dashboard post-login**: Catálogo de productos (Aurora Pro, Lite, Studio) e información de la empresa
- **Sistema de temas personalizables**: 3 paletas de color (Océano, Atardecer, Bosque)
- **Diseño premium**: Glassmorphism, animaciones suaves, responsive design
- **100% estático**: HTML5 + Tailwind CSS (CDN) + JavaScript ES6 modular
- **Despliegue en Firebase Hosting**: Configuración lista para producción

## Arquitectura

### Estructura de Archivos

```
public/
├── index.html              # Página de login
├── dashboard.html          # Dashboard post-login
├── assets/
│   ├── css/
│   │   └── theme.css      # Variables CSS por paleta de color
│   └── img/               # Imágenes (vacío por ahora)
└── scripts/js/
    ├── main.js            # Punto de entrada del login
    └── modules/
        ├── auth.js        # Lógica de autenticación
        ├── theme.js       # Sistema de temas
        ├── password-toggle.js  # Toggle de contraseña
        └── dashboard.js   # Lógica del dashboard
```

### Stack Tecnológico

- **HTML5**: Semántico, con atributos ARIA para accesibilidad
- **Tailwind CSS**: Vía CDN (sin build local), configuración inline
- **Font Awesome**: Vía CDN para iconografía
- **JavaScript ES6**: Modular (`type="module"`), sin frameworks
- **Firebase Hosting**: Hosting estático

### Flujo de Autenticación

1. Usuario ingresa credenciales en `index.html`
2. `auth.js` valida y guarda usuario en `localStorage`
3. Redirige a `dashboard.html`
4. `dashboard.js` lee usuario de localStorage y muestra nombre personalizado
5. Logout limpia localStorage y redirige a `index.html`

**Nota**: La autenticación es demo-only usando localStorage. No hay backend real ni sesión persistente entre dispositivos.

## Inicio Rápido

### 1. Clonar el repositorio

```bash
git clone <repositorio-url>
cd Prueba
```

### 2. Probar localmente

Opción A: Con servidor Python

```bash
cd public
python3 -m http.server 8080
```

Opción B: Con Firebase emulador

```bash
firebase emulators:start --only hosting
```

Abre `http://localhost:8080` en tu navegador.

### 3. Usuarios de prueba

El login tiene 3 usuarios predeterminados:

- `admin` / `admin123` → Admin
- `usuario1` / `clave123` → Usuario 1
- `demo` / `demo123` → Invitado

### 4. Sistema de temas

El proyecto incluye 3 paletas de color accesibles desde el header:
- **Océano**: Azul (default)
- **Atardecer**: Naranja
- **Bosque**: Verde

La selección de tema se persiste en localStorage.

## Despliegue

Para desplegar a Firebase Hosting, consulta la guía completa en [DEPLOY.md](DEPLOY.md).

Resumen rápido:

```bash
# Instalar Firebase CLI (si no está instalado)
npm install -g firebase-tools
firebase login

# Inicializar proyecto (solo primera vez)
firebase init hosting

# Desplegar
firebase deploy --only hosting
```

## Tareas Pendientes

Ver [TODO.md](TODO.md) para el checklist de tareas completadas y pendientes.

## Notas de Seguridad

- La autenticación actual es demo-only, sin backend real
- Cualquiera puede modificar localStorage para simular login
- Para producción, implementar autenticación real (Firebase Auth, etc.)

## Licencia

Proyecto desarrollado para concurso.