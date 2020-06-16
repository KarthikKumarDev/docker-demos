# Base Image
FROM node:alpine

# Set directory
WORKDIR /usr/app

# Copy package.json
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy all file
COPY ./ ./

# Default command
CMD ["npm", "start"]