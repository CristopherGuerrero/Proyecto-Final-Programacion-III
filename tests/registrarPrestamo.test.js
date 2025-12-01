const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");

async function takeScreenshot(driver, filename) {
  const image = await driver.takeScreenshot();
  fs.writeFileSync(`tests/screenshots/${filename}.png`, image, "base64");
}

(async function registrarPrestamo() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");
    await takeScreenshot(driver, "TC03_Inicio");

    await driver.findElement(By.xpath("//button[contains(text(),'Registrar Préstamo')]")).click();
    await takeScreenshot(driver, "TC03_Formulario_Prestamo");

    await driver.findElement(By.xpath("//input[@placeholder='ID del Libro']")).sendKeys("1");
    await driver.findElement(By.xpath("//input[@placeholder='ID del Usuario']")).sendKeys("1");

    await takeScreenshot(driver, "TC03_Datos_Completos");

    await driver.findElement(By.xpath("//button[contains(text(),'Registrar Préstamo')]")).click();
    await driver.sleep(1500);

    await takeScreenshot(driver, "TC03_Prestamo_Registrado");

    console.log("✔ Prueba TC03: Registrar Préstamo — PASSED");
  } catch (err) {
    console.log("✘ Prueba TC03: Registrar Préstamo — FAILED");
    console.log(err);
  } finally {
    await driver.quit();
  }
})();
