import { TestiPage } from './app.po';

describe('testi App', function() {
  let page: TestiPage;

  beforeEach(() => {
    page = new TestiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
