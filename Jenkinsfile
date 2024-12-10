pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            additionalBuildArgs '--no-cache'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/teddy-teem/pet-server'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            echo 'Pipeline completed!'
        }
    }
}
