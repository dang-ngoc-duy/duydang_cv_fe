# cd jenkins-custom
# e.g. docker build --platform linux/amd64 -t custom-jenkins-docker .
# Note: Add the --platform linux/amd64 flag to the docker build command to ensure that the image is built for the correct architecture.
FROM --platform=linux/amd64 jenkins/jenkins:lts
USER root
RUN apt-get update -qq \
    && apt-get install -qqy apt-transport-https ca-certificates curl gnupg2 software-properties-common
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/debian \
    $(lsb_release -cs) \
    stable"
RUN apt-get update  -qq \
    && apt-get install -y docker.io
RUN apt-get install -y tini
RUN usermod -aG docker jenkins