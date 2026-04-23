# Multi-stage Dockerfile for Angular Frontend
# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first for dependency caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY . .

# Build production
RUN npm run build -- --configuration production

# Stage 2: Runtime
FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=build /app/dist/*/browser /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget -q --spider http://localhost/health || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]