export interface Seal {
    id?: string;
    health?: SealHealth;
  }

  enum SealHealth {
    open = 'Aberto',
    close = 'Lacrado',
    broken = 'Violado',
  }
  