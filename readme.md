
# Docker for Database

### Need for Volume

If we just run the Mongo image (start the Mongo container), then when we kill the container, the data will be lost.

### Instead of doing this:

```bash
docker run -p 27017:27018 mongo
```

Here, the MongoDB is running on port 27017 of the container and is mapped to port 27018 of the host machine. However, if we kill the container, the data will be lost.

### We do this:

```bash
docker run -v mongovolume:/data/db -p 27018:27018 mongo
```

- **mongovolume**: This is the volume name.
- **/data/db**: The data will be stored in this directory inside the container. We are specifying that the data should be stored in this directory in the volume.

### Networks

Networks allow Docker containers to communicate with each other.

- **Note**: `localhost` inside a Docker container refers to the container's own network, not the host machine's network.

### Command to create a network:

```bash
docker network create networkname
```

### Running the MongoDB container with volume and network:

```bash
docker run -d -v mongovolume:/data/db --name mymongo --network mongonetwork mongo
```

- Here, the container name is `mymongo`.
- The network to which the container is attached is `mongonetwork`.

### Starting the backend application connected to the network:

```bash
docker run -d -p 3000:3000 --name mongobackend --network mongonetwork mongoapp
```

This command starts the backend application, and it is connected to the `mongonetwork` network, allowing it to communicate with the MongoDB container.
