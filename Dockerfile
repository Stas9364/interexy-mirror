# Stage 1: Build the application
FROM node:22-alpine AS builder

ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# ДОБАВЬТЕ ЭТУ СТРОКУ ДЛЯ ОТЛАДКИ
RUN echo "NEXT_PUBLIC_SITE_URL is set to: ${NEXT_PUBLIC_SITE_URL}"

# Build the Next.js application, passing the environment variable
RUN NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL} npm run build

# ---
# Stage 2: Run the application
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/src ./src

EXPOSE 3000

CMD ["npm", "run", "start"]
