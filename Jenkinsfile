pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t ddcv-fe .'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    sh "echo $DOCKER_HUB_PASSWORD | docker login -u $DOCKER_HUB_USERNAME --password-stdin"
                    sh 'docker tag ddcv-fe:latest duydangit/ddcv-fe:latest'
                    sh 'docker push duydangit/ddcv-fe:latest'
                }
            }
        }
    }
}
