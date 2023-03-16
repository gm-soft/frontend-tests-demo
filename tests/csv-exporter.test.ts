import { expect } from 'chai';
import { CSVExporter } from '../src/csv-exporter';

describe('CSVExporter', () => {

  it('should return proper csv', async () => {

    const people = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          dateOfBirth: '1990-01-01',
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'jane.doe@example.com',
          dateOfBirth: '1992-02-02',
        },
        {
            id: 3,
            name: 'Jim Doe',
            email: 'jim.doe@example.com',
            dateOfBirth: '1993-02-02',
          },
      ];

    const target = new CSVExporter(people);
    const output = target.csv();
    
    const expected = `id,name,email,dateOfBirth
1,"John Doe","john.doe@example.com",1990-01-01
2,"Jane Doe","jane.doe@example.com",1992-02-02
3,"Jim Doe","jim.doe@example.com",1993-02-02`;

    expect(output).to.equal(expected);
  });
});