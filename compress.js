const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Directorio de entrada y salida
const inputDirectory = './glb';
const outputDirectory = './compressed_glb';

// Comprueba si el directorio de salida existe, si no, créalo
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Obtén la lista de archivos en el directorio de entrada
const glbFiles = fs.readdirSync(inputDirectory);

// Itera sobre cada archivo GLB
glbFiles.forEach(async (fileName) => {
  const inputFile = path.join(inputDirectory, fileName);
  const outputFile = path.join(outputDirectory, fileName);

  try {
    // Ejecutar el comando de optimización utilizando @gltf-transform/cli
    const command = `gltf-transform optimize "${inputFile}" "${outputFile}" --compress draco --texture-compress webp --simplify`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al procesar el archivo ${fileName}:`, error);
        return;
      }
      console.log(`Archivo ${fileName} optimizado correctamente.`);
    });
  } catch (error) {
    console.error(`Error al procesar el archivo ${fileName}:`, error);
  }
});
