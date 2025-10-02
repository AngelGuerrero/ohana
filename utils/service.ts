export class ApiService {
  static save(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
    return value
  }

  static get(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]')
  }
}
