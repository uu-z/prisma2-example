import Photon from "@generated/photon";
const photon = new Photon();

async function main() {
  const banners = await Promise.all(
    [
      {
        imgUrl: "www.bilibili.com",
        url: "www.bilibili.com"
      }
    ].map(i =>
      photon.banners.create({
        data: i
      })
    )
  );

  console.log({ banners });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
