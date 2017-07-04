import { LifeBuilderAngularPage } from './app.po';

describe('life-builder-angular App', () => {
  let page: LifeBuilderAngularPage;

  beforeEach(() => {
    page = new LifeBuilderAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
