import Plugin from 'src/index';

describe('Test index of project', () => {
  it('Should return GithubActionPlugin', () => {
    expect(new Plugin().constructor.name).toEqual('GithubActionPlugin');
  });
});
