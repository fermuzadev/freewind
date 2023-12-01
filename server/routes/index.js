const packagesRoutes = require("./packagesRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use("/packages", packagesRoutes);
  app.use("/auth", authRoutes);
  app.use("/orders", orderRoutes);
  app.use("/admins", adminRoutes);
  app.use("/users", userRoutes);
};
