import { GitHubFinderAppPage } from './app.po';

describe('git-hub-finder-app App', () => {
  let page: GitHubFinderAppPage;

  beforeEach(() => {
    page = new GitHubFinderAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
