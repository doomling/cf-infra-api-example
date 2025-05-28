import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { nombre } = req.query

    if (!nombre || typeof nombre !== 'string') {
      return res.status(400).json({ error: 'Falta el parámetro "nombre"' })
    }

    res.status(200).json({ mensaje: `¡Hola, ${nombre}! Bienvenidx a Vercel Functions 🚀` })
  } catch (error) {
    console.error('Error inesperado en /api/saludo:', error)
    res.status(500).json({ error: 'Ocurrió un error interno en el servidor.' })
  }
}