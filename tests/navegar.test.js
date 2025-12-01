const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");

async function takeScreenshot(driver, filename) {
  const image = await driver.takeScreenshot();
  fs.writeFileSync(`tests/screenshots/${filename}.png`, image, "base64");
}

(async function navegar() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");

    const botones = [
      "Registrar Libro",
      "Ver Libros",
      "Registrar Usuario",
      "Ver Usuarios",
      "Registrar Préstamo",
      "Ver Préstamos"
    ];

    let i = 1;

    for (let texto of botones) {
      await driver.findElement(By.xpath(`//button[contains(text(),'${texto}')]`)).click();
      await driver.sleep(500);

      await takeScreenshot(driver, `TC04_Navegacion_${i}_${texto}`);
      i++;
    }

    console.log("✔ Prueba TC04: Navegación — PASSED");
  } catch (err) {
    console.log("✘ Prueba TC04: Navegación — FAILED");
    console.log(err);
  } finally {
    await driver.quit();
  }
})();
