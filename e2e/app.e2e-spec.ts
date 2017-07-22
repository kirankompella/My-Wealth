import { MyWealthPage } from './app.po';

describe('my-wealth App', () => {
  let page: MyWealthPage;

  beforeEach(() => {
    page = new MyWealthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
