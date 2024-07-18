import {JsonData} from "../models/data.model.js"

export const getData = async (req, res) => {
  try {
    const data = await JsonData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


