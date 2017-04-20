import { ImdbPage } from './app.po';

describe('imdb App', () => {
  let page: ImdbPage;

  beforeEach(() => {
    page = new ImdbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
