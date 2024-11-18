FROM maven:3.9.9 as maven
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN mvn clean install -DskipTests
RUN mvn package -DskipTests

# Sử dụng Tomcat image
FROM tomcat:latest

LABEL maintainer=jasonPG

# Đặt thư mục làm việc
WORKDIR /usr/local/tomcat

# Copy file WAR vào thư mục webapps của Tomcat
COPY --from=maven /usr/src/app/target/project_sem_4-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

# Expose port 8080
EXPOSE 8080

# Start Tomcat
CMD ["/usr/local/tomcat/bin/catalina.sh", "run"]
