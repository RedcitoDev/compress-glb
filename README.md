# 📦 Bienvenido - Aplicación de Compresión GLTF

¡Bienvenido a nuestra aplicación de compresión de GLTF! Esta herramienta te permitirá comprimir de manera masiva archivos GLTF, lo que resulta especialmente útil para archivos pesados como GLB.

## Descripción

La aplicación toma una carpeta de entrada que contiene archivos GLTF y realiza una compresión masiva, guardando los resultados en una carpeta de salida designada.

## Pasos para instalar y ejecutar

### 1. Instalación de Node.js

Es necesario tener Node.js instalado en tu sistema. Asegúrate de tener una versión igual o superior a la 20.11.1. Puedes descargar Node.js desde [su sitio oficial](https://nodejs.org/).

### 2. Instalacion de GLTF-Transform CLI

Es necesario para hacer uso de este pequeño repositorio tener instalado GLTF-Transform CLI para poder hacer esto necesitamos correr este comando en nuestra terminal:

```
npm install -g @gltf-transform/cli
```

Ya teniendo instalado esto ya podemos hacer uso de nuestro repositorio como tambien ejecutar comandos en nuestra terminal como el siguiente:
```
gltf-transform optimize input.glb output.glb --compress draco --texture-compress webp 
```
>Si quieres saber mas sobre esta libreria puedes consultar la [Documentacion](https://gltf-transform.dev/cli).

### 3. Clonar el repositorio

```
git clone https://github.com/RedcitoDev/compress-glb.git
```

### 3.1 Instalar dependencias

Tenemos que tener en cuenta que como usamos node para la creacion de este compresor, tenemos que instalar las dependencias para que el programa funcione de manera correcta
```
npm install
```

### 4. Preparación

- Localiza la carpeta del repositorio clonado en tu sistema.

### 5. Ejecución

- Abre tu terminal y navega hasta la carpeta donde clonaste el repositorio.
- Ejecuta el siguiente comando:
```
node compress.js
```

Asegúrate de que este comando se ejecute correctamente y de que tus carpetas de entrada y salida estén correctamente especificadas y visibles en la terminal.

¡Listo! Ahora la aplicación está lista para comprimir tus archivos GLTF de manera masiva y eficiente.
