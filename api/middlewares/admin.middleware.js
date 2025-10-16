export const adminRoute = (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      next();
    } else {
      return res.status(403).json({ message: "Forbidden - Admins only" });
    }
  } catch (error) {
    console.log(`Error in adminRoute middleware: ${error.message}`);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
