pipeline {
  agent {
    label 'docker' 
  }
  
  stages {
    
    stage('Build') {
      agent {
        label 'docker'
        docker {
          image 'node:6-alpine' 
        }
      }
      steps {
        sh 'npm install'
      }
    }

  }
}