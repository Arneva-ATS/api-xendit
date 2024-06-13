pipeline{
    agent any
    triggers{
        githubPush()
    }

    stages{
        stage('Build'){
            steps{
                sh 'docker build -t Arneva-ATS/api-xendit .'
            }
        }
        stage('Deliver'){
            steps {
                sh 'docker run --name api-xendit-container -p  5000:5000 Arneva-ATS/api-xendit .'
                }
        }
    }
}