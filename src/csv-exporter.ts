// src/csv-exporter.ts

export interface Person {
    id: number;
    name: string;
    email: string;
    dateOfBirth: string;
}

export class CSVExporter {
    constructor(private readonly data: Person[]) {}

    private escapeCSVField(field: string): string {
      return `"${field.replace(/"/g, '""')}"`;
    }

    csv(): string {
      const header = 'id,name,email,dateOfBirth';
      const rows = this.data.map(person => {
        const fields = [
          person.id,
          this.escapeCSVField(person.name),
          this.escapeCSVField(person.email),
          person.dateOfBirth,
        ];
        return fields.join(',');
      });
  
      return [header, ...rows].join('\n');
    }
}
