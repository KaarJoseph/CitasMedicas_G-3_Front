// plan-cuentas.model.ts
export interface PlanCuentas {
    id: number | null;
    plan_cue_fecha_transaccion: string;
    plan_cue_tipo_transaccion: string;
    plan_cue_monto: number;
    plan_cue_descripcion: string;
    plan_cue_numero_referencia: string;
    plan_cue_cuenta_destino: string;
    plan_cue_metodo_pago: string;
    plan_cue_categoria_gasto_ingreso: string;
    plan_cue_datos_proveedor_cliente: string;
    consulta_medica: number; // Asumiendo que es el ID de la Consulta Médica
  }
  