const LoaderSingleShop = () => {
  const allDataGather = async () => {
    const allShopDataUnwraped = await fetch(
      "https://sweet-home-back-69klmy8j5-habib-imams-projects.vercel.app/allShopCollection"
    );
    console.log("from inner1", allShopDataUnwraped);

    const allShopData = await allShopDataUnwraped.json();
    console.log("from inner", allShopData);

    return allShopData;
  };
  const found = allDataGather();
  console.log("found", found);

  return found;
};

export default LoaderSingleShop;
