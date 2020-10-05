import { renamePositionKey } from '../util/customTargeting';
import {debounce} from '../util/debounce.js';

describe('The CustomTargeting.js functions', () => {
  it('should take targeting and position value, and rename the key as posn', () => {
    const targeting = {
      position: {
        as: 'posn'
      }
    };

    const positionValue = 2;
    const updatedTargeting = renamePositionKey(targeting, positionValue);
    const newTargeting = {
      posn: positionValue
    };

    expect(updatedTargeting).toEqual(newTargeting);
  });
});

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('debounce', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    // Call debounced function immediately
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(0);

    // Call debounced function several times with 500ms between each call
    for (let i = 0; i < 10; i += 1) {
      setTimeout(() => {}, 500);
      debouncedFunc();
    }

    // Verify debounced function was not called yet
    expect(func).toHaveBeenCalledTimes(0);

    // Fast forward time
    jest.runAllTimers();

    // Verify debounced function was only called once
    expect(func).toHaveBeenCalledTimes(1);
  });
});
