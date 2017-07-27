import { MarvelSpaPage } from './app.po';

describe('marvel-spa App', () => {
  let page: MarvelSpaPage;

  beforeEach(() => {
    page = new MarvelSpaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
