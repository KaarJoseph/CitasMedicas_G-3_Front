export interface Facturacion {
    id?: number | null; // Opcional para nuevas facturas
    fact_nombre_paciente: string;
    fact_numero_identificacion: string;
    fact_numero_poliza_seguro: string;
    fact_detalles_facturacion: string;
    fact_estado_pago: string;
    fact_metodo_pago: string;
    paciente: number; // ID del paciente asociado
  }
  