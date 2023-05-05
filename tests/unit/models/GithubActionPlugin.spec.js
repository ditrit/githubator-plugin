import GithubActionPlugin from 'src/models/GithubActionPlugin';

describe('Test class: GithubActionPlugin', () => {
  describe('Test constructor', () => {
    it('Check variable initialization', () => {
      const plugin = new GithubActionPlugin();

      expect(plugin.data).not.toBeNull();
      expect(plugin.__drawer).not.toBeNull();
      expect(plugin.__parser).not.toBeNull();
      expect(plugin.__metadata).not.toBeNull();
      expect(plugin.__renderer).not.toBeNull();
      expect(plugin.__configuration).not.toBeNull();
    });
  });
});
