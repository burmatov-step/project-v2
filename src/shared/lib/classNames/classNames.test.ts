import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expexted = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expexted);
    });

    test('with mods', () => {
        const expexted = 'someClass class1 class2 hovered scrolalble';
        expect(classNames('someClass', { hovered: true, scrolalble: true }, ['class1', 'class2'])).toBe(expexted);
    });

    test('with mods false', () => {
        const expexted = 'someClass class1 class2 hovered scrolalble';
        expect(classNames('someClass', { hovered: true, scrolalble: true, test: false }, ['class1', 'class2'])).toBe(expexted);
    });

    test('with mods undefined', () => {
        const expexted = 'someClass class1 class2 hovered scrolalble';
        expect(classNames('someClass', { hovered: true, scrolalble: true, test: undefined }, ['class1', 'class2'])).toBe(expexted);
    });
});
