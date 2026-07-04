export default async function handler(req, res) {
  const KEY = 'af894f08-e401-4152-a144-8f771f2c40ab';

  try {
    const r = await fetch(`https://jooble.org/api/${KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
      },
      body: JSON.stringify({ keywords: 'operario', page: 1 })
    });

    const texto = await r.text();
    return res.status(200).json({
      status: r.status,
      respuesta: texto.substring(0, 800)
    });
  } catch (e) {
    return res.status(200).json({ error: e.message });
  }
}
