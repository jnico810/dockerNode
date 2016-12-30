### Docker Skeleton

This project is a great starting point for using Docker with an Node/Express project.


The project requires installing VirtualBox and as well as docker-machine.

Virtualbox can be downloaded: https://www.virtualbox.org/wiki/Downloads.


To start you need to create a VirtualBox virtual machine and specify how many CPUs and how much disk space it should have.

```bash
  $ docker-machine create dev2 --driver virtualbox --virtualbox-disk-size "5000" --virtualbox-cpu-count 2 --virtualbox-memory "4112"
```

The next step is to use Docker Machine's env command to finish your setup:

```bash
$ docker-machine env dev2
export DOCKER_TLS_VERIFY="1"
export DOCKER_HOST="tcp://123.456.78.910:1112"
export DOCKER_CERT_PATH="/Users/user/.docker/machine/machines/dev2"
export DOCKER_MACHINE_NAME="dev2"
```

Finish up the setup by running:
```bash
eval "$(docker-machine env dev2)"
```
Next, use: ```docker-machine ls ``` to ensure your new machine is up and running.

Finally, we can setup and build the docker image:

```bash
$ cd <your project directory>
$ docker build -t <your tag> .
```

To run your application:

```bash
docker run -p 4500:4500 <your tag>
```


We're running locally, so can get the IP that Docker Machine set up for us with ```docker-machine ip dev2```, and then visit that :4500/docker and we'll get a response.


This Skeleton and README is taken from: https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application
