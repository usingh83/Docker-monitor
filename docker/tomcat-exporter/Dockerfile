FROM alpine:3.7

WORKDIR /exporter
ADD https://search.maven.org/remotecontent?filepath=io/prometheus/simpleclient/0.4.0/simpleclient-0.4.0.jar simpleclient-0.4.0.jar
ADD https://search.maven.org/remotecontent?filepath=io/prometheus/simpleclient_common/0.4.0/simpleclient_common-0.4.0.jar simpleclient_common-0.4.0.jar
ADD https://search.maven.org/remotecontent?filepath=io/prometheus/simpleclient_servlet/0.4.0/simpleclient_servlet-0.4.0.jar simpleclient_servlet-0.4.0.jar
ADD https://search.maven.org/remotecontent?filepath=io/prometheus/simpleclient_hotspot/0.4.0/simpleclient_hotspot-0.4.0.jar simpleclient_hotspot-0.4.0.jar
ADD https://search.maven.org/remotecontent?filepath=nl/nlighten/tomcat_exporter_client/0.0.6/tomcat_exporter_client-0.0.6.jar tomcat_exporter_client-0.0.6.jar
ADD https://search.maven.org/remotecontent?filepath=nl/nlighten/tomcat_exporter_servlet/0.0.6/tomcat_exporter_servlet-0.0.6.war tomcat_exporter_servlet-0.0.6.war