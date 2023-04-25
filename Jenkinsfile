pipeline {
    environment {
        DOCKER_HUB_USERNAME = "${credentials('docker-hub').username}"
        DOCKER_HUB_PASSWORD = "${credentials('docker-hub').password}"
        DOCKER_IMAGE_NAME = 'duydangit/ddcv-fe'
        DOCKER_IMAGE_TAG = 'latest'
        DOCKER_REGISTRY_URL = 'https://index.docker.io/v1/'
    }
    agent any
    stages {
        stage('Git Clone') {
            steps {
                git branch: 'main', credentialsId: 'login github', url: 'https://github.com/my-user/my-repo.git'
            }
        }
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm
            }
        }
        //stage('Cloning Git') {
        //    steps {
        //        sh 'cd duydang_cv_fe'
        //        sshagent(['ssh-github-key']) {
        //            git([url: 'git@github.com:duydangit/duydang_cv_fe.git', branch: 'develop'])
        //        }
        //    }
        //}
        stage('Building image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG .'
            }
        }
        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    sh "docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD $DOCKER_REGISTRY_URL"
                    sh "docker push $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG"
                }
            }
        }
        stage('Deploy image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub') {
                        sh "docker pull $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG"
                        sh "docker stop ddcv-fe-container || true"
                        sh "docker rm ddcv-fe-container || true"
                        sh "docker run -d -p 80:80 --name ddcv-fe-container $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG"
                    }
                }
            }
        }
    }
}
