name := """play-angular-demo"""

version := "1.0-SNAPSHOT"

play.Project.playJavaSettings

lazy val common = project.in(file("modules/common"))

lazy val users = project.in(file("modules/users"))
  .dependsOn(common).aggregate(common)

lazy val root = project.in(file("."))
  .dependsOn(common,users).aggregate(common,users)