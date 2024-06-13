pipeline{
    agent any
    triggers{
        githubPush()
    }

    stages{
        stage('Build'){
            steps{
                sh 'docker build -t arneva-ats/api-xendit .'
            }
        }
        stage('Deliver'){
            steps {
                sh 'docker container rm --force api-xendit-container'
                sh 'docker run --name api-xendit-container -p  5000:5000 arneva-ats/api-xendit &'
                }
        }
    }
}