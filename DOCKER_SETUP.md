# Docker Setup for Vayal Agro Project

## Prerequisites
- Install Docker Desktop from https://www.docker.com/products/docker-desktop

## For You (Sending the Project)

### Option 1: Share via Docker Hub (Recommended)
```bash
# Build and push images
docker-compose build
docker tag en_thara_web-frontend:latest yourusername/vayal-agro-frontend:latest
docker tag en_thara_web-backend:latest yourusername/vayal-agro-backend:latest
docker push yourusername/vayal-agro-frontend:latest
docker push yourusername/vayal-agro-backend:latest
```

### Option 2: Share Project Folder
Just zip the entire `en_thara_web` folder and share it via Google Drive/OneDrive/GitHub.

## For Your Teammates (Running the Project)

### Step 1: Get the Project
- Download and extract the project folder

### Step 2: Run with Docker
```bash
# Navigate to project folder
cd en_thara_web

# Start everything with one command
docker-compose up

# Or run in background
docker-compose up -d
```

### Step 3: Access Application
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Step 4: Stop the Project
```bash
docker-compose down
```

## Useful Commands
```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs

# Rebuild after changes
docker-compose up --build

# Remove everything
docker-compose down -v
```

## Notes
- No need to install Node.js or MongoDB
- All dependencies are handled by Docker
- Changes to code will auto-reload
- Database is already configured in docker-compose.yml
