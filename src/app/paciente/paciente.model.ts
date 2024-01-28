// paciente.model.ts
export interface Paciente {
    id: number;
    pac_nombre_completo: string;
    pac_fecha_nacimiento: string;
    pac_genero: string;
    pac_direccion: string;
    pac_numero_telefono: string;
    pac_correo_electronico: string;
    pac_antecedentes_medicos?: string;
    pac_enfermedades?: string;
    pac_alergias?: string;
    pac_medicamentos_actuales?: string;
    medico_personal: number | null;
  }
  