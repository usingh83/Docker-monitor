Docker Monitoring

I have used different ways of monitoring and regulating Docker Container environment in this project.

Why Docker containers?

Docker containers are being used extensively these days, i personally do all development on my local using a docker cluster.
Containers have been in the industry for some time now, the bigger challenge that we face with docker containers is monitoring an
and managing the docker cluster.

Container Monitoring

Container monitoring can be logged at 3 level:

1. Application level
2. JVM level
3. Container level

In this project, I have used Prometheus for JVM and application level tracking. Prometheus will run on it's docker container and collect
metrics from the other containers from the exposed API's /metrics and /app-metrics

For Container level logging i am using a node.js+express.js server and collecting the logs and providing a container deletion service using Dockerode node package

As i wasn't satisfied with the scalability of the container deletion service, I am also providing a shutdown Hook in the application itself which can simply terminate
the main() when interrupted.

How to use:

Step 1:

You can launch a simple Java docker and a prometheus using the bellow command
    docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d

to access prometheus use the link:
    localhost:9090
to access java service use the link:
    localhost:8080
    for application log's use the link:
        localhost:8080/app-metrics
    for JVM log's use the link:
        localhost:8080/metrics

Step 2:

Do a npm install to load all the node dependencies:

For the node.js+express.js api:
    run bin/www
    it should start a service on port 3000
    for accessing the service use the link:
        localhost:3000
        as soon as you go to this link, node will start collecting logs from the docker engine and streaming them to your running node console.
        you can also give a running docker ID in the input box and click on delete to stop a docker container

Step 3:

For creating Docker image and scaling up the application.

run below command to create a docker image from our application:
    docker image build -t monitor/java:v1 -f ./docker/java/v2/Dockerfile .
    after a successful build you can use the below command to launch a docker container for the application
        docker container run -d -P monitor/java:v1
        do a docker ps to see the port at which the application has been exposed, use that port to see the application:
            localhost:PORT_NUMBER/
            for application log's use the link:
                localhost:PORT_NUMBER/app-metrics
            for JVM log's use the link:
                localhost:PORT_NUMBER/metrics

Step 4:

As i was not happy with the docker deletion service and really doubted it to scale effectively, I have created a shutdown hook in the application itself. It runs on
the main thread and will terminate the thread if an interrupt is issued to the it. I was using CTRL+C to issue an interrupt in my local. I couldn't test it in docker,
but i think it should work in docker too.


