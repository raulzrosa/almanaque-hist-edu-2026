# --- ETAPA 1: Compilação do código (Build) ---
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# Gera a pasta 'dist' com o site final em HTML/CSS/JS puros
RUN npm run build

# --- ETAPA 2: Servidor de Produção (Nginx) ---
FROM nginx:alpine

# Copia os arquivos gerados na Etapa 1 para a pasta pública do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta padrão do Nginx (80)
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]