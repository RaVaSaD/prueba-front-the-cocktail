import { DescriptionModule } from './description.module';

describe('DescriptionModule', () => {
  let descriptionModule: DescriptionModule;

  beforeEach(() => {
    descriptionModule = new DescriptionModule();
  });

  it('should create an instance', () => {
    expect(DescriptionModule).toBeTruthy();
  });
});
