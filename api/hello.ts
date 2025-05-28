import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log('Request recibida en /api/hello')

  try {
    res.status(200).json({ message: '¡Hola desde la nube!' })
  } catch (error) {
    console.error('Error inesperado en /api/hello:', error)

    // Aseguramos que no se haya enviado una respuesta antes
    if (!res.headersSent) {
      res.status(500).json({ error: 'Error interno del servidor' })
    }
  }
}
