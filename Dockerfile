# Маленький базовый образ
FROM node:22.13.1
# Устанавливаем папку в якій будуть виконуватися всі команди
WORKDIR /app
# Копіюємо файл залежностей у цю папку
COPY pacage.json .
# Всатновлюємо залежності
RUN npm install

ENV PORT = 3006
ENV CLOUDINARY_API_KEY = 935964199958441
ENV CLOUDINARY_API_SECRET = ovxTz4gBv-iDs8620FpDdOphnv0
ENV CLOUDINARY_CLOUD_NAME = dk3syrsg5
ENV DB_HOST = mongodb+srv://cayydann:vjvtqKgHa43kA0VZ@leafofhope.gf0bx.mongodb.net/my-plants?retryWrites=true&w=majority&appName=leafofhope
ENV EMAIL_API_KEY = c2tAzrEwNAFhArVV
ENV EMAIL_FROM = leafofhope@ukr.net
ENV METABASE_SITE_URL = https:/my-mbasedomain.site
ENV METABASE_SECRET_KEY = 58625a17ae547ba8123cbceb1dd46d32f0b4f0f4c4263664e371ad141dc0430d
ENV JWT_SECRET = "*1yN>TM'}OiNA$hk<y8Q"
ENV JWT_VERIFICATION = d4ec1f99f287ea330a298efee6c53e528919bd64de0c448a741658481be74e9a
# Копіюємо всі файли залежностей у робочу папку
COPY . .
# Указываем команду запуска
CMD ["npm", "start"]
