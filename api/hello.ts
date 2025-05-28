import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log('aa')
  try {
    res.status(200).json({ message: "¡Hola desde la nube!" });
  } catch(e) {
    res.json(e)
  }
}
