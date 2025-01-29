import { mapTextsToColors } from '@devoinc/genesys-ui';
import { Holo } from '@devoinc/holo';

export const usersKeys = [
  'person1@email.com',
  'person2@email.com',
  'person3@email.com',
  'person4@email.com',
  'person5@email.com',
];

const colors = mapTextsToColors(usersKeys);

export const richBasicInfoUsers = usersKeys.reduce(
  (prev: { [key: string]: unknown }, curr: string) => {
    prev[curr] = Holo.of()
      .schema({
        name: 'name',
        subtitle: 'email',
        colorScheme: colors[curr],
      })
      .generate()[0];
    return prev;
  },
  {},
);

export const richExtendedInfoUsers = usersKeys.reduce(
  (prev: { [key: string]: unknown }, curr: string) => {
    prev[curr] = Holo.of()
      .schema({
        name: 'name',
        subtitle: 'This is the subtitle',
        job: 'Software Engineer',
        role: 'Database Administrator',
        email: 'email',
        colorScheme: colors[curr],
      })
      .generate()[0];
    return prev;
  },
  {},
);
