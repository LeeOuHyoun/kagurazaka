import { KagurazakaPage } from './app.po';

describe('kagurazaka App', () => {
  let page: KagurazakaPage;

  beforeEach(() => {
    page = new KagurazakaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
