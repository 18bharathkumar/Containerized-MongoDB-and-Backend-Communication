# Doker for Database

**need of volume**

<p> if we just run the like mongo image (start the mongo container) then when the we kill the container then the data will be lost <p>

**instaed of doing this**

``` bash
docker run -p 27017:27018 mongo 
```
<h4> here the mongo db is running at the port 27017 of conatiner and it is mapped to port 27018 of host machine <h4>

if we kill the container then data will be lost 

**we do this**

``` bash 
docker run -v mongovolum:/data/db -p 27018:27018 mongo 
```
**mongovolum** 
<p> volume name <p>

**/data/db** 
the data will be stored in this dir so here we are specifing the data in the volume to be stored in in dir 

**Networks**

<p> Allow the Docker Container to Communicate with each other <p> 

<h4> localhost in the docker means its own network not the network of host machine <h4>

**command to create network**

```bash 
docker network create networkname
```
 

```bash 
docker run -d -v mongovolum:/data/db --name mymongo --network mongonetwork  mongo
```
here the conatiner name is : mymongo
<br>
network to which we are attaching is : mongonetwork


**Starting the backend application whcih is connected to network**
```bash

docker run -d -p 3000:3000 --name mongobackend --network mongonetwork mongoapp

```




