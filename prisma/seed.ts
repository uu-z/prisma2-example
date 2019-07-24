import Photon from "@generated/photon";
const photon = new Photon();

async function main() {
  const banner = await photon.banners.create({
    data: {
      imgUrl: "www.bilibili.com",
      url: "www.bilibili.com"
    }
  });

  console.log({ banner });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
