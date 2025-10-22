#  Reto QA – Automatización 

Este proyecto implementa una suite de pruebas automatizadas para la aplicación web (https://www.saucedemo.com/), utilizando Playwright junto con Cucumber (Gherkin), aplicando el patrón de diseño Page Object Model (POM).

---

##  Objetivo

Automatizar escenarios críticos del flujo de compra en Sauce Demo:

- Iniciar sesión con usuarios válidos e inválidos.  
- Agregar productos al carrito.  
- Visualizar los productos agregados.  
- Completar el proceso de compra hasta la confirmación.

---

##  Tecnologías utilizadas
1.-Node.js
2.-Playwright
3.-Cucumber
4.-JavaScript

---

##  Instalación y configuración

# 1 Clonar el repositorio

git clone https://github.com/tu-usuario/saucedemo-automation.git
cd saucedemo-automation

# 2 Verifica Node.js y npm
node -v
npm -v

# 2. Clona el repositorio
git clone https://github.com/DanielMG97/Reto-automatization-qa.git

# 3. Entra a la carpeta
cd Reto-automatization-qa

# 4. Instala dependencias
npm install

# 5. Instala navegadores de Playwright
npx playwright install

# 6. Ejecuta los tests
npm test