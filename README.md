# Task-managing web app
# Project Management Web Application

This project contains a simple web application for managing tasks and projects. The application is containerized using Docker for easy deployment and scalability.

## Usage

### Running the Application Locally

To run the application locally, make sure you have Docker installed on your system. Then, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/NiyonshutiDavid/Task-managing.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Task-managing
    ```

3. Build the Docker image:

    ```bash
    docker build -t task-managing:latest .
    ```

4. Run the Docker container:

    ```bash
    docker run -d -p 3000:3000 task-managing:latest
    ```

5. Access the application in your web browser at http://localhost:3000.

### Docker Image

You can view Image from DockerHub, DockerHub Image:https://hub.docker.com/repository/docker/niyonshutidavid/task-managing/general 
, and you can also pull the Docker image from Docker Hub:

```bash
docker pull niyonshutidavid/task-managing:latest
```

### Presentation slides

You can view the slides using canva. Here is the Link:https://www.canva.com/design/DAGBMpjA9Q8/O7ISAnDL92KpwAPu2xgMUg/edit?utm_content=DAGBMpjA9Q8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
