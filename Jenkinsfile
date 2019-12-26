pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('Start') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test'){
            steps {
                sh 'npm test'
            }
        }
        stage('Build'){
          steps {
                sh 'npm build'
            }
        }
    }
}