pipeline {
  agent any
  stages {
    stage('Run Tests') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'yarn install'
            sh 'yarn test'
          }
        }
        stage('') {
          steps {
            sh 'yarn install'
            sh 'yarn test'
          }
        }
      }
    }
  }
}