FROM node:18.16-slim

COPY . .
RUN npm ci
RUN npm run build
CMD ["npm", "run", "start"]