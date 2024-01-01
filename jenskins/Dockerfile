FROM jenkins/jenkins:lts

USER root

RUN apt-get update && apt-get install ca-certificates curl gnupg wget -y

RUN wget http://get.docker.com/builds/Linux/x86_64/docker-latest.tgz

RUN tar -xvzf docker-latest.tgz
RUN mv docker/* /usr/bin/
