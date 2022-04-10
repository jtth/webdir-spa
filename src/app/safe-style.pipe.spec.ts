import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
import { SafeStylePipe } from './safe-style.pipe';

describe('SafeStylePipe', () => {
  // https://stackoverflow.com/questions/47514436/test-pipe-with-dependencies-on-services
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
    });
  });

  it('create an instance', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      let pipe = new SafeStylePipe(domSanitizer);
      expect(pipe).toBeTruthy();
    }
  ));
});
