// ==========================================
// Tipos do Micro-App Auditor de Concreto
// ==========================================

export type GeometryType = 'estacas' | 'sapatas' | 'vigas' | 'lajes';

export interface GeometryOption {
  id: GeometryType;
  label: string;
  description: string;
  icon: string;
}

// --- Inputs dinâmicos por geometria ---

export interface EstacasInputs {
  diametroCm: number | '';
  profundidadeM: number | '';
  quantidade: number | '';
}

export interface SapatasInputs {
  comprimentoM: number | '';
  larguraM: number | '';
  alturaCm: number | '';
  quantidade: number | '';
}

export interface VigasInputs {
  comprimentoTotalM: number | '';
  larguraCm: number | '';
  alturaTabuaCm: number | '';
}

export interface LajesInputs {
  comprimentoM: number | '';
  larguraM: number | '';
  espessuraCm: number | '';
}

export type GeometryInputs = EstacasInputs | SapatasInputs | VigasInputs | LajesInputs;

// --- Modificadores de perda ---

export interface LossModifiers {
  // Sapatas: concretado direto no barranco
  concretadoNoBarranco?: boolean;
  // Vigas: fundo com lastro nivelado
  fundoComLastro?: boolean;
  // Lajes: declaração de espessura/cobrimento
  declaracaoEspessura?: boolean;
  // Geral: lançamento com bomba
  usoBomba: boolean;
}

// --- Estado completo da calculadora ---

export interface CalculatorState {
  step: number;
  geometry: GeometryType | null;
  inputs: GeometryInputs | null;
  modifiers: LossModifiers;
  volumeNotaFiscal: number | '';
}

// --- Payload enviado ao backend ---

export interface AuditPayload {
  geometry: GeometryType;
  inputs: GeometryInputs;
  modifiers: LossModifiers;
  volumeNotaFiscal: number;
  timestamp: string;
}

export interface AuditResponse {
  volumeCalculado: number;
  volumeNotaFiscal: number;
  diferenca: number;
  percentualDiferenca: number;
  parecer: string;
  detalhes: Record<string, unknown>;
}

// --- Chat Widget ---

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatPayload {
  sessionId: string;
  message: string;
}

export interface ChatResponse {
  reply: string;
}
