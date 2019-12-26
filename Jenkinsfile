pipeline {
    agent { docker { image 'node:6.3' } }
    environment {
        CI = 'true'
    }
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
        stage('Deliver for development') {
            when {
                branch 'master'
            }
            steps {
                sh 'cp -r build/ /apps/dev1.quickeast.com'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'build/**', fingerprint: true
        }
    }
}