import React, { createContext, useState } from "react";

export const WinesContext = createContext(null);

export function WinesContextProvider({ children }) {
  const [wines, setWines] = useState([
    {
      name: "Aubert Pinot Noir",
      vintage: 2019,
      winery: "Vineyard",
      type: "Red Wine",
      url: "https://icdn.bottlenose.wine/images/full/619878.jpg?min-w=200&min-h=200&fit=crop",
      cost: 85,
    },
    {
      name: "San Filippo Brunello",
      vintage: 2016,
      winery: "di Montalcino Le Lucére",
      type: "Red Wine",
      url: "https://sacredgin.com/cdn/shop/products/SanFilippo2016.png?v=1653582239",
      cost: 90,
    },
    {
      name: "Mayacamas Cabernet",
      winery: "Mount Veeder",
      vintage: 2019,
      type: "Red Wine",
      url: "https://www.christies.com/img/LotImages/2020/NYR/2020_NYR_19012_0471_000(mayacamas_vineyards_mount_veeder_cabernet_sauvignon_2001_2001_6_magnum013434).jpg?mode=max",
      cost: 135,
    },
    {
      name: "Kistler Chardonnay",
      vintage: 2022,
      winery: "Valley Vine Hill Vineyard",
      type: "White Wine",
      url: "https://shoplineimg.com/57cd2772617069114cbd0400/62d26b599b58f30014298d7e/800x.jpeg?",
      cost: 90,
    },
  ]);

  return (
    <WinesContext.Provider value={{ wines, setWines }}>
      {children}
    </WinesContext.Provider>
  );
}
