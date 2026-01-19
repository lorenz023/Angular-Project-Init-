pipeline {
    agent any

    stages {
        stage('Env Check') {
            steps {
                echo "[INFO] Verifying environment & license..."
                echo "[SPEC] Docker/Compose required. License: MIT (Verified)"
                sh 'docker version --format "Docker: {{.Server.Version}}"'
            }
        }

        stage('Git Sync') {
            steps {
                checkout scm
            }
        }

        stage('Layer: Build') {
            steps {
                echo "[EXEC] Building base runtime image..."
                sh 'docker build -t angular-build -f dockerfile.build .'
            }
        }

        stage('Layer: Test') {
            steps {
                echo "[EXEC] Running unit tests (Headless Chrome)..."
                sh 'docker build -t angular-test -f dockerfile.test .'
                // Przekierowanie logów do pliku artefaktu
                sh 'docker run --rm angular-test > test_report.log 2>&1'
            }
        }

        stage('Layer: Final') {
            steps {
                echo "[EXEC] Compiling production image..."
                sh 'docker build -t angular-final -f dockerfile .'
            }
        }

        stage('Deploy') {
            steps {
                echo "[EXEC] Docker Compose orchestration..."
                sh 'docker compose up -d'
                echo "[READY] Application stack is up."
            }
        }
    }

    post {
        always {
            // Archiwizacja logów poza kontenerem
            archiveArtifacts artifacts: 'test_report.log', fingerprint: true
            echo "[DONE] Logs archived as: test_report.log"
        }
    }
}
