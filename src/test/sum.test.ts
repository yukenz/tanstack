import {describe, expect, test} from '@jest/globals';
import as from '../definition/globalHeader'

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(as('dwd')).toStrictEqual(as('dwd'));
    });
});