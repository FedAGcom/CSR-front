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
                sh 'docker build . -t maxirage/frontend:latest'
            }
        }
        stage("Docker login") {
            steps {
                echo " ============== docker login =================="
                withCredentials([usernamePassword(credentialsId: 'docker_hub_maxirage', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh """
                    docker login -u $USERNAME -p $PASSWORD
                    """
                }
            }
        }
        stage("Docker push") {
            steps {
                echo " ============== start pushing image =================="
                sh 'docker push maxirage/frontend:latest'
            }
        }
        stage("Run app") {
            steps {
                echo " ============== start frontApp =================="
                sh 'docker run -d -p 80:8080 maxirage/frontend:latest'
//                sh 'docker run -d --name frontApp -p 80:80 maxirage/frontend:latest' // TODO Удалять старые контейнеры и задать имя
            }
        }
    }
}