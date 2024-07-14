export class Formatter {
  static formatDate(value: Date) {
    const date = new Date(value);

    return Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
  }
}
