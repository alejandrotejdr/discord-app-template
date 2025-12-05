# Plantilla de Bot Discord con Seyfert

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/Node-20+-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)

Plantilla de bot minimalista y profesional para **Discord**, construida con el framework [Seyfert](https://seyfert.js.org/).  
Perfecta como punto de partida para bots con comandos, eventos, soporte de idiomas (i18n) y branding limpio.

---

### ✨ Características

- Comandos Slash listos para usar  
- Eventos de Discord configurables (`ready`, `guildDelete`, etc.)  
- Sistema de idiomas (i18n) completamente integrado  
- Estructura modular, fácil de extender y mantener  
- Configuración simple con `.env`  
- Desarrollo rápido con recarga automática (nodemon + tsx)  

---

### 📝 Requisitos

- Node.js 20 o superior  
- npm o yarn  
- Discord Developer Account + Bot Token  

---

### 🚀 Instalación

Clona el repositorio:
```bash
git clone https://github.com/alejandrotejdr/discord-app-template.git
cd discord-app-template
```

Instala las depencencias
```bash
npm install
```

---

### ⚙️ Configuración

Copia el archivo de ejemplo .env.example:
```bash
cp .env.example .env
```

Rellena las variables:
```bash
BOT_TOKEN=tu_token_aqui
```

---

### 💻 Desarrollo

Para arrancar en modo desarrollo con recarga automática:
```bash
npm run dev
```
Esto usa nodemon y tsx para recargar cambios automáticamente.

---

### 🏗 Producción

1. Compila TypeScript a JavaScript:
```bash
npm run build
```

2. Ejecuta el bot compilado:
```bash
npm start
```

---

### 📁 Estructura de carpetas
```bash
src/
  commands/     # Comandos de Discord
  events/       # Eventos del bot
  languages/    # Archivos de idiomas (i18n)
  index.ts      # Entrada principal
seyfert.config.mjs
.env
package.json
```

---

### 🧰 Uso de la plantilla

	•	Añade nuevos comandos en src/commands/
	•	Añade o personaliza eventos en src/events/
	•	Añade idiomas en src/languages/
	•	El archivo index.ts inicializa el bot y carga todo automáticamente

---

### 📝 Licencia

Esta plantilla está bajo la licencia MIT – Extended Version.
Ver [LICENSE](https://github.com/alejandrotejdr/discord-app-template/blob/main/license.md)￼ para más detalles.

⸻

🌐 Recursos
	•	[Documentación Seyfert](https://www.seyfert.dev/)
	•	[Discord Developer Portal](https://discord.com/developers/docs/intro)
	•	[Node.js](https://nodejs.org/es)
	•	[TypeScript](https://www.typescriptlang.org/)
