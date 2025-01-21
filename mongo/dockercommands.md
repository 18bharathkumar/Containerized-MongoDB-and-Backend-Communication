# Docker Commands Guide

This README provides an overview of useful Docker commands for managing containers, including listing running containers, killing containers, and performing other related tasks.

---

## **Basic Commands**

### **List Running Containers**
```bash
docker ps
```
- **Description**: Displays all currently running containers.
- **Output**: Includes container ID, image name, status, and more.

### **Kill a Running Container**
```bash
docker kill <container_id>
```
- **Description**: Stops a container immediately without performing any cleanup.
- **Example**:
  ```bash
  docker kill abc123
  ```

---

## **Additional Useful Commands**

### **List All Containers (Running and Stopped)**
```bash
docker ps -a
```
- **Description**: Shows all containers on the system, including stopped ones.

### **Stop a Docker Container Gracefully**
```bash
docker stop <container_id>
```
- **Description**: Attempts a clean shutdown of the container before stopping it.
- **Example**:
  ```bash
  docker stop abc123
  ```

### **Remove a Stopped Container**
```bash
docker rm <container_id>
```
- **Description**: Removes a container that has already been stopped.
- **Example**:
  ```bash
  docker rm abc123
  ```

### **Remove All Stopped Containers**
```bash
docker container prune
```
- **Description**: Deletes all stopped containers in one go.
- **Warning**: This action is irreversible.

---

## **Tips for Managing Containers**
- **Check Logs for a Container**:
  ```bash
  docker logs <container_id>
  ```
- **Restart a Container**:
  ```bash
  docker restart <container_id>
  ```
- **Inspect a Container**:
  ```bash
  docker inspect <container_id>
  ```
  - Provides detailed information about the container.

---

# Docker Image File System Exploration (we are actually checking the conatiner file system)

To check the file system of a Docker image, you can run the following command to start an interactive session:

```bash
docker run  -it <image_name> /bin/bash
```
if bash is not in your device you can use 

```bash
docker run -it <image_name> /bin/sh
```

<div>
  <ul>
    <li>-d: Detached mode (run the container in the background)</li>
    <li>-it: Interactive mode with a terminal (allows you to interact with the container via the terminal)</li>
    <li>-v: Volume (binds a host directory or named volume to a container directory)</li>
    <li>-p: Port mapping (maps a port from the container to a port on the host machine, e.g., -p 8080:80)</li>
    <li>--name: Assigns a name to the container (e.g., --name mycontainer)</li>
    <li>--rm: Automatically remove the container when it exits (useful for one-off containers)</li>
    <li>--network: Connects the container to a specific Docker network (e.g., --network mynetwork)</li>
    <li>-e: Set environment variables inside the container (e.g., -e ENV_VAR=value)</li>
    <li>-a: Attach to a specific container’s output stream (stdout, stderr, etc.)</li>
    <li>--restart: Configures the container to restart automatically in certain conditions (e.g., --restart unless-stopped)</li>
  </ul>
</div>


## **Notes**
- Always double-check the container ID before executing commands to avoid unintended actions.
- Use `docker ps` frequently to verify the state of your containers.

---

For further details on Docker commands, visit the [Docker Documentation](https://docs.docker.com/).

