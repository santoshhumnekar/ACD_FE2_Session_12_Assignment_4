import { PipeAppPage } from './app.po';

describe('pipe-app App', function() {
  let page: PipeAppPage;

  beforeEach(() => {
    page = new PipeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
