import React from "react";
import PricingCard from "./PricingCard";

function PricingSection() {
  const cards = [
    {
      price: "250",
      features: [
        "Yol hərəkəti qaydaları",
        "Motosiklet ve nəqliyyat vasitələri texnikası",
        "İlkin tibbi yardım",
        "Sürüş praktikası",
      ],
      buttonText: "Nümunə dərsi izlə",
    },

    {
      price: "1000",
      features: [
        "Yol hərəkəti qaydaları",
        "Motosiklet və nəqliyyat vasitələri texnikası",
        "İlkin tibbi yardım",
        "Sürüş praktikası",
      ],
      buttonText: "Nümunə dərsi izlə",
    },

    {
      price: "650",
      features: [
        "Yol hereketi qaydalari",
        "Motosiklet ve nəqliyyat vasitələri texnikası",
        "İlkin tibbi yardım",
        "Sürüş praktikası",
      ],
      buttonText: "Nümunə dərsi izlə",
    },
  ];

  return (
    <div className="pricing-section">
      {cards.map((card, index) => (
        <PricingCard key={index} {...card} />
      ))}
    </div>
  );
}

export default PricingSection;
