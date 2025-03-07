const woods = [
  {
    id: 1,
    name: "Rose wood",
    density: "0.80-1.00 g/cm3",
    grain: "Straight, Wavy, Irregular",
    color: "Dark brown to purple brown",
    strength: "Extremely Strong, Durable",
    stability: "Highly Stable, resistant to warping",
    hardness: "2790-3220 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "Natural oils provide high resistance",
    rotResistant: "High",
    aesthetic:
      "Luxurious, distinctive grain pattern with high luster and sweet fragrance",
    description:
      "Rosewood is prized for its exceptional beauty, strength, and durability, making it ideal for high-end furniture-making, musical instruments, and woodworking.",
    img: "assets/woods/1.rose-wood.jpg",
  },
  {
    id: 2,
    name: "Ebony Wood",
    density: "1.00-1.20 g/cm3",
    grain: "Fine, Straight, Even",
    color: "Deep black to Dark brown",
    strength: "Extremely hard, dense, and Strong",
    stability: "Highly Stable, resistant to warping",
    hardness: "3220 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "High",
    rotResistant: "High",
    aesthetic: "Luxurious, sleek appearance with high luster",
    description:
      "Ebony Wood is prized for its exceptional hardness, density, and beauty, making it ideal for high-end musical instruments, wood carvings, and luxury furniture.",
    img: "/assets/woods/2.ebony-wood.jpg",
  },
  {
    id: 3,
    name: "Burma Teak Wood",
    density: "0.65-0.85 g/cm3",
    grain: "Straight, Coarse and uneven",
    color: "Golden brown to Dark brown",
    strength: "Extremely Strong, Durable",
    stability: "Highly Stable, resistant to warping, low shrinkage",
    hardness: "1000 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "Natural oils provide high resistance",
    rotResistant: "High",
    aesthetic: "Beautiful, irregular figure with high luster",
    description:
      "Extremely durable, rot- and pest-resistant, with a golden-brown color and coarse texture. Highly valued for strength, stability, and aesthetics, ideal for high-end outdoor and marine furniture.",
    img: "/assets/woods/3.burma-teak-wood.jpg",
  },
  {
    id: 4,
    name: "Wenge Wood",
    density: "0.85-1.10 g/cm3",
    grain: "Coarse, irregular, wavy",
    color: "Dark brown to almost black",
    strength: "Extremely strong, durable",
    stability: "Highly Stable, resistant to warping",
    hardness: "1930 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "High",
    rotResistant: "High",
    aesthetic: "Unique, attractive grain pattern with high luster",
    description:
      "Wenge Wood features: dark brown to almost black color, coarse grain, and extremely hard texture. It's highly durable, resistant to decay and insect damage, with a distinctive, luxurious appearance. Ideal for high-end furniture-making, woodworking, and flooring, where its unique beauty and strength are showcased.",
    img: "/assets/woods/4.wenge-wood.jpg",
  },
  {
    id: 5,
    name: "Walnut Wood",
    density: "0.55-0.65 g/cm3",
    grain: "Coarse, irregular, wavy",
    color: "Dark brown to rich chocolate",
    strength: "Strong, durable",
    stability: "Highly Stable, resistant to warping",
    hardness: "1010 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Moderate",
    rotResistant: "Moderate",
    aesthetic: "Luxurious, distinctive grain pattern with high luster",
    description:
      "Walnut Wood features a rich dark brown to purplish-black color, dense texture, and coarse grain. It's highly durable, resistant to decay, and valued for its strength, stability, and luxurious appearance, making it ideal for premium furniture, woodworking, and gun-making.",
    img: "/assets/woods/5.walnut-wood.jpg",
  },
  {
    id: 6,
    name: "Indian Teakwood (Sagwan)",
    density: "0.65-0.85 g/cm3",
    grain: "Straight, Coarse, uneven",
    color: "Golden brown to dark brown",
    strength: "Extremely strong, durable",
    stability: "Highly Stable, resistant to warping",
    hardness: "1070 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "Natural oils repel pests",
    rotResistant: "High",
    aesthetic: "Beautiful, irregular figure with high luster",
    description:
      "Indian Teakwood features a golden to dark brown color, straight grain, and coarse texture. It's highly durable, resistant to rot, decay, and insects, with a naturally attractive look. Ideal for furniture, especially for outdoor projects due to its strength and weather resistance.",
    img: "/assets/woods/6.indian-teak-wood.jpg",
  },
  {
    id: 7,
    name: "Merbau Wood",
    density: "0.80-1.10 g/cm3",
    grain: "Straight, interlocked, Coarse",
    color: "Golden brown to dark brown",
    strength: "Extremely strong, durable",
    stability: "Highly Stable, resistant to warping",
    hardness: "1850-2010 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "Natural oils repel pests",
    rotResistant: "High",
    aesthetic: "Attractive, distinctive grain pattern with high luster",
    description:
      "Merbau Wood features: golden-brown to dark brown color, interlocked grain, coarse texture, and high oil content. It's durable, resistant to rot, and has a natural stability. Ideal for construction, furniture-making, and woodworking, particularly for outdoor and marine projects, where its strength and durability are valued.",
    img: "/assets/woods/7.merbau-wood.jpg",
  },
  {
    id: 8,
    name: "Oak Wood",
    density: "0.75-0.95 g/cm3",
    grain: "Coarse, irregular, ring-porous",
    color: "Light tan to dark brown",
    strength: "Extremely strong, durable",
    stability: "Highly Stable, resistant to warping",
    hardness: "1290 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "Natural oils repel pests",
    rotResistant: "High",
    aesthetic:
      "Attractive, distinctive ring-porous grain pattern with medium to high luster",
    description:
      "Oak Wood features: light to dark brown color, prominent ring pattern, and coarse texture. It's extremely durable, resistant to decay, and has a classic, traditional appearance. Ideal for furniture-making, flooring, and barrel-making, where its strength, stability, and distinctive character are highly valued.",
    img: "/assets/woods/8.oak-wood.jpg",
  },
  {
    id: 9,
    name: "Sapeli Wood",
    density: "0.65-0.85 g/cm3",
    grain: "Interlocked, irregular, ribbon-like",
    color: "Dark brown to reddish brown",
    strength: "Strong, durable",
    stability: "Stable, resistant to warping",
    hardness: "1410 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "Natural oils repel pests",
    rotResistant: "High",
    aesthetic:
      "Attractive, distinctive ribbon-like grain pattern with high luster",
    description:
      "Sapeli Wood features: rich mahogany-like color, interlocked grain, and fine to medium texture. It's durable, resistant to rot and insect damage, and has a smooth, lustrous finish. Ideal for furniture-making, woodworking, and musical instruments, where its stability, strength, and attractive appearance are valued.",
    img: "/assets/woods/9.sapeli-wood.jpg",
  },
  {
    id: 10,
    name: "Maple Wood",
    density: "0.63-0.75 g/cm3",
    grain: "Straight, fine, even",
    color: "Light cream to pale yellow",
    strength: "Strong, resistant to shock",
    stability: "Stable, resistant to warping",
    hardness: "950-1450 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Moderate",
    rotResistant: "Moderate",
    aesthetic: "Attractive, fine grain pattern with high luster",
    description:
      "Maple Wood features: light cream to pale yellow color, straight grain, fine texture, and high density. It's extremely durable, resistant to scratches and stains, and has a smooth, even finish. Ideal for furniture-making, woodworking, and flooring, where its strength, stability, and aesthetic appeal are prized.",
    img: "/assets/woods/10.maple-wood.jpg",
  },

  {
    id: 11,
    name: "Ash Wood",
    density: "0.65-0.85 g/cm3",
    grain: "Straight, coarse, irregular",
    color: "Light to medium brown",
    strength: "Strong, flexible, shock-resistant",
    stability: "Stable, resistant to warping",
    hardness: "1320 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Moderate",
    rotResistant: "Moderate",
    aesthetic: "Attractive, distinctive grain pattern with high luster",
    description:
      "Ash Wood features: light to medium brown color, straight grain, and coarse texture. It's strong, flexible, and shock-resistant, with a distinctive, prominent grain pattern. Ideal for furniture-making, tool handles, and sporting goods, where its strength, durability, and affordability are prized for creating functional products.",
    img: "/assets/woods/11.ash-wood.jpg",
  },
  {
    id: 12,
    name: "African Teak Wood",
    density: "0.85-1.10 g/cm3",
    grain: "Straight, coarse, uneven",
    color: "Golden brown to dark brown",
    strength: "Extremely strong, durable",
    stability: "Highly Stable, resistant to warping",
    hardness: "1500-2000 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "Natural oil provides high resistance",
    rotResistant: "High",
    aesthetic: "Attractive, distinctive grain pattern with high luster",
    description:
      "African Teak features: golden brown to dark brown color, coarse texture, and high density. It's extremely durable, resistant to rot, decay, and insect damage. Ideal for furniture-making, construction, and woodworking, particularly for outdoor and indoor projects.",
    img: "/assets/woods/12.african-teak-wood.jpg",
  },
  {
    id: 13,
    name: "Mahogany Wood Air Dried",
    density: "0.50-0.70 g/cm3",
    grain: "Straight, interlocked, coarse",
    color: "Pinkish brown to reddish-brown",
    strength: "Strong, durable",
    stability: "Stable, resistant to warping",
    hardness: "1000 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Natural oil provides moderate resistance",
    rotResistant: "Moderate",
    aesthetic: "Attractive, rich color with medium luster",
    description:
      "Mahogany Air-Dried Wood has a rich reddish-brown color, straight grain, and fine to medium texture. Durable and resistant to rot and insects. Stable and less prone to warping, it’s ideal for furniture, woodworking, and musical instruments, valued for beauty and strength.",
    img: "/assets/woods/13.mahogany-wood.jpg",
  },
  {
    id: 14,
    name: "Shesham Wood",
    density: "0.75-0.95 g/cm3",
    grain: "Straight, coarse, uneven",
    color: "Golden brown to dark brown",
    strength: "Strong, durable",
    stability: "Stable, resistant to warping",
    hardness: "1300-1600 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "Natural oil provides high resistance",
    rotResistant: "High",
    aesthetic: "Attractive, distinctive grain pattern with high luster",
    description:
      "Shesham Wood features: golden brown to dark brown color, straight grain, coarse texture, and high density. It's extremely durable, resistant to decay, and has a natural, attractive appearance. Ideal for furniture-making, construction, and woodworking, particularly for indoor projects, where its strength and beauty are valued.",
    img: "/assets/woods/14.shesham-wood.jpg",
  },
  {
    id: 15,
    name: "Acacia Wood (Babool)",
    density: "0.70-1.20 g/cm3",
    grain: "Irregular, interlocked",
    color: "Golden brown to dark brown",
    strength: "Strong, durable",
    stability: "Relatively stable",
    hardness: "2300 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Natural oil provides moderate resistance",
    rotResistant: "Moderate",
    aesthetic: "Attractive, unique figure with medium luster",
    description:
      "It is durable, resistant to rot and pests, attractive grain pattern, rich brown color, coarse texture, affordable pricing, and sustainability. It's ideal for furniture-making, woodworking, and outdoor projects, offering a unique blend of strength, beauty, and eco-friendliness.",
    img: "/assets/woods/15.acacia-wood.jpg",
  },
  {
    id: 16,
    name: "Steamed Beech Wood",
    density: "0.70-0.90 g/cm3",
    grain: "Straight, fine, even",
    color: "Light brown to pinkish brown",
    strength: "Strong, durable",
    stability: "Stable, resistant to warping",
    hardness: "1450 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Moderate",
    rotResistant: "Moderate",
    aesthetic: "Attractive, fine grain with medium luster",
    description:
      "Steaming enhances stability, reduces warping, with natural color. it is reddish-brown to pinkish-brown color, straight grain, and fine texture with strong, stable, and resistant to warping, with a smooth, even finish. Ideal for furniture-making, woodworking, and tool handles.",
    img: "/assets/woods/16.steamed-beech-wood.jpg",
  },
  {
    id: 17,
    name: "Pine Wood",
    density: "0.35-0.55 g/cm3",
    grain: "Straight, resinous, knotty",
    color: "Light yellow to pale brown",
    strength: "Soft, lightweight, prone to knots",
    stability: "Prone to warping, checking",
    hardness: "380-660 psi (Janka rating)",
    moistureResistant: "Low",
    pestResistant: "Low",
    rotResistant: "Low",
    aesthetic: "Knotty, rustic appearance with low luster",
    description:
      "Pinewood is often used for framing, paneling, and furniture-making due to its affordability and workability. Pine Wood features: light yellow to pale brown color, knotty grain, soft to medium texture, and aromatic scent. It's lightweight, easy to work with, and resistant to shrinkage. Ideal for furniture-making.",
    img: "/assets/woods/17.pine-wood.jpg",
  },
  {
    id: 18,
    name: "Mango Wood",
    density: "0.50-0.70 g/cm3",
    grain: "Straight, interlocked, coarse",
    color: "Golden brown to dark brown",
    strength: "Strong, durable",
    stability: "Stable, prone to light warping",
    hardness: "1000-1300 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Moderate",
    rotResistant: "Moderate",
    aesthetic: "Unique, attractive grain pattern with high luster",
    description:
      "Mango Wood features: rich golden-brown color, unique grain pattern, coarse texture, and distinctive veining. It's durable, resistant to decay, and has a natural, warm aesthetic. Ideal for furniture-making, woodworking, and decorative items, where its unique character and eco-friendly origins are valued and showcased.",
    img: "/assets/woods/18.mango-wood.jpg",
  },
  {
    id: 19,
    name: "Sal Wood",
    density: "0.85-1.10 g/cm3",
    grain: "Straight, coarse, uneven",
    color: "Dark brown to reddish brown",
    strength: "Extremely strong, durable",
    stability: "Highly stable, resistant to warping",
    hardness: "1600-2000 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "Natural oils provide high resistance",
    rotResistant: "High",
    aesthetic: "Attractive distinctive grain pattern with high luster",
    description:
      "Sal Wood features: golden brown to dark brown color, straight grain, coarse texture, and high density. It's extremely durable, resistant to decay, and has a natural, attractive appearance. Ideal for furniture-making, construction, and woodworking, particularly for outdoor and indoor projects, due to its strength and stability.",
    img: "/assets/woods/19.sal-wood.jpg",
  },

  {
    id: 20,
    name: "Neem Wood",
    density: "0.70-0.90 g/cm3",
    grain: "Straight, coarse, uneven",
    color: "Brown to dark brown",
    strength: "Strong, durable",
    stability: "Stable, resistant to warping",
    hardness: "1500-2000 psi (Janka rating)",
    moistureResistant: "High",
    pestResistant: "Natural oils provide high resistance",
    rotResistant: "High",
    aesthetic: "Attractive distinctive grain pattern",
    description:
      "Neem Wood features: durable, resistant to rot, pests, and moisture, brown to dark brown color, coarse grain, and natural insecticidal properties. It's highly valued for its strength, sustainability, and eco-friendliness, making it ideal for furniture-making, construction, and woodworking, particularly for outdoor and garden projects.",
    img: "/assets/woods/20.neem-wood.jpg",
  },
  {
    id: 21,
    name: "Cherry Wood",
    density: "0.50-0.65 g/cm3",
    grain: "Straight, fine, even",
    color: "Rich reddish brown to dark brown",
    strength: "Strong, durable",
    stability: "Stable, resistant to warping",
    hardness: "995-1290 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Moderate",
    rotResistant: "Moderate",
    aesthetic: "Luxurious, rich color with fine grain and high luster",
    description:
      "Cherry Wood features: rich reddish-brown color, fine grain, and high luster. It's strong, durable, and resistant to warping, with a smooth, even texture. Cherry Wood is prized for its beauty and versatility, making it ideal for high-end furniture-making, cabinetry, and woodworking projects.",
    img: "/assets/woods/21.cherry-wood.jpg",
  },
  {
    id: 22,
    name: "Deodar Wood",
    density: "0.45-0.60 g/cm3",
    grain: "Straight, coarse, uneven",
    color: "Light brown to pale yellow",
    strength: "Strong, durable",
    stability: "Stable, resistant to warping",
    hardness: "750-1050 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Moderate",
    rotResistant: "Moderate",
    aesthetic: "Attractive, distinctive aroma with a light airy appearance",
    description:
      "Deodar Wood features: light brown to pale yellow color, straight grain, fine texture, and aromatic scent. It's durable, resistant to decay, and has natural oils that repel insects. Ideal for construction, furniture-making, and woodworking, particularly for indoor projects, where its distinctive scent and beauty are valued.",
    img: "/assets/woods/22.deodar-wood.jpg",
  },
  {
    id: 23,
    name: "Kikar Wood",
    density: "0.75-0.95 g/cm3",
    grain: "Straight, coarse, uneven",
    color: "Light brown to pale yellow",
    strength: "Strong, durable",
    stability: "Stable, resistant to warping",
    hardness: "1100-1400 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Moderate",
    rotResistant: "Moderate",
    aesthetic: "Attractive, distinctive grain pattern with medium luster",
    description:
      "Kikar Wood features: light brown to pale yellow color, straight grain, coarse texture, and medium luster. It's strong, durable, and resistant to warping, with a distinctive grain pattern. Ideal for furniture-making, construction, and woodworking, particularly for outdoor and rustic projects, offering a unique, natural look.",
    img: "/assets/woods/23.kikar-wood.jpg",
  },
  {
    id: 24,
    name: "Sycamore Wood",
    density: "0.50-0.65 g/cm3",
    grain: "Straight, fine, even",
    color: "Light brown to pale yellow",
    strength: "Strong, durable",
    stability: "Stable, resistant to warping",
    hardness: "770-1070 psi (Janka rating)",
    moistureResistant: "Moderate",
    pestResistant: "Moderate",
    rotResistant: "Moderate",
    aesthetic: "Attractive, distinctive flecked or mottled appearance",
    description:
      "Sycamore Wood features: light brown to pale yellow color, distinctive flecked or mottled appearance, fine grain, and medium texture. It's strong, stable, and resistant to warping, with a smooth, even finish. Ideal for furniture-making, woodworking, and musical instruments, where a unique aesthetic is desired.",
    img: "/assets/woods/24.sycamore-wood.jpg",
  },
];

// Select the container
const woodContainer = document.getElementById("woodContainer");

// Generate the HTML using map
woodContainer.innerHTML = woods
  .map(
    (wood) => `
    <div class="card">
      <!-- * SIDE FRONT -->
      <div class="card__side card__side--front">
        <div class="card__picture">
          <img src="${wood.img}" alt="${wood.name}" />
        </div>
        <h4 class="card__heading">
          <span class="card__heading-span">
            ${wood.name}
          </span>
        </h4>
        <p class="card__paragraph">
          ${wood.description}
        </p>
      </div>
      <!-- * SIDE BACK -->
      <div class="card__side card__side--back">
        <ul class="card__heading_solution--list">
          <li><b>Density:</b> ${wood?.density}</li>
          <li><b>Grain:</b> ${wood?.grain}</li>
          <li><b>Color:</b> ${wood?.color}</li>
          <li><b>Strength:</b> ${wood?.strength}</li>
          <li><b>Stability:</b> ${wood?.stability}</li>
          <li><b>Hardness:</b> ${wood?.hardness}</li>
          <li><b>Moisture Resistant:</b> ${wood?.moistureResistant}</li>
          <li><b>Pest Resistant:</b> ${wood?.pestResistant}</li>
          <li><b>Rot Resistant:</b> ${wood?.rotResistant}</li>
          <li><b>Aesthetic:</b> ${wood?.aesthetic}</li>
        </ul>
      </div>
    </div>
  `
  )
  .join(""); // Join to avoid unwanted commas
