# Proyecto Django y React

Este proyecto es una aplicación web desarrollada con Django en el backend y React en el frontend.

## Requisitos

- Python 3.x
- Node.js y npm

## Instalación

### Backend (Django)

1. Clona este repositorio:

2. Navega al directorio del proyecto:


3. Crea y activa un entorno virtual:

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

4. Instala las dependencias de Python:

    ```bash
    pip install -r requirements.txt
    ```

### Frontend (React)

1. Navega al directorio principal `gamma`:

    ```bash
    cd gamma
    ```

2. Instala las dependencias de Node.js:

    ```bash
    npm install
    ```

    Nota: Si estás usando `create-react-app` y necesitas instalar dependencias obsoletas, puedes usar:

    ```bash
    npm i --legacy-peer-deps
    ```

## Configuración

1. Copia el archivo `.env.example` y renómbralo a `.env`.

2. En el archivo `.env`, asegúrate de configurar correctamente las variables de entorno necesarias para tu proyecto.

## Ejecución

### Backend (Django)

1. Desde el directorio raíz del proyecto, activa el entorno virtual si no lo has hecho ya:

    ```bash
    source venv/bin/activate
    ```

2. Ejecuta el servidor Django:

    ```bash
    python manage.py runserver
    ```

### Frontend (React)

1. Desde el directorio `frontend`, ejecuta la aplicación React:

    ```bash
    npm start
    ```

Esto iniciará tanto el servidor Django en el puerto por defecto 8000 como la aplicación React en el puerto 3000. Puedes acceder a la aplicación desde tu navegador visitando `http://localhost:3000`.
