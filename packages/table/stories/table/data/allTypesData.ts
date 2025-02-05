import { Holo } from '@devoinc/holo';
import { usersKeys } from './usersData';

export const allTypesData = Holo.of()
  .addType('index', (args = {}) => args.index + 1)
  .schema({
    id: 'index',
    menu: 'bool',
    booleanValue: 'bool',
    name: () => Holo.chance.pickone(usersKeys),
    name2: () => Holo.chance.pickone(usersKeys),

    age: 'age',
    company: 'company',
    balance: 'euro',
    status: () => Holo.chance.pickone(['TODO', 'inProgress', 'test', 'done']),
    picture: 'avatar',
    timestamp: 'timestamp',
    tags: () =>
      Holo.chance.pickset(
        ['Coworker', 'Developer', 'Engineer', 'Components'],
        Holo.chance.integer({ min: 1, max: 4 }),
      ),
    profession: 'profession',
    email: 'email',
    quote: 'sentence',
    IP6: 'ipv6',
    address: 'address',
    website: 'url',
    secondaryWebsite: 'url',
  })
  .repeat(9)
  .generate();
