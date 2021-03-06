import { Router } from "express";
// import usersRouter from "../Controllers/usersController";
const {Payload} = require("../Controllers/payloadController")
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "My Rule-Validation API",
  status: "success",
  data: {
    name: "Gerald Anosike",
    github: "@geraldanosike",
    email: "geraldanosike.javhse@gmail.com",
    mobile: "09064951136"
  }
  });
});

router.post("/validate-rule", Payload);
export default router;
