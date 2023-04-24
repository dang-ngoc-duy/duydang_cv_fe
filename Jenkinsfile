pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'git checkout develop && git pull origin develop'
                sh 'docker build -t ddcv-fe .'
                sh 'docker stop ddcv-fe-container && docker rm ddcv-fe-container'
                sh 'docker run -d -p 80:80 --name ddcv-fe-container ddcv-fe'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
