import mongoose from "mongoose";
import Pet from "~/models/petModel";

const createPet = async function (data) {
  const pet = new Pet({
    _id: new mongoose.Types.ObjectId(),
    ...data
  });
  return pet.save();
};

const updatePet = async function ({data, id}) {
  console.log(id);
  const petUpdate = await Pet.updateOne(
    { _id: id },
    {
      $set:{...data}
    }
  );
  return petUpdate;
};

const getAll = async function () {
  const pet = Pet.find();
  return pet;
};

export const petService = {
  createPet,
  updatePet,
  getAll
};
