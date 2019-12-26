pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm i'
            }
            steps {
                sh 'npm test'
            }

            steps {
                sh 'npm build'
            }
        }
    }
}