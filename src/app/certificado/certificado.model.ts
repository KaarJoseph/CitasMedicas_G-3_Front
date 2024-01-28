// certificado.model.ts

export interface Certificado {
    id: number | null;
    cert_titulo: string;
    cert_emisor: string;
    cert_receptor: string;
    cert_fecha_emision: string; // Podría ser también un Date, dependiendo de cómo manejes las fechas
    cert_descripcion: string;
  }
  