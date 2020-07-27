# Thinkwell Technical Test App (T3 App)

### By: [Emilio Pena](https://www.linkedin.com/in/emilio-peña-6a543771/)

## Introduction
T3 is a technical assignment test which requires implementing an app (API) and containerizing it. A feature will be implemented in the lapse of one hour in order to assess the candidate's coding skills.

## System Requisites
* Docker Desktop (for obtaining and executing Docker image)  [download here](https://www.docker.com/products/docker-desktop)
* Git (for downloading from Git repository) [download here](https://git-scm.com/downloads)
* Node.js (for executing code locally) [download here](https://nodejs.org/en/download/)


## Downloading and executing T3 App
### From Docker Hub registry
Open a CLI instance and type the following:

```
docker pull emiliodevmtl/t3-app:latest
```

The Docker image will be then downloaded and added to your local registry. You can list images by typing:

```
docker images

# Example
REPOSITORY                      TAG        ID              CREATED
node                            12         1934b0b038d1    5 days ago
emiliodevmtl/t3-app    		    latest     d64d3505b0d2    1 minute ago
```
Run the image by typing the following into the CLI

```
docker run -p 8000:8000 -d emiliodevmtl/t3-app
```

### From Git repository (GitHub)
Open a CLI instance and type the following:

```
git clone https://github.com/emiliodevmtl/t3-app.git
```

The project's source code will be downloaded from the GitHub repository to your working directory. From here you may build the image using Docker tools or directly running the code using Node.js' npm.

#### Building the Docker image locally
Make the project's root directory your workdir:

```
cd <workdir-name>
```

Type the following command on your CLI to build a local image for T3 app:

```
docker build -t emiliodevmtl/t3-app .
```

Run the image by typing the following into the CLI

```
docker run -p 8000:8000 -d emiliodevmtl/t3-app
```

#### Running locally using NPM

Make the project's root directory your workdir:

```
cd <workdir-name>
```

Type the following command on your CLI to install the project's dependencies:

```
npm install
```
Start the project with the following command:

```
npm start
```

## Querying the App
App is configured to run on port 8000. If running within a container a public access port will need to be mapped to the private (internal to container) port as in the following example:

```
# syntax
docker run -p <PUBLIC_PORT>:<PRIVATE_PORT> -d <IMAGE_NAME>

# example
docker run -p 8000:8000 -d emiliodevmtl/t3-app

```

API endpoint's will be located under the /api path, as in  the following example:

```
# app's path
# http://localhost:8000/api/

# querying the app using curl
curl -X GET localhost:8000/api/
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Links
[Docker](https://hub.docker.com/repository/docker/emiliodevmtl/t3-app)  
[GitHub](https://github.com/emiliodevmtl/t3-app)

## Developer Info
Email: <emiliodevmtl@gmail.com>  
LinkedIn: [Emilio Pena](https://www.linkedin.com/in/emilio-peña-6a543771/)