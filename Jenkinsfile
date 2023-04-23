pipeline {
    agent any
    environment {
        DOCKER_HUB_USERNAME = credentials('docker-hub').username
        DOCKER_HUB_PASSWORD = credentials('docker-hub').password
        DOCKER_IMAGE_NAME = 'duydangit/ddcv-fe'
        DOCKER_IMAGE_TAG = 'latest'
        DOCKER_REGISTRY_URL = 'https://index.docker.io/v1/'
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/duydangit/duydang_cv_fe.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG .'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Push') {
            steps {
                sh "docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD $DOCKER_REGISTRY_URL"
                sh "docker push $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG"
            }
        }
        stage('Deploy') {
            steps {
                sh 'ssh <user>@<host> "docker pull $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG && docker stop ddcv-fe-container && docker rm ddcv-fe-container && docker run -d -p 80:80 --name ddcv-fe-container $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG"'
            }
        }
    }
}
