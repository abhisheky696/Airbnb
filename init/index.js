const mongoose=require("mongoose");
const initData=require("./data");
const Listing=require("../models/listing.js");

const mongoose_url="mongodb://127.0.0.1:27017/wanderlust";
main().then(() => {
  console.log("Connected to DataBase");
}).catch(err=> {
  console.log(err);
});

async function main() {
  await mongoose.connect(mongoose_url);
}

const initDatabase = async () => {
  //await Listing.deleteMany({});
  // let initData2 = initData.map((obj) => ({
  //   ...obj,
  //   owner: "66b621ea9cd6764b0f9165fa",
  // }));
  await Listing.insertMany(initData);
  console.log("Data is initialized");
};
initDatabase();