pipeline {
    agent any
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Git') {
            steps {
                git branch: 'main',
                url: 'https://github.com/20424010/ACN-Project-3.git'
            }
        }
        stage('Build And Push Image') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubpwd')]) {
                        sh 'docker build -t 20424071/jenkins-acn-project .'
                        sh 'docker login -u 20424071 -p ${dockerhubpwd}'
                        sh 'docker push 20424071/jenkins-acn-project'
                    }
                }
            }
        }
    }
}
