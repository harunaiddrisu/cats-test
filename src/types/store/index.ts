export * from './state';

interface ActionSignature {
  [type: string]: {
    payload?: any;
    meta?: any;
  };
}

export type Action<
  C extends ActionSignature,
  /** Action type. If ignored a union of all actions will be returned */
  T extends keyof C = keyof C
> = T extends any // 'extends' hack to generate union
  ? Readonly<
      // prettier-ignore
      {
            type: T
            error?: boolean
        } &
        ('payload' extends keyof C[T] ? Pick<C[T], 'payload'> : { payload?: undefined }) &
        ('meta' extends keyof C[T] ? Pick<C[T], 'meta'> : { meta?: undefined })
    >
  : never;

export type ActionHandlers<
  /** module actions */
  C extends ActionSignature,
  /** module state */
  S extends {}
> = {
  [k in keyof C]?: (state: Readonly<S>, action: Action<C, k>) => Readonly<S>
};
