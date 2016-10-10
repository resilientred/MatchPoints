import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import express from "express";
import { app, csrfProtection, clubMethods } from "./helpers/appModules";
import routes from "./api/players";
import clubRoutes from "./api/club";
import sessionRoutes from "./api/session";
import pdfRoutes from "./api/pdf";
import uploadRoutes from "./api/upload";

const port = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1:27017/roundrobindb");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "public", "views"));
app.use(cookieParser());

app.use((err, req, res, next) => {
  if (err.code !== "EBADCSRFTOKEN") {
    next(err);
  } else {
    res.status(403).send("Forbidden Access");
  }
});

app.use("/favicon.ico", (req, res) => {
  res.end();
});

if (process.env.NODE_ENV === "development") {
  const sassMiddleware = require("node-sass-middleware");
  const webpack = require("webpack");
  const webpackMiddleware = require("webpack-dev-middleware");
  const config = require("../webpack.config.server.js");
  const compiler = webpack(config);
  app.use(
    sassMiddleware({
      src: path.join(__dirname, "..", "assets", "sass"),
      dest: path.join(__dirname, "..", "public", "styles"),
      prefix: "/styles",
      debug: true
    })
  );
  app.use(webpackMiddleware(compiler));
  app.use(require("webpack-hot-middleware")(compiler));
}

app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/api/clubs", clubRoutes);
app.use("/api/clubs", routes);
app.use("/api/pdfs", pdfRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/*", (req, res) => {
  res.status(404).send("Invalid routes");
  res.end();
});
app.use("/session", sessionRoutes);
app.use("/*", (req, res, next) => {
  const origUrl = req.originalUrl;
  const redirectURL = origUrl.match(/^(\/$|\/login|\/signup)/);
  let currentClub;

  clubMethods.currentClub(req)
    .then((club) => {
      currentClub = club;
    }).catch(() => {
      currentClub = null;
    }).then(() => {
      if (currentClub && redirectURL) {
        res.redirect("/club");
        res.end();
      } else {
        next();
      }
    });
});

app.get("*", csrfProtection, (req, res) => {
  res.render("index", { csrfToken: req.csrfToken() });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
