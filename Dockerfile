FROM maven:3.6.3 as maven
LABEL COMPANY="ShuttleOps"
LABEL MAINTAINER="support@shuttleops.com"
LABEL APPLICATION="Sample Application"

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN mvn package

# Sử dụng Tomcat image
FROM tomcat:9.0-jdk21

# Đặt thư mục làm việc
WORKDIR /usr/local/tomcat

# Copy file WAR vào thư mục webapps của Tomcat
COPY --from=maven /usr/src/app/target/project_sem_4-0.0.1-SNAPSHOT.war webapps/ROOT.war
COPY /docker/* ${CATALINA_HOME}/conf/
WORKDIR /var/lib/project_sem_4
# Expose port 8080
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
