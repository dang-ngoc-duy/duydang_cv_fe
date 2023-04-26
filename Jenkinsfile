pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'duydangit/ddcv-fe'
        DOCKER_IMAGE_TAG = 'latest'
        DOCKER_REGISTRY_URL = 'https://index.docker.io/v1/'
    }

    stages {
        stage('Clone repository') {
            steps {
                sh 'git clone https://github.com/duydangit/duydang_cv_fe.git'
                sh 'cd ./duydang_cv_fe'
            }
        }
        stage('Checkout') {
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
        stage('Build Docker image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} ."
                }
            }
        }

        stage('Push Docker image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    script {
                        sh "docker login -u ${DOCKER_HUB_USERNAME} -p ${DOCKER_HUB_PASSWORD} ${DOCKER_REGISTRY_URL}"
                        sh "docker push ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
                    }
                }
            }
        }

        stage('Deploy Docker container') {
            steps {
                script {
                    sh "docker pull ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
                    sh "docker stop ddcv-fe-container || true"
                    sh "docker rm ddcv-fe-container || true"
                    sh "docker run -d -p 80:80 --name ddcv-fe-container ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
                }
            }
        }
    }
}
