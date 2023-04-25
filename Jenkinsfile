pipeline {
    environment {
        imagename = "duydangit/ddcv-fe"
        registryCredential = 'duydangit'
        dockerImage = ''
        DOCKER_HUB_USERNAME = "${credentials('docker-hub').username}"
        DOCKER_HUB_PASSWORD = "${credentials('docker-hub').password}"
    }
    agent any
    stages {
        stage('Cloning Git') {
            steps {
                git([url: 'https://github.com/duydangit/duydang_cv_fe.git', branch: 'develop', credentialsId: 'duydangit'])

            }
        }
        stage('Building image') {
            steps {
                script {
                    dockerImage = docker.build imagename
                }
            }
        }
        stage('Deploy Image') {
            steps {
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push("$BUILD_NUMBER")
                        dockerImage.push('latest')
                    }
                }
            }
        }
        stage('Remove Unused docker image') {
            steps {
                sh "docker rmi $imagename:$BUILD_NUMBER"
                sh "docker rmi $imagename:latest"

            }
        }
    }
}
