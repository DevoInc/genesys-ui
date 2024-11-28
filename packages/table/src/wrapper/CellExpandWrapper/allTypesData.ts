import { Holo } from '@devoinc/holo';

export const allTypesData = Holo.of()
  .addType('index', (args = {}) => args.index + 1)
  .addType('lorem', () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed facilisis est, id accumsan neque. Maecenas in venenatis lectus, et porttitor erat. Nullam faucibus commodo massa ac ultricies. Etiam ac faucibus ipsum. Donec tempus tempor erat, vel consectetur nisl malesuada dignissim. Donec non elit venenatis libero porttitor blandit id vitae augue. Duis in scelerisque metus, eu rutrum nibh. Sed ex ipsum, auctor a magna sed, varius volutpat sem. Proin ultrices purus semper, facilisis elit a, porttitor risus. Vivamus commodo eros egestas nulla lacinia, sed auctor diam sodales. Sed vestibulum congue elit ac aliquam. Nullam ac justo libero. Sed rhoncus, velit sed viverra varius, sem erat interdum dui, id tempus dolor sapien sed ipsum. Mauris fermentum magna sed nisi consectetur varius. Fusce vel eleifend libero. Nunc fringilla mauris leo, ut sagittis nisl posuere eget. Integer mollis ut leo sit amet imperdiet. Etiam egestas eros sed tortor feugiat, vel rutrum lectus dapibus. Sed mollis eget libero sit amet finibus. Suspendisse accumsan erat libero, at fermentum magna consectetur quis. Integer vitae justo diam. In dapibus elementum dignissim. Ut vel nulla id dui interdum pellentesque. Donec molestie massa non ipsum porta, vel ultricies enim maximus. Aliquam ultrices, ex eu finibus ornare, dolor eros vulputate purus, sit amet rhoncus lacus mauris ut ipsum. Integer rhoncus tellus massa. Donec lacinia tortor vitae bibendum semper. Aliquam erat volutpat. In sodales felis non ligula facilisis suscipit. Aliquam sed lorem tempus dolor sagittis porttitor ac vel massa. Fusce aliquet leo mauris, sit amet sollicitudin nulla ornare et. Proin convallis dictum ante, eget posuere tellus consequat nec. Mauris fermentum nulla eget justo consequat rhoncus at eget leo. Vivamus at erat vulputate, fermentum ante eget, tincidunt purus. Integer blandit felis leo, eget dictum felis ornare et. Donec nec erat tristique, dignissim diam id, mattis lacus. Duis commodo libero nec sollicitudin bibendum. Vestibulum sem metus, tristique ac tempus nec, bibendum rhoncus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est sem, faucibus a lectus at, aliquam blandit libero. Curabitur condimentum justo eget risus faucibus elementum. Morbi metus velit, hendrerit non augue at, auctor tincidunt augue. Mauris eros elit, ultricies id ante sit amet, pharetra fermentum ligula. Suspendisse nec risus urna. Donec at porttitor nisi. Donec laoreet facilisis dapibus. Pellentesque ornare mi et dui viverra hendrerit. Nunc blandit quis urna vel dictum. Etiam vestibulum lorem at nibh vehicula sollicitudin. Vestibulum et mi tincidunt quam malesuada sodales quis sed ex. Praesent enim sem, cursus et mi eget, pulvinar porta magna. Maecenas luctus gravida neque, mollis dignissim ex sodales sit amet. Nullam egestas libero quam, et dignissim lacus mollis non. Curabitur scelerisque semper quam sed elementum. In et fringilla lorem. Phasellus justo massa, placerat a molestie sed, placerat id risus. Phasellus ut neque fringilla, ultrices ligula nec, pharetra arcu. Aenean ultrices sagittis tellus ac sagittis. Fusce maximus leo sit amet elit cursus, et volutpat odio pharetra. Donec vestibulum fermentum risus, a rutrum tortor tincidunt sit amet. Morbi mauris turpis, elementum nec tristique nec, vehicula a enim. Mauris auctor fermentum volutpat. Sed sit amet tellus aliquam, condimentum lacus non, convallis purus. Donec quis urna porta, faucibus eros condimentum, vulputate lacus. Aenean cursus congue lacus eu convallis.')
  .schema({
    id: 'index',
    longText: 'lorem',
    name: 'name',
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
