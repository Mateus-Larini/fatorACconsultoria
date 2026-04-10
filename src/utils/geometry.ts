import type { GeometryOption } from '@/types';

export const GEOMETRY_OPTIONS: GeometryOption[] = [
  {
    id: 'estacas',
    label: 'Estacas',
    description: 'Cilíndrico',
    icon: '🔩',
  },
  {
    id: 'sapatas',
    label: 'Sapatas / Blocos',
    description: 'Retangular',
    icon: '🧱',
  },
  {
    id: 'vigas',
    label: 'Vigas Baldrame',
    description: 'Viga de fundação',
    icon: '📏',
  },
  {
    id: 'lajes',
    label: 'Lajes',
    description: 'Plana',
    icon: '🏗️',
  },
];

export function getDefaultInputs(geometry: string) {
  switch (geometry) {
    case 'estacas':
      return { diametroCm: '', profundidadeM: '', quantidade: '' };
    case 'sapatas':
      return { comprimentoM: '', larguraM: '', alturaCm: '', quantidade: '' };
    case 'vigas':
      return { comprimentoTotalM: '', larguraCm: '', alturaTabuaCm: '' };
    case 'lajes':
      return { comprimentoM: '', larguraM: '', espessuraCm: '' };
    default:
      return null;
  }
}
