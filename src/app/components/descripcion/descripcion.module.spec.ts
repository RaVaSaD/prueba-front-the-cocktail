import { DescripcionModule } from './descripcion.module';

describe('DescripcionModule', () => {
  let descripcionModule: DescripcionModule;

  beforeEach(() => {
    descripcionModule = new DescripcionModule();
  });

  it('should create an instance', () => {
    expect(DescripcionModule).toBeTruthy();
  });
});
