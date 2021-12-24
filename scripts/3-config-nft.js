import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x11ee0dca01186a58D2a5fd3E5762a8b490250CD6",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Web3 Community Avatar",
        description: "This NFT will give you access to Community DAO!",
        image: readFileSync("scripts/assets/DAO.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()