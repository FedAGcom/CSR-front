#!groovy
properties([disableConcurrentBuilds()])

pipeline {
agent any
    options {
     buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '10'))
     timestamps()
    }

    stages {
        stage ("Build Nginx + App)") {
            steps {
                echo " ============== start DockerFile =================="
                sh 'sudo chmod ugo+xwr /var/run/docker.sock'
                sh 'docker build . -t fedag/frontend:latest'
            }
        }
        stage("Docker login") {
            steps {
                echo " ============== docker login =================="
                withCredentials([usernamePassword(credentialsId: 'docker_hub_fedag', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh """
                    docker login -u $USERNAME -p $PASSWORD
                    """
                }
            }
        }
        stage("Docker push") {
            steps {
                echo " ============== start pushing image =================="
                sh 'docker push fedag/frontend:latest'
            }
        }
    }
}
