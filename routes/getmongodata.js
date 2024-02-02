const express = require("express");
const getdata = express();
const persons = require("../schemas/marketingSchema.js");

getdata.get("/data", async (req, res) => {
  console.log("dathit");

  try {
    // Access your Mongoose model directly
    const data = await persons.find({});
    res.status(200).json(data);
    
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = getdata;
