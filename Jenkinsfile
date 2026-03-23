pipeline {
  agent any

  environment {
    ECR_REPO = "131464424269.dkr.ecr.us-east-1.amazonaws.com/devops-app"
    IMAGE_TAG = "latest"
  }

  stages {

    stage('Clone Code') {
      steps {
        git branch: 'main', url: 'https://github.com/pavankumar90554/project.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t devops-app .'
      }
    }

    stage('Tag Image') {
      steps {
        sh 'docker tag devops-app:latest $ECR_REPO:$IMAGE_TAG'
      }
    }

    stage('Push to ECR') {
      steps {
        sh '''
        aws ecr get-login-password --region us-east-1 | \
        docker login --username AWS --password-stdin $ECR_REPO
        docker push $ECR_REPO:$IMAGE_TAG
        '''
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}
