// abstract abstract --> por que no voy a instanciar esto
// solamenete voy a definir reglas no implementarlas para mis metodos
//

export abstract class HttpAdapter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T> {}
}
