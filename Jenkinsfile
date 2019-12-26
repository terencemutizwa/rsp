pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('Start') {
            steps {
                sh 'npm i'
            }
        }
      
        stage('Build'){
          steps {
                sh 'npm run build'
            }
        }
    }
}