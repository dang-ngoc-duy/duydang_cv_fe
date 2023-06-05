pipeline {
    agent {
        label 'docker'
    }
    
    options {
        skipDefaultCheckout()
    }

    environment {
        DOCKER_IMAGE_NAME = 'duydangit/ddcv-fe'
        DOCKER_IMAGE_TAG = 'latest'
        DOCKER_REGISTRY_URL = 'https://index.docker.io/v1/'
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'develop']],
                    userRemoteConfigs: [[
                        credentialsId: 'github-credentials',
                        url: 'https://github.com/duydangit/duydang_cv_fe.git'
                    ]]
                ])
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}", '.')
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                        docker.withRegistry(DOCKER_REGISTRY_URL, DOCKER_HUB_USERNAME, DOCKER_HUB_PASSWORD) {
                            docker.image("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}").push()
                        }
                    }
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                script {
                    sh "docker pull ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
                    sh "docker stop ddcv-fe-container || true"
                    sh "docker rm ddcv-fe-container || true"
                    sh "docker run -d -p 80:80 -p 443:443 --name ddcv-fe-container -v /etc/letsencrypt:/etc/letsencrypt ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
                }
            }
        }
    }
}
