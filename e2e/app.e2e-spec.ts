import { NgUIWikiPage } from './app.po';

describe('ng-uiwiki App', () => {
  let page: NgUIWikiPage;

  beforeEach(() => {
    page = new NgUIWikiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
