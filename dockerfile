# # Use Node.js 20 Alpine image (smaller size)
# FROM node:20-alpine

# # Set working directory
# WORKDIR /app

# # Copy package files first for better layer caching
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy all application files
# COPY . .

# # Set environment variables (adjust as needed)
# ENV NODE_ENV=production
# ENV PORT=5000

# # Expose the application port
# EXPOSE 5000

# # Command to run the application
# CMD ["node", "index.js"]

# Use official Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files (views, src, index.js, etc.)
COPY . .

# Expose the port your server runs on
EXPOSE 5000

# Start the application
CMD ["node", "index.js"]

