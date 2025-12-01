const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");

async function takeScreenshot(driver, filename) {
  const image = await driver.takeScreenshot();
  fs.writeFileSync(`tests/screenshots/${filename}.png`, image, "base64");
}

(async function registrarUsuario() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");
    await takeScreenshot(driver, "TC02_Inicio");

    await driver.findElement(By.xpath("//button[contains(text(),'Registrar Usuario')]")).click();
    await takeScreenshot(driver, "TC02_Formulario_Usuario");

    await driver.findElement(By.xpath("//input[@placeholder='Nombre del Usuario']")).sendKeys("Juan Pérez");
    await takeScreenshot(driver, "TC02_Datos_Completos");

    await driver.findElement(By.xpath("//button[contains(text(),'Guardar')]")).click();
    await driver.sleep(1500);

    await takeScreenshot(driver, "TC02_Usuario_Registrado");

    console.log("✔ Prueba TC02: Registrar Usuario — PASSED");
  } catch (err) {
    console.log("✘ Prueba TC02: Registrar Usuario — FAILED");
    console.log(err);
  } finally {
    await driver.quit();
  }
})();
