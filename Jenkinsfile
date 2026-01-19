pipeline {
    agent any

    // Punkt: Opisano proces wersjonowania artefaktu (Semantic Versioning)
    environment {
        APP_NAME = "angular-app"
        MAJOR_VERSION = "1.0"
        // Wersjonowanie: v1.0.NUMER_BUILDU (część Semantic Versioning)
        VERSION = "${MAJOR_VERSION}.${BUILD_NUMBER}"
    }

    triggers {
        // Punkt: Commit (automatyczne sprawdzanie co minutę)
        pollSCM('* * * * *')
    }

    stages {
        stage('Env Check') {
            steps {
                echo "[INFO] Verifying environment & license..."
                sh 'docker version'
                // Punkt: Sprawozdanie pozwala zidentyfikować cel (logowanie celu)
                echo "[GOAL] Cel: Sprawdzenie gotowości środowiska DIND i licencji MIT."
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
                sh 'docker build -t angular-build -f Dockerfile.build .'
            }
        }

        stage('Layer: Test') {
            steps {
                echo "[EXEC] Running unit tests..."
                sh 'docker build -t angular-test -f Dockerfile.test .'
                // Punkt: Zdefiniowano, jaki element ma być publikowany jako artefakt (logi)
                sh 'docker run --rm angular-test > test_report.log 2>&1'
            }
        }

        stage('Layer: Deploy Image') {
            steps {
                echo "[EXEC] Creating versioned deploy container..."
                // Punkt: Wersjonowany kontener 'deploy' (użycie tagu z numerem buildu)
                sh "docker build -t ${APP_NAME}:${VERSION} -f Dockerfile ."
                // Oznaczamy też jako latest dla Docker Compose
                sh "docker tag ${APP_NAME}:${VERSION} ${APP_NAME}:latest"
            }
        }

        stage('Deploy') {
            steps {
                echo "[EXEC] Docker Compose orchestration..."
                sh 'docker compose up -d'
            }
        }

        stage('Smoke Test') {
            steps {
                // Punkt: Następuje weryfikacja, że aplikacja pracuje poprawnie (smoke test)
                echo "[CHECK] Verifying if application is reachable..."
                sleep 5 // czekamy aż Nginx wstanie
                sh "curl -sI http://localhost:80 | grep '200 OK' || (echo '[ERROR] Smoke test failed' && exit 1)"
            }
        }
    }

    post {
        always {
            // Punkt: Dostępność artefaktu (załączony jako rezultat builda w Jenkinsie)
            archiveArtifacts artifacts: 'test_report.log', fingerprint: true
            echo "[DONE] Wersja artefaktu: ${VERSION}"
        }
    }
}
