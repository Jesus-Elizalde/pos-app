import { prisma } from "../../utils/db";

export default async function handler(req, res) {
  // Create new items
  if (req.method === "POST") {
    // TODO
    try {
      const {
        image,
        title,
        description,
        price,
        cost,
        sku,
        barcode,
        weight,
        size,
        color,
        stock,
        active,
      } = req.body;
      const items = await prisma.items.create({
        data: {
          image,
          title,
          description,
          price,
          cost,
          sku,
          barcode,
          weight,
          size,
          color,
          stock,
          active,
        },
      });

      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader("Allow", ["POST"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
