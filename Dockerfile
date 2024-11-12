# Sử dụng Tomcat image
FROM tomcat:9.0-jdk21

# Đặt thư mục làm việc
WORKDIR /usr/local/tomcat

# Copy file WAR vào thư mục webapps của Tomcat
COPY target/project_sem_4-0.0.1-SNAPSHOT.war webapps/ROOT.war

# Expose port 8080
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
