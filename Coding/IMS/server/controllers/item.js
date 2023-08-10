import itemData from "../models/item.js";

export const getItems = async (req, res) => {
  try {
    const allItems = await itemData.find();
    res.status(200).json(allItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createItem = async (req, res) => {
  const item = req.body;

  const newItem = new itemData(item);

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const id = req.params.id;

  try {
    await itemData.findByIdAndRemove(id).exec();
    res.send("Deleted");
  } catch (error) {
    console.log(error);
  }
};
