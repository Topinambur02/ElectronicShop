FROM maven:3.9-amazoncorretto AS build

WORKDIR /app

COPY backend/pom.xml .
COPY backend/src ./src

RUN mvn clean package -DskipTests

FROM openjdk:24-jdk-oracle

WORKDIR /app

COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar ./backend-0.0.1-SNAPSHOT.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]