const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");

async function takeScreenshot(driver, filename) {
  const image = await driver.takeScreenshot();
  fs.writeFileSync(`tests/screenshots/${filename}.png`, image, "base64");
}

(async function registrarLibro() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");
    await takeScreenshot(driver, "TC01_Inicio");

    await driver.findElement(By.xpath("//button[contains(text(),'Registrar Libro')]")).click();
    await takeScreenshot(driver, "TC01_Formulario_Libro");

    await driver.findElement(By.xpath("//input[@placeholder='Título']")).sendKeys("El Principito");
    await driver.findElement(By.xpath("//input[@placeholder='Autor']")).sendKeys("Antoine de Saint-Exupéry");
    await driver.findElement(By.xpath("//input[@placeholder='Categoría']")).sendKeys("Ficción");
    await driver.findElement(By.xpath("//input[@placeholder='Año']")).sendKeys("1943");

    await takeScreenshot(driver, "TC01_Datos_Completos");

    await driver.findElement(By.xpath("//button[contains(text(),'Guardar')]")).click();
    await driver.sleep(1500);

    await takeScreenshot(driver, "TC01_Libro_Registrado");

    console.log("✔ Prueba TC01: Registrar Libro — PASSED");
  } catch (err) {
    console.log("✘ Prueba TC01: Registrar Libro — FAILED");
    console.log(err);
  } finally {
    await driver.quit();
  }
})();
