FROM maven:3.9-amazoncorretto AS build

COPY pom.xml .

COPY /src ./src

RUN mvn clean package -DskipTests

FROM openjdk:24-jdk-oracle

COPY --from=build /target/backend-0.0.1-SNAPSHOT.jar ./backend-0.0.1-SNAPSHOT.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]