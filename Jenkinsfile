// pipeline {
//     agent any

//     stages {
//         stage('Clone Repository') {
//             steps {
//                 git 'https://github.com/KaranKumar09/Docker_Project.git'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }

//         stage('Docker Build') {
//             steps {
//                 sh 'docker build -t education-app .'
//             }
//         }

//         stage('Docker Run') {
//             steps {
//                 sh 'docker run -d -p 5000:5000 education-app'
//             }
//         }
//     }

//     post {
//         success {
//             echo '✅ Application deployed successfully!'
//         }
//         failure {
//             echo '❌ Deployment failed!'
//         }
//     }
// }

pipeline {
    agent any

    environment {
        IMAGE_NAME = 'dockerproject'
        CONTAINER_NAME = 'dockerproject-container'
        PORT = '5000'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/KaranKumar09/Docker_Project.git'
            }
        }

        // Optional: only if not handled inside Dockerfile
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Remove Old Container') {
            steps {
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }

        stage('Run Docker Container') {
            steps {
                sh "docker run -d --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${IMAGE_NAME}"
            }
        }
    }

    post {
        success {
            echo '✅ Successfully Deployed!'
        }
        failure {
            echo '❌ Deployment Failed.'
        }
    }
}
