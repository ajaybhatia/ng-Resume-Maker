import { NgResumeMakerPage } from './app.po';

describe('ng-resume-maker App', () => {
  let page: NgResumeMakerPage;

  beforeEach(() => {
    page = new NgResumeMakerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
