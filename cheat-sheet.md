## Cheat Sheet of Basic Docker commands

1. Docker version
    - `docker version`
1. Create an instance of an image.
    - `docker run <image-name>`
1. Overriding the commands while running an image.
    - `docker run <image-name> commands`
1. List running containers.
    - `docker ps`
1. List all time containers.
    - `docker ps –all`
1. docker run = docker create + docker start
1. Docker start can be used to start the containers that have exited.
1. Prune command is used to delete the exited containers.
    - `docker container prune`
    - `docker system prune` , this command will remove all the stopped containers, all unused  networks, all dangling images, and all the build cache.
1. To stop a container and kill a container
    - `docker stop <container-id>`
    - `docker kill <container-id>`
    - `docker stop $(docker ps -a -q)`
1. Stop issues `SIGTERM` to terminate/close the process and exit gracefully, while the Kill issues `SIGKILL` and closes the container immediately/abruptly.
1. If the container doesn't responds to the Stop command, the docker fallbacks to the Kill command after waiting for ten seconds.
1. Attach command
    - `docker attach <container-id>` - this command can be used to attach to a container that is already running in the background
1. Detach Command
    - `docker run -it -d  <container-name>`
1. Execute command
    - `docker exec –it <container-id> [commands]` - this can be used to execute commands within the container.
    - `docker exec –it <container-id> sh` – this gives us access to the unix environment within the container. This is very useful for debugging and executing commands directly
1. Run a docker with additional commands
    - `docker run <container-id> npm run test`
1. Run another command using already running container
    - `docker exec -it <container-id> npm run test`

1. DockerFile
	- Build the DockerFile present in the directory
        - `docker build .`
	- Build a DockerFile and provide a User friendly name to use it
        - `docker  build -t <docker-name>:<tag> .`
    - Build Dockerfile with special names. Like "Dockerfile.dev"
        - `docker build -f Dockerfile.dev .`

1. Docker Compose
    - Orchestrate multiple containers
    - Enable networking between multiple containers
    - Process a docker-compose.yml file
	    - `docker-compose up`
    - Process a docker-compose.yml file and rebuild the build containers 
	    - `docker-compose up --build`
    -  To bring down the containers created by the docker compose
	    - `docker-compose down`
