import resizer from '../../helper/resizer';

it('expect resizer("icelandwaterfall",500,410) to be Truthy', async () => {
  const result = await resizer('icelandwaterfall', 500, 410);
  expect(result).toBeTruthy();
});

it('expect resizer("Wrong File Name",500,410) to be error', async () => {
  const result = await resizer('notExist', 500, 410);
  expect(result).toBe('error');
});
