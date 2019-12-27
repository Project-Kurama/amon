var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("start:server-dev", shell.task("npm run --prefix server start"));

gulp.task(
    "start:server-debug",
    shell.task("npm --inspect run start:server-dev")
);

gulp.task(
    "start:frontend-dev",
    shell.task("npm run --prefix frontend build:watch")
);

gulp.task(
    "start:dev",
    gulp.parallel("start:frontend-dev", "start:server-dev"));

gulp.task(
    "start:debug",
    gulp.parallel("start:frontend-dev", "start:server-debug")
);