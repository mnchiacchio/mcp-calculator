# 🧮 Calculadora MCP - Mi Introducción al Model Context Protocol

## 📖 Acerca de este Proyecto

Este es mi **primer proyecto** explorando el **Model Context Protocol (MCP)**, una tecnología emergente que permite a los modelos de IA acceder a herramientas y recursos externos de manera segura y estructurada.

### 🎯 ¿Por qué MCP?

MCP representa el futuro de la integración entre modelos de IA y herramientas externas. Como desarrollador en crecimiento, decidí comenzar mi viaje con MCP implementando funcionalidades básicas de calculadora para entender los conceptos fundamentales.

## 🚀 Funcionalidades Implementadas

### Operaciones Básicas
- ➕ **Suma**: `add(a, b)` - Suma dos números
- ➖ **Resta**: `subtract(a, b)` - Resta dos números  
- ✖️ **Multiplicación**: `multiply(a, b)` - Multiplica dos números
- ➗ **División**: `divide(a, b)` - Divide dos números (con validación de división por cero)

### Recursos Dinámicos
- 👋 **Saludos Personalizados**: Genera saludos dinámicos basados en nombres

## 🛠️ Tecnologías Utilizadas

- **TypeScript** - Para tipado estático y mejor experiencia de desarrollo
- **MCP SDK** - Framework oficial para crear servidores MCP
- **Zod** - Validación de esquemas para los parámetros de entrada
- **Node.js** - Runtime de JavaScript

## 📁 Estructura del Proyecto

```
MCP-Calculator/
├── src/
│   ├── index.ts          # Servidor MCP principal
│   └── main/
│       └── resources/
│           └── banner.txt # Recursos del proyecto
├── package.json          # Dependencias y scripts
└── tsconfig.json         # Configuración de TypeScript
```

## 🚀 Cómo Ejecutar

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd MCP-Calculator

# Instalar dependencias
npm install

# Compilar y ejecutar
npm start
```

### Scripts Disponibles
- `npm start` - Compila y ejecuta el servidor
- `npm run build` - Compila el proyecto
- `npm run inspector` - Ejecuta el inspector MCP para testing

## 🔍 Conceptos MCP Aprendidos

A través de este proyecto, he explorado:

1. **Creación de Servidores MCP**: Implementación básica del protocolo
2. **Definición de Herramientas**: Creación de funciones que los modelos pueden invocar
3. **Validación de Parámetros**: Uso de Zod para validar entradas
4. **Manejo de Errores**: Implementación de validaciones (ej: división por cero)
5. **Recursos Dinámicos**: Creación de recursos que pueden ser consultados

## 🌱 Este es Solo el Comienzo

### 🎯 Próximos Pasos Planeados
- **Integración con Bases de Datos**: Conectar MCP con sistemas de datos
- **APIs Externas**: Integrar servicios web y APIs de terceros
- **Autenticación y Seguridad**: Implementar sistemas de autenticación
- **Testing y CI/CD**: Agregar pruebas automatizadas y despliegue continuo
- **Documentación Avanzada**: Crear documentación interactiva y ejemplos

### 🚀 Visión a Largo Plazo
Mi objetivo es convertirme en un **experto en MCP** y contribuir a la comunidad desarrollando:
- Servidores MCP para diferentes dominios
- Herramientas de desarrollo para MCP
- Tutoriales y recursos educativos
- Integraciones con frameworks populares

## 💡 Aprendizajes Clave

- **MCP no es solo una tecnología, es un paradigma** para la integración de IA
- **La validación es crucial** en sistemas que interactúan con modelos de IA
- **TypeScript mejora significativamente** la experiencia de desarrollo con MCP
- **Los recursos dinámicos** abren posibilidades infinitas de integración

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Este es un proyecto de aprendizaje, así que cualquier sugerencia, mejora o corrección es apreciada.

## 📚 Recursos de Aprendizaje

- [Documentación Oficial de MCP](https://modelcontextprotocol.io/)
- [Microsoft MCP for beginners](https://github.com/microsoft/mcp-for-beginners)
