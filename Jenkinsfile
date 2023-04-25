pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'git clone https://github.com/duydangit/duydang_cv_fe.git'
                sh 'cd duydang_cv_fe'
                sh 'git checkout develop && git pull origin develop'
                sh 'docker run --rm -v $(pwd):/app -w /app docker:stable docker build -t duydangit/ddcv-fe .'
                sh 'docker stop ddcv-fe-container || true && docker rm ddcv-fe-container || true'
                sh 'docker run -d -p 80:80 --name ddcv-fe-container duydangit/ddcv-fe'
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
