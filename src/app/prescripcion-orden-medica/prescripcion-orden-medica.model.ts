// prescripcion-orden-medica.model.ts

export interface PrescripcionOrdenMedica {
    id: number | null;
    pres_ord_nombre_paciente: string;
    pres_ord_fecha_emision: string; // Date en formato de string, por ejemplo '2024-01-16'
    pres_ord_detalles_prescripcion: string;
    pres_ord_estado_cumplimiento: string;
    consulta_medica: number; // Asumiendo que solo necesitas el ID de ConsultaMedica
  }
  