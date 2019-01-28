FROM maven:3.5.4-jdk-8-slim AS builder

WORKDIR /usr/src/jsfapp
COPY src/java/jsfapp/pom.xml .
RUN mvn -B -f pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency:resolve

COPY src/java/jsfapp .
RUN mvn -B -s /usr/share/maven/ref/settings-docker.xml package -DskipTests

# app image
FROM tomcat:8.5-jre8-alpine

ENV WEBAPP_HOME=${CATALINA_HOME}/webapps

RUN rm -r -f ${WEBAPP_HOME}
WORKDIR ${WEBAPP_HOME}
COPY --from=psmonitoring/tomcat-exporter:0.0.6 /exporter/*.jar ${CATALINA_HOME}/lib/
COPY --from=psmonitoring/tomcat-exporter:0.0.6 /exporter/tomcat_exporter_servlet-0.0.6.war ./metrics.war

WORKDIR ${WEBAPP_HOME}/ROOT
COPY --from=builder /usr/src/jsfapp/target/jsfapp/ .
